from fastapi import FastAPI, Depends, HTTPException, status, Body
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from typing import Optional
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from db import SessionLocal
from models import Base, FlashcardDeck, Flashcard
from sqlalchemy import create_engine

app = FastAPI()

# In-memory user store for demo (replace with DB in production)
users_db = {}

SECRET_KEY = "learnova-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create tables on startup (for dev/demo)
@app.on_event("startup")
def on_startup():
    engine = create_engine("sqlite:///./learnova.db", connect_args={"check_same_thread": False})
    Base.metadata.create_all(bind=engine)

class User(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    disabled: Optional[bool] = False

class UserInDB(User):
    hashed_password: str

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str

# Utility functions
def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

def get_password_hash(password):
    return pwd_context.hash(password)

def get_user(email: str):
    user = users_db.get(email)
    if user:
        return UserInDB(**user)
    return None

def authenticate_user(email: str, password: str):
    user = get_user(email)
    if not user or not verify_password(password, user.hashed_password):
        return None
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Auth endpoints
@app.post("/signup", response_model=User)
def signup(user: UserCreate):
    if user.email in users_db:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed = get_password_hash(user.password)
    users_db[user.email] = {"email": user.email, "full_name": user.full_name, "hashed_password": hashed, "disabled": False}
    return User(email=user.email, full_name=user.full_name)

@app.post("/token", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token = create_access_token(data={"sub": user.email}, expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/me", response_model=User)
def read_users_me(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = get_user(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Password reset (demo: just resets password in memory)
class PasswordReset(BaseModel):
    email: EmailStr
    new_password: str

@app.post("/reset-password")
def reset_password(data: PasswordReset):
    user = get_user(data.email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    users_db[data.email]["hashed_password"] = get_password_hash(data.new_password)
    return {"msg": "Password reset successful"}

@app.patch("/me/preferences")
def update_preferences(preferences: dict = Body(...), token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    # Find user in DB (replace with ORM in production)
    user = get_user(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    # For demo: update in-memory store
    users_db[email]["preferences"] = preferences
    return {"msg": "Preferences updated", "preferences": preferences}

# Flashcard decks and cards endpoints
class DeckCreate(BaseModel):
    title: str
    subject: Optional[str] = None

class CardCreate(BaseModel):
    deck_id: int
    front: str
    back: str

class CardReview(BaseModel):
    card_id: int
    correct: bool

@app.post("/flashcards/decks")
def create_deck(deck: DeckCreate, db: Session = Depends(get_db)):
    db_deck = FlashcardDeck(title=deck.title, subject=deck.subject, user_id=1)  # TODO: use real user_id
    db.add(db_deck)
    db.commit()
    db.refresh(db_deck)
    return {"id": db_deck.id, "title": db_deck.title, "subject": db_deck.subject}

@app.post("/flashcards/cards")
def add_card(card: CardCreate, db: Session = Depends(get_db)):
    db_card = Flashcard(deck_id=card.deck_id, front=card.front, back=card.back, ease_factor=2.5, interval=1, due_date=datetime.utcnow())
    db.add(db_card)
    db.commit()
    db.refresh(db_card)
    return {"id": db_card.id, "front": db_card.front, "back": db_card.back}

@app.get("/flashcards/decks/{deck_id}/due-cards")
def get_due_cards(deck_id: int, db: Session = Depends(get_db)):
    now = datetime.utcnow()
    cards = db.query(Flashcard).filter(Flashcard.deck_id == deck_id, Flashcard.due_date <= now).all()
    return [{"id": c.id, "front": c.front, "back": c.back, "due_date": c.due_date} for c in cards]

@app.post("/flashcards/review")
def review_card(review: CardReview, db: Session = Depends(get_db)):
    card = db.query(Flashcard).filter(Flashcard.id == review.card_id).first()
    if not card:
        raise HTTPException(status_code=404, detail="Card not found")
    # Simple SM-2 spaced repetition update
    if review.correct:
        card.ease_factor = max(1.3, card.ease_factor + 0.1)
        card.interval = int(card.interval * card.ease_factor)
    else:
        card.ease_factor = max(1.3, card.ease_factor - 0.2)
        card.interval = 1
    card.due_date = datetime.utcnow() + timedelta(days=card.interval)
    db.commit()
    return {"msg": "Card reviewed", "next_due": card.due_date}

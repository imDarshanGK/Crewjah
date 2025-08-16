from fastapi import FastAPI, Depends, HTTPException, status, Body
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from typing import Optional
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from db import SessionLocal
from models import Base
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

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Text, JSON, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

def now():
    return datetime.utcnow()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(120), unique=True, index=True, nullable=False)
    hashed_password = Column(String(200), nullable=False)
    role = Column(String(20), default='user')
    preferences = Column(JSON, default={})
    created_at = Column(DateTime, default=now)
    summaries = relationship('Summary', back_populates='user')
    quiz_attempts = relationship('QuizAttempt', back_populates='user')
    flashcard_decks = relationship('FlashcardDeck', back_populates='user')
    planner_tasks = relationship('PlannerTask', back_populates='user')
    events = relationship('Event', back_populates='user')

class Summary(Base):
    __tablename__ = 'summaries'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    input_text = Column(Text)
    summary_text = Column(Text)
    tags = Column(String(200))
    created_at = Column(DateTime, default=now)
    user = relationship('User', back_populates='summaries')

class Quiz(Base):
    __tablename__ = 'quizzes'
    id = Column(Integer, primary_key=True)
    subject = Column(String(50))
    difficulty = Column(String(20))
    questions = Column(JSON)  # List of questions/answers

class QuizAttempt(Base):
    __tablename__ = 'quiz_attempts'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    quiz_id = Column(Integer, ForeignKey('quizzes.id'))
    answers = Column(JSON)
    score = Column(Float)
    created_at = Column(DateTime, default=now)
    user = relationship('User', back_populates='quiz_attempts')
    quiz = relationship('Quiz')

class FlashcardDeck(Base):
    __tablename__ = 'flashcard_decks'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String(100))
    subject = Column(String(50))
    user = relationship('User', back_populates='flashcard_decks')
    cards = relationship('Flashcard', back_populates='deck')

class Flashcard(Base):
    __tablename__ = 'flashcards'
    id = Column(Integer, primary_key=True)
    deck_id = Column(Integer, ForeignKey('flashcard_decks.id'))
    front = Column(Text)
    back = Column(Text)
    ease_factor = Column(Float, default=2.5)
    interval = Column(Integer, default=1)
    due_date = Column(DateTime, default=now)
    deck = relationship('FlashcardDeck', back_populates='cards')

class PlannerTask(Base):
    __tablename__ = 'planner_tasks'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String(100))
    topic = Column(String(100))
    due_date = Column(DateTime)
    status = Column(String(20), default='pending')
    user = relationship('User', back_populates='planner_tasks')

class Resource(Base):
    __tablename__ = 'resources'
    id = Column(Integer, primary_key=True)
    topic = Column(String(100))
    type = Column(String(30))
    url = Column(String(300))
    added_by = Column(Integer, ForeignKey('users.id'), nullable=True)

class Event(Base):
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    event_type = Column(String(50))
    metadata = Column(JSON)
    timestamp = Column(DateTime, default=now)
    user = relationship('User', back_populates='events')

<p align="center">
  <img src="backend/public/crewjah-logo.jpg" alt="Crewjah Banner" width="120" height="120">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Crewjah-AI--Powered-blue?style=for-the-badge&logo=python&logoColor=white" alt="Crewjah Badge">
</p>

<h1 align="center">Crewjah</h1>
<p align="center">Your AI-powered, privacy-first study companion. Summarize notes, quiz yourself, plan, and track progress—all in one open source app.</p>

<p align="center">
  <img src="https://img.shields.io/github/contributors/imDarshanGK/Crewjah" alt="GitHub contributors">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
</p>

---

## Features

- AI Q&A: Ask anything, get instant answers with references
- Summarize Text & Code: Turn long content or code into key points
- Quiz & Flashcards: Practice, spaced repetition, and track retention
- Study Planner: Add tasks, calendar view, streaks
- Progress Tracker: Charts for study time, quizzes, flashcards, streaks
- Resource Finder: Curated links by topic, save for later
- Accessibility: Dark mode, font size, keyboard shortcuts, privacy-first analytics
- Privacy: No ads, no data selling, export/delete your data
- Modern UI: Next.js (React), FastAPI backend, SQLite/SQLAlchemy

---

## Tech Stack

- [Next.js](https://nextjs.org/) (TypeScript, React) – frontend
- [FastAPI](https://fastapi.tiangolo.com/) – backend API
- [SQLAlchemy](https://www.sqlalchemy.org/) – ORM
- [Alembic](https://alembic.sqlalchemy.org/) – migrations
- [Plausible](https://plausible.io/) – privacy-first analytics
- [SQLite](https://www.sqlite.org/) – local dev DB

---

## Getting Started

Clone this repository and install dependencies for both frontend and backend:

```bash
git clone https://github.com/imDarshanGK/Crewjah.git

# Clone the repo
git clone https://github.com/imDarshanGK/Crewjah.git
cd Crewjah

# Backend setup
pip install -r requirements.txt

# Frontend setup
cd frontend
npm install
```

### Run the app locally

```bash
# In one terminal (API backend)
uvicorn api.main:app --reload

# In another terminal (Frontend)
cd frontend
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

---

## Project Structure

```
Crewjah/
├── api/                # FastAPI backend
│   ├── main.py         # API endpoints
│   ├── models.py       # SQLAlchemy models
│   ├── db.py           # DB session
│   └── alembic/        # Migrations
├── frontend/           # Next.js frontend
│   ├── app/            # All pages (dashboard, quiz, flashcards, etc.)
│   ├── components/     # Shared UI components
│   └── public/         # Static assets
├── modules/            # Python modules (summarize, TTS, etc.)
├── data/               # User data, questions, progress
├── assets/             # Images, banners, logos
├── backend/            # (if present, backend code)
├── tests/              # Tests
└── README.md
```

---


## Contributing

We ❤️ contributions from the community!

- [Contribute](https://github.com/imDarshanGK/Crewjah)
- [Report a bug](https://github.com/imDarshanGK/Crewjah/issues/new)
- See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for full guidelines.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Looking for Contributors

We welcome beginner-friendly contributions!

⭐ Star the repo and check the [issues](https://github.com/imDarshanGK/Crewjah/issues) to get started.

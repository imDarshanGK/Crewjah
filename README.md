
<p align="center">
  <img src="https://raw.githubusercontent.com/imDarshanGK/Learnova/main
  /assets/learnova-logo.png" alt="Learnova Logo" width="180" height="180">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Learnova-AI--Powered-blue?style=for-the-badge&logo=python&logoColor=white" alt="Learnova Badge">
</p>


<h1 align="center">Learnova</h1>
<p align="center">
  <b>Learnova</b> is an open-source, privacy-first study companion. It helps you summarize notes, quiz yourself, plan your studies, and track your progress—all in one place.<br>
  <br>
  <b>Note:</b> This project is under active development. Some features may use demo data or be in-progress. No fake or misleading data is intentionally shown; if you see placeholder stats, they will be clearly marked as demo or coming soon.
</p>

<p align="center">
  <img src="https://img.shields.io/github/contributors/imDarshanGK/Learnova" alt="GitHub contributors">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
</p>

---


## Features

- **AI Q&A:** Ask anything, get instant answers with references (demo mode)
- **Summarize Text & Code:** Turn long content or code into key points (demo mode)
- **Quiz & Flashcards:** Practice, spaced repetition, and track retention (coming soon)
- **Study Planner:** Add tasks, calendar view, streaks (UI available, data not persistent yet)
- **Progress Tracker:** Charts for study time, quizzes, flashcards, streaks (shows demo data if no real data)
- **Resource Finder:** Curated links by topic, save for later (coming soon)
- **Accessibility:** Dark mode, font size, keyboard shortcuts, privacy-first analytics
- **Privacy:** No ads, no data selling, export/delete your data
- **Modern UI:** Next.js (React), FastAPI backend, SQLite/SQLAlchemy

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
# Clone the repo
git clone https://github.com/imDarshanGK/Learnova.git
cd Learnova

# Backend setup
pip install -r requirements.txt

# Frontend setup
cd Learnova
npm install
```

### Run the app locally

```bash
# In one terminal (API backend)
uvicorn api.main:app --reload

# In another terminal (Frontend)
cd Learnova
npm run dev
# In another terminal (Frontend)
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

---


## Project Structure

```
Learnova/
├── api/                # FastAPI backend (Python)
│   ├── main.py         # API endpoints
│   ├── models.py       # SQLAlchemy models
│   ├── db.py           # DB session
│   └── alembic/        # Migrations
├── Learnova/           # Next.js frontend (TypeScript/React)
│   ├── app/            # All pages (dashboard, quiz, flashcards, etc.)
│   ├── components/     # Shared UI components
│   └── public/         # Static assets (logos, images)
├── modules/            # Python modules (summarize, TTS, etc.)
├── data/               # User data, questions, progress (local/demo)
├── assets/             # Images, banners, logos
├── tests/              # Tests
└── README.md
```

---


## Contributing

We ❤️ contributions from the community!

- [Contribute](https://github.com/imDarshanGK/Learnova)
- [Report a bug](https://github.com/imDarshanGK/Learnova/issues/new)
- See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for full guidelines.

---

## About This Website

Learnova is designed to help students and educators study smarter with AI-powered tools. The project is open source and privacy-focused. Some features are in demo mode or under development. If you see any placeholder or demo data, it will be clearly marked. Real data features will be added as the backend and integrations are completed.

If you have suggestions or want to help, please open an issue or pull request!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Looking for Contributors

We welcome beginner-friendly contributions!

⭐ Star the repo and check the [issues](https://github.com/imDarshanGK/Learnova/issues) to get started.

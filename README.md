

<p align="center">
  <img src="https://raw.githubusercontent.com/imDarshanGK/SmartStudyBot/main/assets/banner.png" alt="Learnova Banner" width="100%" height="300px">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Learnova-AI--Powered-blue?style=for-the-badge&logo=python&logoColor=white" alt="Learnova Logo">
</p>


<h1 align="center">Learnova</h1>
<p align="center">Your AI-powered personalized study companion built using Python, NLP, and speech tools.</p>

<p align="center">
  <img src="https://img.shields.io/github/contributors/imDarshanGK/SmartStudyBot" alt="GitHub contributors">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
</p>


---

## Features

-  Summarize any topic using NLP techniques
-  Get real-time study resource links
-  Hear explanations using text-to-speech
-  Practice multiple-choice questions by topic
-  Modular design, beginner-friendly codebase

---

## Tech Stack

- Python 3.10+
- [sumy](https://pypi.org/project/sumy/) – for summarization
- [pyttsx3](https://pypi.org/project/pyttsx3/) or [gTTS](https://pypi.org/project/gTTS/) – for speech output
- [requests](https://pypi.org/project/requests/) – for fetching resources
- JSON – for MCQ data
- Optional: Gemini API or Streamlit for future upgrades

---

## Getting Started


Clone this repository and install dependencies:

```bash
git clone https://github.com/imDarshanGK/SmartStudyBot.git
cd SmartStudyBot
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### To run the CLI app:
```bash
python main.py
```

### To run the Streamlit web app:
```bash
python -m streamlit run app.py --server.port 8501
```

---

## Deployment

You can deploy the Streamlit web app version of Learnova to platforms like [Render](https://render.com/) or [Railway](https://railway.app/).

### Deploy to Render

1. Push your code to GitHub.
2. Go to [Render.com](https://render.com/) and create a new Web Service.
3. Connect your GitHub repo and select this project.
4. Set the start command to:
   ```bash
   python -m streamlit run app.py --server.port $PORT
   ```
5. Click 'Create Web Service'.

Your app will be live and accessible via a public URL!


---

## Project Structure

```
Learnova/
├── main.py
├── config.py
├── requirements.txt
├── modules/
│   ├── summarize.py
│   ├── tts.py
│   ├── resource_fetcher.py
│   └── question_recommender.py
├── data/
│   └── questions/
│       ├── python.json
│       └── dsa.json
└── .github/
  ├── CONTRIBUTING.md
  ├── ISSUE_TEMPLATE.md
  └── PULL_REQUEST_TEMPLATE.md
```

---

## Features in Action

-  Select a study action via menu
-  Automatically summarizes topics
-  Speaks any content via TTS
-  Asks 5 MCQs and shows your score
-  Fetches resource links for further study

---

## Contributing

We ❤️ contributions from the community!

```bash
# 1. Fork this repo
# 2. Create a feature branch
git checkout -b feature-name

# 3. Make your changes
git add .
git commit -m "Add a new feature"
git push origin feature-name

# 4. Create a Pull Request
```

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for full guidelines.

---

## Issues

Check out our [Issues tab](https://github.com/imDarshanGK/Learnova/issues)  
Look for labels like `good first issue`, `enhancement`, or `documentation`.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Looking for Contributors

We welcome beginner-friendly contributions!

⭐ Star the repo and check the [issues](https://github.com/imDarshanGK/Learnova/issues) to get started.

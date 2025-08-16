"""
SmartStudyBot - Modern UI
"""
import streamlit as st
from modules import summarize, resource_fetcher, question_recommender
import json
import os

st.set_page_config(page_title="SmartStudyBot", layout="centered")


# Enhanced CSS for a modern, education-inspired homepage and sidebar
st.markdown("""
    <style>
    .stApp {
        background: linear-gradient(120deg, #e0e7ff 0%, #f5f7fa 100%);
    }
    .main-card {
        max-width: 650px;
        margin: 3em auto 2em auto;
        background: rgba(255,255,255,0.95);
        border-radius: 22px;
        box-shadow: 0 8px 32px rgba(44,62,80,0.13);
        padding: 2.7em 2.2em 2.2em 2.2em;
        text-align: center;
        position: relative;
    }
    .main-header {
        font-size: 2.7em;
        font-weight: 800;
        color: #4f46e5;
        margin-bottom: 0.2em;
        letter-spacing: 1px;
        text-shadow: 0 2px 8px #e0e7ff;
    }
    .main-sub {
        font-size: 1.25em;
        color: #6366f1;
        margin-bottom: 1.7em;
    }
    .feature-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.7em 1.5em;
        max-width: 420px;
        margin: 1.5em auto 1.5em auto;
        text-align: left;
        font-size: 1.13em;
        color: #232946;
    }
    .feature-list li {
        background: #e0e7ff;
        border-radius: 8px;
        padding: 0.5em 1em;
        margin-bottom: 0.2em;
        list-style: none;
        font-weight: 500;
        box-shadow: 0 1px 4px rgba(79,70,229,0.07);
    }
    .banner-img {
        width: 100%;
        max-width: 340px;
        margin: 0 auto 1.5em auto;
        display: block;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(44,62,80,0.10);
    }
    .cta-btn {
        background: linear-gradient(90deg, #6366f1 0%, #4f46e5 100%);
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 0.8em 2.5em;
        font-size: 1.15em;
        font-weight: 600;
        margin-top: 1.2em;
        margin-bottom: 0.5em;
        box-shadow: 0 2px 8px #e0e7ff;
        cursor: pointer;
        transition: 0.18s;
    }
    .cta-btn:hover {
        background: linear-gradient(90deg, #4f46e5 0%, #6366f1 100%);
        color: #fff;
    }
    /* Sidebar improvements */
    section[data-testid="stSidebar"] > div:first-child {
        background: #232946;
        border-radius: 0 18px 18px 0;
        box-shadow: 2px 0 16px rgba(44,62,80,0.10);
        padding-top: 1.5em;
    }
    .stTextInput>div>input, .stButton>button {
        font-size: 1.08em;
        border-radius: 7px;
    }
    .stTextInput>div>input {
        background: #e0e7ff;
        color: #232946;
        border: 1.5px solid #6366f1;
    }
    .stButton>button {
        background: #6366f1;
        color: #fff;
        border-radius: 7px;
        font-weight: 600;
        margin-top: 0.7em;
    }
    .stButton>button:hover {
        background: #4f46e5;
    }
    .stRadio>div>label {
        color: #e0e7ff !important;
        font-size: 1.08em;
    }
    </style>
""", unsafe_allow_html=True)


# Lottie animation loader (optional)
def load_lottie_url(url: str):
    try:
        import requests
        r = requests.get(url)
        if r.status_code != 200:
            return None
        return r.json()
    except ImportError:
        return None

# Try to import st_lottie, fallback if not available
try:
    from streamlit_lottie import st_lottie
    lottie_enabled = True
except ImportError:
    lottie_enabled = False





# Modern, centered card UI with dark/light mode toggle
st.markdown("""
    <style>
    html, body, .stApp {
        font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        background: var(--main-bg, #f8fafc);
    }
    .main-card {
        max-width: 600px;
        margin: 2.5em auto 2em auto;
        background: var(--card-bg, #fff);
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(44,62,80,0.08);
        padding: 2.5em 2em 2em 2em;
        text-align: center;
    }
    .main-header {
        font-size: 2.5em;
        font-weight: 700;
        color: var(--main-color, #4f46e5);
        margin-bottom: 0.2em;
        letter-spacing: 1px;
    }
    .main-sub {
        font-size: 1.2em;
        color: #6366f1;
        margin-bottom: 1.5em;
    }
    .stButton>button, .stDownloadButton>button {
        background: var(--main-color, #4f46e5);
        color: #fff;
        border-radius: 8px;
        font-size: 1.1em;
        font-weight: 500;
        padding: 0.5em 2em;
        margin-top: 0.5em;
        transition: 0.2s;
    }
    .stButton>button:hover, .stDownloadButton>button:hover {
        background: #232946;
        color: #fff;
    }
    .stTextArea textarea, .stTextInput input {
        background: var(--input-bg, #f4f4ff);
        color: var(--main-text, #232946);
        font-size: 1.1em;
        border-radius: 8px;
        border: 2px solid #4f46e5;
        padding: 1em;
    }
    .stMarkdown, .stSuccess, .stWarning, .stError, .stInfo {
        font-size: 1.1em;
        color: var(--main-text, #232946);
        background: var(--info-bg, #f4f4ff);
        border-radius: 8px;
        padding: 0.7em 1em;
        margin-bottom: 1em;
        text-align: left;
    }
    .darkmode {
        --main-bg: #181a20;
        --card-bg: #232946;
        --main-color: #a5b4fc;
        --main-text: #f8fafc;
        --input-bg: #232946;
        --info-bg: #232946;
    }
    </style>
    <script>
    function toggleDarkMode() {
        document.body.classList.toggle('darkmode');
    }
    </script>
""", unsafe_allow_html=True)

# Dark/Light mode toggle button
st.markdown("""
    <div style='text-align:right; margin-top:1em; margin-bottom:-2em;'>
        <button onclick="document.body.classList.toggle('darkmode')" style='background:#4f46e5;color:#fff;border:none;border-radius:6px;padding:0.4em 1.2em;font-size:1em;cursor:pointer;'>Toggle Dark/Light Mode</button>
    </div>
""", unsafe_allow_html=True)


# --- User login (simple username-based) ---
import json as _json
user = None
if "user" not in st.session_state:
    st.session_state["user"] = None
if st.session_state["user"] is None:
    st.sidebar.markdown("<div style='margin-bottom:1em;'><b>Login</b></div>", unsafe_allow_html=True)
    username = st.sidebar.text_input("Enter your username:")
    if st.sidebar.button("Login"):
        if username.strip():
            st.session_state["user"] = username.strip()
            user = username.strip()
        else:
            st.sidebar.warning("Please enter a username.")
else:
    user = st.session_state["user"]
    st.sidebar.markdown(f"<div style='margin-bottom:1em;'>👤 <b>{user}</b> | <a href='#' onclick=\"window.location.reload()\">Logout</a></div>", unsafe_allow_html=True)

# --- Main menu ---
menu = [
    "Homepage",
    "Ask Anything (Q&A)",
    "Summarize Text",
    "Summarize Code",
    "Get Study Resources",
    "Take a Quiz",
    "Flashcards",
    "Daily Challenge",
    "Progress Tracker",
    "Study Planner",
    "Download Notes",
    "Accessibility Settings"
]
choice = st.sidebar.radio("Menu", menu)



if choice == "Homepage":
    st.markdown("""
        <div class='main-card'>
            <img src='assets/learnova-logo.png' class='banner-img' alt='Learnova Logo'>
            <div class='main-header'>Welcome to Learnova</div>
            <div class='main-sub'>Your all-in-one AI-powered study assistant.<br>Level up your learning with modern tools and a beautiful interface.</div>
            <ul class='feature-list'>
                <li>Ask Anything (Q&A)</li>
                <li>Summarize Text & Code</li>
                <li>Get Study Resources</li>
                <li>Take a Quiz</li>
                <li>Flashcards</li>
                <li>Daily Challenges</li>
                <li>Progress Tracker</li>
                <li>Study Planner</li>
                <li>Download Notes</li>
                <li>Accessibility</li>
            </ul>
            <button class='cta-btn' onclick="window.location.reload()">Get Started</button>
        </div>
    """, unsafe_allow_html=True)

elif choice == "Ask Anything (Q&A)":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Ask Anything</div>
            <div class='main-sub'>Type your study question, topic, or concept:</div>
    """, unsafe_allow_html=True)
    user_query = st.text_area("", height=80)
    ask_btn = st.button("Get Answer", help="Click to get a real educational answer")
    if ask_btn:
        if user_query.strip():
            with st.spinner("Finding the best answer for you..."):
                answer = summarize.generate_summary(user_query)
            st.markdown(f"<div style='font-size:1.13em;color:var(--main-text,#232946);background:var(--info-bg,#e0e7ff);border-radius:6px;padding:1em;margin-top:0.7em;border:1px solid #4f46e5;'>{answer}</div>", unsafe_allow_html=True)
        else:
            st.warning("Please enter your question or topic.")
    st.markdown("</div>", unsafe_allow_html=True)

# Summarize Text
if choice == "Summarize Text":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Summarize a Topic</div>
            <div class='main-sub'>Enter text to summarize:</div>
            <div style='font-size:0.95em;color:#6366f1;margin-bottom:0.3em;'>Tip: For best results, enter a paragraph, article, or code block.<br><i>Example: Explain the difference between Python lists and tuples.</i></div>
    """, unsafe_allow_html=True)
    text = st.text_area("", height=80)
    summarize_btn = st.button("Summarize", help="Click to summarize your text")
    if summarize_btn:
        if text.strip():
            with st.spinner("Summarizing..."):
                summary = summarize.generate_summary(text)
            st.markdown(f"<div style='font-size:1.13em;color:var(--main-text,#232946);background:var(--info-bg,#e0e7ff);border-radius:6px;padding:1em;margin-top:0.7em;border:1px solid #4f46e5;'>{summary}</div>", unsafe_allow_html=True)
        else:
            st.warning("Please enter some text.")
    st.markdown("</div>", unsafe_allow_html=True)

# Summarize Code feature
if choice == "Summarize Code":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Summarize Code</div>
            <div class='main-sub'>Paste your code below:</div>
    """, unsafe_allow_html=True)
    code = st.text_area("", height=100)
    summarize_code_btn = st.button("Summarize Code", help="Click to summarize your code")
    if summarize_code_btn:
        if code.strip():
            with st.spinner("Summarizing code..."):
                summary = summarize.generate_summary(code)
            st.markdown(f"<div style='font-size:1.13em;color:var(--main-text,#232946);background:var(--info-bg,#e0e7ff);border-radius:6px;padding:1em;margin-top:0.7em;border:1px solid #4f46e5;'>{summary}</div>", unsafe_allow_html=True)
            st.code(code, language=None)
        else:
            st.warning("Please paste some code.")
    st.markdown("</div>", unsafe_allow_html=True)

# Get Study Resources
if choice == "Get Study Resources":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Get Study Resources</div>
            <div class='main-sub'>Enter a topic (e.g., Python, DSA, Math, Algorithms):</div>
    """, unsafe_allow_html=True)
    topic = st.text_input("")
    fetch_btn = st.button("Fetch Resources", help="Click to get study resources")
    if fetch_btn:
        if topic.strip():
            with st.spinner("Fetching resources..."):
                # Example: Add real links to YouTube, Wikipedia, docs, etc.
                resources = resource_fetcher.fetch_resources(topic)
                # Add some real links for demo
                extra_links = []
                if "python" in topic.lower():
                    extra_links = [
                        "[Python Official Docs](https://docs.python.org/3/)",
                        "[Python Tutorial (W3Schools)](https://www.w3schools.com/python/)",
                        "[Python YouTube Playlist](https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU)"
                    ]
                if "dsa" in topic.lower() or "algorithm" in topic.lower():
                    extra_links = [
                        "[GeeksforGeeks DSA](https://www.geeksforgeeks.org/data-structures/)",
                        "[Khan Academy Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)",
                        "[DSA YouTube Playlist](https://www.youtube.com/playlist?list=PLqM7alHXFySGg6GSRmE2Cq3lRrj3tO7xA)"
                    ]
                if "math" in topic.lower():
                    extra_links = [
                        "[Khan Academy Math](https://www.khanacademy.org/math)",
                        "[Brilliant Math](https://brilliant.org/courses/mathematics/)",
                        "[Math is Fun](https://www.mathsisfun.com/)"
                    ]
            st.markdown("### Resources:")
            for resource in resources:
                st.markdown(f"<div style='font-size:1.1em;color:var(--main-text,#232946);background:var(--info-bg,#e0e7ff);border-radius:6px;padding:0.5em;margin-bottom:0.5em;'>- {resource}</div>", unsafe_allow_html=True)
            for link in extra_links:
                st.markdown(f"<div style='font-size:1.1em;color:var(--main-text,#232946);background:var(--info-bg,#e0e7ff);border-radius:6px;padding:0.5em;margin-bottom:0.5em;'>{link}</div>", unsafe_allow_html=True)
        else:
            st.warning("Please enter a topic.")
    st.markdown("</div>", unsafe_allow_html=True)

# Take a Quiz
# Take a Quiz
if choice == "Take a Quiz":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Take a Quiz</div>
    """, unsafe_allow_html=True)
    subject = st.selectbox("Select subject", ["python", "dsa"])
    questions_path = os.path.join("data", "questions", f"{subject}.json")
    if os.path.exists(questions_path):
        with open(questions_path, "r") as f:
            questions = json.load(f)
        score = 0
        for i, q in enumerate(questions):
            st.markdown(f"<div style='font-size:1.1em;color:var(--main-text,#232946);background:var(--info-bg,#e0e7ff);border-radius:6px;padding:0.7em;margin-bottom:0.5em;'><b>Q{i+1}:</b> {q['question']}</div>", unsafe_allow_html=True)
            answer = st.radio("Select answer:", q['options'], key=f"q{i}")
            submit_quiz_btn = st.button(f"Submit Q{i+1}", key=f"submit{i}", help="Submit your answer")
            if submit_quiz_btn:
                if answer == q['answer']:
                    st.success("Correct!")
                    score += 1
                else:
                    st.error(f"Wrong! Correct answer: {q['answer']}")
        st.info(f"Your score: {score}/{len(questions)}")
    else:
        st.warning("Questions not found for this subject.")
    st.markdown("</div>", unsafe_allow_html=True)

# Flashcards (placeholder)
elif choice == "Flashcards":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Flashcards</div>
            <div class='main-sub'>Flashcards feature coming soon! You'll be able to review key concepts and terms.</div>
        </div>
    """, unsafe_allow_html=True)

# Daily Challenge (placeholder)
elif choice == "Daily Challenge":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Daily Challenge</div>
            <div class='main-sub'>Complete today's challenge: <b>Solve 5 questions!</b><br><br>Daily challenge tracking coming soon.</div>
        </div>
    """, unsafe_allow_html=True)

# Progress Tracker (dashboard)
elif choice == "Progress Tracker":
    import pandas as pd
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Progress Tracker</div>
            <div class='main-sub'>Track your quiz and challenge progress over time.</div>
    """, unsafe_allow_html=True)
    progress_path = "data/progress.json"
    if os.path.exists(progress_path):
        with open(progress_path, "r") as f:
            try:
                progress_data = _json.load(f)
            except Exception:
                progress_data = []
        if progress_data:
            df = pd.DataFrame(progress_data)
            if user:
                df = df[df.get("user","") == user]
            if not df.empty and "date" in df.columns and "score" in df.columns:
                st.line_chart(df.set_index("date")["score"])
                st.dataframe(df)
            else:
                st.info("No progress data for your user yet.")
        else:
            st.info("No progress data yet. Take quizzes or challenges to see your progress!")
    else:
        st.info("No progress data file found.")
    st.markdown("</div>", unsafe_allow_html=True)

# Study Planner (placeholder)
if choice == "Study Planner":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Study Planner</div>
            <div class='main-sub'>Study Planner feature coming soon! Plan your study schedule and track your progress.</div>
        </div>
    """, unsafe_allow_html=True)

# Download Notes (placeholder)
if choice == "Download Notes":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Download Notes</div>
            <div class='main-sub'>Download Notes feature coming soon! Export your notes as PDF or text files.</div>
        </div>
    """, unsafe_allow_html=True)

# Accessibility Settings (placeholder)
if choice == "Accessibility Settings":
    st.markdown("""
        <div class='main-card'>
            <div class='main-header'>Accessibility Settings</div>
            <div class='main-sub'>Accessibility options coming soon! You'll be able to adjust font size, enable dark mode, and more.</div>
        </div>
    """, unsafe_allow_html=True)
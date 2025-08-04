import streamlit as st
from modules import summarize, resource_fetcher, question_recommender
import json
import os

st.set_page_config(page_title="SmartStudyBot")
st.title("SmartStudyBot")
st.write("Your AI-powered study assistant!")

menu = ["Summarize Text", "Get Study Resources", "Take a Quiz"]
choice = st.sidebar.selectbox("Choose an option", menu)

if choice == "Summarize Text":
    st.header("Summarize a Topic")
    text = st.text_area("Enter text to summarize:")
    if st.button("Summarize"):
        if text.strip():
            summary = summarize.generate_summary(text)
            st.success(summary)
        else:
            st.warning("Please enter some text.")

elif choice == "Get Study Resources":
    st.header("Get Study Resources")
    topic = st.text_input("Enter a topic (e.g., Python, DSA):")
    if st.button("Fetch Resources"):
        if topic.strip():
            resources = resource_fetcher.fetch_resources(topic)
            st.write("### Resources:")
            for resource in resources:
                st.markdown(f"- {resource}")
        else:
            st.warning("Please enter a topic.")

elif choice == "Take a Quiz":
    st.header("Take a Quiz")
    subject = st.selectbox("Select subject", ["python", "dsa"])
    questions_path = os.path.join("data", "questions", f"{subject}.json")
    if os.path.exists(questions_path):
        with open(questions_path, "r") as f:
            questions = json.load(f)
        score = 0
        for i, q in enumerate(questions):
            st.write(f"**Q{i+1}: {q['question']}**")
            answer = st.radio("Select answer:", q['options'], key=f"q{i}")
            if st.button(f"Submit Q{i+1}", key=f"submit{i}"):
                if answer == q['answer']:
                    st.success("Correct!")
                    score += 1
                else:
                    st.error(f"Wrong! Correct answer: {q['answer']}")
        st.info(f"Your score: {score}/{len(questions)}")
    else:
        st.warning("Questions not found for this subject.")
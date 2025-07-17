"""
question_recommender.py

This module handles the interactive quiz functionality of the SmartStudyBot.

It loads multiple-choice questions from a subject-specific JSON file and presents
them to the user in a shuffled order. The user inputs their answers, and the system
provides feedback and scoring in real time.
"""

import json
import random
import logging
from config import ENABLE_SOUND
from modules import sound

logger = logging.getLogger(__name__)

# List of available subjects
AVAILABLE_SUBJECTS = ["python", "dsa"]

def ask_questions(subject):
    """
    Displays a multiple-choice quiz to the user based on the given subject.

    This function loads a list of questions from a JSON file located at
    'data/questions/{subject}.json' using UTF-8 encoding. If the file is valid,
    it shuffles and selects the first 5 questions, presenting them to the user
    one by one. The user selects answers via input, and the function provides
    immediate feedback and tracks the total score.

    If sound notifications are enabled via the ENABLE_SOUND flag in config.py,
    the function plays an audio cue at the end of the quiz to indicate success
    (for scores >= 3) or failure (for scores < 3), using the winsound module on Windows.

    Parameters:
        subject (str): The name of the subject whose questions will be loaded.

    Returns:
        None
    """

    subject = subject.strip().lower()

    while subject not in AVAILABLE_SUBJECTS:
        logger.warning(
            "⚠️  Invalid subject '%s'. Please choose from: %s",
            subject, ", ".join(AVAILABLE_SUBJECTS)
        )
        subject = input(f"Enter a valid subject ({'/'.join(AVAILABLE_SUBJECTS)}): ").strip().lower()

    try:
        with open(f"data/questions/{subject}.json", encoding="utf-8") as file:
            questions = json.load(file)
            logger.info("📥 Loaded questions for subject: %s", subject)
    except FileNotFoundError:
        logger.error("❌ Subject '%s' not found. Quiz aborted.", subject)
        return
    except json.JSONDecodeError as e:
        logger.error("❌ Failed to parse JSON for subject '%s': %s", subject, e)
        return

    random.shuffle(questions)
    score = 0

    logger.info("\n🎯 Starting quiz! Answer the next 5 questions:\n")

    for index, q in enumerate(questions[:5], 1):
        logger.info("🧠 [Question %d] %s", index, q["question"])
        for i, option in enumerate(q["options"], 1):
            logger.info("   %d) %s", i, option)

        answer = input("➡️  Enter your choice (1-4): ")
        try:
            selected = int(answer)
            if q["options"][selected - 1] == q["answer"]:
                logger.info("✅ Correct!\n")
                score += 1
            else:
                logger.info("❌ Incorrect! The correct answer was: %s\n", q["answer"])
        except (ValueError, IndexError):
            logger.warning("⚠️  Invalid input: '%s'. Skipping question.\n", answer)

    logger.info("🏁 Quiz completed!")
    logger.info("📊 Your score: %d/5", score)

    if score == 5:
        logger.info("🎉 Excellent! You're a quiz master!")
    elif score >= 3:
        logger.info("👍 Good job! Keep practicing.")
    else:
        logger.info("📚 Review the topic and try again.")

    if ENABLE_SOUND:
        if score >= 3:
            sound.play_success_sound()
        else:
            sound.play_failure_sound()

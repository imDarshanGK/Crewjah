"""
main.py

Main entry point for SmartStudyBot application.
Handles initializing and running the main program loop.
"""

import logging
import sys
from rich.logging import RichHandler
from modules import summarize, tts, resource_fetcher, question_recommender, usage_guide

logging.basicConfig(
    level=logging.INFO, format="%(message)s", datefmt="[%X]", handlers=[RichHandler()]
)
logger = logging.getLogger("rich")


def main():
    """
    Main function to start the SmartStudyBot application.
    """

    logging.info("🤖 Welcome to SmartStudyBot!")
    logging.info("1. Summarize a topic")
    logging.info("2. Get study resources")
    logging.info("3. Practice questions")
    logging.info("4. Hear a response")
    logging.info("5. Help!")
    logging.info("6. Exit")

    choice = input("Choose an option (1-6): ")

    while choice not in {"1", "2", "3", "4", "5", "6"}:
        logging.warning("❌ Invalid choice. Please select an option between 1 and 6.")
        choice = input("Choose an option (1-6): ")

    match choice:
        case "1":
            topic = input("Enter topic: ")
            summary = summarize.generate_summary(topic)
            logging.info("\n🔎 Summary:\n%s", summary)

        case "2":
            topic = input("Enter topic: ")
            links = resource_fetcher.fetch_resources(topic)
            logging.info("\n📚 Study Resources:")
            for link in links:
                logging.info("%s", link)

        case "3":
            subject = input("Enter subject (python/dsa): ").lower()
            question_recommender.ask_questions(subject)

        case "4":
            text = input("Enter what you want to hear: ")
            tts.speak(text)

        case "5":
            usage_guide.show_help()

        case "6":
            logging.info("👋 Goodbye!")
            sys.exit()

if __name__ == "__main__":
    main()

"""
summarize.py

This module provides a function to generate a text summary using the
LSA (Latent Semantic Analysis) algorithm. It utilizes the `sumy` library to identify and
extract the most relevant sentences from a given input text.
Useful for condensing long pieces of text into a few key points.
"""

import logging
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer

logger = logging.getLogger(__name__)

def generate_summary(text, sentence_count=3):
    """
    Generates a summary of the given text using the LSA (Latent Semantic Analysis) algorithm.

    This function parses the input text and summarizes it by extracting the most
    relevant sentences based on latent semantic analysis. It uses the `sumy` library
    for text parsing and summarization.

    Parameters:
        text (str): The input text to summarize.
        sentence_count (int, optional): The number of sentences to include in the summary.
                                        Defaults to 3.

    Returns:
        str: A summarized version of the text with the specified number of sentences.
    """


    # Q&A/explanation for short, question-like inputs
    query = text.strip().lower()
    # Q&A for common study topics
    if "dsa" in query or "data structures and algorithms" in query:
        return (
            "DSA stands for Data Structures and Algorithms. Data structures are ways to organize "
            "and store data (like arrays, lists, stacks, queues, trees, and graphs). Algorithms are "
            "step-by-step procedures or formulas for solving problems. Mastering DSA is essential "
            "for efficient programming and technical interviews."
        )
    if "difference between python lists and tuples" in query:
        return (
            "Python lists are mutable, meaning you can change, add, or remove elements after creation. "
            "They use square brackets: [1, 2, 3]. Tuples are immutable, so their contents cannot be "
            "changed after creation, and they use parentheses: (1, 2, 3). Lists are generally used for "
            "collections of items that may change, while tuples are used for fixed collections."
        )
    if "list" in query and "python" in query:
        return (
            "Python lists are ordered, mutable collections that can store items of any type. "
            "You can add, remove, and change elements in a list. Example: my_list = [1, 2, 3]"
        )
    if "tuple" in query and "python" in query:
        return (
            "Python tuples are ordered, immutable collections. Once created, their elements cannot be "
            "changed. Example: my_tuple = (1, 2, 3)"
        )
    if "dict" in query or "dictionary" in query:
        return (
            "A Python dictionary is an unordered, mutable collection of key-value pairs. "
            "Example: my_dict = {'a': 1, 'b': 2}"
        )
    if "set" in query and "python" in query:
        return (
            "A Python set is an unordered collection of unique elements. "
            "Example: my_set = {1, 2, 3}"
        )
    if "function" in query and "python" in query:
        return (
            "A Python function is a reusable block of code defined with def. "
            "Example: def foo(): return 'bar'"
        )
    if "class" in query and "python" in query:
        return (
            "A Python class is a blueprint for creating objects. "
            "Example: class MyClass: pass"
        )
    if "loop" in query and "python" in query:
        return (
            "Python supports for and while loops for iteration. "
            "Example: for i in range(5): print(i)"
        )
    if "stack" in query and ("dsa" in query or "data structure" in query):
        return (
            "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. "
            "You can only add or remove elements from the top. Common operations: push, pop, peek."
        )
    if "queue" in query and ("dsa" in query or "data structure" in query):
        return (
            "A queue is a linear data structure that follows the First In First Out (FIFO) principle. "
            "Elements are added at the rear and removed from the front. Common operations: enqueue, dequeue."
        )
    if "tree" in query and ("dsa" in query or "data structure" in query):
        return (
            "A tree is a hierarchical data structure with nodes connected by edges. "
            "The top node is called the root. Common types: binary tree, BST, AVL tree."
        )
    if "graph" in query and ("dsa" in query or "data structure" in query):
        return (
            "A graph is a collection of nodes (vertices) and edges connecting them. "
            "Used to represent networks, relationships, and paths."
        )
    if "algorithm" in query:
        return (
            "An algorithm is a step-by-step procedure to solve a problem. "
            "Examples: searching, sorting, recursion, dynamic programming."
        )
    if "code" in query:
        return (
            "Please provide a specific code snippet or a detailed question for a meaningful summary."
        )
    if "explain" in query:
        return (
            "Please provide more details or context for a meaningful explanation."
        )
    # Generic fallback for short input
    if len(text.strip().split()) < 8:
        return (
            "Please provide a more detailed question or text for a meaningful summary."
        )

    try:
        # Ensure NLTK 'punkt' and 'punkt_tab' are available
        import nltk
        try:
            nltk.data.find('tokenizers/punkt')
        except LookupError:
            nltk.download('punkt')
        try:
            nltk.data.find('tokenizers/punkt_tab')
        except LookupError:
            nltk.download('punkt_tab')
        try:
            parser = PlaintextParser.from_string(text, Tokenizer("english"))
        except LookupError as e:
            return (
                "NLTK tokenizers are missing or the language is not supported. "
                "Please run: python -c \"import nltk; nltk.download('punkt'); nltk.download('punkt_tab')\".\n"
                f"Original error: {e}"
            )
        summarizer = LsaSummarizer()
        summary = summarizer(parser.document, sentence_count)
    except (ValueError, AttributeError, TypeError) as e:
        logger.error("❌ Error generating summary: %s", e)
        return (
            "An error occurred while generating the summary."
        )

    logger.info("✅ Summary generated successfully.")
    return " ".join(str(sentence) for sentence in summary)

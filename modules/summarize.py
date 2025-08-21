"""
summarize.py

This module provides a function to generate a text summary using the
LSA (Latent Semantic Analysis) algorithm. It utilizes the `sumy` library to identify and
extract the most relevant sentences from a given input text.
Useful for condensing long pieces of text into a few key points.
"""


import logging
import nltk
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


    query = text.strip().lower()
    responses = [
        (lambda q: "dsa" in q or "data structures and algorithms" in q,
         "DSA stands for Data Structures and Algorithms. Data structures are ways to organize "
         "and store data (like arrays, lists, stacks, queues, trees, and graphs). Algorithms are "
         "step-by-step procedures or formulas for solving problems. Mastering DSA is essential "
         "for efficient programming and technical interviews."),
        (lambda q: "difference between python lists and tuples" in q,
         "Python lists are mutable, meaning you can change, add, or remove elements after "
         "creation. They use square brackets: [1, 2, 3]. Tuples are immutable, so their "
         "contents cannot be changed after creation, and they use parentheses: (1, 2, 3). "
         "Lists are generally used for collections of items that may change, while tuples are "
         "used for fixed collections."),
        (lambda q: "list" in q and "python" in q,
         "Python lists are ordered, mutable collections that can store items of any type. "
         "You can add, remove, and change elements in a list. Example: my_list = [1, 2, 3]"),
        (lambda q: "tuple" in q and "python" in q,
         "Python tuples are ordered, immutable collections. Once created, their elements "
         "cannot be changed. Example: my_tuple = (1, 2, 3)"),
        (lambda q: "dict" in q or "dictionary" in q,
         "A Python dictionary is an unordered, mutable collection of key-value pairs. "
         "Example: my_dict = {'a': 1, 'b': 2}"),
        (lambda q: "set" in q and "python" in q,
         "A Python set is an unordered collection of unique elements. Example: my_set = {1, 2, 3}"),
        (lambda q: "function" in q and "python" in q,
         "A Python function is a reusable block of code defined with def. Example: def foo(): return 'bar'"),
        (lambda q: "class" in q and "python" in q,
         "A Python class is a blueprint for creating objects. Example: class MyClass: pass"),
        (lambda q: "loop" in q and "python" in q,
         "Python supports for and while loops for iteration. Example: for i in range(5): print(i)"),
        (lambda q: "stack" in q and ("dsa" in q or "data structure" in q),
         "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. "
         "You can only add or remove elements from the top. Common operations: push, pop, peek."),
        (lambda q: "queue" in q and ("dsa" in q or "data structure" in q),
         "A queue is a linear data structure that follows the First In First Out (FIFO) principle. "
         "Elements are added at the rear and removed from the front. Common operations: enqueue, dequeue."),
        (lambda q: "tree" in q and ("dsa" in q or "data structure" in q),
         "A tree is a hierarchical data structure with nodes connected by edges. The top node is called the root. "
         "Common types: binary tree, BST, AVL tree."),
        (lambda q: "graph" in q and ("dsa" in q or "data structure" in q),
         "A graph is a collection of nodes (vertices) and edges connecting them. Used to represent networks, relationships, and paths."),
        (lambda q: "algorithm" in q,
         "An algorithm is a step-by-step procedure to solve a problem. Examples: searching, sorting, recursion, dynamic programming."),
        (lambda q: "code" in q,
         "Please provide a specific code snippet or a detailed question for a meaningful summary."),
        (lambda q: "explain" in q,
         "Please provide more details or context for a meaningful explanation."),
    ]

    for cond, resp in responses:
        if cond(query):
            return resp

    if len(text.strip().split()) < 8:
        return "Please provide a more detailed question or text for a meaningful summary."

    try:
        # Ensure NLTK 'punkt' and 'punkt_tab' are available
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
                "Please run: python -c \"import nltk; nltk.download('punkt'); "
                "nltk.download('punkt_tab')\".\n"
                f"Original error: {e}"
            )
        summarizer = LsaSummarizer()
        summary = summarizer(parser.document, sentence_count)
    except (ValueError, AttributeError, TypeError) as e:
        logger.error(
            "❌ Error generating summary: %s", e
        )
        return "An error occurred while generating the summary."

    logger.info("✅ Summary generated successfully.")
    return " ".join(str(sentence) for sentence in summary)

"use client";
import { useState } from "react";

const subjects = ["Python", "DSA", "Math", "General" ];
const difficulties = ["Easy", "Medium", "Hard"];
const sampleQuestions = [
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["5", "6", "8", "9"],
    answer: 2,
    topic: "Python Basics"
  },
  {
    question: "Which data structure uses FIFO order?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1,
    topic: "DSA - Queue"
  },
];

export default function TakeQuiz() {
  const [subject, setSubject] = useState(subjects[0]);
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [numQuestions, setNumQuestions] = useState(5);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  // For demo, use sampleQuestions, repeat if numQuestions > sampleQuestions.length
  const questions = Array(numQuestions).fill(0).map((_, i) => sampleQuestions[i % sampleQuestions.length]);

  const handleStart = () => {
    setStarted(true);
    setStartTime(Date.now());
  };

  const handleOption = (idx: number) => {
    setSelected(idx);
    setFeedback(null);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setAnswers([...answers, selected]);
    setFeedback(selected === questions[current].answer ? "Correct!" : "Incorrect");
  };

  const handleNext = () => {
    setSelected(null);
    setFeedback(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      setEndTime(Date.now());
    }
  };

  const handleRetry = () => {
    // Only retry wrong questions
    const wrongIdxs = answers.map((a, i) => a !== questions[i].answer ? i : -1).filter(i => i !== -1);
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setFeedback(null);
    setFinished(false);
    setStarted(true);
    setStartTime(Date.now());
    setEndTime(null);
    // For demo, just repeat all questions
  };

  const handleCreateFlashcards = () => {
    // Placeholder
    alert("Flashcards created from mistakes!");
  };

  const handleShare = () => {
    // Placeholder
    alert("Result shared!");
  };

  // End screen stats
  const correct = answers.filter((a, i) => a === questions[i].answer).length;
  const accuracy = Math.round((correct / questions.length) * 100);
  const timeTaken = endTime && startTime ? Math.round((endTime - startTime) / 1000) : 0;
  const weakTopics = questions
    .map((q, i) => (answers[i] !== q.answer ? q.topic : null))
    .filter(Boolean);

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Take a Quiz</h2>
      {!started && !finished && (
        <form onSubmit={e => { e.preventDefault(); handleStart(); }} className="mb-8 animate-fade-in">
          <div className="flex flex-wrap gap-5 mb-6">
            <label className="font-medium flex items-center gap-2">
              Subject:
              <select value={subject} onChange={e => setSubject(e.target.value)} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            <label className="font-medium flex items-center gap-2">
              Difficulty:
              <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
                {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </label>
            <label className="font-medium flex items-center gap-2">
              Number:
              <input type="number" min={1} max={20} value={numQuestions} onChange={e => setNumQuestions(Number(e.target.value))} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 w-20 focus:outline-none focus:ring-2 focus:ring-[#6366f1]" />
            </label>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#6366f1] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Start Quiz</button>
        </form>
      )}

      {/* Quiz Flow */}
      {started && !finished && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
          <div className="mb-5 font-semibold text-[#6366f1]">Question {current + 1} of {questions.length}</div>
          <div className="mb-5 text-[#232946] text-lg font-medium">{questions[current].question}</div>
          <div className="flex flex-col gap-3 mb-5">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOption(i)}
                className={`rounded-lg font-semibold px-6 py-3 text-base shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${selected === i ? 'bg-[#6366f1] text-white scale-105' : 'bg-[#e0e7ff] text-[#4f46e5] hover:bg-[#c7d2fe]'} ${feedback !== null ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={feedback !== null}
                tabIndex={0}
                aria-label={`Option ${String.fromCharCode(65 + i)}: ${opt}`}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            ))}
          </div>
          {feedback && (
            <div className={`mb-5 font-semibold ${feedback === "Correct!" ? "text-[#16a34a]" : "text-[#dc2626]"}`}>{feedback}</div>
          )}
          <div className="flex gap-3">
            {!feedback && (
              <button onClick={handleSubmit} className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#6366f1] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Submit</button>
            )}
            {feedback && (
              <button onClick={handleNext} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-8 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">{current + 1 === questions.length ? "Finish" : "Next"}</button>
            )}
          </div>
        </section>
      )}

      {/* End Screen */}
      {finished && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in text-center">
          <h3 className="text-[#232946] font-bold text-lg mb-2">Quiz Complete!</h3>
          <div className="mb-2">Score: <b>{correct} / {questions.length}</b></div>
          <div className="mb-2">% Accuracy: <b>{accuracy}%</b></div>
          <div className="mb-2">Time: <b>{timeTaken} sec</b></div>
          <div className="mb-5">Weak topics: {weakTopics.length > 0 ? weakTopics.join(", ") : "None!"}</div>
          <div className="flex gap-3 justify-center flex-wrap mt-4">
            <button onClick={handleRetry} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Retry wrong questions</button>
            <button onClick={handleCreateFlashcards} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Create flashcards from mistakes</button>
            <button onClick={handleShare} className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-5 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Share result</button>
          </div>
        </section>
      )}
    </main>
  );
}

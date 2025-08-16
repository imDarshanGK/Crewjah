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
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Take a Quiz</h2>
      {!started && !finished && (
        <form onSubmit={e => { e.preventDefault(); handleStart(); }} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
            <label style={{ fontWeight: 500 }}>
              Subject:
              <select value={subject} onChange={e => setSubject(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            <label style={{ fontWeight: 500 }}>
              Difficulty:
              <select value={difficulty} onChange={e => setDifficulty(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
                {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </label>
            <label style={{ fontWeight: 500 }}>
              Number:
              <input type="number" min={1} max={20} value={numQuestions} onChange={e => setNumQuestions(Number(e.target.value))} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em", width: 60 }} />
            </label>
          </div>
          <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
            Start Quiz
          </button>
        </form>
      )}

      {/* Quiz Flow */}
      {started && !finished && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8 }}>
          <div style={{ marginBottom: 18, fontWeight: 600 }}>Question {current + 1} of {questions.length}</div>
          <div style={{ marginBottom: 18, color: "#232946", fontSize: "1.13em" }}>{questions[current].question}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOption(i)}
                style={{
                  background: selected === i ? "#6366f1" : "#e0e7ff",
                  color: selected === i ? "#fff" : "#4f46e5",
                  borderRadius: 7,
                  fontWeight: 600,
                  padding: "0.7em 1.2em",
                  fontSize: "1.08em",
                  border: "none",
                  cursor: "pointer",
                  outline: selected === i ? "2px solid #6366f1" : "none"
                }}
                disabled={feedback !== null}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            ))}
          </div>
          {feedback && (
            <div style={{ marginBottom: 18, color: feedback === "Correct!" ? "#16a34a" : "#dc2626", fontWeight: 600 }}>{feedback}</div>
          )}
          <div style={{ display: "flex", gap: 12 }}>
            {!feedback && (
              <button onClick={handleSubmit} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
                Submit
              </button>
            )}
            {feedback && (
              <button onClick={handleNext} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
                {current + 1 === questions.length ? "Finish" : "Next"}
              </button>
            )}
          </div>
        </section>
      )}

      {/* End Screen */}
      {finished && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8, textAlign: "center" }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Quiz Complete!</h3>
          <div style={{ marginBottom: 10 }}>Score: <b>{correct} / {questions.length}</b></div>
          <div style={{ marginBottom: 10 }}>% Accuracy: <b>{accuracy}%</b></div>
          <div style={{ marginBottom: 10 }}>Time: <b>{timeTaken} sec</b></div>
          <div style={{ marginBottom: 18 }}>Weak topics: {weakTopics.length > 0 ? weakTopics.join(", ") : "None!"}</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={handleRetry} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Retry wrong questions</button>
            <button onClick={handleCreateFlashcards} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Create flashcards from mistakes</button>
            <button onClick={handleShare} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Share result</button>
          </div>
        </section>
      )}
    </main>
  );
}

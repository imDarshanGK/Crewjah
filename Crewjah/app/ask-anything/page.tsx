"use client";
import { useState } from "react";

export default function AskAnything() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [keyPoints, setKeyPoints] = useState<string[]>([]);
  const [resources, setResources] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  // Placeholder: Simulate answer
  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half.");
    setKeyPoints([
      "Works on sorted data",
      "Divides search space in half each step",
      "O(log n) time complexity",
    ]);
    setResources([
      "https://en.wikipedia.org/wiki/Binary_search_algorithm",
      "https://www.geeksforgeeks.org/binary-search/",
    ]);
    setShowResult(true);
  };

  const handleClear = () => {
    setQuestion("");
    setAnswer(null);
    setKeyPoints([]);
    setResources([]);
    setShowResult(false);
  };

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Ask Anything (Q&amp;A)</h2>
      <form onSubmit={handleAsk} style={{ marginBottom: 32 }}>
        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder={"Ask a question or paste content…"}
          rows={4}
          style={{ width: "100%", borderRadius: 10, border: "1.5px solid #e0e7ff", padding: 14, fontSize: "1.08em", marginBottom: 12 }}
        />
        {/* Model/source selector can be added here later */}
        <div style={{ display: "flex", gap: 12 }}>
          <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
            Ask
          </button>
          {showResult && (
            <button type="button" onClick={handleClear} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.7em 1.5em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
              Clear
            </button>
          )}
        </div>
      </form>

      {/* Empty state */}
      {!showResult && (
        <div style={{ color: "#888", fontSize: "1.08em", background: "#f3f4f6", borderRadius: 10, padding: 18, textAlign: "center" }}>
          Try: <b>‘Explain binary search like I’m 12’</b> or <b>‘Key points from the Paris Agreement’</b>
        </div>
      )}

      {/* Output */}
      {showResult && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Answer</h3>
          <div style={{ marginBottom: 18, color: "#232946" }}>{answer}</div>

          <h4 style={{ color: "#6366f1", fontWeight: 600, fontSize: "1.08em", marginBottom: 6 }}>Key points</h4>
          <ul style={{ marginBottom: 18, color: "#232946" }}>
            {keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4 style={{ color: "#6366f1", fontWeight: 600, fontSize: "1.08em", marginBottom: 6 }}>Related resources</h4>
          <ul style={{ marginBottom: 18 }}>
            {resources.map((url, i) => (
              <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5" }}>{url}</a></li>
            ))}
          </ul>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Save as note</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Copy</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Download</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Add to Flashcards</button>
            <button style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Quiz me on this</button>
          </div>
        </section>
      )}
    </main>
  );
}

import { useState } from "react";

const quickActions = [
  { label: "Ask Anything", href: "/ask-anything" },
  { label: "Summarize Text", href: "/summarize-text" },
  { label: "Summarize Code", href: "/summarize-code" },
  { label: "Take a Quiz", href: "/take-quiz" },
  { label: "Flashcards", href: "/flashcards" },
  { label: "Study Planner", href: "/study-planner" },
];

const snapshot = {
  streak: 5,
  minutes: 120,
  quizzes: 3,
  flashcards: 18,
};

const recommended = [
  { type: "Topic", text: "Dynamic Programming" },
  { type: "Quiz", text: "Python Basics" },
  { type: "Topic", text: "OOP Principles" },
];

export default function Dashboard() {
  const [name] = useState("Alex"); // Replace with real user name from auth
  const [lastActivity] = useState("Summarize Text");

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2em 1em" }}>
      {/* Top Banner */}
      <section style={{ background: "#e0e7ff", borderRadius: 16, padding: "1.5em 2em", marginBottom: 32, textAlign: "center" }}>
        <h2 style={{ fontWeight: 700, fontSize: "1.5em", color: "#4f46e5" }}>
          Welcome back, {name} 👋 — continue where you left off.
        </h2>
      </section>

      {/* Quick Actions */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 12 }}>Quick Actions</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
          {quickActions.map(action => (
            <a key={action.label} href={action.href} style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px #e0e7ff",
              padding: "1.1em 1.7em",
              color: "#4f46e5",
              fontWeight: 600,
              fontSize: "1.08em",
              textDecoration: "none",
              transition: "0.15s",
              border: "2px solid #e0e7ff"
            }}>{action.label}</a>
          ))}
        </div>
      </section>

      {/* Today's Snapshot */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 12 }}>Today’s Snapshot</h3>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 120 }}>
            <b>Streak days</b><div style={{ color: "#6366f1", fontSize: "1.3em" }}>{snapshot.streak}</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 120 }}>
            <b>Minutes studied</b><div style={{ color: "#6366f1", fontSize: "1.3em" }}>{snapshot.minutes}</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 120 }}>
            <b>Quizzes taken</b><div style={{ color: "#6366f1", fontSize: "1.3em" }}>{snapshot.quizzes}</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 120 }}>
            <b>Flashcards reviewed</b><div style={{ color: "#6366f1", fontSize: "1.3em" }}>{snapshot.flashcards}</div>
          </div>
        </div>
        <button style={{ marginTop: 24, background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
          Resume last activity ({lastActivity})
        </button>
      </section>

      {/* Recommended for you */}
      <section>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 12 }}>Recommended for you</h3>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {recommended.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 140 }}>
              <b>{item.type}:</b> <span style={{ color: "#6366f1" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

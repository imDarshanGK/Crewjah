import React from "react";

export default function Header() {
  return (
    <header style={{
      width: "100%",
      background: "#fff",
      borderBottom: "1.5px solid #e0e7ff",
      padding: "0.7em 2em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img src="/learnova-logo.png" alt="Learnova Logo" style={{ width: 32, height: 32, borderRadius: 7, background: "#e0e7ff" }} />
        <span style={{ fontWeight: 700, fontSize: "1.18em", color: "#4f46e5", letterSpacing: 1 }}>Learnova</span>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a href="/dashboard" style={{ color: "#232946", fontWeight: 600, textDecoration: "none" }}>Dashboard</a>
        <div style={{ position: "relative" }}>
          <span style={{ color: "#232946", fontWeight: 600, cursor: "pointer" }}>Features ▾</span>
          {/* Dropdown on hover (static for now) */}
          <div style={{ position: "absolute", top: 28, left: 0, background: "#fff", border: "1px solid #e0e7ff", borderRadius: 8, boxShadow: "0 2px 8px #e0e7ff", padding: 10, minWidth: 180, display: "none" }}>
            <a href="/ask-anything" style={{ display: "block", color: "#232946", textDecoration: "none", marginBottom: 6 }}>Ask Anything</a>
            <a href="/summarize-text" style={{ display: "block", color: "#232946", textDecoration: "none", marginBottom: 6 }}>Summarize Text</a>
            <a href="/summarize-code" style={{ display: "block", color: "#232946", textDecoration: "none", marginBottom: 6 }}>Summarize Code</a>
            <a href="/take-quiz" style={{ display: "block", color: "#232946", textDecoration: "none", marginBottom: 6 }}>Take a Quiz</a>
            <a href="/flashcards" style={{ display: "block", color: "#232946", textDecoration: "none", marginBottom: 6 }}>Flashcards</a>
            <a href="/study-planner" style={{ display: "block", color: "#232946", textDecoration: "none" }}>Study Planner</a>
          </div>
        </div>
        <a href="/study-planner" style={{ color: "#232946", fontWeight: 600, textDecoration: "none" }}>Planner</a>
        <a href="/progress-tracker" style={{ color: "#232946", fontWeight: 600, textDecoration: "none" }}>Progress</a>
        <a href="/help-usage-guide" style={{ color: "#232946", fontWeight: 600, textDecoration: "none" }}>Help</a>
        <a href="/profile-settings" style={{ color: "#232946", fontWeight: 600, textDecoration: "none" }}>Profile</a>
      </nav>
    </header>
  );
}


import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const featureStyle: React.CSSProperties = {
  background: "#e0e7ff",
  borderRadius: 8,
  padding: "0.5em 1em",
  marginBottom: "0.2em",
  fontWeight: 500,
  boxShadow: "0 1px 4px rgba(79,70,229,0.07)"
};

export default function Home() {
  const [selected, setSelected] = useState("Homepage");

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(120deg, #e0e7ff 0%, #f5f7fa 100%)" }}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar selected={selected} onSelect={setSelected} />
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {selected === "Homepage" && (
            <div style={{
              maxWidth: 650,
              background: "rgba(255,255,255,0.95)",
              borderRadius: 22,
              boxShadow: "0 8px 32px rgba(44,62,80,0.13)",
              padding: "2.7em 2.2em 2.2em 2.2em",
              textAlign: "center"
            }}>
                  <Image
                    src="/learnova-logo.png"
                    alt="Learnova Logo"
                width={120}
                height={120}
                style={{ borderRadius: 18, margin: "0 auto 1.5em auto", boxShadow: "0 4px 24px rgba(44,62,80,0.10)" }}
              />
              <div style={{ fontSize: "2.7em", fontWeight: 800, color: "#4f46e5", marginBottom: "0.2em", letterSpacing: 1, textShadow: "0 2px 8px #e0e7ff" }}>
                    Welcome to Learnova
              </div>
              <div style={{ fontSize: "1.25em", color: "#6366f1", marginBottom: "1.7em" }}>
                Your all-in-one AI-powered study assistant.<br />Level up your learning with modern tools and a beautiful interface.
              </div>
              <div style={{ fontSize: "1.25em", color: "#6366f1", marginBottom: "1.7em" }}>
                Your all-in-one AI-powered study assistant.<br />Level up your learning with modern tools and a beautiful interface.
              </div>
              <ul style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.7em 1.5em",
                maxWidth: 420,
                margin: "1.5em auto 1.5em auto",
                textAlign: "left",
                fontSize: "1.13em",
                color: "#232946",
                listStyle: "none"
              }}>
                <li style={featureStyle}>Ask Anything (Q&A)</li>
                <li style={featureStyle}>Summarize Text & Code</li>
                <li style={featureStyle}>Get Study Resources</li>
                <li style={featureStyle}>Take a Quiz</li>
                <li style={featureStyle}>Flashcards</li>
                <li style={featureStyle}>Daily Challenges</li>
                <li style={featureStyle}>Progress Tracker</li>
                <li style={featureStyle}>Study Planner</li>
                <li style={featureStyle}>Download Notes</li>
                <li style={featureStyle}>Accessibility</li>
              </ul>
              <button style={{
                background: "linear-gradient(90deg, #6366f1 0%, #4f46e5 100%)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.8em 2.5em",
                fontSize: "1.15em",
                fontWeight: 600,
                marginTop: "1.2em",
                marginBottom: "0.5em",
                boxShadow: "0 2px 8px #e0e7ff",
                cursor: "pointer",
                transition: "0.18s"
              }}>
                Get Started
              </button>
            </div>
          )}
          {/* Add more sections for other menu items here */}
        </div>
      </div>
    </main>
  );
}

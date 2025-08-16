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

export const metadata = {
  title: "Learnova – Smarter Learning, Every Day!",
  description: "Learnova is your AI-powered study companion. Track progress, take quizzes, summarize notes, and more. Free, open source, privacy-first.",
  openGraph: {
    title: "Learnova – Smarter Learning, Every Day!",
    description: "Learnova is your AI-powered study companion. Track progress, take quizzes, summarize notes, and more. Free, open source, privacy-first.",
    images: [
      {
        url: "/assets/banner.png",
        width: 1200,
        height: 630,
        alt: "Learnova banner"
      }
    ]
  }
};

export default function Home() {
  const [selected, setSelected] = useState("Homepage");

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(120deg, #e0e7ff 0%, #f5f7fa 100%)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2em 1em 0 1em" }}>
        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "2.5em" }}>
          <Image
            src="/learnova-logo.png"
            alt="Learnova Logo"
            width={120}
            height={120}
            style={{ borderRadius: 18, margin: "0 auto 1.5em auto", boxShadow: "0 4px 24px rgba(44,62,80,0.10)" }}
          />
          <h1 style={{ fontSize: "2.7em", fontWeight: 800, color: "#4f46e5", marginBottom: "0.2em", letterSpacing: 1, textShadow: "0 2px 8px #e0e7ff" }}>
            Learn smarter with AI
          </h1>
          <div style={{ fontSize: "1.25em", color: "#6366f1", marginBottom: "1.7em" }}>
            Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            <button style={{
              background: "linear-gradient(90deg, #6366f1 0%, #4f46e5 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.8em 2.5em",
              fontSize: "1.15em",
              fontWeight: 600,
              boxShadow: "0 2px 8px #e0e7ff",
              cursor: "pointer",
              transition: "0.18s"
            }}>
              Get Started — Free
            </button>
            <button style={{
              background: "#fff",
              color: "#4f46e5",
              border: "2px solid #4f46e5",
              borderRadius: 8,
              padding: "0.8em 2.5em",
              fontSize: "1.15em",
              fontWeight: 600,
              boxShadow: "0 2px 8px #e0e7ff",
              cursor: "pointer",
              transition: "0.18s"
            }}>
              Sign In
            </button>
          </div>
          {/* Trust Badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 24 }}>
            <span style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 8, padding: "0.4em 1.2em", fontWeight: 600 }}>Privacy-first</span>
            <span style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 8, padding: "0.4em 1.2em", fontWeight: 600 }}>No ads</span>
            <span style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 8, padding: "0.4em 1.2em", fontWeight: 600 }}>Beginner friendly</span>
          </div>
        </section>

        {/* Feature Cards */}
        <section style={{ marginBottom: "2.5em" }}>
          <h2 style={{ textAlign: "center", color: "#232946", fontWeight: 700, fontSize: "1.5em", marginBottom: 18 }}>Features</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.2em 2em",
            maxWidth: 600,
            margin: "0 auto"
          }}>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: "1.2em" }}>
              <b>Ask Anything</b>
              <div style={{ color: "#6366f1", marginTop: 6 }}>Instant answers with references</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: "1.2em" }}>
              <b>Summarize Text & Code</b>
              <div style={{ color: "#6366f1", marginTop: 6 }}>Turn long content into key points</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: "1.2em" }}>
              <b>Quiz & Flashcards</b>
              <div style={{ color: "#6366f1", marginTop: 6 }}>Practice and remember more</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: "1.2em" }}>
              <b>Planner & Progress</b>
              <div style={{ color: "#6366f1", marginTop: 6 }}>Stay consistent and see growth</div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ marginBottom: "2.5em" }}>
          <h2 style={{ textAlign: "center", color: "#232946", fontWeight: 700, fontSize: "1.5em", marginBottom: 18 }}>How it works</h2>
          <ol style={{ maxWidth: 500, margin: "0 auto", color: "#232946", fontSize: "1.13em", lineHeight: 1.7 }}>
            <li>Paste text or pick a topic</li>
            <li>Get summary, resources & practice</li>
            <li>Track progress over time</li>
          </ol>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", color: "#6366f1", fontSize: "1em", marginTop: "2em", padding: "1.5em 0 0.5em 0" }}>
          <div style={{ marginBottom: 8 }}>
            <a href="/docs" style={{ color: "#4f46e5", margin: "0 1em" }}>Docs</a>
            <a href="https://github.com/imDarshanGK/Learnova/issues" style={{ color: "#4f46e5", margin: "0 1em" }}>Issues</a>
            <a href="https://github.com/imDarshanGK/Learnova" style={{ color: "#4f46e5", margin: "0 1em" }}>Contribute</a>
            <a href="/privacy" style={{ color: "#4f46e5", margin: "0 1em" }}>Privacy</a>
            <a href="/terms" style={{ color: "#4f46e5", margin: "0 1em" }}>Terms</a>
            <a href="/contact" style={{ color: "#4f46e5", margin: "0 1em" }}>Contact</a>
          </div>
          <div style={{ color: "#a5b4fc", fontSize: "0.95em" }}>
            © {new Date().getFullYear()} Learnova. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}

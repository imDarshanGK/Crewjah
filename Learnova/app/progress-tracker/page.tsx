"use client";
import { useState } from "react";

const subjects = ["All", "Python", "DSA", "Math", "General"];

export default function ProgressTracker() {
  const [subject, setSubject] = useState("All");
  const [dateRange, setDateRange] = useState({ from: "2025-08-01", to: "2025-08-16" });

  // Placeholder stats
  const stats = {
    studyTime: [30, 45, 60, 20, 50, 70, 40], // min per day
    quizzes: [2, 1, 3, 0, 2, 2, 1],
    accuracy: [80, 90, 70, 0, 85, 95, 60],
    flashRetention: [90, 92, 88, 85, 91, 93, 89],
    streak: 6,
  };

  const handleExport = (type: string) => {
    alert(`Exporting progress as ${type} (demo)`);
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Progress Tracker</h2>
      {/* Filters */}
      <section style={{ marginBottom: 32, display: "flex", gap: 18, alignItems: "center" }}>
        <label style={{ fontWeight: 500 }}>
          Subject:
          <select value={subject} onChange={e => setSubject(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label style={{ fontWeight: 500 }}>
          From:
          <input type="date" value={dateRange.from} onChange={e => setDateRange({ ...dateRange, from: e.target.value })} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }} />
        </label>
        <label style={{ fontWeight: 500 }}>
          To:
          <input type="date" value={dateRange.to} onChange={e => setDateRange({ ...dateRange, to: e.target.value })} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }} />
        </label>
        <button onClick={() => handleExport("PDF")} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Export PDF</button>
        <button onClick={() => handleExport("CSV")} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Export CSV</button>
      </section>

      {/* Charts/Stats (placeholders) */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Study Time (min/day)</h3>
        <div style={{ background: "#f3f4f6", borderRadius: 10, padding: 18, marginBottom: 18 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {stats.studyTime.map((v, i) => (
              <div key={i} style={{ height: v * 1.5, width: 30, background: "#6366f1", borderRadius: 5, display: "inline-block" }} title={`Day ${i + 1}: ${v} min`} />
            ))}
          </div>
        </div>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Quizzes Completed & Accuracy (%)</h3>
        <div style={{ background: "#f3f4f6", borderRadius: 10, padding: 18, marginBottom: 18 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {stats.quizzes.map((q, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 40 }}>
                <div style={{ height: q * 15, width: 18, background: "#4f46e5", borderRadius: 4, marginBottom: 4 }} title={`Day ${i + 1}: ${q} quizzes`} />
                <div style={{ color: "#6366f1", fontSize: "0.95em" }}>{q}</div>
                <div style={{ height: stats.accuracy[i], width: 6, background: "#16a34a", borderRadius: 3, marginTop: 2 }} title={`Accuracy: ${stats.accuracy[i]}%`} />
              </div>
            ))}
          </div>
        </div>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Flashcard Retention (%)</h3>
        <div style={{ background: "#f3f4f6", borderRadius: 10, padding: 18, marginBottom: 18 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {stats.flashRetention.map((v, i) => (
              <div key={i} style={{ height: v, width: 30, background: "#f59e42", borderRadius: 5, display: "inline-block" }} title={`Day ${i + 1}: ${v}%`} />
            ))}
          </div>
        </div>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Streak</h3>
        <div style={{ background: "#fff", borderRadius: 10, padding: 18, color: "#6366f1", fontWeight: 700, fontSize: "1.2em", display: "inline-block" }}>{stats.streak} days</div>
      </section>
    </main>
  );
}

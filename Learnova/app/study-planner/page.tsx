"use client";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function StudyPlanner() {
  const [tasks, setTasks] = useState([
    { topic: "DP Practice", resource: "LeetCode", date: "Mon", duration: 60, done: false, reflection: "" },
    { topic: "OOP Notes", resource: "Class notes", date: "Wed", duration: 30, done: false, reflection: "" },
  ]);
  const [form, setForm] = useState({ topic: "", resource: "", date: days[0], duration: 30 });
  const [showTimer, setShowTimer] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, { ...form, done: false, reflection: "" }]);
    setForm({ topic: "", resource: "", date: days[0], duration: 30 });
  };

  const handleDone = (idx: number) => {
    const t = [...tasks];
    t[idx].done = true;
    setTasks(t);
  };

  const handleReflection = (idx: number, value: string) => {
    const t = [...tasks];
    t[idx].reflection = value;
    setTasks(t);
  };

  // Pomodoro timer placeholder
  const handleStartTimer = () => {
    setShowTimer(true);
    setTimeout(() => setShowTimer(false), 1000 * 5); // 5s demo
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Study Planner</h2>
      {/* Add Task */}
      <form onSubmit={handleAdd} style={{ marginBottom: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <input
          type="text"
          value={form.topic}
          onChange={e => setForm({ ...form, topic: e.target.value })}
          placeholder="Topic"
          required
          style={{ borderRadius: 7, border: "1.5px solid #e0e7ff", padding: 10, fontSize: "1em", flex: 1 }}
        />
        <input
          type="text"
          value={form.resource}
          onChange={e => setForm({ ...form, resource: e.target.value })}
          placeholder="Resource"
          style={{ borderRadius: 7, border: "1.5px solid #e0e7ff", padding: 10, fontSize: "1em", flex: 1 }}
        />
        <select
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          style={{ borderRadius: 7, border: "1.5px solid #e0e7ff", padding: 10, fontSize: "1em" }}
        >
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <input
          type="number"
          value={form.duration}
          min={5}
          max={180}
          onChange={e => setForm({ ...form, duration: Number(e.target.value) })}
          placeholder="Duration (min)"
          style={{ borderRadius: 7, border: "1.5px solid #e0e7ff", padding: 10, fontSize: "1em", width: 120 }}
        />
        <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
          Add Task
        </button>
      </form>

      {/* Weekly Calendar */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Weekly Calendar</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {days.map(day => (
            <div key={day} style={{ flex: 1, minWidth: 120 }}>
              <div style={{ fontWeight: 600, color: "#6366f1", marginBottom: 6 }}>{day}</div>
              <ul style={{ minHeight: 40 }}>
                {tasks.filter(t => t.date === day).map((t, i) => (
                  <li key={i} style={{ background: t.done ? "#d1fae5" : "#f3f4f6", borderRadius: 7, marginBottom: 6, padding: 8, fontSize: "0.98em" }}>
                    <div><b>{t.topic}</b> <span style={{ color: "#888" }}>({t.resource})</span></div>
                    <div style={{ fontSize: "0.95em", color: "#6366f1" }}>{t.duration} min</div>
                    {!t.done && <button onClick={() => handleDone(tasks.findIndex(x => x === t))} style={{ background: "#16a34a", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.3em 1em", fontSize: "0.95em", border: "none", cursor: "pointer", marginTop: 4 }}>Mark done</button>}
                    {t.done && (
                      <textarea
                        value={t.reflection}
                        onChange={e => handleReflection(tasks.findIndex(x => x === t), e.target.value)}
                        placeholder="Reflection..."
                        rows={2}
                        style={{ width: "100%", borderRadius: 7, border: "1.5px solid #e0e7ff", padding: 6, fontSize: "0.95em", marginTop: 4 }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pomodoro Timer (placeholder) */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Focus Timer (Pomodoro)</h3>
        <button onClick={handleStartTimer} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
          Start 25/5 Pomodoro
        </button>
        {showTimer && <div style={{ marginTop: 12, color: "#6366f1" }}>Timer running... (demo)</div>}
      </section>
    </main>
  );
}

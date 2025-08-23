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
    <main className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Study Planner</h2>
      {/* Add Task */}
      <form onSubmit={handleAdd} className="mb-8 flex flex-wrap gap-4 animate-fade-in" autoComplete="on" aria-label="Add Study Task">
        <input
          type="text"
          value={form.topic}
          onChange={e => setForm({ ...form, topic: e.target.value })}
          placeholder="Topic"
          required
          className="rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base flex-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
        />
        <input
          type="text"
          value={form.resource}
          onChange={e => setForm({ ...form, resource: e.target.value })}
          placeholder="Resource"
          className="rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base flex-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
        />
        <select
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          className="rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
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
          className="rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base w-32 focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
        />
        <button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Add Task</button>
      </form>

      {/* Weekly Calendar */}
      <section className="mb-10 animate-fade-in">
        <h3 className="text-[#232946] font-bold text-lg mb-3">Weekly Calendar</h3>
        <div className="flex gap-3 flex-wrap">
          {days.map(day => (
            <div key={day} className="flex-1 min-w-[160px]">
              <div className="font-semibold text-[#6366f1] mb-2">{day}</div>
              <ul className="min-h-[40px]">
                {tasks.filter(t => t.date === day).map((t, i) => (
                  <li key={i} className={`rounded-lg mb-2 p-3 text-base shadow-sm ${t.done ? 'bg-[#d1fae5]' : 'bg-[#f3f4f6]'}`}>
                    <div><b>{t.topic}</b> <span className="text-[#888]">({t.resource})</span></div>
                    <div className="text-[#6366f1] text-sm">{t.duration} min</div>
                    {!t.done && <button onClick={() => handleDone(tasks.findIndex(x => x === t))} className="bg-[#16a34a] text-white rounded-lg font-semibold px-4 py-1 mt-2 shadow transition text-sm focus:outline-none focus:ring-2 focus:ring-[#16a34a]">Mark done</button>}
                    {t.done && (
                      <textarea
                        value={t.reflection}
                        onChange={e => handleReflection(tasks.findIndex(x => x === t), e.target.value)}
                        placeholder="Reflection..."
                        rows={2}
                        className="w-full rounded-lg border-2 border-[#e0e7ff] px-2 py-1 text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
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
      <section className="mb-10 animate-fade-in">
        <h3 className="text-[#232946] font-bold text-lg mb-3">Focus Timer (Pomodoro)</h3>
        <button onClick={handleStartTimer} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-8 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Start 25/5 Pomodoro</button>
        {showTimer && <div className="mt-3 text-[#6366f1]">Timer running... (demo)</div>}
      </section>
    </main>
  );
}

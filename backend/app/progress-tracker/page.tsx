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
    <main className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Progress Tracker</h2>
      {/* Filters */}
      <section className="mb-10 flex flex-wrap gap-4 items-center animate-fade-in">
        <label className="font-medium flex items-center gap-2">
          Subject:
          <select value={subject} onChange={e => setSubject(e.target.value)} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="font-medium flex items-center gap-2">
          From:
          <input type="date" value={dateRange.from} onChange={e => setDateRange({ ...dateRange, from: e.target.value })} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]" />
        </label>
        <label className="font-medium flex items-center gap-2">
          To:
          <input type="date" value={dateRange.to} onChange={e => setDateRange({ ...dateRange, to: e.target.value })} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]" />
        </label>
        <button onClick={() => handleExport("PDF")} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Export PDF</button>
        <button onClick={() => handleExport("CSV")} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Export CSV</button>
      </section>

      {/* Charts/Stats (placeholders) */}
      <section className="mb-10 animate-fade-in">
        <h3 className="text-[#232946] font-bold text-lg mb-3">Study Time (min/day)</h3>
        <div className="bg-[#f3f4f6] rounded-xl px-8 py-6 mb-6">
          <div className="flex gap-2 items-end h-32">
            {stats.studyTime.map((v, i) => (
              <div key={i} className="inline-block rounded-md bg-[#6366f1]" style={{ height: `${v * 1.5}px`, width: 30 }} title={`Day ${i + 1}: ${v} min`} />
            ))}
          </div>
        </div>
        <h3 className="text-[#232946] font-bold text-lg mb-3">Quizzes Completed & Accuracy (%)</h3>
        <div className="bg-[#f3f4f6] rounded-xl px-8 py-6 mb-6">
          <div className="flex gap-4 items-end h-32">
            {stats.quizzes.map((q, i) => (
              <div key={i} className="flex flex-col items-center w-12">
                <div className="rounded bg-[#4f46e5] mb-1" style={{ height: `${q * 15}px`, width: 18 }} title={`Day ${i + 1}: ${q} quizzes`} />
                <div className="text-[#6366f1] text-sm">{q}</div>
                <div className="rounded bg-[#16a34a] mt-1" style={{ height: `${stats.accuracy[i]}px`, width: 6 }} title={`Accuracy: ${stats.accuracy[i]}%`} />
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-[#232946] font-bold text-lg mb-3">Flashcard Retention (%)</h3>
        <div className="bg-[#f3f4f6] rounded-xl px-8 py-6 mb-6">
          <div className="flex gap-2 items-end h-32">
            {stats.flashRetention.map((v, i) => (
              <div key={i} className="inline-block rounded-md bg-[#f59e42]" style={{ height: `${v}px`, width: 30 }} title={`Day ${i + 1}: ${v}%`} />
            ))}
          </div>
        </div>
        <h3 className="text-[#232946] font-bold text-lg mb-3">Streak</h3>
        <div className="bg-white rounded-xl px-8 py-6 text-[#6366f1] font-bold text-xl inline-block shadow">{stats.streak} days</div>
      </section>
    </main>
  );
}

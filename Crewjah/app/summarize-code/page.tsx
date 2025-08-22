"use client";

import { useState } from "react";
const languages = ["Python", "JavaScript", "Java", "C++", "TypeScript", "Other"];

export default function SummarizeCode() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Python");
  const [explainComplexity, setExplainComplexity] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [whatItDoes, setWhatItDoes] = useState<string | null>(null);
  const [complexity, setComplexity] = useState<string | null>(null);
  const [refactor, setRefactor] = useState<string | null>(null);

  // Placeholder: Simulate summary
  const handleSummarize = (e: React.FormEvent) => {
    e.preventDefault();
    setWhatItDoes("This function implements binary search to efficiently find a target value in a sorted array.");
    setComplexity(explainComplexity ? "Time: O(log n), Space: O(1). No major pitfalls if array is sorted." : null);
    setRefactor("Consider using recursion for clarity, or adding input validation for unsorted arrays.");
    setShowResult(true);
  };

  const handleClear = () => {
    setCode("");
    setShowResult(false);
    setWhatItDoes(null);
    setComplexity(null);
    setRefactor(null);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Summarize Code</h2>
      <form onSubmit={handleSummarize} className="mb-8 flex flex-col gap-4 animate-fade-in" autoComplete="on" aria-label="Summarize Code Form">
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Paste code here…"
          rows={7}
          className="w-full rounded-xl border-2 border-[#e0e7ff] px-4 py-3 text-base font-mono focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] resize-none shadow-sm mb-2"
          required
        />
        <div className="flex gap-5 items-center mb-2 flex-wrap">
          <label className="font-medium flex items-center gap-2">
            Language:
            <select value={language} onChange={e => setLanguage(e.target.value)} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </label>
          <label className="font-medium flex items-center gap-2">
            <input type="checkbox" checked={explainComplexity} onChange={e => setExplainComplexity(e.target.checked)} className="accent-[#6366f1]" />
            Explain complexity
          </label>
        </div>
        <div className="flex gap-3">
          <button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#6366f1] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Summarize</button>
          {showResult && (
            <button type="button" onClick={handleClear} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-6 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Clear</button>
          )}
        </div>
      </form>

      {/* Empty state */}
      {!showResult && !code && (
        <div className="text-[#888] text-base bg-[#f3f4f6] rounded-xl px-6 py-6 text-center animate-fade-in">
          Paste Python/JS/Java code to get an explanation and key points.
        </div>
      )}

      {/* Output */}
      {showResult && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-2">What this code does</h3>
          <div className="mb-5 text-[#232946] text-base leading-relaxed">{whatItDoes}</div>

          {explainComplexity && complexity && (
            <>
              <h4 className="text-[#6366f1] font-semibold text-base mb-1">Complexity / pitfalls</h4>
              <div className="mb-5 text-[#232946]">{complexity}</div>
            </>
          )}

          <h4 className="text-[#6366f1] font-semibold text-base mb-1">Refactor suggestions</h4>
          <div className="mb-5 text-[#232946]">{refactor}</div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mt-4">
            <button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Save</button>
            <button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Copy</button>
            <button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Create Flashcards</button>
          </div>
        </section>
      )}
    </main>
  );
}

"use client";
import { useState } from "react";

export default function SummarizeText() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState<string[] | null>(null);
  const [highlights, setHighlights] = useState<string[]>([]);
  const [actions, setActions] = useState<string[]>([]);
  const [length, setLength] = useState("medium");
  const [tone, setTone] = useState("simple");
  const [showResult, setShowResult] = useState(false);

  const sampleText =
    "The Paris Agreement is an international treaty on climate change, adopted in 2015. It aims to limit global warming to well below 2°C, preferably to 1.5°C, compared to pre-industrial levels. The agreement brings all nations into a common cause to undertake ambitious efforts to combat climate change and adapt to its effects.";

  // Placeholder: Simulate summary
  const handleSummarize = (e: React.FormEvent) => {
    e.preventDefault();
    setSummary([
      "The Paris Agreement is a global climate treaty adopted in 2015.",
      "Its goal is to limit global warming to below 2°C.",
      "All nations are involved in efforts to fight climate change.",
    ]);
    setHighlights([
      "Adopted in 2015",
      "Limit warming to 1.5-2°C",
    ]);
    setActions([
      "Countries must set climate targets",
      "Regular progress reviews",
    ]);
    setShowResult(true);
  };

  const handleSample = () => {
    setInput(sampleText);
    setShowResult(false);
  };

  const handleClear = () => {
    setInput("");
    setSummary(null);
    setHighlights([]);
    setActions([]);
    setShowResult(false);
  };

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setInput(ev.target?.result as string);
      setShowResult(false);
    };
    reader.readAsText(file);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Summarize Text</h2>
      <form onSubmit={handleSummarize} className="mb-8 flex flex-col gap-4 animate-fade-in" autoComplete="on" aria-label="Summarize Text Form">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste or type text to summarize…"
          rows={5}
          className="w-full rounded-xl border-2 border-[#e0e7ff] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] resize-none shadow-sm mb-2"
          required
        />
        <div className="flex gap-3 items-center mb-2 flex-wrap">
          <label className="font-medium cursor-pointer">
            <input type="file" accept=".txt" className="hidden" onChange={handleFile} />
            <span className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg px-4 py-2 font-semibold transition hover:bg-[#c7d2fe]">Upload text file</span>
          </label>
          <button type="button" onClick={handleSample} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-4 py-2 transition hover:bg-[#c7d2fe]">Summarize sample article</button>
        </div>
        <div className="flex gap-5 mb-2 flex-wrap">
          <label className="font-medium flex items-center gap-2">
            Summary length:
            <select value={length} onChange={e => setLength(e.target.value)} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>
          <label className="font-medium flex items-center gap-2">
            Tone:
            <select value={tone} onChange={e => setTone(e.target.value)} className="ml-1 rounded-md border border-[#e0e7ff] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
              <option value="simple">Simple</option>
              <option value="technical">Technical</option>
            </select>
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
      {!showResult && !input && (
        <div className="text-[#888] text-base bg-[#f3f4f6] rounded-xl px-6 py-6 text-center animate-fade-in">
          Paste or upload text to get a summary.
        </div>
      )}

      {/* Output */}
      {showResult && summary && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-2">Summary</h3>
          <ul className="mb-5 text-[#232946] list-disc list-inside">
            {summary.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4 className="text-[#6366f1] font-semibold text-base mb-1">Highlights</h4>
          <ul className="mb-5 text-[#232946] list-disc list-inside">
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4 className="text-[#6366f1] font-semibold text-base mb-1">Action items</h4>
          <ul className="mb-5 text-[#232946] list-disc list-inside">
            {actions.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mt-4">
            <button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Save note</button>
            <button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Download</button>
            <button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Create Flashcards</button>
            <button className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-5 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Quiz me</button>
          </div>
        </section>
      )}
    </main>
  );
}

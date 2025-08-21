"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";


export default function AskAnything() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [keyPoints, setKeyPoints] = useState<string[]>([]);
  const [resources, setResources] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  // Placeholder: Simulate answer
  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half.");
    setKeyPoints([
      "Works on sorted data",
      "Divides search space in half each step",
      "O(log n) time complexity",
    ]);
    setResources([
      "https://en.wikipedia.org/wiki/Binary_search_algorithm",
      "https://www.geeksforgeeks.org/binary-search/",
    ]);
    setShowResult(true);
  };

  const handleClear = () => {
    setQuestion("");
    setAnswer(null);
    setKeyPoints([]);
    setResources([]);
    setShowResult(false);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Ask Anything (Q&amp;A)</h2>
      <form onSubmit={handleAsk} className="mb-8 flex flex-col gap-4 animate-fade-in" autoComplete="on" aria-label="Ask Anything Form">
        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask a question or paste content…"
          rows={4}
          className="w-full rounded-xl border-2 border-[#e0e7ff] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] resize-none shadow-sm mb-2"
          required
        />
        <div className="flex gap-3">
          <Button type="submit" size="lg">Ask</Button>
          {showResult && (
            <Button type="button" onClick={handleClear} variant="outline" size="default">Clear</Button>
          )}
        </div>
      </form>

      {/* Empty state */}
      {!showResult && (
        <div className="text-[#888] text-base bg-[#f3f4f6] rounded-xl px-6 py-6 text-center animate-fade-in">
          Try: <b>‘Explain binary search like I’m 12’</b> or <b>‘Key points from the Paris Agreement’</b>
        </div>
      )}

      {/* Output */}
      {showResult && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-2">Answer</h3>
          <div className="mb-5 text-[#232946] text-base leading-relaxed">{answer}</div>

          <h4 className="text-[#6366f1] font-semibold text-base mb-1">Key points</h4>
          <ul className="mb-5 text-[#232946] list-disc list-inside">
            {keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4 className="text-[#6366f1] font-semibold text-base mb-1">Related resources</h4>
          <ul className="mb-5 list-disc list-inside">
            {resources.map((url, i) => (
              <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[#4f46e5] underline hover:text-[#6366f1]">{url}</a></li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mt-4">
            <Button variant="subtle">Save as note</Button>
            <Button variant="subtle">Copy</Button>
            <Button variant="subtle">Download</Button>
            <Button variant="subtle">Add to Flashcards</Button>
            <Button>Quiz me on this</Button>
          </div>
        </section>
      )}
    </main>
  );
}

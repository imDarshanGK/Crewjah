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
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Summarize Code</h2>
      <form onSubmit={handleSummarize} style={{ marginBottom: 32 }}>
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder={"Paste code here…"}
          rows={7}
          style={{ width: "100%", borderRadius: 10, border: "1.5px solid #e0e7ff", padding: 14, fontFamily: "monospace", fontSize: "1.08em", marginBottom: 12 }}
        />
        <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 12 }}>
          <label style={{ fontWeight: 500 }}>
            Language:
            <select value={language} onChange={e => setLanguage(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </label>
          <label style={{ fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
            <input type="checkbox" checked={explainComplexity} onChange={e => setExplainComplexity(e.target.checked)} />
            Explain complexity
          </label>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
            Summarize
          </button>
          {showResult && (
            <button type="button" onClick={handleClear} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.7em 1.5em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
              Clear
            </button>
          )}
        </div>
      </form>

      {/* Empty state */}
      {!showResult && !code && (
        <div style={{ color: "#888", fontSize: "1.08em", background: "#f3f4f6", borderRadius: 10, padding: 18, textAlign: "center" }}>
          Paste Python/JS/Java code to get an explanation and key points.
        </div>
      )}

      {/* Output */}
      {showResult && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>What this code does</h3>
          <div style={{ marginBottom: 18, color: "#232946" }}>{whatItDoes}</div>

          {explainComplexity && complexity && (
            <>
              <h4 style={{ color: "#6366f1", fontWeight: 600, fontSize: "1.08em", marginBottom: 6 }}>Complexity / pitfalls</h4>
              <div style={{ marginBottom: 18, color: "#232946" }}>{complexity}</div>
            </>
          )}

          <h4 style={{ color: "#6366f1", fontWeight: 600, fontSize: "1.08em", marginBottom: 6 }}>Refactor suggestions</h4>
          <div style={{ marginBottom: 18, color: "#232946" }}>{refactor}</div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Save</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Copy</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Create Flashcards</button>
          </div>
        </section>
      )}
    </main>
  );
}

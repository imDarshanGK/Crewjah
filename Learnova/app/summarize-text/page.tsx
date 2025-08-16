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
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Summarize Text</h2>
      <form onSubmit={handleSummarize} style={{ marginBottom: 32 }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={"Paste or type text to summarize…"}
          rows={5}
          style={{ width: "100%", borderRadius: 10, border: "1.5px solid #e0e7ff", padding: 14, fontSize: "1.08em", marginBottom: 12 }}
        />
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <label style={{ fontWeight: 500 }}>
            <input type="file" accept=".txt" style={{ display: "none" }} onChange={handleFile} />
            <span style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, padding: "0.5em 1em", cursor: "pointer" }}>Upload text file</span>
          </label>
          <button type="button" onClick={handleSample} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.5em 1em", fontSize: "1em", border: "none", cursor: "pointer" }}>
            Summarize sample article
          </button>
        </div>
        <div style={{ display: "flex", gap: 18, marginBottom: 12 }}>
          <label style={{ fontWeight: 500 }}>
            Summary length:
            <select value={length} onChange={e => setLength(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>
          <label style={{ fontWeight: 500 }}>
            Tone:
            <select value={tone} onChange={e => setTone(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
              <option value="simple">Simple</option>
              <option value="technical">Technical</option>
            </select>
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
      {!showResult && !input && (
        <div style={{ color: "#888", fontSize: "1.08em", background: "#f3f4f6", borderRadius: 10, padding: 18, textAlign: "center" }}>
          Paste or upload text to get a summary.
        </div>
      )}

      {/* Output */}
      {showResult && summary && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Summary</h3>
          <ul style={{ marginBottom: 18, color: "#232946" }}>
            {summary.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4 style={{ color: "#6366f1", fontWeight: 600, fontSize: "1.08em", marginBottom: 6 }}>Highlights</h4>
          <ul style={{ marginBottom: 18, color: "#232946" }}>
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4 style={{ color: "#6366f1", fontWeight: 600, fontSize: "1.08em", marginBottom: 6 }}>Action items</h4>
          <ul style={{ marginBottom: 18, color: "#232946" }}>
            {actions.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Save note</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Download</button>
            <button style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Create Flashcards</button>
            <button style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Quiz me</button>
          </div>
        </section>
      )}
    </main>
  );
}

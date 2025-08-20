import { useState } from "react";

const noteOptions = [
  { label: "All notes", value: "all" },
  { label: "This session", value: "session" },
  { label: "Selected topics", value: "topics" },
];
const exportTypes = ["Markdown", "PDF", "TXT"];
const topics = ["Dynamic Programming", "OOP Principles", "Python Basics"];

export default function DownloadNotes() {
  const [noteType, setNoteType] = useState("all");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [exportType, setExportType] = useState("Markdown");

  const handleExport = () => {
    alert(`Exporting ${noteType === "topics" ? selectedTopics.join(", ") : noteOptions.find(o => o.value === noteType)?.label} as ${exportType} (demo)`);
  };

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(selectedTopics.includes(topic)
      ? selectedTopics.filter(t => t !== topic)
      : [...selectedTopics, topic]);
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Download Notes</h2>
      <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8 }}>
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, marginRight: 12 }}>Choose notes:</label>
          {noteOptions.map(opt => (
            <label key={opt.value} style={{ marginRight: 18 }}>
              <input
                type="radio"
                name="noteType"
                value={opt.value}
                checked={noteType === opt.value}
                onChange={() => setNoteType(opt.value)}
                style={{ marginRight: 6 }}
              />
              {opt.label}
            </label>
          ))}
        </div>
        {noteType === "topics" && (
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, marginRight: 12 }}>Select topics:</label>
            {topics.map(topic => (
              <label key={topic} style={{ marginRight: 14 }}>
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicToggle(topic)}
                  style={{ marginRight: 6 }}
                />
                {topic}
              </label>
            ))}
          </div>
        )}
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, marginRight: 12 }}>Export as:</label>
          <select value={exportType} onChange={e => setExportType(e.target.value)} style={{ borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
            {exportTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <button onClick={handleExport} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>
          Download
        </button>
      </section>
    </main>
  );
}

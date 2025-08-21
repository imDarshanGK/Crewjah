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
    <main className="max-w-xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Download Notes</h2>
      <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
        <div className="mb-6">
          <label className="font-medium mr-4">Choose notes:</label>
          {noteOptions.map(opt => (
            <label key={opt.value} className="mr-6 font-medium inline-flex items-center gap-2">
              <input
                type="radio"
                name="noteType"
                value={opt.value}
                checked={noteType === opt.value}
                onChange={() => setNoteType(opt.value)}
                className="accent-[#6366f1]"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {noteType === "topics" && (
          <div className="mb-6">
            <label className="font-medium mr-4">Select topics:</label>
            {topics.map(topic => (
              <label key={topic} className="mr-4 font-medium inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicToggle(topic)}
                  className="accent-[#6366f1]"
                />
                {topic}
              </label>
            ))}
          </div>
        )}
        <div className="mb-6">
          <label className="font-medium mr-4">Export as:</label>
          <select value={exportType} onChange={e => setExportType(e.target.value)} className="rounded-md border border-[#e0e7ff] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
            {exportTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <button onClick={handleExport} className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Download</button>
      </section>
    </main>
  );
}

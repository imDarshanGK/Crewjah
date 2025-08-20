import { useState } from "react";

const sampleDecks = [
  { name: "Python Basics", cards: 12, due: 3 },
  { name: "OOP Principles", cards: 8, due: 1 },
];
const sampleCards = [
  { front: "What is a class?", back: "A blueprint for creating objects.", due: true },
  { front: "What does __init__ do?", back: "Initializes a new object.", due: false },
];

export default function Flashcards() {
  const [decks, setDecks] = useState(sampleDecks);
  const [selectedDeck, setSelectedDeck] = useState<number | null>(null);
  const [studyIdx, setStudyIdx] = useState(0);
  const [showStudy, setShowStudy] = useState(false);
  const [know, setKnow] = useState<number[]>([]);
  const [dontKnow, setDontKnow] = useState<number[]>([]);
  const [stats, setStats] = useState({ studied: 0, retention: 90 });

  // Deck actions
  const handleCreateDeck = () => {
    const name = prompt("Deck name?");
    if (name) setDecks([...decks, { name, cards: 0, due: 0 }]);
  };
  const handleImport = () => {
    alert("Import from CSV coming soon!");
  };
  const handleExport = () => {
    alert("Export deck as CSV coming soon!");
  };
  const handleAutoGen = () => {
    alert("Auto-generate cards from summaries coming soon!");
  };

  // Study mode
  const handleStartStudy = (idx: number) => {
    setSelectedDeck(idx);
    setShowStudy(true);
    setStudyIdx(0);
    setKnow([]);
    setDontKnow([]);
  };
  const handleKnow = () => {
    setKnow([...know, studyIdx]);
    nextCard();
  };
  const handleDontKnow = () => {
    setDontKnow([...dontKnow, studyIdx]);
    nextCard();
  };
  const nextCard = () => {
    if (studyIdx + 1 < sampleCards.length) {
      setStudyIdx(studyIdx + 1);
    } else {
      setShowStudy(false);
      setStats({ studied: know.length + dontKnow.length + 1, retention: Math.round(((know.length + 1) / (know.length + dontKnow.length + 1)) * 100) });
    }
  };

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Flashcards</h2>
      {/* Decks List */}
      {!showStudy && (
        <section style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
            <button onClick={handleCreateDeck} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Create deck</button>
            <button onClick={handleImport} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Import .csv</button>
            <button onClick={handleAutoGen} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Auto-generate from summaries</button>
            <button onClick={handleExport} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Export deck</button>
          </div>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Your Decks</h3>
          <ul style={{ marginBottom: 0 }}>
            {decks.map((deck, i) => (
              <li key={i} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontWeight: 600 }}>{deck.name}</span>
                <span style={{ color: "#6366f1" }}>{deck.cards} cards</span>
                <span style={{ color: deck.due > 0 ? "#dc2626" : "#16a34a" }}>{deck.due} due</span>
                <button onClick={() => handleStartStudy(i)} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.4em 1em", fontSize: "0.98em", border: "none", cursor: "pointer" }}>Study</button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Study Mode */}
      {showStudy && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8, textAlign: "center" }}>
          <div style={{ marginBottom: 18, fontWeight: 600 }}>Card {studyIdx + 1} of {sampleCards.length}</div>
          <div style={{ marginBottom: 18, color: "#232946", fontSize: "1.13em" }}><b>Q:</b> {sampleCards[studyIdx].front}</div>
          <div style={{ marginBottom: 18, color: "#6366f1", fontSize: "1.08em" }}><b>A:</b> {sampleCards[studyIdx].back}</div>
          <div style={{ marginBottom: 18, color: sampleCards[studyIdx].due ? "#dc2626" : "#16a34a" }}>
            {sampleCards[studyIdx].due ? "Due for review" : "Next review soon"}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={handleKnow} style={{ background: "#16a34a", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Know</button>
            <button onClick={handleDontKnow} style={{ background: "#dc2626", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>Don't know</button>
          </div>
        </section>
      )}

      {/* Statistics */}
      {!showStudy && (
        <section style={{ marginTop: 32 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Statistics</h3>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 120 }}>
              <b>Cards studied</b><div style={{ color: "#6366f1", fontSize: "1.3em" }}>{stats.studied}</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 10, padding: "1em 1.5em", boxShadow: "0 2px 8px #e0e7ff", minWidth: 120 }}>
              <b>Retention %</b><div style={{ color: "#6366f1", fontSize: "1.3em" }}>{stats.retention}</div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

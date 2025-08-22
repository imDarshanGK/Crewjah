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
    <main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Flashcards</h2>
      {/* Decks List */}
      {!showStudy && (
        <section className="mb-10 animate-fade-in">
          <div className="flex flex-wrap gap-3 mb-6">
            <button onClick={handleCreateDeck} className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-5 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Create deck</button>
            <button onClick={handleImport} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Import .csv</button>
            <button onClick={handleAutoGen} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Auto-generate from summaries</button>
            <button onClick={handleExport} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Export deck</button>
          </div>
          <h3 className="text-[#232946] font-bold text-lg mb-3">Your Decks</h3>
          <ul className="mb-0">
            {decks.map((deck, i) => (
              <li key={i} className="mb-2 flex items-center gap-4">
                <span className="font-semibold text-[#232946]">{deck.name}</span>
                <span className="text-[#6366f1]">{deck.cards} cards</span>
                <span className={deck.due > 0 ? "text-[#dc2626]" : "text-[#16a34a]"}>{deck.due} due</span>
                <button onClick={() => handleStartStudy(i)} className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-4 py-1 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Study</button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Study Mode */}
      {showStudy && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in text-center">
          <div className="mb-5 font-semibold text-[#6366f1]">Card {studyIdx + 1} of {sampleCards.length}</div>
          <div className="mb-5 text-[#232946] text-lg font-medium"><b>Q:</b> {sampleCards[studyIdx].front}</div>
          <div className="mb-5 text-[#6366f1] text-base"><b>A:</b> {sampleCards[studyIdx].back}</div>
          <div className={sampleCards[studyIdx].due ? "mb-5 text-[#dc2626]" : "mb-5 text-[#16a34a]"}>
            {sampleCards[studyIdx].due ? "Due for review" : "Next review soon"}
          </div>
          <div className="flex gap-3 justify-center mt-4">
            <button onClick={handleKnow} className="bg-[#16a34a] text-white rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#16a34a]">Know</button>
            <button onClick={handleDontKnow} className="bg-[#dc2626] text-white rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#dc2626]">Don't know</button>
          </div>
        </section>
      )}

      {/* Statistics */}
      {!showStudy && (
        <section className="mt-10 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-3">Statistics</h3>
          <div className="flex gap-6 flex-wrap">
            <div className="bg-white rounded-xl px-8 py-6 shadow min-w-[120px] flex-1 flex flex-col items-center">
              <b className="text-[#6366f1]">Cards studied</b>
              <div className="text-[#6366f1] text-2xl mt-1 font-bold">{stats.studied}</div>
            </div>
            <div className="bg-white rounded-xl px-8 py-6 shadow min-w-[120px] flex-1 flex flex-col items-center">
              <b className="text-[#6366f1]">Retention %</b>
              <div className="text-[#6366f1] text-2xl mt-1 font-bold">{stats.retention}</div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

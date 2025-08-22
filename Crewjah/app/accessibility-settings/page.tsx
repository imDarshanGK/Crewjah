import { useState } from "react";

const fontSizes = ["Small", "Medium", "Large"];
const voices = ["Normal", "Slow", "Fast"];
const shortcuts = [
  { key: "Ctrl + /", desc: "Show keyboard shortcuts" },
  { key: "Alt + D", desc: "Go to Dashboard" },
  { key: "Alt + Q", desc: "Take a Quiz" },
  { key: "Alt + F", desc: "Open Flashcards" },
  { key: "Alt + P", desc: "Open Study Planner" },
];

export default function AccessibilitySettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("Medium");
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [tts, setTts] = useState(false);
  const [voiceRate, setVoiceRate] = useState("Normal");
  const [highContrast, setHighContrast] = useState(false);

  return (
    <main className="max-w-xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Accessibility Settings</h2>
      <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 mb-8 animate-fade-in">
        <div className="flex flex-wrap gap-6 mb-4">
          <label className="flex items-center font-medium gap-2 cursor-pointer">
            <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} className="accent-[#6366f1] w-5 h-5" />
            Dark mode
          </label>
          <label className="flex items-center font-medium gap-2 cursor-pointer">
            Font size:
            <select value={fontSize} onChange={e => setFontSize(e.target.value)} className="ml-1 rounded border border-[#e0e7ff] px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
              {fontSizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </label>
          <label className="flex items-center font-medium gap-2 cursor-pointer">
            <input type="checkbox" checked={dyslexiaFont} onChange={e => setDyslexiaFont(e.target.checked)} className="accent-[#6366f1] w-5 h-5" />
            Dyslexia-friendly font
          </label>
          <label className="flex items-center font-medium gap-2 cursor-pointer">
            <input type="checkbox" checked={tts} onChange={e => setTts(e.target.checked)} className="accent-[#6366f1] w-5 h-5" />
            Text-to-Speech (TTS)
          </label>
          {tts && (
            <label className="flex items-center font-medium gap-2 ml-2 cursor-pointer">
              Voice rate:
              <select value={voiceRate} onChange={e => setVoiceRate(e.target.value)} className="ml-1 rounded border border-[#e0e7ff] px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
                {voices.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </label>
          )}
          <label className="flex items-center font-medium gap-2 ml-2 cursor-pointer">
            <input type="checkbox" checked={highContrast} onChange={e => setHighContrast(e.target.checked)} className="accent-[#6366f1] w-5 h-5" />
            High contrast mode
          </label>
        </div>
      </section>
      <section className="bg-[#f3f4f6] rounded-2xl px-8 py-8 animate-fade-in">
        <h3 className="text-[#232946] font-bold text-lg mb-3">Keyboard Shortcuts</h3>
        <ul>
          {shortcuts.map(s => (
            <li key={s.key} className="mb-2 flex items-center">
              <span className="font-semibold text-[#6366f1] mr-3 bg-[#e0e7ff] px-3 py-1 rounded shadow-sm">{s.key}</span>
              <span className="text-[#232946]">{s.desc}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

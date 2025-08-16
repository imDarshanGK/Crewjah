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
    <main style={{ maxWidth: 600, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Accessibility Settings</h2>
      <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginTop: 8, marginBottom: 32 }}>
        <div style={{ marginBottom: 18 }}>
          <label style={{ fontWeight: 500, marginRight: 18 }}>
            <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} style={{ marginRight: 8 }} />
            Dark mode
          </label>
          <label style={{ fontWeight: 500, marginRight: 18 }}>
            Font size:
            <select value={fontSize} onChange={e => setFontSize(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
              {fontSizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </label>
          <label style={{ fontWeight: 500, marginRight: 18 }}>
            <input type="checkbox" checked={dyslexiaFont} onChange={e => setDyslexiaFont(e.target.checked)} style={{ marginRight: 8 }} />
            Dyslexia-friendly font
          </label>
          <label style={{ fontWeight: 500, marginRight: 18 }}>
            <input type="checkbox" checked={tts} onChange={e => setTts(e.target.checked)} style={{ marginRight: 8 }} />
            Text-to-Speech (TTS)
          </label>
          {tts && (
            <label style={{ fontWeight: 500, marginLeft: 12 }}>
              Voice rate:
              <select value={voiceRate} onChange={e => setVoiceRate(e.target.value)} style={{ marginLeft: 8, borderRadius: 5, border: "1px solid #e0e7ff", padding: "0.2em 0.7em" }}>
                {voices.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </label>
          )}
          <label style={{ fontWeight: 500, marginRight: 18, marginLeft: 12 }}>
            <input type="checkbox" checked={highContrast} onChange={e => setHighContrast(e.target.checked)} style={{ marginRight: 8 }} />
            High contrast mode
          </label>
        </div>
      </section>
      <section style={{ background: "#f3f4f6", borderRadius: 12, padding: 24 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Keyboard Shortcuts</h3>
        <ul>
          {shortcuts.map(s => (
            <li key={s.key} style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 600, color: "#6366f1", marginRight: 10 }}>{s.key}</span>
              <span>{s.desc}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

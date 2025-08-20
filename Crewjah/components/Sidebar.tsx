
import React, { useState } from "react";

const menu = [
  "Dashboard",
  "Ask Anything",
  "Summarize Text",
  "Summarize Code",
  "Study Resources",
  "Take a Quiz",
  "Flashcards",
  "Daily Challenge",
  "Study Planner",
  "Progress Tracker",
  "Download Notes",
  "Accessibility Settings",
  "Profile & Settings",
  "Help / Usage Guide"
];

export default function Sidebar({ selected, onSelect }: { selected: string; onSelect: (item: string) => void }) {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<string | null>(null);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username.trim()) setUser(username.trim());
  }
  function handleLogout() {
    setUser(null);
    setUsername("");
  }

  return (
    <aside style={{
      width: 260,
      background: "#232946",
      color: "#e0e7ff",
      minHeight: "100vh",
      padding: "2em 1.2em 1em 1.2em",
      borderRadius: "0 18px 18px 0",
      boxShadow: "2px 0 16px rgba(44,62,80,0.10)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5em"
    }}>
      <div style={{ display: "flex", alignItems: "center", fontWeight: 700, fontSize: "1.3em", marginBottom: "1em", letterSpacing: 1, gap: 10 }}>
        <img src="/crewjah-logo.jpg" alt="Crewjah Logo" style={{ width: 38, height: 38, borderRadius: 8, background: "#fff" }} />
        Crewjah
      </div>
      <div style={{ marginBottom: "1.5em" }}>
        {user ? (
          <div style={{ marginBottom: "0.7em" }}>
            <span style={{ fontWeight: 600, fontSize: "1.08em" }}>👤 {user}</span>
            <button onClick={handleLogout} style={{ marginLeft: 10, background: "#4f46e5", color: "#fff", border: "none", borderRadius: 6, padding: "0.2em 0.8em", cursor: "pointer", fontSize: "0.98em" }}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label htmlFor="username" style={{ fontWeight: 500, marginBottom: 2 }}>Login</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{
                padding: "0.5em 1em",
                borderRadius: 7,
                border: "1.5px solid #6366f1",
                background: "#e0e7ff",
                color: "#232946",
                fontSize: "1.08em"
              }}
            />
            <button type="submit" style={{
              background: "#6366f1",
              color: "#fff",
              borderRadius: 7,
              fontWeight: 600,
              marginTop: 6,
              border: "none",
              padding: "0.5em 0",
              fontSize: "1.08em",
              cursor: "pointer"
            }}>Login</button>
          </form>
        )}
      </div>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menu.map((item) => (
            <li key={item} style={{ marginBottom: "0.7em" }}>
              <button
                onClick={() => onSelect(item)}
                style={{
                  width: "100%",
                  background: selected === item ? "#4f46e5" : "#232946",
                  color: selected === item ? "#fff" : "#e0e7ff",
                  border: "none",
                  borderRadius: 7,
                  padding: "0.7em 1em",
                  fontSize: "1.08em",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "0.15s"
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

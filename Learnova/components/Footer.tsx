import React from "react";

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      background: "#f3f4f6",
      borderTop: "1.5px solid #e0e7ff",
      padding: "1.2em 2em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      fontSize: "1.05em",
      color: "#6366f1"
    }}>
      <a href="/docs" style={{ color: "#6366f1", textDecoration: "none" }}>Docs</a>
      <a href="https://github.com/imDarshanGK/Learnova/issues" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none" }}>Issues</a>
      <a href="https://github.com/imDarshanGK/Learnova" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none" }}>Contribute</a>
      <a href="/privacy" style={{ color: "#6366f1", textDecoration: "none" }}>Privacy</a>
      <a href="/terms" style={{ color: "#6366f1", textDecoration: "none" }}>Terms</a>
      <a href="/contact" style={{ color: "#6366f1", textDecoration: "none" }}>Contact</a>
      <div style={{ marginTop: 16, fontSize: 14 }}>
        <a href="https://github.com/imDarshanGK/Learnova" target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>
          Contribute
        </a>
        <a href="https://github.com/imDarshanGK/Learnova/issues/new" target="_blank" rel="noopener noreferrer">
          Report a bug
        </a>
      </div>
    </footer>
  );
}

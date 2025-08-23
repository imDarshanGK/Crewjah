import React from "react";

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      background: "#f3f4f6",
      borderTop: "1.5px solid #e0e7ff",
      padding: "1.2em 2em",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: 32,
      fontSize: "1.05em",
      color: "#6366f1"
    }}>
      <a href="/docs" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Docs</a>
      <a href="https://github.com/imDarshanGK/Crewjah/issues" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Issues</a>
      <a href="https://github.com/imDarshanGK/Crewjah" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Contribute</a>
      <a href="/privacy" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Privacy</a>
      <a href="/terms" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Terms</a>
      <a href="/contact" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Contact</a>
      <a href="https://github.com/imDarshanGK/Crewjah/issues/new" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none", margin: "0 8px" }}>Report a bug</a>
    </footer>
  );
}

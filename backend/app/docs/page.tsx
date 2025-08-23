import React from "react";

export default function DocsPage() {
  return (
    <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#4f46e5", marginBottom: 16 }}>Documentation</h1>
      <p style={{ fontSize: 18, color: "#232946", maxWidth: 600, textAlign: "center" }}>
        Welcome to Crewjah Docs!<br />
        Here you'll soon find guides, FAQs, and resources to help you get the most out of Crewjah.<br /><br />
        <span style={{ color: '#6366f1' }}>This page is under construction.</span>
      </p>
    </main>
  );
}

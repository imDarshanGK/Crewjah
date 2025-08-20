"use client";
import { useEffect, useState } from "react";

export default function ProfileSettings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("learnova_name") || "");
      setEmail(localStorage.getItem("learnova_email") || "");
    }
  }, []);

  return (
    <main style={{ maxWidth: 500, margin: "3em auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #e0e7ff" }}>
      <h1 style={{ color: "#4f46e5", fontWeight: 700, marginBottom: 12 }}>Profile & Settings</h1>
      <p style={{ marginBottom: 24 }}>Manage your profile and account settings.</p>
      <div style={{ marginBottom: 18 }}>
        <label style={{ fontWeight: 600, color: "#6366f1" }}>Name:</label>
        <div style={{ marginBottom: 10, fontSize: "1.1em" }}>{name || <span style={{ color: '#aaa' }}>Not set</span>}</div>
        <label style={{ fontWeight: 600, color: "#6366f1" }}>Email:</label>
        <div style={{ marginBottom: 10, fontSize: "1.1em" }}>{email || <span style={{ color: '#aaa' }}>Not set</span>}</div>
      </div>
      <div style={{ marginTop: 24, color: '#aaa', fontSize: '0.98em' }}>
        (Profile editing coming soon)
      </div>
    </main>
  );
}

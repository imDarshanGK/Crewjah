"use client";
import React, { useState, useRef, useEffect } from "react";
import { useAccessibility } from "./AccessibilityClientProvider";

export default function Header() {
  const { darkMode, setDarkMode, fontSize, setFontSize } = useAccessibility();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <header
      style={{
        width: "100%",
        background: darkMode ? "#18181b" : "#fff",
        borderBottom: darkMode ? "1.5px solid #232946" : "1.5px solid #e0e7ff",
        padding: "0.7em 2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "background 0.2s, border 0.2s"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img
          src="/crewjah-logo.jpg"
          alt="Crewjah Logo"
          style={{ width: 36, height: 36, borderRadius: 8, background: darkMode ? "#232946" : "#e0e7ff", boxShadow: darkMode ? "0 2px 8px #232946" : "0 2px 8px #b3bcf6" }}
          onError={e => (e.currentTarget.style.display = "none")}
        />
        <span style={{ fontWeight: 700, fontSize: "1.22em", color: darkMode ? "#a5b4fc" : "#4f46e5", letterSpacing: 1 }}>Crewjah</span>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a href="/dashboard" style={{ color: darkMode ? "#e0e7ff" : "#232946", fontWeight: 600, textDecoration: "none" }}>Dashboard</a>
        <div style={{ position: "relative" }} ref={dropdownRef}>
          <span
            style={{ color: darkMode ? "#e0e7ff" : "#232946", fontWeight: 600, cursor: "pointer", userSelect: "none" }}
            onClick={() => setShowDropdown((v) => !v)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setShowDropdown(v => !v); }}
            aria-haspopup="true"
            aria-expanded={showDropdown}
          >
            Features ▾
          </span>
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "2.2em",
                left: 0,
                background: darkMode ? "#232946" : "#fff",
                border: darkMode ? "1.5px solid #6366f1" : "1.5px solid #e0e7ff",
                borderRadius: 8,
                boxShadow: "0 2px 12px #e0e7ff",
                minWidth: 180,
                zIndex: 1000,
                padding: "0.5em 0"
              }}
            >
              <a href="/ask-anything" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>AI Q&A</a>
              <a href="/summarize-text" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Summarize Text</a>
              <a href="/summarize-code" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Summarize Code</a>
              <a href="/take-quiz" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Quiz & Flashcards</a>
              <a href="/study-planner" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Study Planner</a>
              <a href="/progress-tracker" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Progress Tracker</a>
              <a href="/download-notes" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Download Notes</a>
              <a href="/study-resources" style={{ display: "block", padding: "0.7em 1.2em", color: darkMode ? "#a5b4fc" : "#4f46e5", textDecoration: "none", fontWeight: 500 }}>Resource Finder</a>
            </div>
          )}
        </div>
        <a href="/study-planner" style={{ color: darkMode ? "#e0e7ff" : "#232946", fontWeight: 600, textDecoration: "none" }}>Planner</a>
        <a href="/progress-tracker" style={{ color: darkMode ? "#e0e7ff" : "#232946", fontWeight: 600, textDecoration: "none" }}>Progress</a>
        <a href="/help-usage-guide" style={{ color: darkMode ? "#e0e7ff" : "#232946", fontWeight: 600, textDecoration: "none" }}>Help</a>
        <a href="/profile-settings" style={{ color: darkMode ? "#e0e7ff" : "#232946", fontWeight: 600, textDecoration: "none" }}>Profile</a>
        {/* Accessibility controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 18 }}>
          <button
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.3em",
              color: darkMode ? "#facc15" : "#232946",
              display: "flex",
              alignItems: "center",
              padding: 0,
              marginRight: 6
            }}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {/* Moon icon for dark mode toggle */}
            {darkMode ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#232946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
            )}
          </button>
          <label style={{ color: darkMode ? "#e0e7ff" : "#232946", fontSize: "0.98em" }}>
            <span style={{ marginRight: 4 }}>A</span>
            <select
              value={fontSize}
              onChange={e => setFontSize(e.target.value)}
              style={{
                borderRadius: 5,
                border: "1.2px solid #6366f1",
                padding: "2px 6px",
                fontSize: "1em",
                background: darkMode ? "#232946" : "#fff",
                color: darkMode ? "#e0e7ff" : "#232946"
              }}
              aria-label="Font size"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </nav>
    </header>
  );



"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
type Props = { children: React.ReactNode };

const AccessibilityContext = createContext({
  darkMode: false,
  fontSize: "medium",
  setDarkMode: (_: boolean) => {},
  setFontSize: (_: string) => {},
});

export function useAccessibility() {
  return useContext(AccessibilityContext);
}

export default function AccessibilityClientProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("medium");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    document.body.style.fontSize = fontSize === "large" ? "20px" : fontSize === "small" ? "14px" : "16px";
  }, [darkMode, fontSize]);

  return (
    <AccessibilityContext.Provider value={{ darkMode, setDarkMode, fontSize, setFontSize }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

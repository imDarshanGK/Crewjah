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
    <main className="max-w-md mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-8">
        <h1 className="text-[#4f46e5] font-extrabold text-2xl mb-2 drop-shadow">Profile & Settings</h1>
        <p className="mb-6 text-[#232946]">Manage your profile and account settings.</p>
        <div className="mb-6">
          <label className="font-semibold text-[#6366f1]">Name:</label>
          <div className="mb-3 text-lg">{name || <span className="text-[#aaa]">Not set</span>}</div>
          <label className="font-semibold text-[#6366f1]">Email:</label>
          <div className="mb-3 text-lg">{email || <span className="text-[#aaa]">Not set</span>}</div>
        </div>
        <div className="mt-8 text-[#aaa] text-sm text-center">(Profile editing coming soon)</div>
      </div>
    </main>
  );
}

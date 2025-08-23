
"use client";


import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white animate-fade-in">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-5 bg-white/80 shadow-md sticky top-0 z-10">
        <nav className="flex items-center gap-3">
          <Image
            src="/crewjah-logo.jpg"
            alt="Crewjah Logo"
            width={44}
            height={44}
            className="rounded shadow-sm"
            priority
          />
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight">Crewjah</span>
        </nav>
        <nav className="flex items-center gap-5">
              <Link href="/signin">
                <Button size="default">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button size="default">Sign up Free</Button>
              </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 w-full">
        <div className="max-w-2xl w-full text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3 drop-shadow">Learn smarter with AI</h1>
          <p className="text-gray-700 mb-7 text-lg md:text-xl font-medium">
            Your all-in-one study assistant. Ask anything, summarize notes & code, and track progress.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 mb-6">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">Privacy-first</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">No ads</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">Beginner friendly</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">Learning illustration</span>
          </div>
        </div>

        {/* Features Grid */}
        <section className="max-w-3xl w-full mb-12 animate-fade-in">
          <div className="bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <h2 className="text-xl font-bold text-blue-900 mb-4">What can you do with Crewjah?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <h3 className="font-semibold text-blue-700 text-lg mb-1">Ask Anything</h3>
                <p className="text-xs text-gray-500">Instant answers with references</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <h3 className="font-semibold text-blue-700 text-lg mb-1">Summarize Text & Code</h3>
                <p className="text-xs text-gray-500">Turn long content into key points</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <h3 className="font-semibold text-blue-700 text-lg mb-1">Quiz & Flashcards</h3>
                <p className="text-xs text-gray-500">Practice and remember more</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <h3 className="font-semibold text-blue-700 text-lg mb-1">Planner & Progress</h3>
                <p className="text-xs text-gray-500">Stay consistent and see growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works - improved stepper */}
        <section className="max-w-2xl w-full text-center mb-12 animate-fade-in">
          <h2 className="font-semibold text-blue-800 mb-4 text-lg">How it works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <span className="bg-blue-100 text-blue-700 rounded-full p-3 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#4f46e5" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
              <span className="font-medium text-gray-700">Paste text or pick a topic</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-blue-100 text-blue-700 rounded-full p-3 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4f46e5" strokeWidth="2"/><path stroke="#4f46e5" strokeWidth="2" d="M8 12h8M12 8v8"/></svg>
              </span>
              <span className="font-medium text-gray-700">Get summary, resources & practice</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-blue-100 text-blue-700 rounded-full p-3 mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#4f46e5" strokeWidth="2"/><path stroke="#4f46e5" strokeWidth="2" d="M8 16l4-4 4 4"/></svg>
              </span>
              <span className="font-medium text-gray-700">Track progress over time</span>
            </div>
          </div>
        </section>
      </section>

      {/* Footer removed: now only rendered from layout.tsx to avoid duplication */}
    </main>
  );
}


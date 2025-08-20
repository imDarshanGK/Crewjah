
"use client";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white animate-fade-in">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-5 bg-white/80 shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image
            src="/crewjah-logo.jpg"
            alt="Crewjah Logo"
            width={44}
            height={44}
            className="rounded shadow-sm"
          />
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight">Crewjah</span>
        </div>
        <div className="flex gap-3">
          <Link href="/signin" className="text-blue-700 font-semibold hover:underline transition">Sign In</Link>
          <Link href="/signup">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-bold px-5 py-2 rounded-xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">Sign up Free</button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3 drop-shadow">Learn smarter with AI</h1>
          <p className="text-gray-700 mb-8 text-lg md:text-xl font-medium">
            Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <Link href="/signup">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg">Get Started — Free</button>
            </Link>
            <Link href="/signin">
              <button className="bg-white border-2 border-blue-600 text-blue-700 font-bold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition text-lg">Sign In</button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 mb-6">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">Privacy-first</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">No ads</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">Beginner friendly</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-100 font-semibold">Learning illustration</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-3xl w-full mb-12 animate-fade-in">
          <div className="bg-white/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-900 mb-4">What can you do with Crewjah?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <li className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <span className="font-semibold text-blue-700 text-lg">Ask Anything</span>
                <p className="text-xs text-gray-500 mt-1">Instant answers with references</p>
              </li>
              <li className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <span className="font-semibold text-blue-700 text-lg">Summarize Text & Code</span>
                <p className="text-xs text-gray-500 mt-1">Turn long content into key points</p>
              </li>
              <li className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <span className="font-semibold text-blue-700 text-lg">Quiz & Flashcards</span>
                <p className="text-xs text-gray-500 mt-1">Practice and remember more</p>
              </li>
              <li className="bg-blue-50 rounded-xl p-5 shadow hover:shadow-xl transition border border-blue-100 animate-fade-in">
                <span className="font-semibold text-blue-700 text-lg">Planner & Progress</span>
                <p className="text-xs text-gray-500 mt-1">Stay consistent and see growth</p>
              </li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-xl w-full text-center mb-12 animate-fade-in">
          <h4 className="font-semibold text-blue-800 mb-2 text-lg">How it works</h4>
          <ol className="text-base text-gray-600 list-decimal list-inside space-y-1">
            <li>Paste text or pick a topic</li>
            <li>Get summary, resources & practice</li>
            <li>Track progress over time</li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-xs text-gray-400 py-6 border-t bg-blue-50 animate-fade-in">
        <div className="mb-2">© 2025 Crewjah. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/docs" className="hover:underline">Docs</Link>
          <span>·</span>
          <Link href="/issues" className="hover:underline">Issues</Link>
          <span>·</span>
          <Link href="/contribute" className="hover:underline">Contribute</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <span>·</span>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}


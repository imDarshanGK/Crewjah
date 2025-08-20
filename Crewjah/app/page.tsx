
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header with small logo and brand */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white/80 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Image
            src="/crewjah-logo.jpg"
            alt="Crewjah Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">Crewjah</span>
        </div>
        <div className="flex gap-2">
          <Link href="/signin" className="text-blue-700 font-medium hover:underline">Sign In</Link>
          <Link href="/signup">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-lg shadow transition">Sign up Free</button>
          </Link>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">Learn smarter with AI</h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
            <Link href="/signup">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">Sign up Free</button>
            </Link>
            <Link href="/signin">
              <button className="bg-white border border-blue-600 text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-50 transition">Sign In</button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mb-6">
            <span>Privacy-first</span>
            <span>•</span>
            <span>No ads</span>
            <span>•</span>
            <span>Beginner friendly</span>
            <span>•</span>
            <span>Learning illustration</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-3xl w-full mt-2 mb-8">
          <div className="bg-white/80 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">What can you do with Crewjah?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              <li className="bg-blue-50 rounded-lg p-3 shadow hover:shadow-md transition border border-blue-100">
                <span className="font-semibold text-blue-700">Ask Anything</span>
                <p className="text-xs text-gray-500">Instant answers with references</p>
              </li>
              <li className="bg-blue-50 rounded-lg p-3 shadow hover:shadow-md transition border border-blue-100">
                <span className="font-semibold text-blue-700">Summarize Text & Code</span>
                <p className="text-xs text-gray-500">Turn long content into key points</p>
              </li>
              <li className="bg-blue-50 rounded-lg p-3 shadow hover:shadow-md transition border border-blue-100">
                <span className="font-semibold text-blue-700">Quiz & Flashcards</span>
                <p className="text-xs text-gray-500">Practice and remember more</p>
              </li>
              <li className="bg-blue-50 rounded-lg p-3 shadow hover:shadow-md transition border border-blue-100">
                <span className="font-semibold text-blue-700">Planner & Progress</span>
                <p className="text-xs text-gray-500">Stay consistent and see growth</p>
              </li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-xl w-full text-center mb-8">
          <h4 className="font-semibold text-blue-800 mb-1">How it works</h4>
          <ol className="text-sm text-gray-600 list-decimal list-inside space-y-1">
            <li>Paste text or pick a topic</li>
            <li>Get summary, resources & practice</li>
            <li>Track progress over time</li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-xs text-gray-400 py-4 border-t bg-blue-50">
        <div className="mb-1">© 2025 Crewjah. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-2">
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


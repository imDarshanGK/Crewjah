
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const quickActions = [
	{ label: "Ask Anything", href: "/ask-anything", icon: "💬", color: "from-[#38BDF8] to-[#1E3A8A]" },
	{ label: "Summarize Text", href: "/summarize-text", icon: "📝", color: "from-[#9333EA] to-[#38BDF8]" },
	{ label: "Summarize Code", href: "/summarize-code", icon: "💻", color: "from-[#1E3A8A] to-[#9333EA]" },
	{ label: "Take a Quiz", href: "/take-quiz", icon: "🧩", color: "from-[#38BDF8] to-[#9333EA]" },
	{ label: "Flashcards", href: "/flashcards", icon: "🃏", color: "from-[#9333EA] to-[#1E3A8A]" },
	{ label: "Study Planner", href: "/study-planner", icon: "📅", color: "from-[#1E3A8A] to-[#38BDF8]" },
];


// TODO: Replace with real user snapshot data from backend or context
const snapshot = {
	streak: null,
	minutes: null,
	quizzes: null,
	flashcards: null,
};


const recommended = [
	{ type: "Topic", text: "Dynamic Programming" },
	{ type: "Quiz", text: "Python Basics" },
	{ type: "Topic", text: "OOP Principles" },
];

export default function Dashboard() {
	const [name, setName] = useState("");
	const [lastActivity] = useState("Summarize Text");
	const [darkMode, setDarkMode] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (!localStorage.getItem("crewjah_logged_in")) {
				router.replace("/signin");
			}
			const storedName = localStorage.getItem("crewjah_name");
			setName(storedName || "User");
		}
	}, [router]);

	// Toggle dark mode by adding/removing a class on the body
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (darkMode) {
				document.body.classList.add("crewjah-dark");
			} else {
				document.body.classList.remove("crewjah-dark");
			}
		}
	}, [darkMode]);

	// Add dark mode styles once
	useEffect(() => {
		if (typeof window !== "undefined") {
			const styleId = "crewjah-dark-mode-style";
			if (!document.getElementById(styleId)) {
				const style = document.createElement("style");
				style.id = styleId;
				style.innerHTML = `
					.crewjah-dark {
						background: #181a20 !important;
						color: #f8fafc !important;
					}
					.crewjah-dark main, .crewjah-dark section, .crewjah-dark .bg-white, .crewjah-dark .rounded-xl, .crewjah-dark .rounded-2xl {
						background: #232946 !important;
						color: #f8fafc !important;
						border-color: #232946 !important;
					}
					.crewjah-dark .text-[#1E3A8A], .crewjah-dark .text-[#111827] {
						color: #a5b4fc !important;
					}
					.crewjah-dark .text-[#38BDF8] {
						color: #38BDF8 !important;
					}
					.crewjah-dark .text-[#9333EA] {
						color: #c4b5fd !important;
					}
					.crewjah-dark .shadow, .crewjah-dark .shadow-lg, .crewjah-dark .shadow-xl, .crewjah-dark .shadow-2xl {
						box-shadow: 0 2px 16px #181a20 !important;
					}
					.crewjah-dark .bg-gradient-to-br, .crewjah-dark .bg-gradient-to-r {
						filter: brightness(0.9);
					}
					.crewjah-dark a, .crewjah-dark .hover\:underline:hover {
						color: #38BDF8 !important;
					}
				`;
				document.head.appendChild(style);
			}
		}
	}, []);

	return (
		<main className="max-w-4xl mx-auto px-2 md:px-4 py-8 text-[#111827] animate-fade-in">
			{/* Top Banner */}
			<section className="relative bg-gradient-to-br from-[#E0E7FF] to-[#F9FAFB] rounded-2xl px-4 md:px-8 py-8 md:py-10 mb-10 text-center overflow-hidden shadow-xl">
				<Image src="/crewjah-logo.jpg" alt="Crewjah Logo" width={72} height={72} className="absolute left-8 top-8 rounded-xl bg-white shadow-lg" priority />
				<h2 className="font-extrabold text-3xl md:text-4xl text-[#1E3A8A] mb-2 drop-shadow">Welcome back, {name} <span aria-label="wave" role="img">👋</span></h2>
				<div className="text-[#38BDF8] text-lg mb-1">Continue where you left off or jump into a quick action below.</div>
				{/* Dark/Light mode toggle */}
				<div className="absolute right-8 top-8 flex flex-col items-end">
					<button
						onClick={() => setDarkMode((d) => !d)}
						className="bg-white/80 border border-[#E0E7FF] rounded-full px-4 py-2 text-sm font-semibold shadow hover:bg-[#E0E7FF] transition mb-1"
						title="Toggle dark/light mode"
						aria-label="Toggle dark or light mode"
					>
						{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
					</button>
					<span className="text-xs text-[#6B7280] bg-white/80 rounded px-2 py-1 mt-1 shadow">{darkMode ? "Dark mode: Easier on the eyes in low light." : "Light mode: Best for bright environments."}</span>
				</div>
			</section>

			{/* Quick Actions */}
			<section className="mb-12">
				<h3 className="text-xl font-bold mb-4 text-[#1E3A8A]">Quick Actions</h3>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{quickActions.map((action) => (
						<Link
							key={action.label}
							href={action.href}
							className={`flex flex-col items-center justify-center bg-gradient-to-r ${action.color} text-white rounded-xl shadow-lg py-8 px-4 font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#38BDF8]`}
							tabIndex={0}
							aria-label={action.label}
						>
							<span className="text-4xl mb-2 group-hover:scale-125 transition-transform drop-shadow">{action.icon}</span>
							{action.label}
						</Link>
					))}
				</div>
			</section>

			{/* Today's Snapshot */}
			<section className="mb-12">
				<h3 className="text-xl font-bold mb-4 text-[#1E3A8A]">Today’s Snapshot</h3>
				<div className="flex flex-wrap gap-6">
					<div className="bg-white rounded-xl shadow p-6 min-w-[140px] flex-1 flex flex-col items-center">
						<b className="text-[#1E3A8A]">Streak days</b>
						<div className="text-[#38BDF8] text-2xl mt-1 font-bold">{snapshot.streak !== null ? snapshot.streak : <span className="text-gray-300">—</span>}</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 min-w-[140px] flex-1 flex flex-col items-center">
						<b className="text-[#1E3A8A]">Minutes studied</b>
						<div className="text-[#9333EA] text-2xl mt-1 font-bold">{snapshot.minutes !== null ? snapshot.minutes : <span className="text-gray-300">—</span>}</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 min-w-[140px] flex-1 flex flex-col items-center">
						<b className="text-[#1E3A8A]">Quizzes taken</b>
						<div className="text-[#9333EA] text-2xl mt-1 font-bold">{snapshot.quizzes !== null ? snapshot.quizzes : <span className="text-gray-300">—</span>}</div>
					</div>
					<div className="bg-white rounded-xl shadow p-6 min-w-[140px] flex-1 flex flex-col items-center">
						<b className="text-[#1E3A8A]">Flashcards reviewed</b>
						<div className="text-[#9333EA] text-2xl mt-1 font-bold">{snapshot.flashcards !== null ? snapshot.flashcards : <span className="text-gray-300">—</span>}</div>
					</div>
				</div>
				<button className="mt-8 bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#1E3A8A] text-white rounded-lg font-semibold px-10 py-3 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8]">Resume last activity ({lastActivity})</button>
			</section>

			{/* Recommended for you */}
			<section>
				<h3 className="text-xl font-bold mb-4 text-[#1E3A8A]">Recommended for you</h3>
				<div className="flex flex-wrap gap-6">
					{recommended.length === 0 ? (
						<div className="text-gray-400 italic">No recommendations yet. Complete more activities to get personalized suggestions!</div>
					) : (
						recommended.map((item, i) => (
							<div key={i} className="bg-white rounded-xl shadow p-6 min-w-[160px] flex-1 flex flex-col items-center">
								<b className="text-[#1E3A8A]">{item.type}:</b> <span className="text-[#38BDF8] font-semibold">{item.text}</span>
							</div>
						))
					)}
				</div>
			</section>
		</main>
		);
	}

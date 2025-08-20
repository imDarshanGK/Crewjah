"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const quickActions = [
	{ label: "Ask Anything", href: "/ask-anything", icon: "💬" },
	{ label: "Summarize Text", href: "/summarize-text", icon: "📝" },
	{ label: "Summarize Code", href: "/summarize-code", icon: "💻" },
	{ label: "Take a Quiz", href: "/take-quiz", icon: "🧩" },
	{ label: "Flashcards", href: "/flashcards", icon: "🃏" },
	{ label: "Study Planner", href: "/study-planner", icon: "📅" },
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


import { useRouter } from "next/navigation";

export default function Dashboard() {
	const [name, setName] = useState("");
	const [lastActivity] = useState("Summarize Text");
	const router = useRouter();

	useEffect(() => {
		// Simulate auth: check localStorage for 'learnova_logged_in'
		if (typeof window !== "undefined") {
			if (!localStorage.getItem("learnova_logged_in")) {
				router.replace("/signin");
			}
			// Get name from localStorage (set at signup)
			const storedName = localStorage.getItem("learnova_name");
			setName(storedName || "User");
		}
	}, [router]);

			return (
				<main className="max-w-4xl mx-auto px-4 py-8 text-[#111827]">
					{/* Top Banner */}
					<section className="relative bg-[#E0E7FF] rounded-2xl px-6 py-8 mb-10 text-center overflow-hidden">
						<Image src="/crewjah-logo.jpg" alt="Crewjah Logo" width={64} height={64} className="absolute left-6 top-6 rounded-xl bg-white shadow-lg" priority />
						<h2 className="font-extrabold text-2xl md:text-3xl text-[#1E3A8A] mb-2">Welcome back, {name} 👋</h2>
						<div className="text-[#38BDF8] text-lg mb-1">Continue where you left off or jump into a quick action below.</div>
					</section>

					{/* Quick Actions */}
					<section className="mb-10">
						<h3 className="text-lg font-bold mb-3 text-[#1E3A8A]">Quick Actions</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-5">
							{quickActions.map((action) => (
								<Link
									key={action.label}
									href={action.href}
									className="flex flex-col items-center justify-center bg-gradient-to-r from-[#38BDF8] to-[#1E3A8A] text-white rounded-xl shadow-lg py-6 px-4 font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-150 group"
								>
									<span className="text-3xl mb-2 group-hover:scale-125 transition-transform">{action.icon}</span>
									{action.label}
								</Link>
							))}
						</div>
					</section>

					{/* Today's Snapshot */}
					<section className="mb-10">
						<h3 className="text-lg font-bold mb-3 text-[#1E3A8A]">Today’s Snapshot</h3>
						<div className="flex flex-wrap gap-6">
							<div className="bg-white rounded-xl shadow p-5 min-w-[120px] flex-1">
								<b>Streak days</b>
								<div className="text-[#38BDF8] text-xl mt-1">{snapshot.streak !== null ? snapshot.streak : <span className="text-gray-300">—</span>}</div>
							</div>
							<div className="bg-white rounded-xl shadow p-5 min-w-[120px] flex-1">
								<b>Minutes studied</b>
								<div className="text-[#9333EA] text-xl mt-1">{snapshot.minutes !== null ? snapshot.minutes : <span className="text-gray-300">—</span>}</div>
							</div>
							<div className="bg-white rounded-xl shadow p-5 min-w-[120px] flex-1">
								<b>Quizzes taken</b>
								<div className="text-[#9333EA] text-xl mt-1">{snapshot.quizzes !== null ? snapshot.quizzes : <span className="text-gray-300">—</span>}</div>
							</div>
							<div className="bg-white rounded-xl shadow p-5 min-w-[120px] flex-1">
								<b>Flashcards reviewed</b>
								<div className="text-[#9333EA] text-xl mt-1">{snapshot.flashcards !== null ? snapshot.flashcards : <span className="text-gray-300">—</span>}</div>
							</div>
						</div>
						<button className="mt-6 bg-[#1E3A8A] hover:bg-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow transition text-base">Resume last activity ({lastActivity})</button>
					</section>

					{/* Recommended for you */}
					<section>
						<h3 className="text-lg font-bold mb-3 text-[#1E3A8A]">Recommended for you</h3>
						<div className="flex flex-wrap gap-5">
							{recommended.map((item, i) => (
								<div key={i} className="bg-white rounded-xl shadow p-5 min-w-[140px] flex-1">
									<b>{item.type}:</b> <span className="text-[#38BDF8]">{item.text}</span>
								</div>
							))}
						</div>
					</section>
				</main>
			);
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


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


import { useRouter } from "next/navigation";

export default function Dashboard() {

		const [name, setName] = useState("");
		const [lastActivity] = useState("Summarize Text");
		const router = useRouter();

		useEffect(() => {
			// Simulate auth: check localStorage for 'crewjah_logged_in'
			if (typeof window !== "undefined") {
				if (!localStorage.getItem("crewjah_logged_in")) {
					router.replace("/signin");
				}
				// Get name from localStorage (set at signup)
				const storedName = localStorage.getItem("crewjah_name");
				setName(storedName || "User");
			}
		}, [router]);

				return (
					<main className="max-w-5xl mx-auto px-4 py-10 text-[#111827] animate-fade-in">
						{/* Top Banner */}
						<section className="relative bg-gradient-to-br from-[#E0E7FF] to-[#F9FAFB] rounded-2xl px-8 py-10 mb-12 text-center overflow-hidden shadow-xl">
							<Image src="/crewjah-logo.jpg" alt="Crewjah Logo" width={72} height={72} className="absolute left-8 top-8 rounded-xl bg-white shadow-lg" priority />
							<h2 className="font-extrabold text-3xl md:text-4xl text-[#1E3A8A] mb-2 drop-shadow">Welcome back, {name} <span aria-label="wave" role="img">👋</span></h2>
							<div className="text-[#38BDF8] text-lg mb-1">Continue where you left off or jump into a quick action below.</div>
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

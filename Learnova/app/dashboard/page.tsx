"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const quickActions = [
	{ label: "Ask Anything", href: "/ask-anything" },
	{ label: "Summarize Text", href: "/summarize-text" },
	{ label: "Summarize Code", href: "/summarize-code" },
	{ label: "Take a Quiz", href: "/take-quiz" },
	{ label: "Flashcards", href: "/flashcards" },
	{ label: "Study Planner", href: "/study-planner" },
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
			<main style={{ maxWidth: 900, margin: "0 auto", padding: "2em 1em", color: "var(--foreground)" }}>
			{/* Top Banner with Logo */}
					<section
						style={{
							background: "var(--accent)",
							borderRadius: 16,
							padding: "1.5em 2em 2.5em 2em",
							marginBottom: 32,
							textAlign: "center",
							position: "relative",
						}}
					>
				<Image
					src="/learnova-logo.png"
					alt="Learnova Logo"
					width={64}
					height={64}
					style={{ position: "absolute", left: 32, top: 32, borderRadius: 12, background: "#fff", boxShadow: "0 2px 8px #b3bcf6" }}
					priority
				/>
						<h2
							style={{
								fontWeight: 700,
								fontSize: "1.7em",
								color: "var(--primary)",
								marginBottom: 8,
							}}
						>
					Welcome back, {name} 👋
				</h2>
			<div style={{ color: "var(--secondary)", fontSize: "1.1em" }}>
					Continue where you left off or jump into a quick action below.
				</div>
			</section>

			{/* Quick Actions */}
					<section style={{ marginBottom: 32 }}>
						<h3
							style={{
								color: "var(--foreground)",
								fontWeight: 700,
								fontSize: "1.15em",
								marginBottom: 12,
							}}
						>
							Quick Actions
						</h3>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 18,
					}}
				>
					{quickActions.map((action) => (
						<a
							key={action.label}
							href={action.href}
											style={{
												background: "linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)",
												color: "#fff",
												borderRadius: 10,
												boxShadow: "0 2px 8px var(--accent)",
												padding: "1.1em 1.7em",
												fontWeight: 600,
												fontSize: "1.08em",
												textDecoration: "none",
												transition: "0.15s",
												border: "none",
											}}
						>
							{action.label}
						</a>
					))}
				</div>
			</section>

			{/* Today's Snapshot */}
					<section style={{ marginBottom: 32 }}>
						<h3
							style={{
								color: "var(--foreground)",
								fontWeight: 700,
								fontSize: "1.15em",
								marginBottom: 12,
							}}
						>
							Today’s Snapshot
						</h3>
		       <div
			       style={{
				       display: "flex",
				       gap: 24,
				       flexWrap: "wrap",
			       }}
		       >
			       <div
			       style={{
				       background: "var(--card)",
				       borderRadius: 10,
				       padding: "1em 1.5em",
				       boxShadow: "0 2px 8px var(--accent)",
				       minWidth: 120,
			       }}
			       >
				       <b>Streak days</b>
				       <div
				       style={{
					       color: "var(--secondary)",
					       fontSize: "1.3em",
				       }}
				       >
					       {snapshot.streak !== null ? snapshot.streak : <span style={{color:'#aaa'}}>—</span>}
				       </div>
			       </div>
			       <div
				       style={{
					       background: "#fff",
					       borderRadius: 10,
					       padding: "1em 1.5em",
					       boxShadow: "0 2px 8px #e0e7ff",
					       minWidth: 120,
				       }}
			       >
				       <b>Minutes studied</b>
				       <div
					       style={{
						       color: "#6366f1",
						       fontSize: "1.3em",
					       }}
				       >
					       {snapshot.minutes !== null ? snapshot.minutes : <span style={{color:'#aaa'}}>—</span>}
				       </div>
			       </div>
			       <div
				       style={{
					       background: "#fff",
					       borderRadius: 10,
					       padding: "1em 1.5em",
					       boxShadow: "0 2px 8px #e0e7ff",
					       minWidth: 120,
				       }}
			       >
				       <b>Quizzes taken</b>
				       <div
					       style={{
						       color: "#6366f1",
						       fontSize: "1.3em",
					       }}
				       >
					       {snapshot.quizzes !== null ? snapshot.quizzes : <span style={{color:'#aaa'}}>—</span>}
				       </div>
			       </div>
			       <div
				       style={{
					       background: "#fff",
					       borderRadius: 10,
					       padding: "1em 1.5em",
					       boxShadow: "0 2px 8px #e0e7ff",
					       minWidth: 120,
				       }}
			       >
				       <b>Flashcards reviewed</b>
				       <div
					       style={{
						       color: "#6366f1",
						       fontSize: "1.3em",
					       }}
				       >
					       {snapshot.flashcards !== null ? snapshot.flashcards : <span style={{color:'#aaa'}}>—</span>}
				       </div>
			       </div>
		       </div>
				<button
					style={{
						marginTop: 24,
						background: "#6366f1",
						color: "#fff",
						borderRadius: 7,
						fontWeight: 600,
						padding: "0.7em 2em",
						fontSize: "1.08em",
						border: "none",
						cursor: "pointer",
					}}
				>
					Resume last activity ({lastActivity})
				</button>
			</section>

			{/* Recommended for you */}
					<section>
						<h3
							style={{
								color: "var(--foreground)",
								fontWeight: 700,
								fontSize: "1.15em",
								marginBottom: 12,
							}}
						>
							Recommended for you
						</h3>
				<div
					style={{
						display: "flex",
						gap: 18,
						flexWrap: "wrap",
					}}
				>
					{recommended.map((item, i) => (
						<div
							key={i}
			       style={{
				       background: "var(--card)",
				       borderRadius: 10,
				       padding: "1em 1.5em",
				       boxShadow: "0 2px 8px var(--accent)",
				       minWidth: 140,
			       }}
						>
							<b>{item.type}:</b>{" "}
							   <span style={{ color: "var(--secondary)" }}>{item.text}</span>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

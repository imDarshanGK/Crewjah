import { useState } from "react";

const mcqs = [
	{
		question: "What is the time complexity of binary search?",
		options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
		answer: 1,
	},
	{
		question: "Which keyword is used to define a function in Python?",
		options: ["func", "def", "function", "lambda"],
		answer: 1,
	},
	{
		question: "What does HTML stand for?",
		options: [
			"Hyper Trainer Marking Language",
			"Hyper Text Markup Language",
			"Hyper Text Marketing Language",
			"Hyper Text Markup Leveler",
		],
		answer: 1,
	},
];

export default function DailyChallenge() {
	const [current, setCurrent] = useState(0);
	const [mcqAnswers, setMcqAnswers] = useState<number[]>([]);
	const [shortAnswer, setShortAnswer] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [remind, setRemind] = useState(false);

	const handleMcq = (idx: number) => {
		setMcqAnswers([...mcqAnswers, idx]);
		setCurrent(current + 1);
	};

	const handleShortSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	const handleRemind = () => {
		setRemind(true);
		setTimeout(() => setRemind(false), 2000);
	};

	// Rewards (placeholder)
	const streak = 7;
	const xp = 50;
	const badges = ["Streak Master", "Quiz Whiz"];

	return (
		<main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
			<h2
				style={{
					fontWeight: 700,
					fontSize: "1.4em",
					color: "#4f46e5",
					marginBottom: 18,
				}}
			>
				Daily Challenge
			</h2>
			{!submitted ? (
				<section
					style={{
						background: "#fff",
						borderRadius: 12,
						boxShadow: "0 2px 8px #e0e7ff",
						padding: 24,
						marginTop: 8,
					}}
				>
					<h3
						style={{
							color: "#232946",
							fontWeight: 700,
							fontSize: "1.15em",
							marginBottom: 10,
						}}
					>
						Today's Task
					</h3>
					{/* MCQs */}
					{current < mcqs.length && (
						<div style={{ marginBottom: 24 }}>
							<div
								style={{
									marginBottom: 12,
									fontWeight: 600,
								}}
							>
								MCQ {current + 1} of 3
							</div>
							<div style={{ marginBottom: 12 }}>{mcqs[current].question}</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: 10,
								}}
							>
								{mcqs[current].options.map((opt, i) => (
									<button
										key={i}
										onClick={() => handleMcq(i)}
										style={{
											background: "#e0e7ff",
											color: "#4f46e5",
											borderRadius: 7,
											fontWeight: 600,
											padding: "0.7em 1.2em",
											fontSize: "1.08em",
											border: "none",
											cursor: "pointer",
										}}
									>
										{String.fromCharCode(65 + i)}. {opt}
									</button>
								))}
							</div>
						</div>
					)}
					{/* Short Answer */}
					{current === mcqs.length && (
						<form onSubmit={handleShortSubmit} style={{ marginBottom: 18 }}>
							<div
								style={{
									marginBottom: 12,
									fontWeight: 600,
								}}
							>
								Short Answer
							</div>
							<div style={{ marginBottom: 12 }}>
								Explain the difference between a stack and a queue.
							</div>
							<textarea
								value={shortAnswer}
								onChange={(e) => setShortAnswer(e.target.value)}
								rows={3}
								style={{
									width: "100%",
									borderRadius: 10,
									border: "1.5px solid #e0e7ff",
									padding: 14,
									fontSize: "1.08em",
									marginBottom: 12,
								}}
								placeholder="Type your answer here..."
							/>
							<button
								type="submit"
								style={{
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
								Submit
							</button>
						</form>
					)}
					<button
						onClick={handleRemind}
						style={{
							background: "#e0e7ff",
							color: "#4f46e5",
							borderRadius: 7,
							fontWeight: 600,
							padding: "0.6em 1.2em",
							fontSize: "1em",
							border: "none",
							cursor: "pointer",
						}}
					>
						Remind me
					</button>
					{remind && (
						<span style={{ marginLeft: 12, color: "#6366f1" }}>
							Reminder set!
						</span>
					)}
				</section>
			) : (
				<section
					style={{
						background: "#fff",
						borderRadius: 12,
						boxShadow: "0 2px 8px #e0e7ff",
						padding: 24,
						marginTop: 8,
						textAlign: "center",
					}}
				>
					<h3
						style={{
							color: "#16a34a",
							fontWeight: 700,
							fontSize: "1.15em",
							marginBottom: 10,
						}}
					>
						Challenge Complete!
					</h3>
					<div style={{ marginBottom: 10 }}>
						Streak: <b>{streak} days</b>
					</div>
					<div style={{ marginBottom: 10 }}>
						XP: <b>{xp}</b>
					</div>
					<div style={{ marginBottom: 10 }}>
						Badges:{" "}
						{badges.map((b) => (
							<span
								key={b}
								style={{
									background: "#e0e7ff",
									color: "#4f46e5",
									borderRadius: 7,
									padding: "0.2em 0.7em",
									marginRight: 6,
								}}
							>
								{b}
							</span>
						))}
					</div>
					<div
						style={{
							marginTop: 18,
							color: "#6366f1",
						}}
					>
						Come back tomorrow for a new challenge!
					</div>
				</section>
			)}
		</main>
	);
}

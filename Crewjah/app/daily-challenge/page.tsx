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
			<main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
				<h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Daily Challenge</h2>
				{!submitted ? (
					<section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
						<h3 className="text-[#232946] font-bold text-lg mb-3">Today's Task</h3>
						{/* MCQs */}
						{current < mcqs.length && (
							<div className="mb-8">
								<div className="mb-3 font-semibold text-[#6366f1]">MCQ {current + 1} of 3</div>
								<div className="mb-3 text-[#232946] text-base">{mcqs[current].question}</div>
								<div className="flex flex-col gap-3">
									{mcqs[current].options.map((opt, i) => (
										<button
											key={i}
											onClick={() => handleMcq(i)}
											className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-6 py-3 text-base shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#6366f1] hover:bg-[#c7d2fe]"
										>
											{String.fromCharCode(65 + i)}. {opt}
										</button>
									))}
								</div>
							</div>
						)}
						{/* Short Answer */}
						{current === mcqs.length && (
							<form onSubmit={handleShortSubmit} className="mb-6 animate-fade-in">
								<div className="mb-3 font-semibold text-[#6366f1]">Short Answer</div>
								<div className="mb-3 text-[#232946] text-base">Explain the difference between a stack and a queue.</div>
								<textarea
									value={shortAnswer}
									onChange={(e) => setShortAnswer(e.target.value)}
									rows={3}
									className="w-full rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm mb-3"
									placeholder="Type your answer here..."
								/>
								<button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Submit</button>
							</form>
						)}
						<button onClick={handleRemind} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Remind me</button>
						{remind && (
							<span className="ml-4 text-[#6366f1] font-medium">Reminder set!</span>
						)}
					</section>
				) : (
					<section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in text-center">
						<h3 className="text-[#16a34a] font-bold text-lg mb-3">Challenge Complete!</h3>
						<div className="mb-2">Streak: <b>{streak} days</b></div>
						<div className="mb-2">XP: <b>{xp}</b></div>
						<div className="mb-2">Badges: {badges.map((b) => (
							<span key={b} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg px-3 py-1 font-semibold mr-2">{b}</span>
						))}</div>
						<div className="mt-6 text-[#6366f1]">Come back tomorrow for a new challenge!</div>
					</section>
				)}
			</main>
		);
}

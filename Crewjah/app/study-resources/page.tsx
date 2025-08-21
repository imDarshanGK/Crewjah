import { useState } from "react";

const sampleResources = {
	Articles: [
		{
			title: "Dynamic Programming Explained",
			url: "https://www.geeksforgeeks.org/dynamic-programming/",
		},
		{
			title: "DP Patterns",
			url: "https://leetcode.com/explore/learn/card/dynamic-programming/",
		},
	],
	Videos: [
		{
			title: "Dynamic Programming - YouTube",
			url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
		},
	],
	Docs: [
		{
			title: "Wikipedia: Dynamic Programming",
			url: "https://en.wikipedia.org/wiki/Dynamic_programming",
		},
	],
	Practice: [
		{
			title: "DP Practice Problems",
			url: "https://www.hackerrank.com/domains/tutorials/10-days-of-dp",
		},
	],
};

export default function StudyResources() {
	const [topic, setTopic] = useState("");
	const [resources, setResources] = useState<typeof sampleResources | null>(null);
	const [showResult, setShowResult] = useState(false);

	// Placeholder: Simulate search
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		setResources(sampleResources);
		setShowResult(true);
	};

	const handleClear = () => {
		setTopic("");
		setResources(null);
		setShowResult(false);
	};

		return (
			<main className="max-w-2xl mx-auto px-4 py-10 animate-fade-in">
				<h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Study Resources</h2>
				<form onSubmit={handleSearch} className="mb-8 flex flex-wrap gap-3 animate-fade-in" autoComplete="on" aria-label="Search Study Resources">
					<input
						type="text"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
						placeholder="e.g., Dynamic Programming"
						className="flex-1 rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
					/>
					<button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Search</button>
					{showResult && (
						<button type="button" onClick={handleClear} className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-6 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Clear</button>
					)}
				</form>

				{/* Empty state */}
				{!showResult && (
					<div className="text-[#888] text-base bg-[#f3f4f6] rounded-xl px-6 py-6 text-center animate-fade-in">
						Try: <b>‘Operating Systems scheduling’</b> or <b>‘OOP basics’</b>.
					</div>
				)}

				{/* Output */}
				{showResult && resources && (
					<section className="bg-white rounded-2xl shadow-xl px-8 py-8 mt-2 animate-fade-in">
						{Object.entries(resources).map(([type, links]) => (
							<div key={type} className="mb-8">
								<h3 className="text-[#6366f1] font-semibold text-base mb-2">{type}</h3>
								<ul className="mb-0">
									{links.map((item, i) => (
										<li key={i} className="mb-1">
											<a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#4f46e5] underline hover:text-[#6366f1]">{item.title}</a>
										</li>
									))}
								</ul>
							</div>
						))}
						{/* Actions */}
						<div className="flex gap-3 flex-wrap mt-4">
							<button className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-5 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Save to Planner</button>
							<button className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-5 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1]">Mark as Done</button>
						</div>
					</section>
				)}
			</main>
		);
}

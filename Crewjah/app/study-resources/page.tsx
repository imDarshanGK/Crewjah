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
		<main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
			<h2
				style={{
					fontWeight: 700,
					fontSize: "1.4em",
					color: "#4f46e5",
					marginBottom: 18,
				}}
			>
				Study Resources
			</h2>
			<form
				onSubmit={handleSearch}
				style={{ marginBottom: 32, display: "flex", gap: 12 }}
			>
				<input
					type="text"
					value={topic}
					onChange={(e) => setTopic(e.target.value)}
					placeholder={"e.g., Dynamic Programming"}
					style={{
						flex: 1,
						borderRadius: 10,
						border: "1.5px solid #e0e7ff",
						padding: 12,
						fontSize: "1.08em",
					}}
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
					Search
				</button>
				{showResult && (
					<button
						type="button"
						onClick={handleClear}
						style={{
							background: "#e0e7ff",
							color: "#4f46e5",
							borderRadius: 7,
							fontWeight: 600,
							padding: "0.7em 1.5em",
							fontSize: "1.08em",
							border: "none",
							cursor: "pointer",
						}}
					>
						Clear
					</button>
				)}
			</form>

			{/* Empty state */}
			{!showResult && (
				<div
					style={{
						color: "#888",
						fontSize: "1.08em",
						background: "#f3f4f6",
						borderRadius: 10,
						padding: 18,
						textAlign: "center",
					}}
				>
					Try: <b>‘Operating Systems scheduling’</b> or{" "}
					<b>‘OOP basics’</b>.
				</div>
			)}

			{/* Output */}
			{showResult && resources && (
				<section
					style={{
						background: "#fff",
						borderRadius: 12,
						boxShadow: "0 2px 8px #e0e7ff",
						padding: 24,
						marginTop: 8,
					}}
				>
					{Object.entries(resources).map(([type, links]) => (
						<div key={type} style={{ marginBottom: 22 }}>
							<h3
								style={{
									color: "#6366f1",
									fontWeight: 600,
									fontSize: "1.08em",
									marginBottom: 8,
								}}
							>
								{type}
							</h3>
							<ul style={{ marginBottom: 0 }}>
								{links.map((item, i) => (
									<li key={i} style={{ marginBottom: 4 }}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: "#4f46e5" }}
										>
											{item.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
					{/* Actions */}
					<div
						style={{
							display: "flex",
							gap: 12,
							flexWrap: "wrap",
						}}
					>
						<button
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
							Save to Planner
						</button>
						<button
							style={{
								background: "#6366f1",
								color: "#fff",
								borderRadius: 7,
								fontWeight: 600,
								padding: "0.6em 1.2em",
								fontSize: "1em",
								border: "none",
								cursor: "pointer",
							}}
						>
							Mark as Done
						</button>
					</div>
				</section>
			)}
		</main>
	);
}

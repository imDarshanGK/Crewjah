export default function HelpUsageGuide() {
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.4em", color: "#4f46e5", marginBottom: 18 }}>Help & Usage Guide</h2>
      <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginBottom: 32 }}>
        <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.15em", marginBottom: 10 }}>Quick Tips</h3>
        <ul style={{ marginBottom: 18 }}>
          <li><b>Dashboard:</b> See your progress, resume activities, and get recommendations.</li>
          <li><b>Ask Anything:</b> Enter questions or paste content for instant answers and key points.</li>
          <li><b>Summarize:</b> Paste text or code to get concise summaries, highlights, and action items.</li>
          <li><b>Take a Quiz:</b> Practice with MCQs, get instant feedback, and review mistakes.</li>
          <li><b>Flashcards:</b> Study with spaced repetition, create decks, and track retention.</li>
          <li><b>Study Planner:</b> Add tasks, view your week, and use the focus timer.</li>
          <li><b>Progress Tracker:</b> Visualize your study stats and export your progress.</li>
        </ul>
        <h3 style={{ color: "#6366f1", fontWeight: 700, fontSize: "1.08em", marginBottom: 8 }}>How to get better answers</h3>
        <ul style={{ marginBottom: 18 }}>
          <li>Be specific: “Explain binary search with a real-world example.”</li>
          <li>Ask for key points, summaries, or examples.</li>
          <li>Use the subject selector for more relevant results.</li>
        </ul>
        <h3 style={{ color: "#6366f1", fontWeight: 700, fontSize: "1.08em", marginBottom: 8 }}>Privacy & Data</h3>
        <div style={{ marginBottom: 18 }}>
          Your questions, notes, and progress are private to your account. We do not share your data. See our <a href="/privacy" style={{ color: "#4f46e5" }}>Privacy Policy</a> for details.
        </div>
        <a href="/docs" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", fontWeight: 600, textDecoration: "underline" }}>Read detailed documentation & wiki</a>
      </section>
    </main>
  );
}

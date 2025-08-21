export default function HelpUsageGuide() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Help & Usage Guide</h2>
      <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mb-8">
        <h3 className="text-[#232946] font-bold text-lg mb-3">Quick Tips</h3>
        <ul className="mb-6 space-y-2 text-[#232946]">
          <li><b>Dashboard:</b> See your progress, resume activities, and get recommendations.</li>
          <li><b>Ask Anything:</b> Enter questions or paste content for instant answers and key points.</li>
          <li><b>Summarize:</b> Paste text or code to get concise summaries, highlights, and action items.</li>
          <li><b>Take a Quiz:</b> Practice with MCQs, get instant feedback, and review mistakes.</li>
          <li><b>Flashcards:</b> Study with spaced repetition, create decks, and track retention.</li>
          <li><b>Study Planner:</b> Add tasks, view your week, and use the focus timer.</li>
          <li><b>Progress Tracker:</b> Visualize your study stats and export your progress.</li>
        </ul>
        <h3 className="text-[#6366f1] font-bold text-base mb-2">How to get better answers</h3>
        <ul className="mb-6 space-y-2 text-[#232946]">
          <li>Be specific: “Explain binary search with a real-world example.”</li>
          <li>Ask for key points, summaries, or examples.</li>
          <li>Use the subject selector for more relevant results.</li>
        </ul>
        <h3 className="text-[#6366f1] font-bold text-base mb-2">Privacy & Data</h3>
        <div className="mb-6 text-[#232946]">
          Your questions, notes, and progress are private to your account. We do not share your data. See our <a href="/privacy" className="text-[#4f46e5] underline hover:text-[#6366f1]">Privacy Policy</a> for details.
        </div>
        <a href="/docs" target="_blank" rel="noopener noreferrer" className="text-[#6366f1] font-semibold underline hover:text-[#4f46e5]">Read detailed documentation & wiki</a>
      </section>
    </main>
  );
}

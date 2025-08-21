export default function ContentModeration() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-4 text-center drop-shadow">Content Moderation</h1>
      <section className="bg-white rounded-2xl shadow-xl px-8 py-8">
        <p className="mb-4 text-[#232946]">Admin panel for moderating user-generated content. (Feature coming soon)</p>
        <ul className="list-disc pl-6 text-[#232946] space-y-2">
          <li>Review flagged questions, answers, and notes</li>
          <li>Approve or remove inappropriate content</li>
          <li>View moderation history and actions</li>
        </ul>
      </section>
    </main>
  );
}

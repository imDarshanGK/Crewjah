export default function Contact() {
  return (
    <main className="max-w-lg mx-auto px-4 py-12 animate-fade-in">
      <h1 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-4 text-center drop-shadow">Contact Us</h1>
      <p className="mb-8 text-center text-[#232946]">Have questions or need support? Reach out and our team will get back to you soon.</p>
      <form className="bg-white rounded-2xl shadow-xl px-8 py-8 flex flex-col gap-5">
        <label className="font-medium text-[#232946]">Name
          <input type="text" className="mt-1 w-full rounded-lg border border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB]" placeholder="Your name" required />
        </label>
        <label className="font-medium text-[#232946]">Email
          <input type="email" className="mt-1 w-full rounded-lg border border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB]" placeholder="you@email.com" required />
        </label>
        <label className="font-medium text-[#232946]">Message
          <textarea className="mt-1 w-full rounded-lg border border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB]" rows={4} placeholder="How can we help you?" required />
        </label>
        <button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] hover:scale-105">Send Message</button>
      </form>
    </main>
  );
}

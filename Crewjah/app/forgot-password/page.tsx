import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
    } else {
      setError("");
      setSent(true);
      // Placeholder: Add real password reset logic here
    }
  }

  return (
    <main className="max-w-sm mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-8">
        <h1 className="text-center text-[#4f46e5] font-extrabold text-2xl mb-4 drop-shadow">Forgot Password</h1>
        {sent ? (
          <div className="text-[#22c55e] text-base mt-8 text-center animate-fade-in">We’ve sent a reset link to your email.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6 animate-fade-in">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border-2 border-[#6366f1] text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB]"
              required
            />
            {error && <div className="text-[#e11d48] text-sm -mt-2">{error}</div>}
            <button type="submit" className="bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold py-3 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] hover:scale-105">Send reset link</button>
          </form>
        )}
        <footer className="text-center text-[#6366f1] text-sm mt-6">
          <Link href="/terms" className="text-[#4f46e5] mx-2 hover:underline">Terms & Conditions</Link>
          <Link href="/privacy" className="text-[#4f46e5] mx-2 hover:underline">Privacy Policy</Link>
        </footer>
      </div>
    </main>
  );
}

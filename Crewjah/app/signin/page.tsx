
"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  // Sign In state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  // Sign Up state
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const router = useRouter();

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
    } else {
      setError("");
      // Simulate login
      localStorage.setItem("crewjah_logged_in", "1");
      localStorage.setItem("crewjah_email", email);
      router.push("/dashboard");
    }
  }

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !signupEmail || !signupPassword || !confirm) {
      setSignupError("Please fill in all fields.");
    } else if (signupPassword !== confirm) {
      setSignupError("Passwords do not match.");
    } else {
      setSignupError("");
      setSignupSuccess(true);
      setTimeout(() => {
        localStorage.setItem("crewjah_logged_in", "1");
        localStorage.setItem("crewjah_name", name);
        localStorage.setItem("crewjah_email", signupEmail);
        router.push("/dashboard");
      }, 1200);
    }
  }

  // Social sign-in (UI only)
  function handleSocial(provider: string) {
    alert(`Social sign-in with ${provider} coming soon!`);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9fafb] to-[#e0e7ff] px-2 animate-fade-in">
      {/* Logo & Welcome */}
      <div className="flex flex-col items-center mb-8">
        <Image src="/crewjah-logo.jpg" alt="Crewjah Logo" width={80} height={80} className="rounded-2xl shadow-xl mb-3" priority />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-1 tracking-tight drop-shadow">Crewjah</h1>
        <div className="text-[#9333EA] font-semibold text-lg mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-[#9333EA] pr-2 max-w-xs text-center">{isSignIn ? "Welcome back to Crewjah – Your AI-powered learning companion." : "Join Crewjah and unlock your learning potential!"}</div>
      </div>

      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-10 mb-4 border border-[#E0E7FF] transition-all duration-300">
        {/* Toggle Sign In/Up */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-6 py-2 rounded-lg font-semibold text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] ${isSignIn ? 'bg-[#1E3A8A] text-white shadow-lg scale-105' : 'bg-[#E0E7FF] text-[#1E3A8A] hover:bg-[#c7d2fe]'}`}
            aria-pressed={isSignIn}
          >Sign In</button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-6 py-2 rounded-lg font-semibold text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] ${!isSignIn ? 'bg-[#1E3A8A] text-white shadow-lg scale-105' : 'bg-[#E0E7FF] text-[#1E3A8A] hover:bg-[#c7d2fe]'}`}
            aria-pressed={!isSignIn}
          >Sign Up</button>
        </div>

  {/* Social sign-in buttons removed for a cleaner UI */}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-[#e0e7ff]" />
          <span className="mx-3 text-[#a5b4fc] font-semibold text-base">{isSignIn ? "Sign In" : "Sign Up"}</span>
          <div className="flex-1 h-px bg-[#e0e7ff]" />
        </div>

        {/* Sign In Form */}
        {isSignIn && (
          <form onSubmit={handleSignIn} className="flex flex-col gap-5 animate-fade-in" autoComplete="on" aria-label="Sign In Form">
            <label className="flex flex-col gap-1 text-[#1E3A8A] font-medium">
              Email or Username
              <input
                type="email"
                placeholder="Enter your email or username"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border border-[#1E3A8A] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
                required
                autoFocus
              />
            </label>
            <label className="flex flex-col gap-1 text-[#1E3A8A] font-medium">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border border-[#1E3A8A] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
                required
              />
            </label>
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#1E3A8A] flex items-center gap-2">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="accent-[#1E3A8A]" /> Remember Me
              </label>
              <Link href="/forgot-password" className="text-sm text-[#9333EA] hover:underline focus:underline">Forgot Password?</Link>
            </div>
            {error && <div className="text-[#e11d48] text-sm -mt-2">{error}</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#1E3A8A] text-white font-semibold py-3 rounded-xl shadow-lg transition text-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]">Sign In</button>
            <div className="text-center mt-2 text-xs text-[#6B7280]">
              By signing in, you agree to our <Link href="/terms" className="text-[#9333EA] hover:underline">Terms</Link> & <Link href="/privacy" className="text-[#9333EA] hover:underline">Privacy</Link>.
            </div>
          </form>
        )}

        {/* Sign Up Form */}
        {!isSignIn && (
          <form onSubmit={handleSignUp} className="flex flex-col gap-5 animate-fade-in" autoComplete="on" aria-label="Sign Up Form">
            <label className="flex flex-col gap-1 text-[#1E3A8A] font-medium">
              Full Name
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border border-[#6366f1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-[#1E3A8A] font-medium">
              Email
              <input
                type="email"
                placeholder="Enter your email"
                value={signupEmail}
                onChange={e => setSignupEmail(e.target.value)}
                className="border border-[#6366f1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-[#1E3A8A] font-medium">
              Password
              <input
                type="password"
                placeholder="Create a password"
                value={signupPassword}
                onChange={e => setSignupPassword(e.target.value)}
                className="border border-[#6366f1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-[#1E3A8A] font-medium">
              Confirm Password
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                className="border border-[#6366f1] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
                required
              />
            </label>
            {signupError && <div className="text-[#e11d48] text-sm -mt-2">{signupError}</div>}
            {signupSuccess && <div className="text-[#16a34a] text-base -mt-2 text-center animate-fade-in">Account created! Redirecting…</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-[#6366f1] to-[#9333EA] hover:from-[#9333EA] hover:to-[#6366f1] text-white font-semibold py-3 rounded-xl shadow-lg transition text-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8]">Sign Up</button>
          </form>
        )}

        {/* New User Section */}
        <div className="text-center text-base mt-8">
          {isSignIn ? (
            <>
              <span className="text-[#111827]">Don’t have an account?</span> <button type="button" className="text-[#9333EA] font-semibold cursor-pointer hover:underline focus:underline bg-transparent border-none ml-1" onClick={() => setIsSignIn(false)}>Sign Up</button>
            </>
          ) : (
            <>
              <span className="text-[#111827]">Already have an account?</span> <button type="button" className="text-[#9333EA] font-semibold cursor-pointer hover:underline focus:underline bg-transparent border-none ml-1" onClick={() => setIsSignIn(true)}>Sign In</button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-[#6B7280] mt-8">
        <Link href="/privacy" className="hover:underline mr-2">Privacy Policy</Link>
        <span className="mx-1">|</span>
        <Link href="/terms" className="hover:underline ml-2">Terms of Service</Link>
      </footer>
    </main>
  );
}

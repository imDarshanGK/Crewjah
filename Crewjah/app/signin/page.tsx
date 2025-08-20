
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
      localStorage.setItem("learnova_logged_in", "1");
      localStorage.setItem("learnova_email", email);
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
        localStorage.setItem("learnova_logged_in", "1");
        localStorage.setItem("learnova_name", name);
        localStorage.setItem("learnova_email", signupEmail);
        router.push("/dashboard");
      }, 1200);
    }
  }

  // Social sign-in (UI only)
  function handleSocial(provider: string) {
    alert(`Social sign-in with ${provider} coming soon!`);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] px-2">
      {/* Logo & Welcome */}
      <div className="flex flex-col items-center mb-6">
        <Image src="/crewjah-logo.jpg" alt="Crewjah Logo" width={72} height={72} className="rounded-2xl shadow-lg mb-3" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-1 tracking-tight">Crewjah</h1>
        <div className="text-[#9333EA] font-semibold text-lg mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-[#9333EA] pr-2">Welcome back to Crewjah – Your AI-powered learning companion.</div>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 mb-4 border border-[#E0E7FF]">
        {/* Toggle Sign In/Up */}
        <div className="flex justify-center gap-4 mb-6">
          <button onClick={() => setIsSignIn(true)} className={`px-6 py-2 rounded-lg font-semibold text-base transition-all duration-150 ${isSignIn ? 'bg-[#1E3A8A] text-white shadow' : 'bg-[#E0E7FF] text-[#1E3A8A]'}`}>Sign In</button>
          <button onClick={() => setIsSignIn(false)} className={`px-6 py-2 rounded-lg font-semibold text-base transition-all duration-150 ${!isSignIn ? 'bg-[#1E3A8A] text-white shadow' : 'bg-[#E0E7FF] text-[#1E3A8A]'}`}>Sign Up</button>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", margin: "18px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#e0e7ff" }} />
          <span style={{ margin: "0 12px", color: "#a5b4fc", fontWeight: 600, fontSize: "1em" }}>OR</span>
          <div style={{ flex: 1, height: 1, background: "#e0e7ff" }} />
        </div>

        {/* Social sign-in buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button onClick={() => handleSocial('Google')} className="flex items-center justify-center gap-2 bg-white border border-[#E0E7FF] rounded-lg font-semibold py-2 text-[#111827] hover:shadow transition">
            <img src="/google.svg" alt="Google" width={20} height={20} className="mr-1" /> Continue with Google
          </button>
          <button onClick={() => handleSocial('GitHub')} className="flex items-center justify-center gap-2 bg-white border border-[#E0E7FF] rounded-lg font-semibold py-2 text-[#111827] hover:shadow transition">
            <img src="/github.svg" alt="GitHub" width={20} height={20} className="mr-1" /> Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", margin: "18px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#e0e7ff" }} />
          <span style={{ margin: "0 12px", color: "#a5b4fc", fontWeight: 600, fontSize: "1em" }}>{isSignIn ? "Sign In" : "Sign Up"}</span>
          <div style={{ flex: 1, height: 1, background: "#e0e7ff" }} />
        </div>

        {/* Sign In Form */}
        {isSignIn && (
          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email or Username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border border-[#1E3A8A] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border border-[#1E3A8A] rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] bg-[#F9FAFB] text-[#111827]"
              required
            />
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#1E3A8A]">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="mr-2" /> Remember Me
              </label>
              <Link href="/forgot-password" className="text-sm text-[#9333EA] hover:underline">Forgot Password?</Link>
            </div>
            {error && <div className="text-[#e11d48] text-sm mt-[-8px]">{error}</div>}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#38BDF8] text-white font-semibold py-3 rounded-xl shadow-md transition text-lg mb-2">Sign In</button>
            <div className="text-center mt-2 text-xs text-[#6B7280]">
              By signing in, you agree to our <Link href="/terms" className="text-[#9333EA] hover:underline">Terms</Link> & <Link href="/privacy" className="text-[#9333EA] hover:underline">Privacy</Link>.
            </div>
          </form>
        )}

        {/* Sign Up Form */}
        {!isSignIn && (
          <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={e => setSignupEmail(e.target.value)}
              style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={e => setSignupPassword(e.target.value)}
              style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
              required
            />
            {signupError && <div style={{ color: "#e11d48", fontSize: "0.98em", marginTop: -10 }}>{signupError}</div>}
            {signupSuccess && <div style={{ color: "#16a34a", fontSize: "1.05em", marginTop: -10, textAlign: "center" }}>Account created! Redirecting…</div>}
            <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 0", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Sign Up</button>
          </form>
        )}

        {/* New User Section */}
        <div className="text-center text-base mt-6">
          {isSignIn ? (
            <>
              <span className="text-[#111827]">Don’t have an account?</span> <span className="text-[#9333EA] font-semibold cursor-pointer hover:underline" onClick={() => setIsSignIn(false)}>Sign Up</span>
            </>
          ) : (
            <>
              <span className="text-[#111827]">Already have an account?</span> <span className="text-[#9333EA] font-semibold cursor-pointer hover:underline" onClick={() => setIsSignIn(true)}>Sign In</span>
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

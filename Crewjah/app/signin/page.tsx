
"use client";
import { useState } from "react";
import Image from "next/image";
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
    <main style={{ minHeight: "100vh", background: "linear-gradient(120deg, var(--accent) 0%, #f5f7fa 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* Friendly Opening */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: "1.15em", color: "#6366f1", fontWeight: 600, marginBottom: 10 }}>
          Welcome! Sign in or create your free Learnova account below.
        </div>
        <Image src="/learnova-logo.png" alt="Learnova Logo" width={72} height={72} style={{ borderRadius: 16, margin: "0 auto 1em auto", boxShadow: "0 2px 12px #e0e7ff" }} />
        <h1 style={{ fontWeight: 800, fontSize: "2em", color: "#4f46e5", marginBottom: 4 }}>Learnova</h1>
        <div style={{ color: "#6366f1", fontWeight: 500, fontSize: "1.1em" }}>Learn Smarter with Learnova</div>
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #e0e7ff", padding: 32, minWidth: 340, maxWidth: 400, width: "100%", marginBottom: 18 }}>
        {/* Toggle Sign In/Up */}
        <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 24 }}>
          <button onClick={() => setIsSignIn(true)} style={{ background: isSignIn ? "#6366f1" : "#e0e7ff", color: isSignIn ? "#fff" : "#4f46e5", border: "none", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.5em", fontSize: "1.08em", cursor: "pointer", transition: "0.15s" }}>Sign In</button>
          <button onClick={() => setIsSignIn(false)} style={{ background: !isSignIn ? "#6366f1" : "#e0e7ff", color: !isSignIn ? "#fff" : "#4f46e5", border: "none", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.5em", fontSize: "1.08em", cursor: "pointer", transition: "0.15s" }}>Sign Up</button>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", margin: "18px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#e0e7ff" }} />
          <span style={{ margin: "0 12px", color: "#a5b4fc", fontWeight: 600, fontSize: "1em" }}>OR</span>
          <div style={{ flex: 1, height: 1, background: "#e0e7ff" }} />
        </div>

        {/* Social sign-in buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
          <button onClick={() => handleSocial("Google")}
            style={{ background: "#fff", color: "#232946", border: "1.5px solid #e0e7ff", borderRadius: 7, fontWeight: 600, padding: "0.6em 0", fontSize: "1.08em", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <img src="/google.svg" alt="Google" width={20} height={20} style={{ marginRight: 6 }} /> Sign in with Google
          </button>
          <button onClick={() => handleSocial("GitHub")}
            style={{ background: "#fff", color: "#232946", border: "1.5px solid #e0e7ff", borderRadius: 7, fontWeight: 600, padding: "0.6em 0", fontSize: "1.08em", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <img src="/github.svg" alt="GitHub" width={20} height={20} style={{ marginRight: 6 }} /> Sign in with GitHub
          </button>
          <button onClick={() => handleSocial("LinkedIn")}
            style={{ background: "#fff", color: "#232946", border: "1.5px solid #e0e7ff", borderRadius: 7, fontWeight: 600, padding: "0.6em 0", fontSize: "1.08em", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <img src="/linkedin.svg" alt="LinkedIn" width={20} height={20} style={{ marginRight: 6 }} /> Sign in with LinkedIn
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
          <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input
              type="email"
              placeholder="Email or Username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
              required
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label style={{ fontSize: "0.98em", color: "#6366f1" }}>
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} style={{ marginRight: 6 }} /> Remember Me
              </label>
              <a href="/forgot-password" style={{ color: "#4f46e5", fontSize: "0.98em" }}>Forgot Password?</a>
            </div>
            {error && <div style={{ color: "#e11d48", fontSize: "0.98em", marginTop: -10 }}>{error}</div>}
            <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 0", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Sign In</button>
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

        {/* Switch link */}
        <div style={{ textAlign: "center", fontSize: "0.98em", marginTop: 18 }}>
          {isSignIn ? (
            <>New to Learnova? <span style={{ color: "#4f46e5", cursor: "pointer" }} onClick={() => setIsSignIn(false)}>Sign Up</span></>
          ) : (
            <>Already have an account? <span style={{ color: "#4f46e5", cursor: "pointer" }} onClick={() => setIsSignIn(true)}>Sign In</span></>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", color: "#6366f1", fontSize: "0.98em", marginTop: 18 }}>
        <a href="/terms" style={{ color: "#4f46e5", margin: "0 1em" }}>Terms & Conditions</a>
        <a href="/privacy" style={{ color: "#4f46e5", margin: "0 1em" }}>Privacy Policy</a>
      </footer>
    </main>
  );
}

import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: Add real auth logic here
    if (!email || !password) {
      setError("Incorrect email or password.");
    } else {
      setError("");
      // Simulate email verification error
      // setError("Please verify your email to continue.");
    }
  }

  return (
    <main style={{ maxWidth: 400, margin: "3em auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #e0e7ff" }}>
      <h1 style={{ textAlign: "center", color: "#4f46e5", fontWeight: 700 }}>Sign In</h1>
      <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 24 }}>
        <input
          type="email"
          placeholder="Email"
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
        {error && <div style={{ color: "#e11d48", fontSize: "0.98em", marginTop: -10 }}>{error}</div>}
        <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 0", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Sign In</button>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.98em" }}>
          <a href="/signup" style={{ color: "#4f46e5" }}>Sign Up</a>
          <a href="/forgot-password" style={{ color: "#4f46e5" }}>Forgot password?</a>
        </div>
        <div style={{ fontSize: "0.93em", color: "#6366f1", marginTop: 8, textAlign: "center" }}>
          By signing in, you agree to our <a href="/terms" style={{ color: "#4f46e5" }}>Terms</a> & <a href="/privacy" style={{ color: "#4f46e5" }}>Privacy</a>.
        </div>
      </form>
    </main>
  );
}

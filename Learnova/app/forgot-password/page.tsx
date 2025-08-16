import { useState } from "react";

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
    <main style={{ maxWidth: 400, margin: "3em auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #e0e7ff" }}>
      <h1 style={{ textAlign: "center", color: "#4f46e5", fontWeight: 700 }}>Forgot Password</h1>
      {sent ? (
        <div style={{ color: "#22c55e", fontSize: "1.08em", marginTop: 32, textAlign: "center" }}>
          We’ve sent a reset link to your email.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 24 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
            required
          />
          {error && <div style={{ color: "#e11d48", fontSize: "0.98em", marginTop: -10 }}>{error}</div>}
          <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 0", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Send reset link</button>
        </form>
      )}
    </main>
  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
    } else if (password !== confirm) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setSuccess(true);
      // Simulate account creation and redirect
      setTimeout(() => {
        // Set a flag in localStorage to simulate login
        localStorage.setItem("learnova_logged_in", "1");
        localStorage.setItem("learnova_name", name);
        router.push("/dashboard");
      }, 1200);
    }
  }

  return (
    <main style={{ maxWidth: 400, margin: "3em auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #e0e7ff" }}>
      <h1 style={{ textAlign: "center", color: "#4f46e5", fontWeight: 700 }}>Sign Up</h1>
      {success ? (
        <div style={{ color: "#16a34a", textAlign: "center", fontSize: "1.1em", margin: "2em 0" }}>
          Account created! Redirecting to dashboard...
        </div>
      ) : (
        <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 24 }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}
            required
          />
          <select value={role} onChange={e => setRole(e.target.value)} style={{ padding: 12, borderRadius: 7, border: "1.5px solid #6366f1", fontSize: "1.08em" }}>
            <option value="">I’m a student / educator (optional)</option>
            <option value="student">Student</option>
            <option value="educator">Educator</option>
          </select>
          {error && <div style={{ color: "#e11d48", fontSize: "0.98em", marginTop: -10 }}>{error}</div>}
          <button type="submit" style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 0", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Create account</button>
          <div style={{ textAlign: "center", fontSize: "0.98em" }}>
            Already have an account? <a href="/signin" style={{ color: "#4f46e5" }}>Sign In</a>
          </div>
        </form>
      )}
    </main>
  );
}

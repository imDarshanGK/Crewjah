import { useState } from "react";

const subjectsList = ["Python", "DSA", "Math", "General", "JavaScript", "Java"];
const goals = ["Exam Preparation", "Upskilling / Career", "Personal Growth"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [goal, setGoal] = useState("");
  const [studyDays, setStudyDays] = useState<string[]>([]);
  const [reminder, setReminder] = useState("18:00");

  const handleSubjectToggle = (subj: string) => {
    setSubjects(subjects.includes(subj)
      ? subjects.filter(s => s !== subj)
      : [...subjects, subj]);
  };
  const handleDayToggle = (d: string) => {
    setStudyDays(studyDays.includes(d)
      ? studyDays.filter(s => s !== d)
      : [...studyDays, d]);
  };
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleFinish = () => {
    // TODO: Send onboarding data to backend (PATCH /me/preferences)
    // TODO: Create starter deck and suggest first quiz
    alert("Onboarding complete! Starter deck and quiz ready.");
  };

  return (
    <main style={{ maxWidth: 500, margin: "0 auto", padding: "2em 1em" }}>
      <h2 style={{ fontWeight: 700, fontSize: "1.3em", color: "#4f46e5", marginBottom: 18 }}>Welcome to Learnova!</h2>
      {step === 1 && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginBottom: 24 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.1em", marginBottom: 10 }}>Step 1: Choose your subjects</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
            {subjectsList.map(subj => (
              <button key={subj} onClick={() => handleSubjectToggle(subj)} style={{ background: subjects.includes(subj) ? "#6366f1" : "#e0e7ff", color: subjects.includes(subj) ? "#fff" : "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>{subj}</button>
            ))}
          </div>
          <button onClick={handleNext} disabled={subjects.length === 0} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: subjects.length === 0 ? "not-allowed" : "pointer" }}>Next</button>
        </section>
      )}
      {step === 2 && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginBottom: 24 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.1em", marginBottom: 10 }}>Step 2: Pick your main goal</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
            {goals.map(g => (
              <button key={g} onClick={() => setGoal(g)} style={{ background: goal === g ? "#6366f1" : "#e0e7ff", color: goal === g ? "#fff" : "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>{g}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={handleBack} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Back</button>
            <button onClick={handleNext} disabled={!goal} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: !goal ? "not-allowed" : "pointer" }}>Next</button>
          </div>
        </section>
      )}
      {step === 3 && (
        <section style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px #e0e7ff", padding: 24, marginBottom: 24 }}>
          <h3 style={{ color: "#232946", fontWeight: 700, fontSize: "1.1em", marginBottom: 10 }}>Step 3: Set your study days & reminder time</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
            {days.map(d => (
              <button key={d} onClick={() => handleDayToggle(d)} style={{ background: studyDays.includes(d) ? "#6366f1" : "#e0e7ff", color: studyDays.includes(d) ? "#fff" : "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.6em 1.2em", fontSize: "1em", border: "none", cursor: "pointer" }}>{d}</button>
            ))}
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, marginRight: 10 }}>Reminder time:</label>
            <input type="time" value={reminder} onChange={e => setReminder(e.target.value)} style={{ borderRadius: 7, border: "1.5px solid #e0e7ff", padding: 8, fontSize: "1em" }} />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={handleBack} style={{ background: "#e0e7ff", color: "#4f46e5", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: "pointer" }}>Back</button>
            <button onClick={handleFinish} disabled={studyDays.length === 0} style={{ background: "#6366f1", color: "#fff", borderRadius: 7, fontWeight: 600, padding: "0.7em 2em", fontSize: "1.08em", border: "none", cursor: studyDays.length === 0 ? "not-allowed" : "pointer" }}>Finish</button>
          </div>
        </section>
      )}
    </main>
  );
}

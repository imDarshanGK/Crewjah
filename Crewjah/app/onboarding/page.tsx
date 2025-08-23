"use client";
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
    <main className="max-w-md mx-auto px-4 py-10 animate-fade-in">
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-6 text-center drop-shadow">Welcome to Crewjah!</h2>
      {step === 1 && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mb-8 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-3">Step 1: Choose your subjects</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {subjectsList.map(subj => (
              <button
                key={subj}
                onClick={() => handleSubjectToggle(subj)}
                className={`transition font-semibold px-5 py-2 rounded-lg text-base shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${subjects.includes(subj) ? 'bg-[#6366f1] text-white scale-105' : 'bg-[#e0e7ff] text-[#4f46e5] hover:bg-[#c7d2fe]'}`}
              >
                {subj}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={subjects.length === 0}
            className={`bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${subjects.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
          >
            Next
          </button>
        </section>
      )}
      {step === 2 && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mb-8 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-3">Step 2: Pick your main goal</h3>
          <div className="flex flex-col gap-3 mb-6">
            {goals.map(g => (
              <button
                key={g}
                onClick={() => setGoal(g)}
                className={`transition font-semibold px-5 py-2 rounded-lg text-base shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${goal === g ? 'bg-[#6366f1] text-white scale-105' : 'bg-[#e0e7ff] text-[#4f46e5] hover:bg-[#c7d2fe]'}`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-8 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] hover:bg-[#c7d2fe]"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!goal}
              className={`bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${!goal ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              Next
            </button>
          </div>
        </section>
      )}
      {step === 3 && (
        <section className="bg-white rounded-2xl shadow-xl px-8 py-8 mb-8 animate-fade-in">
          <h3 className="text-[#232946] font-bold text-lg mb-3">Step 3: Set your study days & reminder time</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {days.map(d => (
              <button
                key={d}
                onClick={() => handleDayToggle(d)}
                className={`transition font-semibold px-5 py-2 rounded-lg text-base shadow focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${studyDays.includes(d) ? 'bg-[#6366f1] text-white scale-105' : 'bg-[#e0e7ff] text-[#4f46e5] hover:bg-[#c7d2fe]'}`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="mb-6 flex items-center gap-3">
            <label className="font-medium text-[#232946]">Reminder time:</label>
            <input
              type="time"
              value={reminder}
              onChange={e => setReminder(e.target.value)}
              className="rounded-lg border-2 border-[#e0e7ff] px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] bg-[#F9FAFB] text-[#232946] shadow-sm"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="bg-[#e0e7ff] text-[#4f46e5] rounded-lg font-semibold px-8 py-2 shadow transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] hover:bg-[#c7d2fe]"
            >
              Back
            </button>
            <button
              onClick={handleFinish}
              disabled={studyDays.length === 0}
              className={`bg-gradient-to-r from-[#6366f1] to-[#38BDF8] text-white rounded-lg font-semibold px-8 py-2 shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${studyDays.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              Finish
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

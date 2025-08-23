export default function Privacy() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-4 text-center drop-shadow">Privacy Policy</h1>
      <section className="bg-white rounded-2xl shadow-xl px-8 py-8">
        <p className="mb-4 text-[#232946]">Your privacy is important to us. This page explains how Crewjah collects, uses, and protects your information.</p>
        <ul className="list-disc pl-6 text-[#232946] space-y-2">
          <li>We only collect information necessary to provide our educational services.</li>
          <li>Your data is never sold or shared with third parties for marketing.</li>
          <li>All sensitive data is encrypted and securely stored.</li>
          <li>You can request deletion of your account and data at any time.</li>
        </ul>
        <p className="mt-6 text-[#6366f1]">For questions, contact our support team.</p>
      </section>
    </main>
  );
}

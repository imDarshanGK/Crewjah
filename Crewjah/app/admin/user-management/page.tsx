export default function UserManagement() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="font-extrabold text-2xl md:text-3xl text-[#4f46e5] mb-4 text-center drop-shadow">User Management</h1>
      <section className="bg-white rounded-2xl shadow-xl px-8 py-8">
        <p className="mb-4 text-[#232946]">Admin panel for managing users. (Feature coming soon)</p>
        <ul className="list-disc pl-6 text-[#232946] space-y-2">
          <li>View and search all registered users</li>
          <li>Reset passwords or deactivate accounts</li>
          <li>Assign admin roles and permissions</li>
        </ul>
      </section>
    </main>
  );
}

"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-800">
        <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
        <p className="mb-4">{error.message}</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}

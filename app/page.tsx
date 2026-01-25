export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Create a Job-Ready Resume in Minutes
      </h1>

      <p className="text-gray-400 mb-8 max-w-md">
        Mobile-first • ATS-friendly • AI-powered
      </p>

      <a
        href="/resume/page-1"
        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium"
      >
        Create Resume
      </a>
    </main>
  );
}

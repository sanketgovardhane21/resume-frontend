"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* HEADER */}
      <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">ResumeCraft</h1>
        <span className="text-sm text-[var(--text-sub)]">
          No Signup Required
        </span>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Build Your Job-Winning <br /> Resume in Minutes
        </h2>

        <p className="mt-5 text-[var(--text-sub)]">
          ATS-Friendly • AI-Powered • Mobile-First
        </p>

        <Link href="/resume/page-1">
          <button className="mt-10 rounded-xl bg-[var(--primary)] px-10 py-4 text-base font-semibold text-white">
            Create Resume
          </button>
        </Link>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl border-t border-[var(--border)]" />

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h3 className="mb-12 text-center text-xl font-semibold">
          How It Works
        </h3>

        <div className="grid gap-12 sm:grid-cols-3 text-center">
          <Step
            title="Enter Your Details"
            description="Fill in your personal and professional info"
          />
          <Step
            title="Enhance with AI"
            description="Make your resume impactful and professional"
          />
          <Step
            title="Download Resume"
            description="Get an ATS-optimized PDF instantly"
          />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl border-t border-[var(--border)]" />

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-4 py-20 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Why Choose ResumeCraft?
          </h3>

          <ul className="space-y-4 text-[var(--text-sub)]">
            <li>✔ ATS-Friendly Resume Templates</li>
            <li>✔ AI-Assisted Content Writing</li>
            <li>✔ Mobile-First Experience</li>
            <li>✔ No Account Required</li>
          </ul>
        </div>

        {/* RESUME PREVIEW PLACEHOLDER */}
        <div className="flex justify-center">
          <div className="w-64 rounded-2xl bg-[var(--surface)] p-3">
            <div className="h-80 rounded-xl bg-white" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <Link href="/resume/page-1">
          <button className="rounded-xl bg-[var(--primary)] px-12 py-4 text-base font-semibold text-white">
            Start Building Resume
          </button>
        </Link>
      </section>
    </main>
  );
}

/* ---------- STEP COMPONENT ---------- */
function Step({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-[var(--surface)]" />
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-[var(--text-sub)]">
        {description}
      </p>
    </div>
  );
}

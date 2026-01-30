"use client";


export default function ResumeStepTwo() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* PAGE CONTENT */}
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>2 / 7</span>
        </div>

        {/* STEP HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              2
            </div>
            <h1 className="text-lg font-semibold">
              Bio & Summary
            </h1>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[28%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Time to add a brief introduction about yourself.
          </p>
        </div>

        {/* BIO INPUT */}
        <div className="mt-8">
          <label className="mb-2 block text-sm font-medium">
            Professional Bio{" "}
            <span className="text-[var(--text-muted)]">
              (Optional)
            </span>
          </label>

          <div className="relative">
            <textarea
              className="w-full rounded-xl bg-[var(--input)]
                         border border-[var(--border)]
                         p-4 pr-14 text-sm text-[var(--text-main)]
                         placeholder-[var(--text-muted)]
                         focus:outline-none focus:border-[var(--primary)]
                         min-h-[120px]"
              placeholder="Automatically write your bio in seconds using AI"
            />

            {/* AI BUTTON */}
            <button
              type="button"
              className="absolute bottom-3 right-3 flex h-10 w-10
                         items-center justify-center rounded-lg
                         bg-[var(--primary)] text-white"
            >
              ✨
            </button>
          </div>
        </div>
      </div>

      {/* STICKY ACTION BUTTONS */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <div className="mx-auto max-w-[420px] flex gap-3">
          <button className="w-full rounded-xl bg-[var(--input)] py-3 text-sm font-medium text-[var(--text-sub)]">
            Skip
          </button>
          <button className="w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

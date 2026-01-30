"use client";

export default function ResumeStepFive() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* PAGE CONTENT */}
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>5 / 7</span>
        </div>

        {/* STEP HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              5
            </div>
            <h1 className="text-lg font-semibold">
              Education
            </h1>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[70%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Tell us about your educational background.
            You can add multiple fields.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <Field label="Degree">
            <input
              className="input"
              placeholder="Enter your degree"
            />
          </Field>

          <Field label="University / School">
            <input
              className="input"
              placeholder="Enter your university or school"
            />
          </Field>

          <Field label="Location">
            <input
              className="input"
              placeholder="Enter location"
            />
          </Field>

          {/* YEARS */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Start Year">
              <input
                className="input"
                placeholder="YYYY"
              />
            </Field>

            <Field label="Graduation Year">
              <input
                className="input"
                placeholder="YYYY"
              />
            </Field>
          </div>

          {/* ADD EDUCATION */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2
                       rounded-xl border border-dashed border-[var(--border)]
                       py-3 text-sm text-[var(--text-sub)]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-white">
              +
            </span>
            Add Another Education
          </button>
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

/* ---------- FIELD WRAPPER ---------- */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

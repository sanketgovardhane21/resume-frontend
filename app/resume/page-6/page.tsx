"use client";

import { useState } from "react";

export default function ResumeStepSix() {
  const [noExpiry, setNoExpiry] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* PAGE CONTENT */}
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>6 / 7</span>
        </div>

        {/* STEP HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              6
            </div>
            <h1 className="text-lg font-semibold">
              Certifications
            </h1>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[84%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Add any relevant certifications to your resume.
            You can add multiple fields.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <Field label="Certification Name">
            <input
              className="input"
              placeholder="Enter your certification"
            />
          </Field>

          <Field label="Issuing Organization">
            <input
              className="input"
              placeholder="Enter issuing organization"
            />
          </Field>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-sm font-medium">
                Date Earned
              </label>
              <label className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <input
                  type="checkbox"
                  checked={noExpiry}
                  onChange={() => setNoExpiry(!noExpiry)}
                />
                No Expiration
              </label>
            </div>

            <input
              className="input"
              placeholder="DD/MM/YYYY"
            />
          </div>

          <Field label="Expiration Date">
            <input
              className="input"
              placeholder="DD/MM/YYYY"
              disabled={noExpiry}
            />
          </Field>

          {/* ADD CERTIFICATION */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2
                       rounded-xl border border-dashed border-[var(--border)]
                       py-3 text-sm text-[var(--text-sub)]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-white">
              +
            </span>
            Add Another Certification
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

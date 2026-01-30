"use client";

import { useState } from "react";

export default function ResumeStepOne() {
  const [availability, setAvailability] = useState("Immediately");

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* PAGE CONTENT */}
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>1 / 7</span>
        </div>

        {/* STEP HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              1
            </div>
            <h1 className="text-lg font-semibold">
              Personal Details
            </h1>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[14%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Let’s start with your basic information.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <Field label="Full Name">
            <input
              className="input"
              placeholder="Enter your full name"
            />
          </Field>

          <Field label="Email Address">
            <input
              className="input"
              placeholder="Enter your email address"
            />
          </Field>

          <Field label="Phone Number">
            <div className="flex gap-2">
              <div className="flex items-center rounded-lg bg-[var(--input)] px-3 text-sm text-[var(--text-sub)]">
                +91
              </div>
              <input
                className="input"
                placeholder="Enter your phone number"
              />
            </div>
          </Field>

          <Field label="City">
            <input
              className="input"
              placeholder="Enter your city"
            />
          </Field>

          <Field label="Country">
            <input
              className="input"
              placeholder="Enter your country"
            />
          </Field>

          {/* AVAILABILITY */}
          <div>
            <p className="mb-2 text-sm font-medium">
              Available to Join{" "}
              <span className="text-xs text-[var(--text-muted)]">
                Helps recruiters understand availability
              </span>
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Immediately",
                "Within 15 days",
                "1 Month",
                "Flexible",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setAvailability(item)}
                  className={`rounded-lg px-3 py-2 text-sm transition
                    ${
                      availability === item
                        ? "bg-[var(--primary)] text-white"
                        : "bg-[var(--input)] text-[var(--text-sub)]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STICKY CONTINUE BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <button className="w-full rounded-xl bg-[var(--primary)] py-3 text-base font-semibold text-white">
          Continue
        </button>
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

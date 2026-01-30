"use client";

import { useState } from "react";

export default function ResumeStepSeven() {
  const [theme, setTheme] = useState<"modern" | "elegant">("modern");
  const [alignment, setAlignment] = useState<"left" | "center">("left");
  const [fontSize, setFontSize] = useState<"small" | "normal">("small");

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      {/* PAGE CONTENT */}
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>7 / 7</span>
        </div>

        {/* STEP HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              7
            </div>
            <h1 className="text-lg font-semibold">Wrap Up</h1>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-full rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Customize your resume and download PDF.
          </p>
        </div>

        {/* THEME SELECTION */}
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            {/* MODERN */}
            <button
              onClick={() => setTheme("modern")}
              className={`rounded-xl border p-3 text-left transition
                ${
                  theme === "modern"
                    ? "border-[var(--primary)]"
                    : "border-[var(--border)]"
                }`}
            >
              <div className="mb-2 h-28 rounded-lg bg-white" />
              <p className="font-medium">Modern</p>
              <p className="text-xs text-[var(--text-sub)]">
                Free Theme
              </p>
            </button>

            {/* ELEGANT */}
            <button
              onClick={() => setTheme("elegant")}
              className={`rounded-xl border p-3 text-left transition
                ${
                  theme === "elegant"
                    ? "border-[var(--primary)]"
                    : "border-[var(--border)]"
                }`}
            >
              <div className="mb-2 h-28 rounded-lg bg-white" />
              <p className="font-medium">Elegant</p>
              <p className="text-xs text-[var(--text-sub)]">
                Premium Theme
              </p>

              <div className="mt-2 rounded-lg bg-[var(--primary)] py-1 text-center text-xs text-white">
                Upgrade ₹399 / ₹699
              </div>
            </button>
          </div>
        </div>

        {/* ALIGNMENT */}
        <div className="mt-6">
          <p className="mb-2 text-sm font-medium">Alignment</p>
          <div className="flex gap-3">
            {["left", "center"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setAlignment(item as "left" | "center")
                }
                className={`rounded-lg px-4 py-2 text-sm
                  ${
                    alignment === item
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--input)] text-[var(--text-sub)]"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* FONT SIZE */}
        <div className="mt-6">
          <p className="mb-2 text-sm font-medium">Font Size</p>
          <div className="flex gap-3">
            {["small", "normal"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setFontSize(item as "small" | "normal")
                }
                className={`rounded-lg px-4 py-2 text-sm
                  ${
                    fontSize === item
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--input)] text-[var(--text-sub)]"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* DOWNLOAD */}
        <button className="mt-8 w-full rounded-xl bg-[var(--primary)] py-4 text-base font-semibold text-white">
          Download PDF
        </button>

        {/* ADD SECTIONS */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-medium">Add Sections</p>

          <div className="space-y-3">
            <AddItem label="Add Projects" />
            <AddItem label="Add Additional Details" />
          </div>
        </div>

        {/* DONE MESSAGE */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">
            You&apos;re all done!
          </p>
          <p className="mt-2 text-sm text-[var(--text-sub)]">
            Feel free to make additional customizations or
            download your resume.
          </p>
        </div>
      </div>
    </main>
  );
}

/* ---------- HELPER ---------- */
function AddItem({ label }: { label: string }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-xl bg-[var(--input)] px-4 py-3 text-sm text-[var(--text-sub)]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-white">
        +
      </span>
      {label}
    </button>
  );
}

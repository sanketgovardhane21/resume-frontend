"use client";

import { useResume } from "@/app/context/ResumeContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Theme = {
  id: string;
  name: string;
  plan: "free" | "medium" | "pro";
};

const themes: Theme[] = [
  { id: "free-1", name: "Modern", plan: "free" },
  { id: "free-2", name: "Classic", plan: "free" },
  { id: "pro-1", name: "Elegant", plan: "pro" },
];

export default function ResumeStepSeven() {
  const router = useRouter();
  const { resume, updateResume } = useResume();

  const [selectedTheme, setSelectedTheme] = useState(resume.theme);

  const handleThemeSelect = (theme: Theme) => {
    if (theme.plan !== "free" && resume.plan === "free") {
      router.push("/upgrade");
      return;
    }

    setSelectedTheme(theme.id);
    updateResume({ theme: theme.id });
  };

  const handleDownload = () => {
    // PDF generation will be wired next
    console.log("FINAL RESUME DATA:", resume);
    alert("PDF generation will be added next 🚀");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>7 / 7</span>
        </div>

        {/* HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              7
            </div>
            <h1 className="text-lg font-semibold">
              Choose Resume Theme
            </h1>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-full rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Select a theme and download your resume.
          </p>
        </div>

        {/* THEMES */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeSelect(theme)}
              className={`rounded-xl border p-3 text-left transition
                ${
                  selectedTheme === theme.id
                    ? "border-[var(--primary)]"
                    : "border-[var(--border)]"
                }`}
            >
              <div className="mb-3 h-28 rounded-lg bg-white" />

              <p className="font-medium">{theme.name}</p>

              <p className="text-xs text-[var(--text-sub)]">
                {theme.plan === "free"
                  ? "Free Theme"
                  : "Premium Theme"}
              </p>

              {theme.plan !== "free" && (
                <div className="mt-2 rounded-lg bg-[var(--primary)] py-1 text-center text-xs text-white">
                  Upgrade Required
                </div>
              )}
            </button>
          ))}
        </div>

        {/* DOWNLOAD */}
        <button
          onClick={handleDownload}
          className="mt-10 w-full rounded-xl bg-[var(--primary)] py-4 text-base font-semibold text-white"
        >
          Download Resume
        </button>

        {/* DONE MESSAGE */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            You&apos;re all set 🎉
          </p>
          <p className="mt-2 text-sm text-[var(--text-sub)]">
            You can always come back and edit your resume.
          </p>
        </div>
      </div>

      {/* BACK */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <div className="mx-auto max-w-[420px]">
          <button
            onClick={() => router.push("/resume/page-6")}
            className="w-full rounded-xl bg-[var(--input)] py-3 text-sm font-medium text-[var(--text-sub)]"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
}

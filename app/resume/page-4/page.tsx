"use client";

import { useResume } from "@/app/context/ResumeContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResumeStepFour() {
  const router = useRouter();
  const { resume, updateResume } = useResume();

  // One experience entry (v1)
  const [jobTitle, setJobTitle] = useState(
    resume.experience?.[0]?.jobTitle || ""
  );
  const [company, setCompany] = useState(
    resume.experience?.[0]?.company || ""
  );
  const [location, setLocation] = useState(
    resume.experience?.[0]?.location || ""
  );
  const [startDate, setStartDate] = useState(
    resume.experience?.[0]?.startDate || ""
  );
  const [endDate, setEndDate] = useState(
    resume.experience?.[0]?.endDate || ""
  );
  const [currentJob, setCurrentJob] = useState(
    resume.experience?.[0]?.currentJob || false
  );

  const handleContinue = () => {
    updateResume({
      experience: [
        {
          jobTitle,
          company,
          location,
          startDate,
          endDate: currentJob ? "" : endDate,
          currentJob,
        },
      ],
    });

    router.push("/resume/page-5");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>4 / 7</span>
        </div>

        {/* HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              4
            </div>
            <h1 className="text-lg font-semibold">Work Experience</h1>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[56%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Tell us about your current or previous role.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <Field label="Job Title">
            <input
              className="input"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title"
            />
          </Field>

          <Field label="Company">
            <input
              className="input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
            />
          </Field>

          <Field label="Location">
            <input
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Start Date">
              <input
                className="input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="MM / YYYY"
              />
            </Field>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-sm font-medium">End Date</label>
                <label className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <input
                    type="checkbox"
                    checked={currentJob}
                    onChange={() => setCurrentJob(!currentJob)}
                  />
                  Currently work here
                </label>
              </div>

              <input
                className="input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="MM / YYYY"
                disabled={currentJob}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <div className="mx-auto max-w-[420px] flex gap-3">
          <button
            onClick={() => router.push("/resume/page-3")}
            className="w-full rounded-xl bg-[var(--input)] py-3 text-sm font-medium text-[var(--text-sub)]"
          >
            Back
          </button>

          <button
            onClick={handleContinue}
            className="w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

/* ---------- FIELD ---------- */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}

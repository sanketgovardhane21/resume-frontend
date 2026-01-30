"use client";

import { useResume } from "@/app/context/ResumeContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResumeStepFive() {
  const router = useRouter();
  const { resume, updateResume } = useResume();

  // One education entry (v1)
  const [degree, setDegree] = useState(
    resume.education?.[0]?.degree || ""
  );
  const [institution, setInstitution] = useState(
    resume.education?.[0]?.institution || ""
  );
  const [location, setLocation] = useState(
    resume.education?.[0]?.location || ""
  );
  const [startYear, setStartYear] = useState(
    resume.education?.[0]?.startYear || ""
  );
  const [endYear, setEndYear] = useState(
    resume.education?.[0]?.endYear || ""
  );

  const handleContinue = () => {
    updateResume({
      education: [
        {
          degree,
          institution,
          location,
          startYear,
          endYear,
        },
      ],
    });

    router.push("/resume/page-6");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>5 / 7</span>
        </div>

        {/* HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              5
            </div>
            <h1 className="text-lg font-semibold">Education</h1>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[70%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Add your educational background.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <Field label="Degree">
            <input
              className="input"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Degree"
            />
          </Field>

          <Field label="University / School">
            <input
              className="input"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="University or School"
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
            <Field label="Start Year">
              <input
                className="input"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                placeholder="YYYY"
              />
            </Field>

            <Field label="End Year">
              <input
                className="input"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
                placeholder="YYYY"
              />
            </Field>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <div className="mx-auto max-w-[420px] flex gap-3">
          <button
            onClick={() => router.push("/resume/page-4")}
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

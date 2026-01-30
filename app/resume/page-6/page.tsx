"use client";

import { useResume } from "../../../app/context/ResumeContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResumeStepSix() {
  const router = useRouter();
  const { resume, updateResume } = useResume();

  // One certification entry (v1)
  const [name, setName] = useState(
    resume.certifications?.[0]?.name || ""
  );
  const [organization, setOrganization] = useState(
    resume.certifications?.[0]?.organization || ""
  );
  const [earnedDate, setEarnedDate] = useState(
    resume.certifications?.[0]?.earnedDate || ""
  );
  const [expiryDate, setExpiryDate] = useState(
    resume.certifications?.[0]?.expiryDate || ""
  );
  const [noExpiry, setNoExpiry] = useState(
    resume.certifications?.[0]?.noExpiry || false
  );

  const handleContinue = () => {
    updateResume({
      certifications: [
        {
          name,
          organization,
          earnedDate,
          expiryDate: noExpiry ? "" : expiryDate,
          noExpiry,
        },
      ],
    });

    router.push("/resume/page-7");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>6 / 7</span>
        </div>

        {/* HEADER */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              6
            </div>
            <h1 className="text-lg font-semibold">Certifications</h1>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[84%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Add certifications that strengthen your profile.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">
          <Field label="Certification Name">
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Certification Name"
            />
          </Field>

          <Field label="Issuing Organization">
            <input
              className="input"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Issuing Organization"
            />
          </Field>

          <Field label="Date Earned">
            <input
              className="input"
              value={earnedDate}
              onChange={(e) => setEarnedDate(e.target.value)}
              placeholder="MM / YYYY"
            />
          </Field>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-sm font-medium">
                Expiration Date
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
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM / YYYY"
              disabled={noExpiry}
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <div className="mx-auto max-w-[420px] flex gap-3">
          <button
            onClick={() => router.push("/resume/page-5")}
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

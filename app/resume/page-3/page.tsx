"use client";

import { useResume } from "@/app/context/ResumeContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const suggestedSkills = [
  "Java",
  "Machine Learning",
  "Data Analysis",
  "Project Management",
  "Communication",
  "React",
  "Django",
  "Git",
  "Problem-Solving",
  "Node.js",
  "AWS",
];

export default function ResumeStepThree() {
  const router = useRouter();
  const { resume, updateResume } = useResume();

  const [jobRole, setJobRole] = useState(resume.jobRole);
  const [skills, setSkills] = useState<string[]>(resume.skills);

  const toggleSkill = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-32">
        <div className="flex items-center justify-between text-sm text-[var(--text-sub)]">
          <span>ResumeCraft</span>
          <span>3 / 7</span>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              3
            </div>
            <h1 className="text-lg font-semibold">
              Job Role & Skills
            </h1>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)]">
            <div className="h-1 w-[42%] rounded-full bg-[var(--primary)]" />
          </div>

          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Select your job role and key skills to highlight in your resume.
          </p>
        </div>

        {/* JOB ROLE */}
        <div className="mt-8">
          <label className="mb-2 block text-sm font-medium">
            Job Role
          </label>

          <div className="relative">
            <select
              className="input appearance-none pr-10"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            >
              <option value="">Select Job Role</option>
              <option>Software Engineer</option>
              <option>Data Analyst</option>
              <option>Backend Developer</option>
              <option>Frontend Developer</option>
              <option>Project Manager</option>
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              ▾
            </span>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium">
            Key Skills
          </label>

          <div className="flex flex-wrap gap-2 rounded-xl bg-[var(--input)] p-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm text-[var(--text-sub)]">
            Pick from suggestions
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestedSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`rounded-lg px-3 py-2 text-xs transition
                  ${
                    skills.includes(skill)
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--input)] text-[var(--text-sub)]"
                  }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4">
        <div className="mx-auto max-w-[420px] flex gap-3">
          <button className="w-full rounded-xl bg-[var(--input)] py-3 text-sm font-medium text-[var(--text-sub)]">
            Skip
          </button>
          <button
            onClick={() => {
              updateResume({ jobRole, skills });
              router.push("/resume/page-4");
            }}
            className="w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

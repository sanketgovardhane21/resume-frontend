"use client";

import { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { useRouter } from "next/navigation";

export default function Step3() {
  const { resume, setResume } = useResume();
  const [skillInput, setSkillInput] = useState("");
  const router = useRouter();

  function addSkill() {
    if (!skillInput.trim()) return;
    if (resume.skills.includes(skillInput)) return;

    setResume({
      ...resume,
      skills: [...resume.skills, skillInput],
    });

    setSkillInput("");
  }

  function removeSkill(skill: string) {
    setResume({
      ...resume,
      skills: resume.skills.filter((s) => s !== skill),
    });
  }

  function handleNext() {
    if (!resume.jobRole || resume.skills.length < 3) {
      alert("Please add job role and at least 3 skills");
      return;
    }

    if (resume.isFresher) {
      router.push("/resume/step-5"); // skip experience
    } else {
      router.push("/resume/step-4");
    }
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Step 3 of 7 – Job Role & Skills
      </h2>

      {/* Job Role */}
      <input
        value={resume.jobRole}
        onChange={(e) =>
          setResume({ ...resume, jobRole: e.target.value })
        }
        placeholder="Job role you are applying for"
        className="w-full mb-4 p-3 rounded bg-[#1a1a24]"
      />

      {/* Fresher / Experienced */}
      <p className="text-sm text-gray-400 mb-2">I am a</p>
      <div className="flex gap-3 mb-6">
        <button
          onClick={() =>
            setResume({ ...resume, isFresher: true })
          }
          className={`px-4 py-2 rounded ${
            resume.isFresher
              ? "bg-indigo-600"
              : "bg-[#1a1a24]"
          }`}
        >
          Fresher
        </button>

        <button
          onClick={() =>
            setResume({ ...resume, isFresher: false })
          }
          className={`px-4 py-2 rounded ${
            !resume.isFresher
              ? "bg-indigo-600"
              : "bg-[#1a1a24]"
          }`}
        >
          Experienced
        </button>
      </div>

      {/* Skills */}
      <div className="mb-3">
        <input
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Add a skill and press Add"
          className="w-full p-3 rounded bg-[#1a1a24]"
        />
        <button
          onClick={addSkill}
          className="w-full mt-2 bg-purple-600 py-2 rounded"
        >
          Add Skill
        </button>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {resume.skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-600 px-3 py-1 rounded-full text-sm cursor-pointer"
            onClick={() => removeSkill(skill)}
          >
            {skill} ✕
          </span>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-indigo-600 py-3 rounded-lg"
      >
        Continue
      </button>
    </main>
  );
}

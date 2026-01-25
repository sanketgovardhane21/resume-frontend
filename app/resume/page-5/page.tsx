"use client";

import { useResume } from "../../../context/ResumeContext";
import { useRouter } from "next/navigation";

export default function Step5() {
  const { resume, setResume } = useResume();
  const router = useRouter();

  function addEducation() {
    if (resume.education.length >= 2) return;

    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          degree: "",
          institute: "",
          year: "",
          score: "",
          specialization: "",
        },
      ],
    });
  }

  function updateEducation(
    index: number,
    field: keyof (typeof resume.education)[number],
    value: string
  ) {
    const updated = [...resume.education];
    updated[index] = { ...updated[index], [field]: value };
    setResume({ ...resume, education: updated });
  }

  function handleNext() {
    if (resume.isFresher && resume.education.length === 0) {
      alert("Please add at least one education detail");
      return;
    }

    router.push("/resume/page-6");
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Step 5 of 7 – Education
      </h2>

      {resume.education.map((edu, idx) => (
        <div
          key={idx}
          className="mb-6 p-4 rounded bg-[#1a1a24]"
        >
          <input
            placeholder="Degree / Qualification"
            value={edu.degree}
            onChange={(e) =>
              updateEducation(idx, "degree", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Institute / University"
            value={edu.institute}
            onChange={(e) =>
              updateEducation(idx, "institute", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Year (e.g. 2021 - 2024)"
            value={edu.year}
            onChange={(e) =>
              updateEducation(idx, "year", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Score (optional)"
            value={edu.score}
            onChange={(e) =>
              updateEducation(idx, "score", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Specialization (optional)"
            value={edu.specialization}
            onChange={(e) =>
              updateEducation(
                idx,
                "specialization",
                e.target.value
              )
            }
            className="w-full p-2 rounded bg-[#0f0f14]"
          />
        </div>
      ))}

      {resume.education.length < 2 && (
        <button
          onClick={addEducation}
          className="w-full mb-4 bg-purple-600 py-2 rounded"
        >
          + Add Education
        </button>
      )}

      <button
        onClick={handleNext}
        className="w-full bg-indigo-600 py-3 rounded-lg"
      >
        Continue
      </button>
    </main>
  );
}

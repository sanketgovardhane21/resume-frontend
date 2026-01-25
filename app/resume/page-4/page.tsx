"use client";

import { useResume } from "../../context/ResumeContext";
import { useRouter } from "next/navigation";

export default function Step4() {
  const { resume, setResume } = useResume();
  const router = useRouter();

  function addExperience() {
    if (resume.experience.length >= 3) return;

    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          role: "",
          company: "",
          from: "",
          to: "",
          description: "",
        },
      ],
    });
  }

  function updateExperience(
    index: number,
    field: keyof (typeof resume.experience)[number],
    value: string
  ) {
    const updated = [...resume.experience];
    updated[index] = { ...updated[index], [field]: value };

    setResume({ ...resume, experience: updated });
  }

  function handleNext() {
    if (resume.experience.length === 0) {
      alert("Please add at least one experience");
      return;
    }

    router.push("/resume/page-5");
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Step 4 of 7 – Experience
      </h2>

      {resume.experience.map((exp, idx) => (
        <div
          key={idx}
          className="mb-6 p-4 rounded bg-[#1a1a24]"
        >
          <input
            placeholder="Role / Position"
            value={exp.role}
            onChange={(e) =>
              updateExperience(idx, "role", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Company / Organization"
            value={exp.company}
            onChange={(e) =>
              updateExperience(idx, "company", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <div className="flex gap-2 mb-2">
            <input
              placeholder="From"
              value={exp.from}
              onChange={(e) =>
                updateExperience(idx, "from", e.target.value)
              }
              className="w-1/2 p-2 rounded bg-[#0f0f14]"
            />
            <input
              placeholder="To"
              value={exp.to}
              onChange={(e) =>
                updateExperience(idx, "to", e.target.value)
              }
              className="w-1/2 p-2 rounded bg-[#0f0f14]"
            />
          </div>

          <textarea
            placeholder="Description (optional)"
            value={exp.description}
            onChange={(e) =>
              updateExperience(
                idx,
                "description",
                e.target.value
              )
            }
            className="w-full p-2 rounded bg-[#0f0f14]"
          />
        </div>
      ))}

      {resume.experience.length < 3 && (
        <button
          onClick={addExperience}
          className="w-full mb-4 bg-purple-600 py-2 rounded"
        >
          + Add Experience
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

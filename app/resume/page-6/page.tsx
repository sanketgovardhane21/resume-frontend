"use client";

import { useResume } from "@/context/ResumeContext";
import { useRouter } from "next/navigation";

export default function Step6() {
  const { resume, setResume } = useResume();
  const router = useRouter();

  function addCertification() {
    if (resume.certifications.length >= 3) return;

    setResume({
      ...resume,
      certifications: [
        ...resume.certifications,
        {
          name: "",
          issuer: "",
          year: "",
          url: "",
        },
      ],
    });
  }

  function updateCertification(index: number, field: string, value: string) {
    const updated = [...resume.certifications];
    updated[index] = { ...updated[index], [field]: value };
    setResume({ ...resume, certifications: updated });
  }

  function handleNext() {
    router.push("/resume/step-7");
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Step 6 of 7 – Certifications (Optional)
      </h2>

      {resume.certifications.map((cert, idx) => (
        <div
          key={idx}
          className="mb-6 p-4 rounded bg-[#1a1a24]"
        >
          <input
            placeholder="Certification Name"
            value={cert.name}
            onChange={(e) =>
              updateCertification(idx, "name", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Issued By"
            value={cert.issuer}
            onChange={(e) =>
              updateCertification(idx, "issuer", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Year (optional)"
            value={cert.year}
            onChange={(e) =>
              updateCertification(idx, "year", e.target.value)
            }
            className="w-full mb-2 p-2 rounded bg-[#0f0f14]"
          />

          <input
            placeholder="Credential URL (optional)"
            value={cert.url}
            onChange={(e) =>
              updateCertification(idx, "url", e.target.value)
            }
            className="w-full p-2 rounded bg-[#0f0f14]"
          />
        </div>
      ))}

      {resume.certifications.length < 3 && (
        <button
          onClick={addCertification}
          className="w-full mb-4 bg-purple-600 py-2 rounded"
        >
          + Add Certification
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

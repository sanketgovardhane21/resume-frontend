"use client";

import { useResume } from "@/context/ResumeContext";
import { generatePdf } from "@/lib/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Step7() {
  const { resume, setResume } = useResume();

  const router = useRouter();

  useEffect(() => {
    if (!resume.personal.name || !resume.bio || resume.skills.length < 3) {
      router.replace("/resume/step-1");
    }
  }, []);


  const freeThemes = ["free-1", "free-2", "free-3"];
  const premiumThemes = ["premium-1", "premium-2"];

  async function handleDownload() {
    try {
      const pdfBlob = await generatePdf(resume);
      const url = window.URL.createObjectURL(pdfBlob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
    } catch (err) {
      alert("Failed to generate PDF");
    }
  }

  function handleUpgrade() {
    // Later → redirect to subscription page
    window.location.href = "/upgrade";
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Step 7 of 7 – Theme & Download
      </h2>

      {/* Resume Preview */}
      <div className="mb-6 p-4 bg-white text-black rounded text-sm">
        <p className="font-bold">{resume.personal.name}</p>
        <p className="text-xs">{resume.bio}</p>
        <p className="text-xs mt-2">Skills: {resume.skills.join(", ")}</p>
      </div>

      {/* Free Themes */}
      <h3 className="text-sm text-gray-400 mb-2">Free ATS Themes</h3>
      <div className="flex gap-2 mb-4">
        {freeThemes.map((t) => (
          <button
            key={t}
            onClick={() =>
              setResume({ ...resume, theme: t, plan: "free" })
            }
            className={`px-3 py-2 rounded ${
              resume.theme === t
                ? "bg-indigo-600"
                : "bg-[#1a1a24]"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Alignment & Font (Free only) */}
      {resume.plan === "free" && (
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Alignment</p>
          <div className="flex gap-2 mb-3">
            {["Left", "Center"].map((opt) => (
              <button
                key={opt}
                className="px-3 py-2 bg-[#1a1a24] rounded"
              >
                {opt}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-2">Font Size</p>
          <div className="flex gap-2">
            {["Small", "Normal"].map((opt) => (
              <button
                key={opt}
                className="px-3 py-2 bg-[#1a1a24] rounded"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Premium Themes */}
      <h3 className="text-sm text-gray-400 mb-2">Premium Themes</h3>
      <div className="flex gap-2 mb-6">
        {premiumThemes.map((t) => (
          <div
            key={t}
            className="flex-1 p-3 rounded bg-gradient-to-br from-purple-600 to-indigo-600 text-center text-sm"
          >
            <p className="font-medium">{t.toUpperCase()}</p>
            <button
              onClick={handleUpgrade}
              className="mt-2 bg-black/30 px-2 py-1 rounded text-xs"
            >
              Upgrade
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      {resume.plan === "free" ? (
        <button
          onClick={handleDownload}
          className="w-full bg-indigo-600 py-3 rounded-lg"
        >
          Download Resume
        </button>
      ) : (
        <button
          onClick={handleUpgrade}
          className="w-full bg-purple-600 py-3 rounded-lg"
        >
          Upgrade to Download
        </button>
      )}
    </main>
  );
}

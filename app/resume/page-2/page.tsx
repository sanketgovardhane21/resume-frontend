"use client";

import { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { useRouter } from "next/navigation";
import { improveBio } from "@/lib/api";

export default function Step2() {
  const { resume, setResume } = useResume();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleAIImprove() {
    if (!resume.bio) return;

    try {
      setLoading(true);
      const data = await improveBio(resume.bio);

      setResume({
        ...resume,
        bio: data.bio,
      });
    } catch (err) {
      alert("AI failed. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">
        Step 2 of 7 – Professional Bio
      </h2>

      <textarea
        value={resume.bio}
        onChange={(e) =>
          setResume({ ...resume, bio: e.target.value })
        }
        placeholder="Write a short professional bio..."
        className="w-full h-32 p-3 rounded bg-[#1a1a24] mb-4"
      />

      <button
        onClick={handleAIImprove}
        disabled={loading}
        className="w-full mb-6 bg-purple-600 py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? "Improving..." : "✨ Improve with AI"}
      </button>

      <button
        onClick={() => router.push("/resume/step-3")}
        className="w-full bg-indigo-600 py-3 rounded-lg"
      >
        Continue
      </button>
    </main>
  );
}

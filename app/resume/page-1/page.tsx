"use client";

import { useResume } from "../../../context/ResumeContext";
import { useRouter } from "next/navigation";

export default function Step1() {
  const { resume, setResume } = useResume();
  const router = useRouter();

  function handleChange(e: any) {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <main className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Step 1 of 7 – Personal Information
      </h2>

      <input
        name="name"
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full mb-3 p-3 rounded bg-[#1a1a24]"
      />

      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="w-full mb-3 p-3 rounded bg-[#1a1a24]"
      />

      <input
        name="phone"
        onChange={handleChange}
        placeholder="Phone"
        className="w-full mb-3 p-3 rounded bg-[#1a1a24]"
      />

      <input
        name="location"
        onChange={handleChange}
        placeholder="City, Country"
        className="w-full mb-3 p-3 rounded bg-[#1a1a24]"
      />

      <p className="text-sm text-gray-400 mb-2">Available to Join</p>

      <div className="flex gap-2 mb-6">
        {["Immediately", "15 days", "1 Month", "Flexible"].map((opt) => (
          <button
            key={opt}
            onClick={() =>
              setResume({
                ...resume,
                personal: { ...resume.personal, availability: opt },
              })
            }
            className={`px-3 py-2 rounded ${
              resume.personal.availability === opt
                ? "bg-indigo-600"
                : "bg-[#1a1a24]"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={() => router.push("/resume/step-2")}
        className="w-full bg-indigo-600 py-3 rounded-lg"
      >
        Continue
      </button>
    </main>
  );
}

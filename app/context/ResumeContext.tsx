"use client";

import { createContext, useContext, useState, useEffect } from "react";

/* ---------- TYPES ---------- */

type ResumeData = {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
  };
  bio: string;
  jobRole: string;
  isFresher: boolean;
  skills: string[];
  experience: any[];
  education: any[];
  certifications: any[];
  theme: string;
  plan: "free" | "medium" | "pro";
};

type ResumeContextType = {
  resume: ResumeData;
  updateResume: (data: Partial<ResumeData>) => void;
};

/* ---------- DEFAULT ---------- */

const defaultResume: ResumeData = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
  },
  bio: "",
  jobRole: "",
  isFresher: true,
  skills: [],
  experience: [],
  education: [],
  certifications: [],
  theme: "free-1",
  plan: "free",
};

/* ---------- CONTEXT ---------- */

const ResumeContext = createContext<ResumeContextType | null>(null);

/* ---------- PROVIDER ---------- */

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resume, setResume] = useState<ResumeData>(defaultResume);

  /* Load from localStorage */
  useEffect(() => {
    const saved = localStorage.getItem("resume-data");
    if (saved) {
      setResume(JSON.parse(saved));
    }
  }, []);

  /* Save to localStorage */
  useEffect(() => {
    localStorage.setItem("resume-data", JSON.stringify(resume));
  }, [resume]);

  const updateResume = (data: Partial<ResumeData>) => {
    setResume((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <ResumeContext.Provider value={{ resume, updateResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

/* ---------- HOOK ---------- */

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) {
    throw new Error("useResume must be used inside ResumeProvider");
  }
  return ctx;
}

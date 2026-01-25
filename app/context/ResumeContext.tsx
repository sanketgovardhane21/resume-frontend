"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ---------- TYPES ---------- */

type Experience = {
  role: string;
  company: string;
  from: string;
  to: string;
  description: string;
};

type Education = {
  degree: string;
  institute: string;
  year: string;
  score?: string;
  specialization?: string;
};

type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
};

export type ResumeData = {
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
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  theme: string;
  plan: "free" | "medium" | "pro";
};

type ResumeContextType = {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
};

/* ---------- DEFAULT STATE ---------- */

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

const ResumeContext = createContext<ResumeContextType | null>(
  null
);

/* ---------- PROVIDER ---------- */

export function ResumeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [resume, setResume] = useState<ResumeData>(
    defaultResume
  );

  // Load from localStorage (client only)
  useEffect(() => {
    const saved = localStorage.getItem("resume-data");
    if (saved) {
      setResume(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "resume-data",
      JSON.stringify(resume)
    );
  }, [resume]);

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

/* ---------- HOOK ---------- */

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) {
    throw new Error(
      "useResume must be used inside ResumeProvider"
    );
  }
  return ctx;
}

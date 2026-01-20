"use client";

import { createContext, useContext, useState, useEffect } from "react";

jobRole: string;
isFresher: boolean;
skills: string[];

experience: {
  role: string;
  company: string;
  from: string;
  to: string;
  description: string;
}[];

education: {
  degree: string;
  institute: string;
  year: string;
  score?: string;
  specialization?: string;
}[];

certifications: {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
}[];

theme: string;
plan: "free" | "medium" | "pro";


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

const ResumeContext = createContext<any>(null);

const [resume, setResume] = useState<ResumeData>(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("resume-data");
    return saved ? JSON.parse(saved) : defaultResume;
  }
  return defaultResume;
});


export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resume, setResume] = useState<ResumeData>(defaultResume);
  useEffect(() => {
  localStorage.setItem("resume-data", JSON.stringify(resume));
  }, [resume]);


  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}

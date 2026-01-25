import "./globals.css";
import Script from "next/script";
import type { ReactNode } from "react";
import { ResumeProvider } from "./context/ResumeContext";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0f0f14] text-white"
      >
        <ResumeProvider>{children}</ResumeProvider>

        {/* Razorpay checkout */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

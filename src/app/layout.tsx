import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Human Archive — Multimodal AI Training Data Marketplace",
  description:
    "Human Archive runs a continuous, proprietary data engine supplying multimodal training data to AI labs. Structural reference build — not affiliated with any live brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-base">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}

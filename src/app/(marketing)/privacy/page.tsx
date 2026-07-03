import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Notice — Human Archive",
};

const SECTIONS = [
  "Introduction",
  "Information we collect",
  "How we use information",
  "How we share information",
  "Your choices and rights",
  "Data retention",
  "International transfers",
  "Contact us",
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Notice" updated="May 7, 2026" sections={SECTIONS} />;
}

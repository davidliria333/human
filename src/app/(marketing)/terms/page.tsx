import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Human Archive",
};

const SECTIONS = [
  "Acceptance of terms",
  "Eligibility",
  "Contributor obligations",
  "Enterprise obligations",
  "Payments and payouts",
  "Intellectual property and licensing",
  "Termination",
  "Limitation of liability",
  "Governing law",
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="May 7, 2026" sections={SECTIONS} />;
}

import type { Metadata } from "next";
import { RequestForm } from "@/components/request/RequestForm";

export const metadata: Metadata = {
  title: "Request a Dataset — Human Archive",
};

export default function RequestPage() {
  return <RequestForm />;
}

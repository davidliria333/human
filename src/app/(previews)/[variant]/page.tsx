import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandPreview, type LogoVariant } from "@/components/BrandPreview";

const VARIANTS = new Set(["1", "2", "3"]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  return {
    title: `Human Archive — Logo ${variant}`,
    description: `Human Archive website preview using logo option ${variant}.`,
  };
}

export default async function LogoPreviewPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  if (!VARIANTS.has(variant)) {
    notFound();
  }

  return <BrandPreview variant={variant as LogoVariant} />;
}


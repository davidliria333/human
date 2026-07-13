import { Hero } from "@/components/Hero";
import { PreviewSwitcher } from "@/components/BrandPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <PreviewSwitcher active="landing" />
    </>
  );
}

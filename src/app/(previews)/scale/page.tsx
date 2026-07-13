import type { Metadata } from "next";
import Image from "next/image";
import { PreviewSwitcher } from "@/components/BrandPreview";

export const metadata: Metadata = {
  title: "Human Archive — Scale website context mockup",
  description: "Human Archive logo shown in a Scale-inspired website context mockup.",
};

export default function ScaleContextPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative mx-auto hidden w-full max-w-[1920px] overflow-hidden bg-white md:block">
        <Image
          src="/mockups/scale-homepage-reference.png"
          alt="Scale website reference with the Human Archive logo applied for presentation"
          width={1920}
          height={872}
          priority
          className="h-auto w-full"
        />

        <div className="absolute top-[1.7%] left-[0.8%] flex h-[6.2%] min-h-9 w-[12%] min-w-[145px] items-center bg-white px-1">
          <span
            className="block h-full w-full bg-white bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/brand/human-archive-lockup-gray.jpeg)",
              backgroundSize: "165% auto",
            }}
            role="img"
            aria-label="Human Archive"
          />
        </div>

        <div className="absolute right-6 bottom-5 rounded-full border border-white/25 bg-black/55 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-md">
          Brand context mockup
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1179px] overflow-hidden bg-white md:hidden">
        <Image
          src="/mockups/scale-homepage-reference-mobile.png"
          alt="Mobile Scale website reference with the Human Archive logo applied for presentation"
          width={1179}
          height={2093}
          priority
          className="h-auto w-full"
        />

        <div
          className="absolute flex items-center bg-white px-[0.5%]"
          style={{ top: "2.7%", left: "3.5%", height: "6.4%", width: "31%" }}
        >
          <span
            className="block h-full w-full bg-white bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/brand/human-archive-lockup-gray.jpeg)",
              backgroundSize: "170% auto",
            }}
            role="img"
            aria-label="Human Archive"
          />
        </div>
      </div>

      <PreviewSwitcher active="scale" />
    </main>
  );
}

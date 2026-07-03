import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { RevealGroup, RevealItem } from "../Reveal";

const STORIES = [
  {
    lang: "EN",
    title: "Turns Spare Minutes Into Studio Time",
    blurb: "Records short scripts between errands to fund a hobby.",
    hue: "#4C82E8",
  },
  {
    lang: "ZH",
    title: "Finds Breathing Room Between Classes",
    blurb: "Fits recording sessions around a full course load.",
    hue: "#6E9DF2",
  },
  {
    lang: "DE",
    title: "Records Stories for Extra Income",
    blurb: "Turns storytelling sessions into a steady side income.",
    hue: "#9CBBF7",
  },
  {
    lang: "PT",
    title: "Makes the Slow Season Count",
    blurb: "Fills off-season downtime with flexible contribution work.",
    hue: "#7BA3EF",
  },
];

/**
 * The live site uses real photographs of named contributors here.
 * Reimagined as abstract avatar placeholders — no likenesses reproduced.
 */
export function ContributorStories() {
  return (
    <section className="w-full py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="The people behind the data" align="left" />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STORIES.map((s) => (
            <RevealItem key={s.title}>
              <div className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[14px] border border-border-hairline bg-bg-raised p-5">
                <div
                  className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(180deg, #0a0a0a 0%, ${s.hue}66 60%, ${s.hue}cc 100%)`,
                  }}
                />
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 -z-10 h-full w-full opacity-[0.14]"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="38" r="16" fill="white" />
                  <path d="M18 96c0-20 14-34 32-34s32 14 32 34" fill="white" />
                </svg>
                <span className="absolute top-4 left-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                  {s.lang}
                </span>
                <p className="text-base font-medium leading-snug text-white">
                  {s.title}
                </p>
                <p className="mt-1 text-xs font-light leading-relaxed text-white/70">
                  {s.blurb}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

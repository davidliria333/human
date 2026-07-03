import { Container } from "../Container";
import { Reveal, RevealGroup, RevealItem } from "../Reveal";
import { IconBolt, IconGlobe, IconDiscord } from "../icons";

const ITEMS = [
  {
    icon: IconBolt,
    title: "Find tasks early",
    body: "Hear about high-paying listings and referral opportunities before they fill up.",
  },
  {
    icon: IconGlobe,
    title: "Connect globally",
    body: "Swap tips and wins with contributors from around the world.",
  },
  {
    icon: IconDiscord,
    title: "Get help fast",
    body: "Ask about uploads, payouts, or approvals — the team is active daily.",
  },
];

export function CommunityBand() {
  return (
    <section className="w-full border-t border-border-hairline py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-sm text-[28px] font-light leading-[1.1] tracking-[-1.5px] text-text-primary md:text-[36px]">
              Be a part of the community
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href="#"
              className="flex items-center gap-2 rounded-[14px] bg-accent px-5 py-3 text-sm font-medium text-white transition-shadow duration-200 hover:shadow-[0_0_28px_rgba(76,130,232,0.55)]"
            >
              <IconDiscord className="h-4 w-4" />
              Join Discord
            </a>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-8 border-t border-border-hairline pt-10 md:grid-cols-3">
          {ITEMS.map((item) => (
            <RevealItem key={item.title} className="flex flex-col gap-3">
              <item.icon className="h-6 w-6 text-accent" />
              <p className="text-base font-medium text-text-primary">{item.title}</p>
              <p className="text-sm font-light leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

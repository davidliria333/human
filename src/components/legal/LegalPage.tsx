import { Container } from "../Container";

const PLACEHOLDER_PARAGRAPH =
  "This is placeholder legal copy standing in for the live site's actual policy text, which is not reproduced here. In a real deployment this section would describe the specific practice named by the heading above, in plain language appropriate to the jurisdiction and audience.";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: string[];
}) {
  return (
    <section className="w-full py-20 md:py-28">
      <Container className="max-w-[760px]!">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          Placeholder legal text — not the live site&rsquo;s actual policy
        </p>
        <h1 className="mt-4 text-3xl font-light tracking-[-1px] text-text-primary">{title}</h1>
        <p className="mt-2 text-sm text-text-tertiary">Last updated: {updated}</p>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((heading) => (
            <div key={heading} className="flex flex-col gap-3">
              <h2 className="text-lg font-normal tracking-[-0.3px] text-text-primary">
                {heading}
              </h2>
              <p className="text-sm font-light leading-relaxed text-text-secondary">
                {PLACEHOLDER_PARAGRAPH}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

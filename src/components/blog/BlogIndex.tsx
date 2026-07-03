import { Container } from "../Container";
import { Reveal, RevealGroup, RevealItem } from "../Reveal";
import { IconArrowUpRight } from "../icons";

const FEATURED = {
  tag: "The Founders",
  date: "May 15, 2026",
  readTime: "5 min read",
  title: "Seed Funding Announcement",
  body: "A new round powers our worldwide contributor network, supplying rights-cleared human data to leading AI labs.",
  gradient: "from-[#4C82E8]/35 via-[#111113] to-[#0a0a0a]",
};

const POSTS = [
  {
    tag: "Field notes",
    date: "May 8, 2026",
    title: "Inside the gig economy training the next generation of AI",
    body: "First-person video, paired with sensor data captured alongside it, is the next bottleneck.",
    gradient: "from-[#6E9DF2]/30 via-[#111113] to-[#0a0a0a]",
  },
  {
    tag: "Company",
    date: "Feb 12, 2026",
    title: "Launching Human Archive: a rights-cleared marketplace and collection engine",
    body: "The internet's easy data is gone. Human Archive is the marketplace — and the global contributor network — for what comes next.",
    gradient: "from-[#9CBBF7]/25 via-[#111113] to-[#0a0a0a]",
  },
];

export function BlogIndex() {
  return (
    <section className="w-full py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-border-hairline bg-bg-glass px-3 py-1 text-xs text-accent">
                Blog
              </span>
              <span className="rounded-full border border-border-hairline bg-bg-glass px-3 py-1 text-xs text-text-tertiary">
                3 posts
              </span>
            </div>
            <h1 className="text-[36px] font-light leading-[1.05] tracking-[-2px] text-text-primary md:text-[52px]">
              From the team.
            </h1>
            <p className="max-w-md text-base font-light leading-[1.6] text-text-secondary">
              Company updates, field notes, and essays on rights-cleared
              multimodal data.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href="#"
            className="group grid grid-cols-1 gap-8 overflow-hidden rounded-[14px] border border-border-hairline bg-bg-raised/40 p-2 md:grid-cols-2 md:items-center md:p-2"
          >
            <div
              className={`aspect-[16/10] rounded-[10px] bg-gradient-to-br ${FEATURED.gradient}`}
            />
            <div className="flex flex-col gap-3 p-6 md:pr-10">
              <h2 className="text-2xl font-normal tracking-[-0.5px] text-text-primary">
                {FEATURED.title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-text-secondary">
                {FEATURED.body}
              </p>
              <div className="flex items-center gap-3 text-xs text-text-tertiary">
                <span className="rounded-full border border-border-hairline px-2.5 py-1 text-accent">
                  {FEATURED.tag}
                </span>
                <span>{FEATURED.date}</span>
                <span>{FEATURED.readTime}</span>
              </div>
              <span className="mt-2 flex items-center gap-1.5 text-sm font-medium text-accent">
                Read article
                <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {POSTS.map((post) => (
            <RevealItem key={post.title}>
              <a
                href="#"
                className="group flex h-full flex-col gap-4 rounded-[14px] border border-border-hairline bg-bg-raised/30 p-3 transition-colors duration-300 hover:border-border-hairline-strong"
              >
                <div
                  className={`aspect-[16/9] rounded-[10px] bg-gradient-to-br ${post.gradient}`}
                />
                <div className="flex flex-col gap-2 p-3 pt-0">
                  <div className="flex items-center gap-3 text-xs text-text-tertiary">
                    <span className="rounded-full border border-border-hairline px-2.5 py-1 text-accent">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-lg font-normal leading-snug tracking-[-0.3px] text-text-primary">
                    {post.title}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-text-tertiary">
                    {post.body}
                  </p>
                  <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-accent">
                    Read article
                    <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

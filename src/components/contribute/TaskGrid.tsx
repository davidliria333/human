import { Container } from "../Container";
import { RevealGroup, RevealItem } from "../Reveal";
import { IconArrowUpRight } from "../icons";

const TASKS = [
  {
    rate: "$15/hr ($0.25/min)",
    title: "Multi-Party Conversation (Video Meeting)",
    body: "Host a casual 4–8 person group discussion on a topic of your choice.",
  },
  {
    rate: "$12/hr ($0.20/min)",
    title: "Conversational Audio (Record with Partner)",
    body: "Natural, unscripted conversation recorded with a partner.",
  },
  {
    rate: "$0.10 per approved page",
    title: "Handwritten Documents — All Domains",
    body: "We're building a large, diverse collection of handwriting samples.",
  },
  {
    rate: "$38.00/hr ($0.63/min)",
    title: "Parametric Modeling Sessions",
    body: "Record the modeling process from start to finish, screen + narration.",
  },
  {
    rate: "$7.50/hr ($0.13/min)",
    title: "Conversational Audio — Low-Resource Language",
    body: "Wear headphones and record a natural back-and-forth conversation.",
  },
  {
    rate: "$7.50/hr ($0.13/min)",
    title: "Conversational Audio — Regional Dialect",
    body: "Wear headphones and record a natural back-and-forth conversation.",
  },
];

export function TaskGrid() {
  return (
    <section id="tasks" className="w-full py-16">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-light tracking-[-1px] text-text-primary">
              New tasks, every week
            </h2>
            <p className="mt-1 text-sm font-light text-text-secondary">
              Fresh listings from conversations, video, and photo requests.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(76,130,232,0.5)]"
          >
            All tasks
            <IconArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TASKS.map((task) => (
            <RevealItem key={task.title}>
              <div className="flex h-full flex-col gap-4 rounded-[14px] border border-border-hairline bg-bg-raised/40 p-6 transition-colors duration-300 hover:border-border-hairline-strong">
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-full border border-border-hairline bg-accent-dim px-3 py-1 text-xs font-medium text-accent">
                    {task.rate}
                  </span>
                  <a
                    href="#"
                    className="flex shrink-0 items-center gap-1 text-xs font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    View task
                    <IconArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium leading-snug text-text-primary">
                    {task.title}
                  </p>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-text-tertiary">
                    {task.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { RevealGroup, RevealItem } from "../Reveal";
import { Container } from "../Container";
import { IconArrowUpRight, IconAudio, IconVideo, IconImage } from "../icons";

const DATASETS = [
  { type: "Video", icon: IconVideo, tags: ["Sensor", "Enterprise"], title: "Computer-Use Workflows", desc: "Continuous screen recordings of real practitioners working in professional desktop and web software." },
  { type: "Audio", icon: IconAudio, tags: ["Enterprise"], title: "Music Library", desc: "A large-scale, professionally produced music collection spanning multiple modern genres." },
  { type: "Video", icon: IconVideo, tags: ["Open to all"], title: "General Egocentric Video", desc: "First-person, head-mounted-style recordings spanning 20,000+ unique everyday tasks." },
  { type: "Audio", icon: IconAudio, tags: ["Custom", "Japanese"], title: "Japanese Conversational Speech", desc: "Multi-speaker Japanese dialogue with stereo speaker separation and emotion annotations." },
  { type: "Audio", icon: IconAudio, tags: ["Enterprise", "English"], title: "English Conversational Speech", desc: "Stereo multi-speaker dialogue recordings with L/R speaker separation and emotion tags." },
  { type: "Audio", icon: IconAudio, tags: ["Enterprise", "French"], title: "French Conversational Speech", desc: "Stereo multi-speaker French dialogue recordings with emotion annotations." },
  { type: "Audio", icon: IconAudio, tags: ["Enterprise", "German"], title: "German Conversational Speech", desc: "Stereo multi-speaker German dialogue recordings with emotion annotations." },
  { type: "Audio", icon: IconAudio, tags: ["Enterprise", "English"], title: "English Monologue Speech", desc: "Professional single-speaker recordings with word-level timestamps." },
  { type: "Audio", icon: IconAudio, tags: ["Enterprise", "French"], title: "French Monologue Speech", desc: "Professional single-speaker French recordings with word-level timestamps." },
  { type: "Sensor", icon: IconImage, tags: ["Custom", "English", "Urdu"], title: "Doctor–Patient Consultation", desc: "Clinical consultation dialogues between doctors and patients." },
];

export function DatasetGrid({ filter }: { filter: string }) {
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () => (filter === "All" ? DATASETS : DATASETS.filter((d) => d.type === filter)),
    [filter]
  );

  return (
    <section className="w-full pb-24">
      <Container className="flex flex-col gap-8">
        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filtered.map((d) => (
            <RevealItem key={d.title}>
              <div className="flex h-full flex-col gap-4 rounded-[14px] border border-border-hairline bg-bg-raised/40 p-6 transition-colors duration-300 hover:border-border-hairline-strong">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <d.icon className="h-4 w-4 text-accent" />
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-hairline bg-bg-glass px-2.5 py-1 text-[11px] text-text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="flex shrink-0 items-center gap-1 rounded-full border border-border-hairline px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    View dataset
                    <IconArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <p className="text-base font-medium text-text-primary">{d.title}</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-text-tertiary">
                    {d.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="flex items-center justify-center gap-2 pt-4">
          <p className="mr-4 text-sm text-text-tertiary">
            Showing {filtered.length} of {DATASETS.length} datasets
          </p>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={
                p === page
                  ? "h-8 w-8 rounded-full bg-accent text-sm font-medium text-white"
                  : "h-8 w-8 rounded-full text-sm text-text-secondary transition-colors duration-200 hover:bg-bg-glass"
              }
            >
              {p}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

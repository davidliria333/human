"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { IconArrowUpRight } from "../icons";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FILTERS = ["All", "Audio", "Sensor", "Video"];

export function MarketplaceHero({
  active,
  onChange,
}: {
  active: string;
  onChange: (f: string) => void;
}) {
  return (
    <section className="w-full pt-20 pb-14 md:pt-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="text-[36px] font-light tracking-[-2px] text-text-primary md:text-[52px]"
        >
          Data Marketplace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="max-w-lg text-balance text-base font-light leading-[1.6] tracking-[0.4px] text-text-secondary"
        >
          Explore, license, and analyze production-ready datasets, or brief
          us on a bespoke collection scoped from scratch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="w-full max-w-xl"
        >
          <input
            type="text"
            placeholder="Search datasets by title, topic, or use case…"
            className="w-full rounded-[14px] border border-border-hairline bg-bg-glass px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary backdrop-blur-md focus:border-border-hairline-strong focus:outline-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => onChange(f)}
              className={
                f === active
                  ? "rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
                  : "rounded-full border border-border-hairline bg-bg-glass px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        <a
          href="/request"
          className="flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-80"
        >
          Request a custom dataset
          <IconArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Container>
    </section>
  );
}

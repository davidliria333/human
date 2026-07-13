"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./Container";
import { HeroArt } from "./HeroArt";
import { IconArrowUpRight } from "./icons";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-40 md:pt-28 md:pb-56">
      <HeroArt />
      <Container className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="max-w-3xl text-[40px] font-light leading-[1.05] tracking-[-2px] text-text-primary md:text-[60px] md:tracking-[-3px]"
        >
          The Substrate of Machine Perception
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="mt-6 max-w-xl text-base font-light leading-[1.6] tracking-[0.4px] text-text-secondary"
        >
          Human Archive runs a continuous, proprietary data engine that supplies
          multimodal training data — video, audio, and image — to the labs
          building tomorrow&rsquo;s AI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contribute"
            className="group flex items-center gap-2 rounded-[14px] bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(76,130,232,0.55)]"
          >
            Start Contributing
            <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/marketplace"
            className="rounded-[14px] border border-border-hairline bg-bg-glass px-5 py-3 text-sm font-medium text-text-primary backdrop-blur-md transition-colors duration-200 hover:border-border-hairline-strong"
          >
            Browse Datasets
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

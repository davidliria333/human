"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { PhoneMockup } from "../PhoneMockup";
import { IconArrowUpRight } from "../icons";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContributeHero() {
  return (
    <section className="w-full pt-20 pb-24 md:pt-28">
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="text-[36px] font-light leading-[1.05] tracking-[-2px] text-text-primary md:text-[52px] md:tracking-[-2.5px]"
          >
            Turn everyday moments into income
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="mt-6 max-w-md text-base font-light leading-[1.6] tracking-[0.4px] text-text-secondary"
          >
            Get paid for your everyday conversations, videos, and photos.
            Join a global network of contributors already earning with
            Human Archive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-8"
          >
            <a
              href="#tasks"
              className="group inline-flex items-center gap-2 rounded-[14px] bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(76,130,232,0.55)]"
            >
              Start earning
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
        <PhoneMockup />
      </Container>
    </section>
  );
}

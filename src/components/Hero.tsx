"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./Container";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1702396491009-4ac2a55a9135?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#d9dde0]">
      <div
        className="absolute inset-0 bg-cover bg-[position:64%_center] md:bg-center"
        style={{ backgroundImage: `url("${BACKGROUND_IMAGE}")` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,248,246,0.96)_0%,rgba(248,248,246,0.79)_25%,rgba(248,248,246,0.16)_53%,rgba(248,248,246,0)_72%)] max-md:bg-[linear-gradient(180deg,rgba(248,248,246,0.95)_0%,rgba(248,248,246,0.75)_38%,rgba(248,248,246,0.05)_68%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(3,5,6,0.18)_67%,rgba(3,5,6,0.84)_91%,#030405_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-[calc(100svh-72px)] items-start pt-[clamp(4.5rem,12vh,8.75rem)]">
        <div className="max-w-[520px]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
            className="text-[clamp(2.75rem,4.35vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#111214]"
          >
            Capture the world.
            <span className="mt-2 block font-normal text-[#777a7d]">
              Train what comes next.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="mt-7 max-w-[405px] text-[15px] leading-[1.45] text-[#4e5154] md:text-base"
          >
            Human Archive supplies the high-fidelity video, audio, and image
            data that helps the world&rsquo;s most advanced AI understand reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-8 flex flex-wrap items-center gap-7"
          >
            <Link
              href="/request"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#111] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_22px_rgba(0,0,0,0.28),inset_0_1px_2px_rgba(255,255,255,0.28)] ring-2 ring-black/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Request a Dataset
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              href="/"
              className="border-b border-[#5d6062] pb-1 text-sm text-[#4d5052] transition-colors hover:text-black"
            >
              Explore the Archive
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

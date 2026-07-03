"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { HeroArt } from "../HeroArt";
import { IconArrowUpRight } from "../icons";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ORG_TYPES = ["Enterprise", "Academic / research", "Other"];
const NEEDS = ["Request sample clips", "License a dataset", "Design a custom collection"];

export function RequestForm() {
  const [org, setOrg] = useState(ORG_TYPES[0]);
  const [need, setNeed] = useState(NEEDS[1]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative w-full overflow-hidden pt-20 pb-24 md:pt-28">
      <HeroArt />
      <Container className="relative z-10 flex flex-col gap-14">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="text-[36px] font-light leading-[1.05] tracking-[-2px] text-text-primary md:text-[52px]"
          >
            Open a data request
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="mt-5 max-w-md text-base font-light leading-[1.6] tracking-[0.4px] text-text-secondary"
          >
            From samples to a licensed dataset or a bespoke collection. Want
            to list your own data?{" "}
            <a href="/signup" className="text-accent hover:underline">
              Apply to be a supplier
            </a>
            .
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-7"
          >
            <a
              href="/marketplace"
              className="inline-flex items-center gap-2 rounded-[14px] bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(76,130,232,0.55)]"
            >
              Data Marketplace
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT_EXPO }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex max-w-2xl flex-col gap-8 rounded-[14px] border border-border-hairline bg-bg-raised/60 p-8 backdrop-blur-sm"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <span className="w-full text-sm font-medium text-text-primary">
              What kind of organization?
            </span>
            {ORG_TYPES.map((o) => (
              <label key={o} className="flex items-center gap-2 text-sm text-text-secondary">
                <input
                  type="radio"
                  name="org"
                  checked={org === o}
                  onChange={() => setOrg(o)}
                  className="h-4 w-4 accent-[color:var(--accent)]"
                />
                {o}
              </label>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <span className="w-full text-sm font-medium text-text-primary">How can we help?</span>
            {NEEDS.map((n) => (
              <label key={n} className="flex items-center gap-2 text-sm text-text-secondary">
                <input
                  type="radio"
                  name="need"
                  checked={need === n}
                  onChange={() => setNeed(n)}
                  className="h-4 w-4 accent-[color:var(--accent)]"
                />
                {n}
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Your name
              <input
                type="text"
                placeholder="Jane Smith"
                className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
              Work email
              <input
                type="email"
                placeholder="jane@company.com"
                className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Additional details or request <span className="text-accent">*</span>
            <textarea
              required
              rows={3}
              placeholder="Share context about your dataset, use case, requirements, timelines, or anything else we should know."
              className="resize-none rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="rounded-[14px] bg-accent py-3.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(76,130,232,0.55)]"
          >
            {submitted ? "Request submitted" : "Submit request"}
          </button>
        </motion.form>
      </Container>
    </section>
  );
}

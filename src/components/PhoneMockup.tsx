"use client";

import { motion } from "framer-motion";
import { IconBolt, IconCheck } from "./icons";

/**
 * Dark reimagining of the live /contribute page's phone-mockup product
 * screenshot (task feed → upload → payout). Invented UI chrome, not a
 * reproduction of Luel's actual app screens.
 */
export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[280px]"
    >
      <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-accent-glow opacity-30 blur-3xl" />
      <div className="rounded-[32px] border border-border-hairline-strong bg-bg-raised/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="flex flex-col gap-3 rounded-[22px] bg-bg-base/60 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-text-primary">Find a task</span>
            <span className="text-[10px] text-text-tertiary">18 new</span>
          </div>
          <div className="rounded-[10px] border border-border-hairline bg-bg-glass p-3">
            <p className="text-xs font-medium text-text-primary">First-person walkthrough</p>
            <p className="mt-0.5 text-[11px] text-text-tertiary">5 min · Indoor</p>
            <span className="mt-2 inline-block rounded-full bg-accent-dim px-2 py-0.5 text-[10px] font-medium text-accent">
              $25
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-[10px] bg-accent px-3 py-2.5 text-xs font-medium text-white">
            <IconBolt className="h-3.5 w-3.5" />
            Browse tasks
          </div>

          <div className="rounded-[10px] border border-border-hairline bg-bg-glass p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-text-secondary">conversation_01.wav</span>
              <IconCheck className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-accent" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-[10px] border border-accent-dim bg-accent-dim/40 p-3">
            <div>
              <p className="text-[10px] text-text-tertiary">Get paid</p>
              <p className="text-sm font-medium text-text-primary">$342.50</p>
            </div>
            <span className="flex items-center gap-1 text-[10px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Live
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

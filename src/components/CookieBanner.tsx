"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[200] mx-auto max-w-md rounded-[14px] border border-border-hairline bg-bg-raised/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl md:left-6 md:right-auto md:bottom-6"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium text-text-primary">Cookie Preferences</p>
            <button
              onClick={() => setVisible(false)}
              aria-label="Close"
              className="text-text-tertiary transition-colors duration-200 hover:text-text-primary"
            >
              ✕
            </button>
          </div>
          <p className="mt-2 text-sm font-light leading-relaxed text-text-secondary">
            We use cookies to analyze site traffic and optimize your
            experience. See our{" "}
            <a href="#" className="text-accent underline-offset-2 hover:underline">
              Privacy Notice
            </a>{" "}
            for details.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setVisible(false)}
              className="flex-1 rounded-[10px] border border-border-hairline px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-bg-glass"
            >
              Decline
            </button>
            <button
              onClick={() => setVisible(false)}
              className="flex-1 rounded-[10px] bg-accent px-4 py-2.5 text-sm font-medium text-white transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(76,130,232,0.5)]"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

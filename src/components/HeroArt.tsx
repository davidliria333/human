"use client";

import { motion } from "framer-motion";

/**
 * Dark reimagining of the live site's static pixel-art mountain bitmap.
 * The real hero graphic is a proprietary raster illustration — not reproduced.
 * This is an invented glow/ridge motif of equivalent visual weight, kept dark
 * per the brief. See DESIGN_TOKENS.md "Hero art" fidelity flag.
 */
export function HeroArt() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[30%] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ridgeFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4C82E8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4C82E8" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="ridgeMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6E9DF2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6E9DF2" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="ridgeNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CBBF7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,420 L120,340 L220,400 L340,280 L460,380 L600,260 L760,360 L900,300 L1040,400 L1180,320 L1300,380 L1440,340 L1440,600 L0,600 Z"
          fill="url(#ridgeFar)"
          initial={{ x: 0 }}
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,480 L140,420 L260,470 L400,360 L540,450 L680,340 L820,440 L960,380 L1100,460 L1240,400 L1440,440 L1440,600 L0,600 Z"
          fill="url(#ridgeMid)"
          initial={{ x: 0 }}
          animate={{ x: [15, -15, 15] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <path
          d="M0,540 L160,500 L300,530 L440,460 L600,520 L760,450 L920,510 L1080,470 L1240,520 L1440,490 L1440,600 L0,600 Z"
          fill="url(#ridgeNear)"
        />
      </svg>

      {/* faint particle field, evokes the pixel-grain texture of the source asset */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(156,187,247,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to top, black, transparent 85%)",
        }}
      />
    </div>
  );
}

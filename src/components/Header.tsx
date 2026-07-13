"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLockup } from "./BrandPreview";
import { Container } from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Contribute", href: "/contribute" },
  { label: "Marketplace", href: "/marketplace" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Human Archive home">
          <BrandLockup variant="3" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-black/60 transition-colors duration-200 hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="hidden rounded-full px-4 py-2 text-sm text-black/60 transition-colors duration-200 hover:text-black sm:block">
            Sign In
          </Link>
          <Link href="/signup" className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-black/80">
            Sign Up
          </Link>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black md:hidden">
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span className={clsx("h-px w-full bg-current transition-transform duration-200", menuOpen && "translate-y-[6.5px] rotate-45")} />
              <span className={clsx("h-px w-full bg-current transition-opacity duration-200", menuOpen && "opacity-0")} />
              <span className={clsx("h-px w-full bg-current transition-transform duration-200", menuOpen && "-translate-y-[6.5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden border-t border-black/10 bg-white md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-[10px] px-2 py-3 text-base text-black/65 transition-colors duration-200 hover:bg-black/5 hover:text-black">
                  {link.label}
                </Link>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

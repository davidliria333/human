"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Logomark } from "./icons";
import { Container } from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Contribute", href: "/contribute" },
  { label: "Marketplace", href: "/marketplace" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-border-hairline bg-bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-[61px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-text-primary">
          <Logomark className="h-6 w-6" />
          <span className="text-[15px] font-medium tracking-tight">Human Archive</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="hidden rounded-full px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary sm:block">
            Sign In
          </Link>
          <Link href="/signup" className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.3)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(76,130,232,0.5)]">
            Sign Up
          </Link>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)} className="flex h-9 w-9 items-center justify-center rounded-full border border-border-hairline text-text-primary md:hidden">
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
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden border-t border-border-hairline md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-[10px] px-2 py-3 text-base text-text-secondary transition-colors duration-200 hover:bg-bg-glass hover:text-text-primary">
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

import Link from "next/link";
import { Hero } from "./Hero";

export type LogoVariant = "1" | "2" | "3";

const LOGOS = {
  "1": "/brand/human-archive-mark-gray.jpeg",
  "2": "/brand/human-archive-mark-blue.jpeg",
  "3": "/brand/human-archive-lockup-gray.jpeg",
} as const;

export function BrandLockup({ variant }: { variant: LogoVariant }) {
  if (variant === "3") {
    return (
      <span
        className="block h-11 w-[220px] bg-white bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${LOGOS[variant]})`,
          backgroundSize: "380px 269px",
        }}
        role="img"
        aria-label="Human Archive"
      />
    );
  }

  return (
    <span
      className="block h-10 w-10 shrink-0 bg-white bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${LOGOS[variant]})`,
        backgroundSize: "210px 148px",
      }}
      role="img"
      aria-label="Human Archive"
    />
  );
}

export function PreviewSwitcher({ active }: { active: LogoVariant | "scale" | "landing" }) {
  const links = [
    { label: "Logo 1", href: "/1", value: "1" },
    { label: "Logo 2", href: "/2", value: "2" },
    { label: "Logo 3", href: "/3", value: "3" },
    { label: "Landing", href: "/landing-exploration1", value: "landing" },
    { label: "Scale", href: "/scale", value: "scale" },
  ] as const;

  return (
    <nav
      aria-label="Logo previews"
      className="fixed bottom-5 left-1/2 z-[300] flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full border border-white/15 bg-black/80 p-1.5 shadow-2xl backdrop-blur-xl"
    >
      {links.map((link) => (
        <Link
          key={link.value}
          href={link.href}
          className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-medium transition-colors sm:px-3.5 sm:text-xs ${
            active === link.value
              ? "bg-white text-black"
              : "text-white/65 hover:bg-white/10 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function BrandPreview({ variant }: { variant: LogoVariant }) {
  return (
    <div className="min-h-screen bg-bg-base">
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-5 md:px-0">
          <Link href={`/${variant}`} aria-label="Human Archive home">
            <BrandLockup variant={variant} />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-black/65 hover:text-black">
              Contribute
            </Link>
            <Link href="/" className="text-sm text-black/65 hover:text-black">
              Marketplace
            </Link>
            <Link
              href="/request"
              className="rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white"
            >
              Request a Dataset
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
      </main>

      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-[1120px] items-center justify-end">
          <span className="text-sm text-white/35">Human Archive © 2026</span>
        </div>
      </footer>

      <PreviewSwitcher active={variant} />
    </div>
  );
}

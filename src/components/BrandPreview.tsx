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
    <span className="flex items-center gap-2.5">
      <span
        className="block h-9 w-9 shrink-0 bg-white bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${LOGOS[variant]})`,
          backgroundSize: "190px 134px",
        }}
        aria-hidden="true"
      />
      <span className="text-[16px] font-semibold tracking-[-0.035em] text-[#32343a]">
        Human Archive
      </span>
    </span>
  );
}

export function PreviewSwitcher({ active }: { active: LogoVariant | "scale" }) {
  const links = [
    { label: "Logo 1", href: "/1", value: "1" },
    { label: "Logo 2", href: "/2", value: "2" },
    { label: "Logo 3", href: "/3", value: "3" },
    { label: "Scale", href: "/scale", value: "scale" },
  ] as const;

  return (
    <nav
      aria-label="Logo previews"
      className="fixed bottom-5 left-1/2 z-[300] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/80 p-1.5 shadow-2xl backdrop-blur-xl"
    >
      {links.map((link) => (
        <Link
          key={link.value}
          href={link.href}
          className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
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
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6">
          <div className="rounded-md bg-white px-3 py-2">
            <BrandLockup variant={variant} />
          </div>
          <span className="text-sm text-white/35">Human Archive © 2026</span>
        </div>
      </footer>

      <PreviewSwitcher active={variant} />
    </div>
  );
}

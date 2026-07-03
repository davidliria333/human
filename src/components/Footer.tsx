import Link from "next/link";
import { Container } from "./Container";
import { Logomark, IconX, IconLinkedIn, IconDiscord } from "./icons";

const COLUMNS = [
  {
    title: "For Contributors",
    links: [
      { label: "Start Contributing", href: "/contribute" },
      { label: "Upload Content", href: "/contribute" },
      { label: "View Earnings", href: "/signin" },
      { label: "My Submissions", href: "/signin" },
    ],
  },
  {
    title: "For Enterprise",
    links: [
      { label: "View Catalog", href: "/marketplace" },
      { label: "Browse Datasets", href: "/marketplace" },
      { label: "Request a Dataset", href: "/request" },
      { label: "Enterprise Sign In", href: "/signin" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/request" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border-hairline pt-16 pb-8">
      <Container className="flex flex-col gap-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-text-primary">
              <Logomark className="h-6 w-6" />
              <span className="text-[15px] font-medium tracking-tight">Human Archive</span>
            </Link>
            <p className="max-w-[220px] text-sm font-light leading-relaxed text-text-tertiary">
              A multimodal data marketplace connecting contributors and AI
              companies to build high-quality training datasets.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-sm font-medium text-text-primary">{col.title}</span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-light text-text-tertiary transition-colors duration-200 hover:text-text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse items-center gap-6 border-t border-border-hairline pt-8 md:flex-row md:justify-between">
          <p className="text-sm font-light text-text-tertiary">Human Archive © 2026</p>
          <nav className="flex items-center gap-6 text-sm text-text-tertiary">
            <Link href="/resources/blog" className="transition-colors duration-200 hover:text-text-secondary">Blog</Link>
            <Link href="/privacy" className="transition-colors duration-200 hover:text-text-secondary">Privacy</Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-text-secondary">Terms</Link>
            <Link href="/privacy" className="transition-colors duration-200 hover:text-text-secondary">Cookies</Link>
          </nav>
          <div className="flex items-center gap-4 text-text-tertiary">
            <a href="#" aria-label="X" className="transition-colors duration-200 hover:text-text-primary">
              <IconX className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors duration-200 hover:text-text-primary">
              <IconLinkedIn className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Discord" className="transition-colors duration-200 hover:text-text-primary">
              <IconDiscord className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

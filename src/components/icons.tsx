export function Logomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 4v14a6 6 0 0 0 6 6h10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="4" r="2.25" fill="currentColor" />
    </svg>
  );
}

export function IconVideo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 9.5l4-2.3v9.6l-4-2.3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAudio({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconImage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="10" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 15.5l-5.2-5.2a1.5 1.5 0 0 0-2.12 0L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12.5 3L5 13.5h5.5L11 21l7.5-10.5H13L12.5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.6 10.6L20.4 3h-2.1l-5.9 6.6L7.7 3H2.5l6.9 9.9L2.5 21h2.1l6.3-7 5 7h5.2l-7.5-10.4zm-2.2 2.5l-.7-1L5 4.6h2.3l4.7 6.6.7 1 6.1 8.5h-2.3l-4.9-7z" />
    </svg>
  );
}

export function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.07 3.5 3.13 4.46 3.13 5.63C3.13 6.8 4.07 7.75 5.25 7.75C6.42 7.75 7.36 6.8 7.36 5.63C7.36 4.46 6.42 3.5 5.25 3.5ZM9.06 8.5V20.5H12.44V14.63C12.44 12.98 12.75 11.38 14.8 11.38C16.81 11.38 16.84 13.27 16.84 14.73V20.5H20.22V14.06C20.22 11.14 19.59 8.9 16.18 8.9C14.55 8.9 13.44 9.79 12.99 10.63H12.94V8.5H9.06Z" />
    </svg>
  );
}

export function IconDiscord({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.3 6.5c-1.3-.6-2.6-1-4-1.3l-.2.4c1.3.3 2.4.8 3.5 1.5-1.5-.7-3.1-1.1-4.7-1.3-1.4-.2-2.8-.2-4.2 0-1.6.2-3.2.6-4.7 1.3 1-.7 2.2-1.2 3.5-1.5l-.2-.4c-1.4.3-2.7.7-4 1.3-1.9 3-2.5 5.9-2.2 8.8 1.4 1 2.9 1.8 4.5 2.3.4-.5.7-1.1 1-1.7-.6-.2-1.1-.5-1.6-.8.1-.1.3-.2.4-.3 3 1.4 6.3 1.4 9.3 0 .1.1.2.2.4.3-.5.3-1 .6-1.6.8.3.6.6 1.2 1 1.7 1.6-.5 3.1-1.3 4.5-2.3.4-3.3-.5-6.2-2.2-8.8ZM9 14c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.7 1.5-1.7s1.5.8 1.5 1.7c0 1-.7 1.7-1.5 1.7Zm6 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.7 1.5-1.7s1.5.8 1.5 1.7c0 1-.7 1.7-1.5 1.7Z" />
    </svg>
  );
}

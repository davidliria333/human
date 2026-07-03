import { ReactNode } from "react";
import Link from "next/link";
import { Logomark } from "../icons";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-10 flex items-center justify-center gap-2 text-text-primary">
          <Logomark className="h-7 w-7" />
          <span className="text-lg font-medium tracking-tight">Human Archive</span>
        </Link>
        {children}
      </div>
    </div>
  );
}

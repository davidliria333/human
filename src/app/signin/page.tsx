"use client";

import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";

export default function SignInPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthShell>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-5"
      >
        <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
          Email
          <input
            type="email"
            required
            placeholder="name@example.com"
            className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="rounded-[14px] bg-accent py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.35)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(76,130,232,0.55)]"
        >
          {sent ? "Code sent — check your email" : "Send sign-in code"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Don&rsquo;t have an account?{" "}
        <a href="/signup" className="font-medium text-accent hover:underline">
          Sign up
        </a>
      </p>

      <div className="mt-8 flex items-center justify-center gap-3 text-xs text-text-tertiary">
        <a href="/privacy" className="hover:text-text-secondary">Privacy Policy</a>
        <span>·</span>
        <a href="/terms" className="hover:text-text-secondary">Terms of Service</a>
      </div>
    </AuthShell>
  );
}

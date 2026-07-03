"use client";

import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";

export default function SignUpPage() {
  const [valid, setValid] = useState(false);

  return (
    <AuthShell>
      <p className="text-center text-xs font-medium text-accent">Step 1 of 3</p>
      <h1 className="mt-2 text-center text-2xl font-light tracking-[-0.5px] text-text-primary">
        Join Human Archive
      </h1>
      <p className="mt-2 text-center text-sm font-light leading-relaxed text-text-secondary">
        Create your contributor account. Find a task, upload content, and get
        paid.{" "}
        <a href="#" className="font-medium text-accent hover:underline">
          Apply as a seller
        </a>
        .
      </p>

      <form
        onChange={(e) => setValid((e.currentTarget as HTMLFormElement).checkValidity())}
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            First name
            <input
              required
              placeholder="John"
              className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Last name
            <input
              required
              placeholder="Doe"
              className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
          Email address
          <input
            type="email"
            required
            placeholder="name@example.com"
            className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
          />
        </label>

        <div className="grid grid-cols-2 gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Age range
            <select className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary focus:border-accent focus:outline-none">
              <option>Select</option>
              <option>18–24</option>
              <option>25–34</option>
              <option>35–44</option>
              <option>45+</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-text-primary">
            Gender
            <select className="rounded-none border-b border-border-hairline bg-transparent pb-2 text-sm font-light text-text-primary focus:border-accent focus:outline-none">
              <option>Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={!valid}
          className="rounded-[14px] bg-accent py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(76,130,232,0.35)] transition-all duration-200 enabled:hover:shadow-[0_0_28px_rgba(76,130,232,0.55)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Already have an account?{" "}
        <a href="/signin" className="font-medium text-accent hover:underline">
          Sign in
        </a>
      </p>

      <div className="mt-8 flex items-center justify-center gap-3 text-xs text-text-tertiary">
        <a href="/privacy" className="hover:text-text-secondary">Privacy Notice</a>
        <span>·</span>
        <a href="/terms" className="hover:text-text-secondary">Terms of Service</a>
      </div>
    </AuthShell>
  );
}

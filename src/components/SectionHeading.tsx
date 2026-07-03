import { ReactNode } from "react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border-hairline bg-bg-glass px-3 py-1 text-xs font-medium tracking-wide text-accent">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={clsx(
            "text-[28px] font-light leading-[1.1] tracking-[-1.5px] text-text-primary md:text-[40px]",
            align === "center" && "text-balance"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={clsx(
              "max-w-2xl text-base font-light leading-[1.6] tracking-[0.4px] text-text-secondary",
              align === "center" && "text-balance"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 md:px-8",
        className
      )}
      style={{ maxWidth: "var(--content-max-width)" }}
    >
      {children}
    </div>
  );
}

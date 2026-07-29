import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-2.5 sm:mt-3 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 sm:mt-4 text-sm sm:text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}

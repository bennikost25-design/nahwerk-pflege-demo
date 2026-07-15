import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "surface" | "petrol" | "sage";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream text-ink",
  surface: "bg-surface text-ink",
  petrol: "bg-petrol text-white",
  sage: "bg-sage-soft text-ink",
};

export function Section({
  id,
  children,
  className,
  tone = "cream",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-space", tones[tone], className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        light ? "text-white" : "text-ink",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold tracking-[0.08em] uppercase",
            light ? "text-white/75" : "text-sage",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-balance text-3xl leading-tight tracking-tight md:text-4xl",
          light ? "text-white" : "text-petrol",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/85" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

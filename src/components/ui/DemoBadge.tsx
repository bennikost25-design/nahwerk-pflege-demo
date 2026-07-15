import { siteConfig } from "@/content/site-content";
import { cn } from "@/lib/utils";

type DemoBadgeProps = {
  className?: string;
  compact?: boolean;
};

export function DemoBadge({ className, compact = false }: DemoBadgeProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-terracotta/25 bg-terracotta-soft text-ink",
        compact ? "px-2 py-0.5 text-[0.7rem]" : "px-3 py-1.5 text-sm",
        className,
      )}
      role="note"
    >
      <span
        className="size-1.5 shrink-0 rounded-full bg-terracotta"
        aria-hidden="true"
      />
      <span className="font-medium">{siteConfig.demoNotice}</span>
    </p>
  );
}

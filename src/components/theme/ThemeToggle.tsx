"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import {
  THEME_PREFERENCES,
  themeLabels,
  type ThemePreference,
} from "@/lib/theme";
import { Monitor, Moon, Sun } from "lucide-react";

const icons: Record<ThemePreference, typeof Sun> = {
  light: Sun,
  system: Monitor,
  dark: Moon,
};

type ThemeToggleProps = {
  variant?: "segmented" | "cycle";
  className?: string;
};

export function ThemeToggle({
  variant = "segmented",
  className,
}: ThemeToggleProps) {
  const { preference, setPreference, cyclePreference } = useTheme();

  if (variant === "cycle") {
    const next =
      preference === "system"
        ? "light"
        : preference === "light"
          ? "dark"
          : "system";
    const Icon = icons[preference];
    return (
      <button
        type="button"
        onClick={cyclePreference}
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-line text-petrol transition-colors hover:bg-surface",
          className,
        )}
        aria-label={`Darstellung: ${themeLabels[preference]}. Nächster Modus: ${themeLabels[next]}`}
      >
        <Icon className="size-4" aria-hidden />
      </button>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Darstellung wählen"
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface/80 p-0.5",
        className,
      )}
      onKeyDown={(event) => {
        const index = THEME_PREFERENCES.indexOf(preference);
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          setPreference(THEME_PREFERENCES[(index + 1) % THEME_PREFERENCES.length]);
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          setPreference(
            THEME_PREFERENCES[
              (index - 1 + THEME_PREFERENCES.length) % THEME_PREFERENCES.length
            ],
          );
        }
      }}
    >
      {THEME_PREFERENCES.map((option) => {
        const Icon = icons[option];
        const selected = preference === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={themeLabels[option]}
            tabIndex={selected ? 0 : -1}
            onClick={() => setPreference(option)}
            className={cn(
              "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-semibold transition-colors",
              selected
                ? "bg-brand text-on-brand"
                : "text-ink-muted hover:text-petrol",
            )}
          >
            <Icon className="size-3.5" aria-hidden />
            <span className="sr-only">{themeLabels[option]}</span>
          </button>
        );
      })}
    </div>
  );
}

type ThemeMenuControlProps = {
  className?: string;
};

/** Vollständige Beschriftung für das mobile Menü */
export function ThemeMenuControl({ className }: ThemeMenuControlProps) {
  const { preference, setPreference } = useTheme();

  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm font-semibold text-ink">Darstellung</p>
      <div
        role="radiogroup"
        aria-label="Darstellung wählen"
        className="grid grid-cols-3 gap-1 rounded-[var(--radius-sm)] border border-line bg-surface p-1"
      >
        {THEME_PREFERENCES.map((option) => {
          const Icon = icons[option];
          const selected = preference === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setPreference(option)}
              className={cn(
                "flex min-h-11 flex-col items-center justify-center gap-1 rounded-[var(--radius-sm)] px-2 py-2 text-xs font-semibold transition-colors",
                selected
                  ? "bg-brand text-on-brand"
                  : "text-ink-muted hover:bg-cream-deep hover:text-petrol",
              )}
            >
              <Icon className="size-4" aria-hidden />
              <span>{themeLabels[option]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

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
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { preference, setPreference } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Darstellung wählen"
      className={cn(
        "inline-flex items-center rounded-full border border-line/70 bg-surface/50 p-0.5",
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
              "inline-flex items-center justify-center rounded-full font-semibold transition-colors",
              "min-h-8 min-w-8 px-1.5 lg:min-h-9 lg:min-w-9 lg:px-2.5",
              selected
                ? "bg-brand text-on-brand"
                : "text-ink-muted hover:text-petrol",
            )}
          >
            <Icon className="size-3.5 lg:size-3.5" aria-hidden />
            <span className="sr-only">{themeLabels[option]}</span>
          </button>
        );
      })}
    </div>
  );
}

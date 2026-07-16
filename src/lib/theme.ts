export const THEME_STORAGE_KEY = "nahwerk-theme";

export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export const THEME_PREFERENCES: ThemePreference[] = [
  "light",
  "system",
  "dark",
];

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

export function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemTheme() : preference;
}

export function readStoredThemePreference(): ThemePreference {
  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemePreference(raw)) return raw;
  } catch {
    // localStorage kann blockiert sein
  }
  return "system";
}

export function storeThemePreference(preference: ThemePreference) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Speichern fehlgeschlagen – App bleibt nutzbar
  }
}

export function applyResolvedTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.style.colorScheme = resolved;
}

export function applyThemePreference(preference: ThemePreference) {
  document.documentElement.setAttribute("data-theme-pref", preference);
  applyResolvedTheme(resolveTheme(preference));
}

export const themeLabels: Record<ThemePreference, string> = {
  light: "Hell",
  system: "System",
  dark: "Dunkel",
};

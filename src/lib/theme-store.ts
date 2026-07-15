import {
  applyThemePreference,
  getSystemTheme,
  isThemePreference,
  readStoredThemePreference,
  resolveTheme,
  storeThemePreference,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/theme";

type ThemeState = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
};

let state: ThemeState = {
  preference: "system",
  resolved: "light",
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function getThemeState(): ThemeState {
  return state;
}

export function getServerThemeState(): ThemeState {
  return { preference: "system", resolved: "light" };
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function hydrateThemeStore() {
  if (typeof document === "undefined") return;

  const fromDom = document.documentElement.getAttribute("data-theme-pref");
  const preference = isThemePreference(fromDom)
    ? fromDom
    : readStoredThemePreference();
  const resolvedAttr = document.documentElement.getAttribute("data-theme");
  const resolved =
    resolvedAttr === "dark" || resolvedAttr === "light"
      ? resolvedAttr
      : resolveTheme(preference);

  state = { preference, resolved };
  applyThemePreference(preference);
  emit();
}

export function setThemePreference(preference: ThemePreference) {
  storeThemePreference(preference);
  const resolved = resolveTheme(preference);
  state = { preference, resolved };
  applyThemePreference(preference);
  emit();
}

export function bindSystemThemeListener() {
  if (typeof window === "undefined") return () => {};

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => {
    if (state.preference !== "system") return;
    const resolved = getSystemTheme();
    state = { ...state, resolved };
    applyThemePreference("system");
    emit();
  };

  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

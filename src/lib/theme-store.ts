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

const SERVER_THEME_STATE: ThemeState = {
  preference: "system",
  resolved: "light",
};

let state: ThemeState = SERVER_THEME_STATE;

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function getThemeState(): ThemeState {
  return state;
}

export function getServerThemeState(): ThemeState {
  return SERVER_THEME_STATE;
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

  if (state.preference === preference && state.resolved === resolved) {
    applyThemePreference(preference);
    return;
  }

  state = { preference, resolved };
  applyThemePreference(preference);
  emit();
}

export function setThemePreference(preference: ThemePreference) {
  const resolved = resolveTheme(preference);
  if (state.preference === preference && state.resolved === resolved) {
    storeThemePreference(preference);
    applyThemePreference(preference);
    return;
  }

  storeThemePreference(preference);
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
    if (state.resolved === resolved) return;
    state = { ...state, resolved };
    applyThemePreference("system");
    emit();
  };

  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

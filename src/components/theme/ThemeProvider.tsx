"use client";

import {
  bindSystemThemeListener,
  getServerThemeState,
  getThemeState,
  hydrateThemeStore,
  setThemePreference as storeSetPreference,
  subscribeTheme,
} from "@/lib/theme-store";
import type { ThemePreference } from "@/lib/theme";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: "light" | "dark";
  setPreference: (preference: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(
    subscribeTheme,
    getThemeState,
    getServerThemeState,
  );

  useEffect(() => {
    hydrateThemeStore();
    return bindSystemThemeListener();
  }, []);

  const setPreference = useCallback((next: ThemePreference) => {
    storeSetPreference(next);
  }, []);

  const value = useMemo(
    () => ({
      preference: state.preference,
      resolved: state.resolved,
      setPreference,
    }),
    [state.preference, state.resolved, setPreference],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme muss innerhalb von ThemeProvider verwendet werden.");
  }
  return ctx;
}

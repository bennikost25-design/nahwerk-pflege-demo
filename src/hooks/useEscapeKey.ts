import { useEffect } from "react";

/**
 * Ruft onEscape auf, wenn Escape gedrückt wird (z. B. für Mobile-Menüs).
 */
export function useEscapeKey(enabled: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!enabled) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [enabled, onEscape]);
}

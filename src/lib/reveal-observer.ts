type RevealCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, RevealCallback>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (typeof IntersectionObserver === "undefined") return null;

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = callbacks.get(entry.target);
          if (!callback) continue;
          callbacks.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
          callback();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
  }

  return sharedObserver;
}

/**
 * Registriert ein Element für die Reveal-Animation.
 * Gibt eine Cleanup-Funktion zurück.
 */
export function observeReveal(
  node: Element,
  onVisible: RevealCallback,
): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onVisible();
    return () => {};
  }

  const observer = getSharedObserver();
  if (!observer) {
    onVisible();
    return () => {};
  }

  callbacks.set(node, onVisible);
  observer.observe(node);

  return () => {
    callbacks.delete(node);
    observer.unobserve(node);
  };
}

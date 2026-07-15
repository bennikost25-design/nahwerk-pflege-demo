"use client";

import { BrandMark } from "@/components/brand/BrandMark";
import { ThemeMenuControl, ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cta, navigation, siteConfig } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOnPath, setOpenedOnPath] = useState(pathname);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = open && openedOnPath === pathname;

  const closeMenu = useCallback(() => {
    setOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  const openMenu = useCallback(() => {
    setOpenedOnPath(pathname);
    setOpen(true);
  }, [pathname]);

  useEscapeKey(isOpen, closeMenu);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

    const focusable = getFocusable();
    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/92 backdrop-blur-md">
      <div className="container-site flex h-14 items-center justify-between gap-3 lg:h-[4.5rem]">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 py-1"
          aria-label={`${siteConfig.name} – Startseite`}
        >
          <BrandMark className="size-7 shrink-0 text-brand lg:size-8" />
          <span className="min-w-0">
            <span className="flex items-center gap-2">
              <span className="font-display text-[1.05rem] leading-none text-petrol lg:text-[1.25rem]">
                {siteConfig.name}
              </span>
              <span
                className="rounded-[var(--radius-sm)] border border-terracotta/30 bg-terracotta-soft px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-ink uppercase"
                title={siteConfig.demoNotice}
              >
                Demo
              </span>
            </span>
            <span className="mt-0.5 hidden truncate text-xs text-ink-muted lg:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Hauptnavigation"
        >
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative inline-flex min-h-11 items-center px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-petrol"
                    : "text-ink-muted hover:text-petrol",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 bottom-1.5 h-0.5 rounded-full bg-terracotta transition-opacity",
                    active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle className="hidden lg:inline-flex" />
          <ThemeToggle variant="cycle" className="lg:hidden" />
          <Button
            href={cta.primary.href}
            className="hidden min-h-10 px-4 text-sm lg:inline-flex"
          >
            {cta.primary.shortLabel}
          </Button>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-line text-petrol lg:hidden"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => {
              if (isOpen) closeMenu();
              else openMenu();
            }}
          >
            {isOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[var(--header-offset)] z-40 bg-brand/40 transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />

      <div
        ref={panelRef}
        id={menuId}
        className={cn(
          "absolute inset-x-0 top-full z-50 border-b border-line bg-cream shadow-[var(--shadow-soft)] transition-[opacity,transform] duration-200 lg:hidden",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
        hidden={!isOpen}
      >
        <div className="container-site py-4">
          <nav aria-label="Mobile Navigation">
            <ol className="border-t border-line">
              {navigation.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      className={cn(
                        "grid min-h-12 grid-cols-[auto_1fr_auto] items-center gap-3 py-3.5 text-base font-semibold",
                        active ? "text-petrol" : "text-ink",
                      )}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      <span
                        className="font-display text-sm text-petrol/40 tabular-nums"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                      {active ? (
                        <span
                          className="size-1.5 rounded-full bg-terracotta"
                          aria-hidden
                        />
                      ) : (
                        <span aria-hidden />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="mt-4 grid gap-2">
            <Button href={cta.primary.href} size="lg" onClick={closeMenu}>
              {cta.primary.label}
            </Button>
            <Button
              href={cta.secondary.href}
              variant="secondary"
              size="lg"
              onClick={closeMenu}
            >
              {cta.secondary.label}
            </Button>
          </div>

          <div className="mt-5 border-t border-line pt-4">
            <ThemeMenuControl />
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
              {siteConfig.demoNotice}. Alle Angaben sind fiktiv.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { BrandMark } from "@/components/brand/BrandMark";
import { ThemeMenuControl, ThemeToggle } from "@/components/theme/ThemeToggle";
import { cta, navigation, siteConfig } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function mobilePageLabel(pathname: string): string {
  if (pathname === "/") return "Startseite";
  if (pathname.startsWith("/leistungen")) return "Leistungen";
  if (pathname.startsWith("/karriere")) return "Karriere";
  if (pathname.startsWith("/kontakt")) return "Kontakt";
  if (pathname.startsWith("/impressum")) return "Impressum";
  if (pathname.startsWith("/datenschutz")) return "Datenschutz";
  return "Seite";
}

function subscribeToNothing() {
  return () => {};
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOnPath, setOpenedOnPath] = useState(pathname);
  const [reduceMotion, setReduceMotion] = useState(false);
  const portalReady = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = open && openedOnPath === pathname;
  const currentPage = mobilePageLabel(pathname);

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
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

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
      ).filter((el) => el.offsetParent !== null);

    getFocusable()[0]?.focus();

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

  const mobileMenu =
    portalReady &&
    createPortal(
      <div
        ref={panelRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={cn(
          "fixed inset-x-0 top-[var(--header-offset)] bottom-0 z-[60] w-full overflow-y-auto overscroll-contain bg-cream lg:hidden",
          "pb-[max(1.25rem,env(safe-area-inset-bottom))]",
          reduceMotion
            ? isOpen
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
            : cn(
                "transition-[opacity,transform] duration-[200ms] ease-out",
                isOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0 pointer-events-none",
              ),
        )}
      >
        <div className="container-site flex min-h-full flex-col py-5">
          <p className="text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">
            Navigation
          </p>

          <nav aria-label="Mobile Navigation" className="mt-3 shrink-0">
            <ul className="border-t border-line">
              {navigation.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-14 w-full items-center justify-between gap-3 py-3.5 text-lg font-semibold tracking-wide",
                        active ? "text-petrol" : "text-ink",
                      )}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                      tabIndex={isOpen ? undefined : -1}
                    >
                      <span>{item.label}</span>
                      {active ? (
                        <span
                          className="size-1.5 shrink-0 rounded-full bg-terracotta"
                          aria-hidden
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 shrink-0 space-y-3">
            <Link
              href={cta.primary.href}
              onClick={closeMenu}
              tabIndex={isOpen ? undefined : -1}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[0.25rem_0.75rem_0.25rem_0.75rem] bg-terracotta px-5 text-base font-semibold text-on-brand transition-colors hover:bg-[#a55c41]"
            >
              {cta.primary.label}
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <Link
              href={cta.secondary.href}
              onClick={closeMenu}
              tabIndex={isOpen ? undefined : -1}
              className="inline-flex min-h-11 w-full items-center justify-center text-sm font-semibold text-petrol underline-offset-4 hover:underline"
            >
              {cta.secondary.label}
            </Link>
          </div>

          <div className="mt-8 shrink-0 border-t border-line pt-5">
            <ThemeMenuControl />
          </div>

          <p className="mt-auto shrink-0 pt-8 text-xs leading-relaxed text-ink-muted">
            Fiktive Website-Demo – alle Angaben sind beispielhaft.
          </p>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Blur nur auf dem sichtbaren Balken – nicht als Ancestor des Fixed-Panels */}
        <div className="site-header bg-cream/85 backdrop-blur-md">
          <div className="container-site relative flex h-[3.75rem] items-center gap-1.5 sm:gap-2 lg:h-[4.5rem] lg:gap-6 xl:gap-10">
            <Link
              href="/"
              className="flex min-w-0 flex-1 items-center gap-2 py-1 lg:flex-none lg:gap-2.5"
              aria-label={`${siteConfig.name} – Startseite`}
            >
              <BrandMark className="size-[1.7rem] shrink-0 text-petrol lg:size-8" />
              <span className="min-w-0">
                <span className="flex items-baseline gap-1.5">
                  <span className="whitespace-nowrap font-display text-[0.98rem] leading-[1.2] text-petrol lg:text-[1.28rem] lg:leading-[1.2]">
                    {siteConfig.name}
                  </span>
                  <span
                    className="relative -top-0.5 hidden text-[0.62rem] font-semibold tracking-wide text-terracotta/80 uppercase lg:inline"
                    title={siteConfig.demoNotice}
                  >
                    Demo
                  </span>
                </span>
                {/* Mobile: aktuelle Seite */}
                <span className="mt-0.5 block text-[0.68rem] leading-tight text-ink-muted lg:hidden">
                  {currentPage}
                </span>
                {/* Desktop: Tagline */}
                <span className="mt-0.5 hidden text-[0.72rem] leading-tight text-ink-muted lg:block">
                  {siteConfig.tagline}
                  <span className="text-ink-muted/70"> · Fiktive Demo</span>
                </span>
              </span>
            </Link>

            <nav
              className="hidden min-w-0 flex-1 justify-center lg:flex"
              aria-label="Hauptnavigation"
            >
              <ul className="flex items-center gap-1 xl:gap-2">
                {navigation.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group relative inline-flex min-h-11 items-center px-3 py-2 text-sm font-medium tracking-wide transition-colors xl:px-3.5",
                          active
                            ? "text-petrol"
                            : "text-ink-muted hover:text-petrol",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                        <span
                          className={cn(
                            "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-terracotta transition-[transform,opacity] duration-200 xl:inset-x-3.5",
                            active
                              ? "scale-x-100 opacity-100"
                              : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70",
                          )}
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 lg:gap-2">
              <ThemeToggle className="hidden lg:inline-flex" />
              <ThemeToggle variant="cycle" className="!size-9 lg:hidden" />

              <Link
                href={cta.primary.href}
                className="group hidden items-center gap-1.5 rounded-[0.2rem_0.65rem_0.2rem_0.65rem] bg-terracotta px-3.5 py-2 text-sm font-semibold tracking-wide text-on-brand transition-colors hover:bg-[#a55c41] lg:inline-flex"
              >
                {cta.primary.shortLabel}
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>

              <button
                ref={buttonRef}
                type="button"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-petrol transition-colors hover:bg-surface lg:hidden"
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

            <span
              className="pointer-events-none absolute bottom-0 left-0 hidden h-0.5 w-14 bg-terracotta/70 lg:block"
              aria-hidden
            />
          </div>

          <div
            className="pointer-events-none mx-auto h-px w-[min(1120px,calc(100%-2rem))] bg-gradient-to-r from-transparent via-line/70 to-transparent"
            aria-hidden
          />
        </div>
      </header>

      {mobileMenu}
    </>
  );
}

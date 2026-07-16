"use client";

import { BrandMark } from "@/components/brand/BrandMark";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
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
          <div className="shrink-0 pb-3">
            <p className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink-muted uppercase">
              Alle Informationen auf einen Blick
            </p>
            <p className="mt-1.5 max-w-[22rem] text-[0.85rem] leading-snug text-ink-muted">
              Hier finden Sie unsere Leistungen, Stellenangebote und
              Kontaktmöglichkeiten.
            </p>
          </div>

          <nav aria-label="Mobile Navigation" className="shrink-0">
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

          <p className="mt-auto shrink-0 pt-10 text-xs leading-relaxed text-ink-muted">
            Fiktive Website-Demo – alle Angaben sind beispielhaft.
          </p>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="site-header bg-cream/85 backdrop-blur-md">
          <div className="relative mx-auto flex h-16 w-[min(1120px,calc(100%-1.25rem))] items-center gap-1.5 sm:w-[min(1120px,calc(100%-2rem))] sm:gap-2 md:w-[min(1120px,calc(100%-3rem))] lg:h-[4.5rem] lg:gap-6 xl:gap-10">
            <Link
              href="/"
              className="flex min-w-0 flex-1 items-center gap-2 py-1 lg:flex-none lg:gap-2.5"
              aria-label={`${siteConfig.name} – Startseite`}
            >
              <BrandMark className="size-8 shrink-0 text-petrol min-[390px]:size-[2.05rem] lg:size-8" />
              <span className="min-w-0">
                <span className="flex items-baseline gap-1.5">
                  <span className="whitespace-nowrap font-display text-[1.08rem] leading-[1.2] text-petrol lg:text-[1.28rem] lg:leading-[1.2]">
                    {siteConfig.name}
                  </span>
                  <span
                    className="relative -top-0.5 text-[0.55rem] font-semibold tracking-wide text-terracotta/80 uppercase lg:text-[0.62rem]"
                    title={siteConfig.demoNotice}
                  >
                    Demo
                  </span>
                </span>
                <span className="mt-0.5 block text-[0.62rem] leading-tight text-ink-muted lg:text-[0.72rem]">
                  {siteConfig.tagline}
                  <span className="hidden text-ink-muted/70 lg:inline">
                    {" "}
                    · Fiktive Demo
                  </span>
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
              <ThemeToggle />

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
                className="inline-flex h-10 shrink-0 items-center gap-1 rounded-[var(--radius-sm)] px-1.5 text-petrol transition-colors hover:bg-surface min-[360px]:gap-1.5 min-[360px]:px-2 lg:hidden"
                aria-expanded={isOpen}
                aria-controls={menuId}
                aria-label={isOpen ? "Schließen" : "Übersicht"}
                onClick={() => {
                  if (isOpen) closeMenu();
                  else openMenu();
                }}
              >
                {isOpen ? (
                  <X className="size-4 shrink-0" aria-hidden />
                ) : (
                  <Menu className="size-4 shrink-0" aria-hidden />
                )}
                <span className="hidden text-[0.8125rem] font-semibold tracking-wide min-[360px]:inline">
                  {isOpen ? "Schließen" : "Übersicht"}
                </span>
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

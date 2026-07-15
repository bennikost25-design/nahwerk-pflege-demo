"use client";

import { Button } from "@/components/ui/Button";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { cta, navigation, siteConfig } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEscapeKey(open, closeMenu);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/92 backdrop-blur-md">
      <div className="border-b border-terracotta/15 bg-terracotta-soft/70">
        <div className="container-site flex items-center justify-center py-1.5 md:justify-start">
          <DemoBadge compact />
        </div>
      </div>

      <div className="container-site flex min-h-14 items-center justify-between gap-4 py-2.5">
        <Link
          href="/"
          className="group min-w-0 shrink py-1"
          aria-label={`${siteConfig.name} – Startseite`}
        >
          <span className="font-display text-xl leading-none text-petrol md:text-[1.35rem]">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block truncate text-xs text-ink-muted md:text-sm">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Hauptnavigation"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors",
                  "min-h-11 inline-flex items-center",
                  active
                    ? "bg-sage-soft text-petrol"
                    : "text-ink-muted hover:bg-cream-deep hover:text-petrol",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={cta.career.href}
            variant="ghost"
            className="hidden min-h-11 sm:inline-flex"
          >
            Karriere
          </Button>
          <Button href={cta.primary.href} className="hidden min-h-11 sm:inline-flex">
            {cta.primary.shortLabel}
          </Button>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] border border-line text-petrol lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[calc(var(--header-offset)+2.25rem)] z-40 bg-petrol/35 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        ref={panelRef}
        id={menuId}
        className={cn(
          "absolute inset-x-0 top-full z-50 border-b border-line bg-cream shadow-[var(--shadow-soft)] transition-transform duration-200 lg:hidden",
          open ? "translate-y-0" : "pointer-events-none -translate-y-2 opacity-0",
        )}
        hidden={!open}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile Navigation">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "min-h-12 rounded-[var(--radius-sm)] px-4 py-3 text-base font-medium",
                  active ? "bg-sage-soft text-petrol" : "text-ink hover:bg-cream-deep",
                )}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-3 grid gap-2 border-t border-line pt-4">
            <Button href={cta.primary.href} size="lg" onClick={() => setOpen(false)}>
              {cta.primary.label}
            </Button>
            <Button
              href={cta.secondary.href}
              variant="secondary"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {cta.secondary.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

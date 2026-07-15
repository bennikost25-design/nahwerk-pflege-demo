import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { cta, siteConfig } from "@/content/site-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      {/* Quiet organic backdrop – decorative only */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sage-soft/70 blur-2xl" />
        <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-cream-deep/80 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 h-56 w-64 rounded-full bg-terracotta-soft/40 blur-2xl" />
      </div>

      <div className="container-site relative grid items-center gap-8 py-12 sm:gap-10 sm:py-14 md:gap-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
        <div className="relative z-[1] max-w-xl">
          <p className="text-sm font-semibold tracking-[0.1em] text-sage uppercase">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 font-display text-balance text-[2rem] leading-[1.14] tracking-tight text-petrol min-[380px]:text-4xl sm:mt-4 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            Pflege, die zu Ihrem Alltag passt.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
            Persönliche Unterstützung, verlässliche Ansprechpartner und kurze
            Wege – damit Sie zu Hause gut versorgt bleiben.
          </p>
          <div className="mt-7 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap sm:mt-9">
            <Button href={cta.primary.href} size="lg">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary" size="lg">
              {cta.secondary.label}
            </Button>
          </div>
        </div>

        <div className="relative z-[1] justify-self-center lg:justify-self-stretch">
          {/* Soft light plane behind illustration */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[40%_48%_42%_50%] bg-[radial-gradient(ellipse_at_center,var(--color-white)_0%,var(--color-sage-soft)_55%,transparent_75%)] opacity-90"
            aria-hidden="true"
          />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

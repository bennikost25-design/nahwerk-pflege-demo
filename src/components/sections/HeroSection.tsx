import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { cta, siteConfig } from "@/content/site-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(165deg,var(--color-cream)_0%,var(--color-surface)_55%,var(--color-sage-soft)_100%)]">
      <div className="container-site grid items-center gap-10 py-14 md:gap-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.1em] text-sage uppercase">
            {siteConfig.name}
          </p>
          <h1 className="font-display text-balance text-4xl leading-[1.12] tracking-tight text-petrol sm:text-5xl lg:text-[3.35rem]">
            Pflege, die zu Ihrem Alltag passt.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Persönliche Unterstützung, verlässliche Ansprechpartner und kurze
            Wege – damit Sie zu Hause gut versorgt bleiben.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={cta.primary.href} size="lg">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary" size="lg">
              {cta.secondary.label}
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink-muted">{siteConfig.demoNotice}</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

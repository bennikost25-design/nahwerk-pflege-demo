import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cta, siteConfig } from "@/content/site-content";

const heroAlt =
  "Pflegekraft im Gespräch mit einer älteren Frau in häuslicher Umgebung";

function HeroCopy() {
  return (
    <>
      <p className="text-sm font-semibold tracking-[0.1em] text-sage-text uppercase">
        {siteConfig.name}
      </p>
      <h1 className="mt-3 font-display text-balance text-[2rem] leading-[1.14] tracking-tight text-petrol min-[380px]:text-4xl sm:mt-4 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12] xl:text-[3.625rem]">
        Pflege, die zu Ihrem Alltag passt.
      </h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg lg:max-w-none xl:text-[1.1875rem]">
        Persönliche Unterstützung, verlässliche Ansprechpartner und kurze Wege
        – damit Sie zu Hause gut versorgt bleiben.
      </p>
      <div className="mt-7 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap sm:mt-8">
        <Button href={cta.primary.href} size="lg">
          {cta.primary.label}
        </Button>
        <Button href={cta.secondary.href} variant="secondary" size="lg">
          {cta.secondary.label}
        </Button>
      </div>
    </>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-sage-soft/60 blur-2xl" />
        <div className="absolute top-1/4 -right-12 h-72 w-72 rounded-full bg-cream-deep/70 blur-3xl" />
        <div className="absolute -bottom-16 left-[20%] h-48 w-56 rounded-full bg-terracotta-soft/35 blur-2xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="absolute top-8 left-[8%] h-48 w-48 rounded-full bg-sage-soft/50 blur-2xl" />
        <div className="absolute bottom-10 left-[18%] h-40 w-52 rounded-full bg-cream-deep/60 blur-2xl" />
      </div>

      <div className="relative mx-auto grid w-[min(1120px,calc(100%-2rem))] items-center gap-8 py-12 sm:gap-10 sm:py-14 md:w-[min(1120px,calc(100%-3rem))] md:gap-12 md:py-16 lg:mx-0 lg:w-full lg:max-w-none lg:min-h-[520px] lg:max-h-[560px] lg:grid-cols-[minmax(0,1fr)_min(54vw,52%)] lg:items-stretch lg:gap-0 lg:py-0">
        <div className="relative z-[1] max-w-xl lg:flex lg:max-w-none lg:items-center lg:justify-center lg:self-stretch lg:px-10 lg:py-12 xl:px-12 2xl:px-16">
          <div className="w-full lg:max-w-[37rem]">
            <HeroCopy />
          </div>
        </div>

        <div className="relative z-[1] w-full max-w-[20.5rem] justify-self-center min-[380px]:max-w-sm sm:max-w-md lg:flex lg:max-w-none lg:min-h-[520px] lg:max-h-[560px] lg:w-auto lg:justify-self-stretch lg:flex-col lg:pt-1.5 xl:pt-2">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[82%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[46%_42%_48%_44%] bg-sage-soft/50 lg:hidden"
            aria-hidden="true"
          />
          <div className="relative aspect-[1448/1086] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ring-1 ring-line/70 lg:aspect-auto lg:min-h-0 lg:flex-1 lg:rounded-none lg:rounded-l-2xl lg:shadow-[0_10px_28px_rgba(22,58,66,0.07)] lg:ring-0">
            <Image
              src="/images/hero-care-scene.png"
              alt={heroAlt}
              fill
              priority
              sizes="(max-width: 1023px) min(88vw, 28rem), 52vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

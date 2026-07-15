import { ContactCta } from "@/components/sections/ContactCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import {
  faqServices,
  services,
  servicesPage,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata("leistungen");

export default function LeistungenPage() {
  const copy = servicesPage;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="container-site grid gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14 lg:py-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-balance text-[2rem] leading-[1.14] tracking-tight text-petrol min-[380px]:text-4xl md:text-5xl">
              {copy.hero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {copy.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/kontakt" size="lg">
                Erstgespräch anfragen
              </Button>
              <Link
                href="#leistungsuebersicht"
                className="inline-flex min-h-12 items-center text-sm font-semibold text-petrol underline-offset-4 hover:underline"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <aside className="border-t border-line pt-2 lg:border-t-0 lg:border-l lg:border-line lg:pl-8 xl:pl-10">
            <p className="text-sm leading-relaxed text-ink-muted">
              {copy.hero.asideNote}
            </p>
            <nav aria-label="Leistungsübersicht" className="mt-5">
              <ol className="border-t border-line">
                {services.map((service, index) => (
                  <li key={service.id} className="border-b border-line">
                    <Link
                      href={`#${service.id}`}
                      className="grid min-h-12 grid-cols-[auto_1fr] items-center gap-3 py-3.5 text-petrol transition-colors hover:text-petrol-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                    >
                      <span
                        className="font-display text-base text-petrol/35 tabular-nums"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </section>

      {/* Redaktionelle Kapitel */}
      <Section tone="cream" id="leistungsuebersicht" className="scroll-mt-24">
        <div className="border-t border-line">
          {services.map((service, index) => {
            const featured = service.featured;
            return (
              <article
                key={service.id}
                id={service.id}
                className={cn(
                  "scroll-mt-28 border-b border-line",
                  featured ? "bg-sage-soft/45" : "",
                )}
              >
                <Reveal delayMs={index * 40}>
                  <div
                    className={cn(
                      "grid gap-6 py-10 md:py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12",
                      featured && "px-4 sm:px-5 md:px-6 lg:px-8",
                    )}
                  >
                    <div>
                      <span
                        className="font-display text-3xl text-petrol/25 tabular-nums"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-2 font-display text-3xl tracking-tight text-petrol md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                        {service.short}
                      </p>
                      <Button
                        href="/kontakt"
                        variant="secondary"
                        className="mt-7"
                      >
                        Erstgespräch anfragen
                      </Button>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-wide text-sage uppercase">
                        Dabei unterstützen wir
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex gap-3 text-ink">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta"
                              aria-hidden
                            />
                            <span className="text-sm leading-relaxed md:text-base">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 border-t border-line pt-5">
                        <h3 className="text-sm font-semibold tracking-wide text-sage uppercase">
                          Wichtig zu wissen
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                          {service.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Gemeinsame Orientierung */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="max-w-md">
            <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
              {copy.clarify.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
              {copy.clarify.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {copy.clarify.description}
            </p>
          </div>
          <ol className="border-t border-line">
            {copy.clarify.points.map((point, index) => (
              <li key={point}>
                <Reveal delayMs={index * 40}>
                  <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-4 md:py-5">
                    <span
                      className="font-display text-lg text-petrol/35 tabular-nums"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-ink md:text-lg">{point}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Pflegeberatung */}
      <Section tone="sage">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:items-start">
          <div className="max-w-md">
            <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
              {copy.counseling.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
              {copy.counseling.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {copy.counseling.description}
            </p>
            <Button href="/kontakt" className="mt-7">
              Erstgespräch anfragen
            </Button>
          </div>
          <div>
            <ol className="border-t border-line">
              {copy.counseling.topics.map((topic, index) => (
                <li
                  key={topic}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-5"
                >
                  <span
                    className="font-display text-lg text-petrol/35 tabular-nums"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg text-petrol md:text-xl">
                    {topic}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              {copy.counseling.note}
            </p>
          </div>
        </div>
      </Section>

      <FaqSection
        items={faqServices}
        layout="split"
        eyebrow={copy.faq.eyebrow}
        title={copy.faq.title}
        description={copy.faq.description}
        tone="cream"
      />

      <ContactCta
        variant="closing"
        closing={{
          eyebrow: copy.cta.eyebrow,
          title: copy.cta.title,
          description: copy.cta.description,
          phoneNote: copy.cta.phoneNote,
          primaryHref: "/kontakt",
          primaryLabel: "Erstgespräch anfragen",
          secondaryHref: "/kontakt",
          secondaryLabel: "Zur Kontaktseite",
          showEmail: false,
          showHours: false,
        }}
      />
    </>
  );
}

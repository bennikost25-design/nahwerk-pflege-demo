import { ContactCta } from "@/components/sections/ContactCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqServices, services, siteConfig } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("leistungen");

export default function LeistungenPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-site section-space">
          <DemoBadge />
          <h1 className="mt-5 max-w-3xl font-display text-4xl tracking-tight text-petrol md:text-5xl">
            Leistungen für den Alltag zu Hause
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Die folgenden Bereiche zeigen, wie ein ambulanter Pflegedienst
            Unterstützung strukturieren kann. Der tatsächliche Leistungsumfang
            wird immer individuell geklärt – ohne rechtlich oder medizinisch
            verbindliche Versprechen auf dieser Demo-Seite.
          </p>
          <p className="mt-4 text-sm text-ink-muted">{siteConfig.demoDisclaimer}</p>
        </div>
      </section>

      <Section>
        <div className="space-y-16">
          {services.map((service, index) => (
            <Reveal key={service.id}>
              <article
                id={service.id}
                className={`scroll-mt-28 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
                    Leistungsbereich
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-petrol">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-muted">
                    {service.short}
                  </p>
                </div>
                <div className="border-l-2 border-petrol/20 pl-5 md:pl-8">
                  <ul className="space-y-3 text-ink">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta"
                          aria-hidden
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-ink-muted">{service.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sage">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <SectionHeader
            title="Pflegeberatung als Orientierung"
            description="Im Beratungsgespräch geht es um Alltag, Kräfte und mögliche Unterstützung – ruhig, verständlich und ohne medizinische Versprechen. Offene Fragen sind willkommen."
          />
          <div className="bg-cream/80 p-6">
            <p className="text-ink-muted leading-relaxed">
              Beratung ersetzt keine sozialrechtliche oder ärztliche Auskunft.
              In dieser Demo dienen die Texte nur der Illustration.
            </p>
            <Button href="/kontakt" className="mt-5">
              Erstgespräch anfragen
            </Button>
          </div>
        </div>
      </Section>

      <FaqSection
        items={faqServices}
        title="Fragen zu den Leistungen"
        description="Kurz und klar – ohne verbindliche Zusagen."
        tone="surface"
      />
      <ContactCta />
    </>
  );
}

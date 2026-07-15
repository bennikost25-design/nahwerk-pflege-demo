import { DemoBadge } from "@/components/ui/DemoBadge";
import { siteConfig } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("impressum");

export default function ImpressumPage() {
  return (
    <section className="section-space">
      <div className="container-site max-w-3xl">
        <DemoBadge />
        <h1 className="mt-5 font-display text-4xl text-petrol">Impressum</h1>
        <div className="prose-demo mt-8 space-y-4 text-ink-muted">
          <p className="rounded-[var(--radius-sm)] border border-terracotta/25 bg-terracotta-soft/80 px-4 py-3 text-ink">
            Dies ist eine fiktive Demo und keine rechtlich geprüfte Vorlage.
          </p>
          <p>
            Die Website „{siteConfig.name}“ ist ein Demonstrationsprojekt. Es
            handelt sich nicht um ein reales Unternehmen.
          </p>
          <p>
            Es werden bewusst keine Handelsregisterdaten, Steuernummern,
            verantwortlichen Personen oder sonstigen Pflichtangaben eines
            echten Impressums erfunden.
          </p>
          <p>
            Alle Kontaktdaten (Telefon, E-Mail, Adresse) sind Platzhalter und
            dienen ausschließlich der Illustration.
          </p>
          <p>{siteConfig.demoDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}

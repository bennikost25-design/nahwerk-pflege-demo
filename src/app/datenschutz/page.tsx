import { DemoBadge } from "@/components/ui/DemoBadge";
import { siteConfig } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("datenschutz");

export default function DatenschutzPage() {
  return (
    <section className="section-space">
      <div className="container-site max-w-3xl">
        <DemoBadge />
        <h1 className="mt-5 font-display text-4xl text-petrol">Datenschutz</h1>
        <div className="prose-demo mt-8 space-y-4 text-ink-muted">
          <p className="rounded-[var(--radius-sm)] border border-terracotta/25 bg-terracotta-soft/80 px-4 py-3 text-ink">
            Dies ist eine fiktive Demo und keine rechtlich geprüfte Vorlage.
          </p>
          <p>
            Auf dieser Demo-Website werden keine echten Formularinhalte
            gespeichert oder an Dritte übermittelt. Kontakt- und
            Bewerbungsformulare arbeiten ausschließlich lokal im Browser.
          </p>
          <p>
            Es werden keine externen Trackingdienste eingebunden. Es gibt keinen
            erfundenen Datenschutzbeauftragten und keine fingierten
            Verarbeitungsverzeichnisse.
          </p>
          <p>
            Für einen realen Pflegedienst müsste eine vollständige,
            rechtlich geprüfte Datenschutzerklärung erstellt werden – diese
            Seite ersetzt das nicht.
          </p>
          <p>{siteConfig.demoDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}

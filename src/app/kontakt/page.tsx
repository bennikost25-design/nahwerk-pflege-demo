import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { contact } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export const metadata = createPageMetadata("kontakt");

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-site section-space">
          <h1 className="font-display text-4xl tracking-tight text-petrol md:text-5xl">
            Kontakt aufnehmen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Für ein unverbindliches Erstgespräch oder allgemeine Fragen –
            telefonisch, per E-Mail oder über das Formular.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeader
              title="Kontaktdaten"
              description={contact.note}
            />

            <ul className="space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 text-sage" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Telefon</p>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex min-h-11 items-center text-lg font-semibold text-petrol"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 text-sage" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">E-Mail</p>
                  <a
                    href={contact.emailHref}
                    className="inline-flex min-h-11 items-center break-all font-semibold text-petrol"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 text-sage" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Adresse</p>
                  <p className="mt-1 text-ink">{contact.address.full}</p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Versorgungsgebiet: {contact.serviceArea}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock3 className="mt-1 size-5 text-sage" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink-muted">
                    Öffnungszeiten
                  </p>
                  <ul className="mt-1 space-y-1 text-ink">
                    {contact.hours.map((row) => (
                      <li key={row.days}>
                        <span className="font-medium">{row.days}:</span> {row.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={contact.phoneHref} size="lg">
                Anrufen
              </Button>
              <Button href={contact.emailHref} variant="secondary" size="lg">
                E-Mail schreiben
              </Button>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section tone="sage">
        <SectionHeader
          title="Standort (Platzhalter)"
          description="Visueller Kartensatz ohne externe Karten-Dienste. Keine Google-Maps-Einbindung."
        />
        <div
          className="map-pattern mt-8 flex min-h-64 items-center justify-center border border-line"
          role="img"
          aria-label="Kartensatzhalter für Erfurt – keine echte Karte eingebunden"
        >
          <div className="mx-4 max-w-md bg-cream/95 p-5 text-center shadow-[var(--shadow-soft)]">
            <p className="font-display text-xl text-petrol">
              Erfurt · Musterstraße 12
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Hier würde in einer Live-Website eine lokale Karte oder eine
              Adressskizze stehen.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

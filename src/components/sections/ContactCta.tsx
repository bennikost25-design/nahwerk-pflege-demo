import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { contact, cta } from "@/content/site-content";
import { Clock3, Mail, Phone } from "lucide-react";

export function ContactCta() {
  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <SectionHeader
          eyebrow="Nächster Schritt"
          title="Unverbindlich ins Gespräch kommen"
          description="Telefon, E-Mail oder Formular – wählen Sie den Weg, der zu Ihnen passt. Alle Angaben sind Demo-Daten."
        />

        <div className="space-y-5 border border-line bg-cream p-6 md:p-7">
          <div className="flex gap-3">
            <Phone className="mt-1 size-5 shrink-0 text-sage" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-ink-muted">Telefon</p>
              <a
                href={contact.phoneHref}
                className="inline-flex min-h-11 items-center text-lg font-semibold text-petrol"
              >
                {contact.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-1 size-5 shrink-0 text-sage" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-ink-muted">E-Mail</p>
              <a
                href={contact.emailHref}
                className="inline-flex min-h-11 items-center break-all font-semibold text-petrol"
              >
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock3 className="mt-1 size-5 shrink-0 text-sage" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-ink-muted">Öffnungszeiten</p>
              <ul className="mt-1 space-y-1 text-ink">
                {contact.hours.map((row) => (
                  <li key={row.days}>
                    <span className="font-medium">{row.days}:</span> {row.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row">
            <Button href={cta.primary.href} size="lg">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary" size="lg">
              {cta.secondary.shortLabel}
            </Button>
          </div>
          <p className="text-sm text-ink-muted">{contact.note}</p>
        </div>
      </div>
    </Section>
  );
}

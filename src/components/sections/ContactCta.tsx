import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contact, cta, homeCopy } from "@/content/site-content";

export type ContactClosingCopy = {
  eyebrow: string;
  title: string;
  description: string;
  phoneNote?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showEmail?: boolean;
  showHours?: boolean;
};

type ContactCtaProps = {
  /** Stärkere Abschlussvariante (Startseite / Leistungsseite) */
  variant?: "default" | "closing";
  /** Eigene Texte für die Closing-Variante; Standard: homeCopy.contact */
  closing?: ContactClosingCopy;
};

export function ContactCta({
  variant = "default",
  closing,
}: ContactCtaProps) {
  if (variant === "closing") {
    const copy: ContactClosingCopy = closing ?? {
      eyebrow: homeCopy.contact.eyebrow,
      title: homeCopy.contact.title,
      description: homeCopy.contact.description,
      phoneNote: homeCopy.contact.phoneNote,
      primaryHref: cta.primary.href,
      primaryLabel: cta.primary.label,
      secondaryHref: cta.secondary.href,
      secondaryLabel: cta.secondary.label,
      showEmail: true,
      showHours: true,
    };

    const showEmail = copy.showEmail !== false;
    const showHours = copy.showHours !== false;
    const primaryHref = copy.primaryHref ?? cta.primary.href;
    const primaryLabel = copy.primaryLabel ?? cta.primary.label;
    const secondaryHref = copy.secondaryHref ?? cta.secondary.href;
    const secondaryLabel = copy.secondaryLabel ?? cta.secondary.label;

    return (
      <Section tone="cream" className="!py-12 md:!py-16">
        <div className="overflow-hidden rounded-[1.25rem] bg-brand text-on-brand md:rounded-2xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-on-brand/15 px-6 py-8 sm:px-8 md:px-10 md:py-10 lg:border-r lg:border-b-0">
              <p className="text-sm font-semibold tracking-[0.08em] text-on-brand/65 uppercase">
                {copy.eyebrow}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-balance text-3xl leading-tight tracking-tight text-on-brand md:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-on-brand/80 md:text-lg">
                {copy.description}
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-on-brand/60">Telefon</p>
                <a
                  href={contact.phoneHref}
                  className="mt-1 inline-flex min-h-12 items-center font-display text-3xl tracking-tight text-on-brand sm:text-4xl"
                >
                  {contact.phone}
                </a>
                {copy.phoneNote ? (
                  <p className="mt-2 text-sm text-on-brand/65">{copy.phoneNote}</p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 bg-brand-deep/35 px-6 py-8 sm:px-8 md:px-10 md:py-10">
              <div className="space-y-6">
                {showEmail ? (
                  <div>
                    <p className="text-sm font-semibold text-on-brand/60">E-Mail</p>
                    <a
                      href={contact.emailHref}
                      className="mt-1 inline-flex min-h-11 items-center break-all text-lg font-semibold text-on-brand underline-offset-4 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                ) : null}
                {showHours ? (
                  <div
                    className={
                      showEmail ? "border-t border-on-brand/15 pt-6" : ""
                    }
                  >
                    <p className="text-sm font-semibold text-on-brand/60">
                      Öffnungszeiten
                    </p>
                    <ul className="mt-2 space-y-1.5 text-on-brand/85">
                      {contact.hours.map((row) => (
                        <li key={row.days} className="flex flex-wrap gap-x-2">
                          <span className="font-medium">{row.days}</span>
                          <span className="text-on-brand/65">{row.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-on-brand/75">
                    Schildern Sie Ihre Situation telefonisch oder über das
                    Kontaktformular – wir finden einen passenden Termin.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-on-brand/15 pt-6">
                <Button
                  href={primaryHref}
                  variant="terracotta"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {primaryLabel}
                </Button>
                <Button
                  href={secondaryHref}
                  variant="secondaryOnBrand"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.08em] text-sage-text uppercase">
            Nächster Schritt
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
            Unverbindlich ins Gespräch kommen
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            Telefon, E-Mail oder Formular – wählen Sie den Weg, der zu Ihnen
            passt.
          </p>
        </header>

        <div className="space-y-5 border-t border-line pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
          <div>
            <p className="text-sm font-semibold text-ink-muted">Telefon</p>
            <a
              href={contact.phoneHref}
              className="inline-flex min-h-11 items-center text-lg font-semibold text-petrol"
            >
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-muted">E-Mail</p>
            <a
              href={contact.emailHref}
              className="inline-flex min-h-11 items-center break-all font-semibold text-petrol"
            >
              {contact.email}
            </a>
          </div>
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
          <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row">
            <Button href={cta.primary.href} size="lg">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary" size="lg">
              {cta.secondary.shortLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

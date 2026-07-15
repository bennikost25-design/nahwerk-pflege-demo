import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contact, cta, homeCopy } from "@/content/site-content";

type ContactCtaProps = {
  /** Stärkere Abschlussvariante für die Startseite */
  variant?: "default" | "closing";
};

export function ContactCta({ variant = "default" }: ContactCtaProps) {
  if (variant === "closing") {
    const { contact: copy } = homeCopy;

    return (
      <Section tone="cream" className="!py-12 md:!py-16">
        <div className="overflow-hidden rounded-[1.25rem] bg-petrol text-white md:rounded-2xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-white/15 px-6 py-8 sm:px-8 md:px-10 md:py-10 lg:border-r lg:border-b-0">
              <p className="text-sm font-semibold tracking-[0.08em] text-white/65 uppercase">
                {copy.eyebrow}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-balance text-3xl leading-tight tracking-tight text-white md:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
                {copy.description}
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-white/60">Telefon</p>
                <a
                  href={contact.phoneHref}
                  className="mt-1 inline-flex min-h-12 items-center font-display text-3xl tracking-tight text-white sm:text-4xl"
                >
                  {contact.phone}
                </a>
                <p className="mt-2 text-sm text-white/65">{copy.phoneNote}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 bg-petrol-deep/35 px-6 py-8 sm:px-8 md:px-10 md:py-10">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-white/60">E-Mail</p>
                  <a
                    href={contact.emailHref}
                    className="mt-1 inline-flex min-h-11 items-center break-all text-lg font-semibold text-white underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="border-t border-white/15 pt-6">
                  <p className="text-sm font-semibold text-white/60">
                    Öffnungszeiten
                  </p>
                  <ul className="mt-2 space-y-1.5 text-white/85">
                    {contact.hours.map((row) => (
                      <li key={row.days} className="flex flex-wrap gap-x-2">
                        <span className="font-medium">{row.days}</span>
                        <span className="text-white/65">{row.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/15 pt-6">
                <Button
                  href={cta.primary.href}
                  variant="terracotta"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {cta.primary.label}
                </Button>
                <Button
                  href={cta.secondary.href}
                  variant="secondary"
                  size="lg"
                  className="w-full border-white/35 text-white hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  {cta.secondary.label}
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
          <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
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

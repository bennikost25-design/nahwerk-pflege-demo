import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/site-content";
import Link from "next/link";

export function ServicesPreview() {
  const featured = services.find((service) => service.featured) ?? services[0];
  const others = services.filter((service) => service.id !== featured.id);

  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Leistungen"
          title="Unterstützung, die zum Alltag passt"
          description="Vier Leistungsbereiche – redaktionell aufbereitet, ohne medizinische Garantien."
        />
        <Button href="/leistungen" variant="secondary" className="self-start md:self-auto">
          Alle Leistungen
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="h-full bg-petrol p-7 text-white md:p-9">
            <p className="text-sm font-semibold tracking-[0.08em] text-white/65 uppercase">
              Schwerpunktthema
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
              {featured.short}
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              {featured.details.slice(0, 3).map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/leistungen#${featured.id}`}
              className="mt-8 inline-flex min-h-11 items-center font-semibold text-white underline-offset-4 hover:underline"
            >
              Mehr zur {featured.title}
            </Link>
          </article>
        </Reveal>

        <div className="grid gap-4">
          {others.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 70}>
              <article className="border border-line bg-surface px-5 py-5 transition-colors hover:border-petrol/30">
                <h3 className="font-display text-xl text-petrol">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.short}
                </p>
                <Link
                  href={`/leistungen#${service.id}`}
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-petrol underline-offset-4 hover:underline"
                >
                  Details lesen
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy, services } from "@/content/site-content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServicesPreview() {
  const { services: copy } = homeCopy;
  const featured = services.find((service) => service.featured) ?? services[0];
  const ordered = [
    featured,
    ...services.filter((service) => service.id !== featured.id),
  ];

  return (
    <Section tone="cream">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-md lg:pt-2">
          <p className="text-sm font-semibold tracking-[0.08em] text-sage-text uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            {copy.description}
          </p>
          <Button href="/leistungen" className="mt-7">
            Alle Leistungen
          </Button>
        </div>

        <ol className="border-t border-line">
          {ordered.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isFeatured = service.id === featured.id;

            return (
              <li key={service.id}>
                <Reveal delayMs={index * 50}>
                  <div
                    className={cn(
                      "border-b border-line py-6",
                      isFeatured
                        ? "border-l-2 border-l-sage bg-sage-soft/55 px-4 sm:px-5 md:px-6 md:py-7"
                        : "px-1",
                    )}
                  >
                    <div className="flex gap-4 sm:gap-5">
                      <span
                        className="font-display text-2xl text-petrol/30 tabular-nums"
                        aria-hidden
                      >
                        {number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-xl text-petrol md:text-2xl">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                          {service.short}
                        </p>
                        {isFeatured ? (
                          <ul className="mt-4 space-y-2">
                            {service.details.slice(0, 3).map((detail) => (
                              <li
                                key={detail}
                                className="flex gap-2.5 text-sm text-ink"
                              >
                                <span
                                  className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta"
                                  aria-hidden
                                />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        <Link
                          href={`/leistungen#${service.id}`}
                          className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-petrol underline-offset-4 hover:underline"
                        >
                          Mehr erfahren
                          <ArrowRight className="size-4" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

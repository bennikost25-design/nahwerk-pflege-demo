import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cta, employerPromises, homeCopy } from "@/content/site-content";

export function CareerTeaser() {
  const { career } = homeCopy;

  return (
    <Section tone="petrol" className="!py-12 md:!py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16 lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.08em] text-on-brand/70 uppercase">
            {career.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-on-brand md:text-4xl">
            {career.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-brand/85 md:text-lg">
            {career.description}
          </p>
          <p className="mt-5 inline-flex border-l-2 border-terracotta pl-3 text-sm font-semibold tracking-wide text-on-brand">
            {career.highlight}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={cta.secondary.href} variant="terracotta" size="lg">
              {cta.secondary.label}
            </Button>
            <Button
              href="/karriere#stellen"
              variant="secondaryOnBrand"
              size="lg"
            >
              Offene Stellen ansehen
            </Button>
          </div>
        </div>

        <ul className="border-t border-on-brand/20">
          {employerPromises.map((item, index) => (
            <li key={item.title} className="border-b border-on-brand/20">
              <Reveal delayMs={index * 55}>
                <div className="grid grid-cols-[auto_1fr] gap-4 py-5">
                  <span
                    className="font-display text-lg text-on-brand/35 tabular-nums"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-on-brand md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-on-brand/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

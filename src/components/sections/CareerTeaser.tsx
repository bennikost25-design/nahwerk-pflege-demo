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
          <p className="text-sm font-semibold tracking-[0.08em] text-white/70 uppercase">
            {career.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-white md:text-4xl">
            {career.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {career.description}
          </p>
          <p className="mt-5 inline-flex border-l-2 border-terracotta pl-3 text-sm font-semibold tracking-wide text-white">
            {career.highlight}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={cta.secondary.href} variant="terracotta" size="lg">
              {cta.secondary.label}
            </Button>
            <Button
              href="/karriere#stellen"
              variant="secondary"
              size="lg"
              className="border-white/35 text-white hover:border-white hover:bg-white/10"
            >
              Offene Stellen ansehen
            </Button>
          </div>
        </div>

        <ul className="border-t border-white/20">
          {employerPromises.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 55}>
              <li className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/20 py-5">
                <span
                  className="font-display text-lg text-white/35 tabular-nums"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-white md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

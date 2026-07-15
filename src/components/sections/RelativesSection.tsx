import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { relativesContent } from "@/content/site-content";

export function RelativesSection() {
  const { eyebrow, statement, text, points } = relativesContent;

  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16 lg:items-start">
        <Reveal>
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
              {eyebrow}
            </p>
            <p className="mt-4 font-display text-balance text-3xl leading-[1.18] tracking-tight text-petrol sm:text-4xl lg:text-[2.65rem]">
              {statement}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div>
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              {text}
            </p>
            <ul className="mt-8 space-y-0 border-t border-line">
              {points.map((point, index) => (
                <li
                  key={point.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-5"
                >
                  <span
                    className="font-display text-lg text-petrol/35 tabular-nums"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-petrol">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

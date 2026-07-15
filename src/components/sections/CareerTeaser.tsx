import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cta, employerPromises } from "@/content/site-content";

export function CareerTeaser() {
  return (
    <Section tone="petrol">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          light
          eyebrow="Karriere"
          title="Gute Pflege braucht gute Bedingungen."
          description="Verlässliche Absprachen, klare Einarbeitung und erreichbare Leitung – was uns unter guter Teamarbeit wichtig ist."
        />
        <Button
          href={cta.career.href}
          variant="terracotta"
          size="lg"
          className="self-start lg:self-auto"
        >
          {cta.career.label}
        </Button>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-sm)] bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
        {employerPromises.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 60}>
            <article className="h-full bg-petrol-deep/40 p-5 md:p-6">
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/content/site-content";

export function ProcessSection() {
  return (
    <Section tone="sage">
      <SectionHeader
        title="Von der ersten Frage bis zur passenden Unterstützung"
        description="Drei nachvollziehbare Schritte – ohne Verpflichtung und ohne Fachchinesisch."
      />
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delayMs={index * 80}>
            <li className="relative h-full bg-cream/70 p-6">
              <span className="font-display text-4xl text-petrol/25">{step.step}</span>
              <h3 className="mt-3 font-display text-xl text-petrol">{step.title}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

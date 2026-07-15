import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { principles } from "@/content/site-content";
import { Handshake, MessageCircle, CalendarCheck } from "lucide-react";

const icons = [Handshake, MessageCircle, CalendarCheck];

export function TrustSection() {
  return (
    <Section tone="surface">
      <SectionHeader
        eyebrow="Worauf Sie zählen können"
        title="Drei Grundsätze statt leerer Versprechen"
        description="Keine erfundenen Kennzahlen – dafür klare Haltung für den Alltag zu Hause."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
        {principles.map((item, index) => {
          const Icon = icons[index] ?? Handshake;
          return (
            <Reveal key={item.title} delayMs={index * 80}>
              <article className="h-full border-t-2 border-petrol/80 pt-5">
                <Icon className="size-6 text-sage" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl text-petrol">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

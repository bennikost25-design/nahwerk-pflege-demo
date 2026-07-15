import { Accordion, type FaqItem } from "@/components/ui/Accordion";
import { Section, SectionHeader } from "@/components/ui/Section";

type FaqSectionProps = {
  items: ReadonlyArray<FaqItem>;
  title?: string;
  description?: string;
  eyebrow?: string;
  tone?: "cream" | "surface";
  /** Zweispalten-Layout für die Startseite; Standard bleibt für Unterseiten */
  layout?: "stack" | "split";
};

export function FaqSection({
  items,
  title = "Häufige Fragen",
  description = "Antworten aus Sicht von Pflegebedürftigen und Angehörigen – in ruhiger Sprache.",
  eyebrow,
  tone = "cream",
  layout = "stack",
}: FaqSectionProps) {
  if (layout === "split") {
    return (
      <Section tone={tone}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16 lg:items-start">
          <header className="max-w-md">
            {eyebrow ? (
              <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                {description}
              </p>
            ) : null}
          </header>
          <Accordion items={items} />
        </div>
      </Section>
    );
  }

  return (
    <Section tone={tone}>
      <SectionHeader title={title} description={description} eyebrow={eyebrow} />
      <div className="mt-8 max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}

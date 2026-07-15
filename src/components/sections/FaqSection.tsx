import { Accordion, type FaqItem } from "@/components/ui/Accordion";
import { Section, SectionHeader } from "@/components/ui/Section";

type FaqSectionProps = {
  items: ReadonlyArray<FaqItem>;
  title?: string;
  description?: string;
  tone?: "cream" | "surface";
};

export function FaqSection({
  items,
  title = "Häufige Fragen",
  description = "Antworten aus Sicht von Pflegebedürftigen und Angehörigen – in ruhiger Sprache.",
  tone = "cream",
}: FaqSectionProps) {
  return (
    <Section tone={tone}>
      <SectionHeader title={title} description={description} />
      <div className="mt-8 max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}

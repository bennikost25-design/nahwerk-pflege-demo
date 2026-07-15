import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { relativesContent } from "@/content/site-content";
import { Users } from "lucide-react";

export function RelativesSection() {
  return (
    <Section tone="surface">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
          <div
            className="flex size-14 items-center justify-center rounded-[var(--radius-sm)] bg-sage-soft text-petrol"
            aria-hidden="true"
          >
            <Users className="size-7" />
          </div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-tight text-petrol md:text-4xl">
              {relativesContent.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {relativesContent.text}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

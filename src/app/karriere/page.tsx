import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  applicationSteps,
  careersNote,
  employerPromises,
  faqCareer,
  jobs,
  workdayHighlights,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("karriere");

export default function KarrierePage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(160deg,var(--color-petrol)_0%,var(--color-petrol-deep)_100%)] text-white">
        <div className="container-site section-space">
          <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Pflege soll nicht nur für andere funktionieren.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Ein gutes Team braucht verlässliche Absprachen, ehrliche
            Kommunikation und Arbeitsbedingungen, die zum Leben passen.
          </p>
          <p className="mt-4 text-sm text-white/65">{careersNote}</p>
          <Button href="#bewerbung" variant="terracotta" size="lg" className="mt-8">
            Zur Kurzbewerbung
          </Button>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Arbeitgeberversprechen"
          description="Was uns als Team wichtig ist – Orientierung für Interessierte."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {employerPromises.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 60}>
              <article className="border-t-2 border-sage pt-4">
                <h3 className="font-display text-xl text-petrol">{item.title}</h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface" id="stellen">
        <SectionHeader
          title="Offene Stellen"
          description="Alle Stellen sind Demostellen – ohne reale Ausschreibung und ohne Verpflichtung."
        />
        <div className="mt-10 space-y-6">
          {jobs.map((job, index) => (
            <Reveal key={job.id} delayMs={index * 50}>
              <article className="border border-line bg-cream p-5 md:p-7">
                <h3 className="font-display text-2xl text-petrol">{job.title}</h3>
                <p className="mt-4 max-w-3xl text-ink-muted leading-relaxed">
                  {job.description}
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-sage uppercase">
                      Mögliche Arbeitszeitmodelle
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-ink">
                      {job.workModels.map((model) => (
                        <li key={model}>· {model}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-sage uppercase">
                      Beispielanforderungen
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-ink">
                      {job.requirements.map((req) => (
                        <li key={req}>· {req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button href="#bewerbung" className="mt-6" variant="secondary">
                  Interesse bekunden
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sage">
        <SectionHeader
          title="Arbeitsalltag"
          description="Ein stilisierter Eindruck vom Tagesablauf im Team."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {workdayHighlights.map((item) => (
            <article key={item.title} className="bg-cream/75 p-5">
              <h3 className="font-display text-xl text-petrol">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Ablauf der Bewerbung"
          description="So könnte der Weg vom ersten Kontakt zum Gespräch aussehen."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {applicationSteps.map((step) => (
            <li key={step.step} className="border border-line p-5">
              <span className="font-display text-3xl text-petrol/25">{step.step}</span>
              <h3 className="mt-2 font-display text-xl text-petrol">{step.title}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface" id="bewerbung">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              title="Kurzbewerbung"
              description="Wenige Angaben, kein Lebenslauf-Upload – ideal für den ersten Kontakt. Das Formular überträgt keine Daten."
            />
          </div>
          <ApplicationForm />
        </div>
      </Section>

      <FaqSection
        items={faqCareer}
        title="Fragen für Bewerberinnen und Bewerber"
        description="Klar und kurz beantwortet."
      />
    </>
  );
}

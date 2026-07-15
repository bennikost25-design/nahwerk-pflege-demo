import { JobInterestButton } from "@/components/career/JobInterestButton";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  applicationSteps,
  careerPage,
  careerValues,
  employerPromises,
  faqCareer,
  jobs,
  workdayHighlights,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";
import {
  HeartHandshake,
  MessageSquare,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata = createPageMetadata("karriere");

const valueIcons = [HeartHandshake, ShieldCheck, MessageSquare, UsersRound];

export default function KarrierePage() {
  const copy = careerPage;

  return (
    <>
      {/* 1. Hero */}
      <section className="border-b border-line bg-petrol text-white">
        <div className="container-site grid gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-white/70 uppercase">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-3 max-w-xl font-display text-balance text-[2rem] leading-[1.12] tracking-tight min-[380px]:text-4xl md:text-5xl">
              {copy.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              {copy.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#bewerbung" variant="terracotta" size="lg">
                In 60 Sekunden bewerben
              </Button>
              <Button
                href="#stellen"
                variant="secondary"
                size="lg"
                className="border-white/35 text-white hover:border-white hover:bg-white/10"
              >
                Offene Stellen ansehen
              </Button>
            </div>
          </div>

          <aside className="border-l-2 border-terracotta bg-petrol-soft/25 px-5 py-6 sm:px-6 md:px-7 md:py-7">
            <h2 className="font-display text-2xl text-white">
              {copy.hero.highlightTitle}
            </h2>
            <ol className="mt-5 space-y-0 border-t border-white/20">
              {copy.hero.highlightPoints.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[auto_1fr] gap-3 border-b border-white/20 py-3.5"
                >
                  <span
                    className="font-display text-base text-white/40 tabular-nums"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-white/90 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* 2. Arbeitgeberversprechen */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
          <div className="max-w-md lg:pt-1">
            <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
              {copy.promises.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
              {copy.promises.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {copy.promises.description}
            </p>
          </div>
          <ol className="border-t border-line">
            {employerPromises.map((item, index) => (
              <li key={item.title}>
                <Reveal delayMs={index * 50}>
                  <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-5 md:gap-5 md:py-6">
                    <span
                      className="font-display text-2xl text-petrol/30 tabular-nums"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-petrol">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 3. Was uns wichtig ist */}
      <Section tone="surface" className="!py-10 md:!py-12">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
            {copy.values.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-balance text-2xl leading-tight tracking-tight text-petrol md:text-3xl">
            {copy.values.title}
          </h2>
        </header>
        <ul className="mt-8 border-t border-line md:grid md:grid-cols-4 md:border-t-0">
          {careerValues.map((item, index) => {
            const Icon = valueIcons[index] ?? HeartHandshake;
            return (
              <li
                key={item.title}
                className="border-b border-line md:border-b-0 md:border-l md:border-line md:first:border-l-0"
              >
                <Reveal delayMs={index * 45}>
                  <div className="flex gap-3 py-5 md:flex-col md:gap-3 md:px-5 md:py-2 lg:px-6">
                    <Icon className="size-5 shrink-0 text-sage" aria-hidden />
                    <div>
                      <h3 className="font-display text-lg text-petrol">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 4. Offene Stellen */}
      <Section tone="cream" id="stellen">
        <header className="max-w-2xl">
          <h2 className="font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
            {copy.jobs.title}
          </h2>
          <p className="mt-3 text-sm text-ink-muted">{copy.jobs.note}</p>
        </header>

        <div className="mt-10 border-t border-line">
          {jobs.map((job, index) => (
            <article
              key={job.id}
              id={job.id}
              className="scroll-mt-28 border-b border-line py-8 md:py-10"
            >
              <Reveal delayMs={index * 40}>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span
                        className="font-display text-2xl text-petrol/30 tabular-nums"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl text-petrol md:text-3xl">
                        {job.title}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
                      {job.description}
                    </p>
                    <div className="mt-5">
                      <p className="text-sm font-semibold tracking-wide text-sage uppercase">
                        Arbeitszeit
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {job.workModels.map((model) => (
                          <li
                            key={model}
                            className="rounded-[var(--radius-sm)] border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                          >
                            {model}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <JobInterestButton role={job.roleKey} className="mt-7" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-sage uppercase">
                      Das bringen Sie mit
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex gap-3 text-ink">
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta"
                            aria-hidden
                          />
                          <span className="text-sm leading-relaxed md:text-base">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      {/* 5. Arbeitsalltag */}
      <Section tone="sage">
        <header className="max-w-2xl">
          <h2 className="font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
            {copy.workday.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            {copy.workday.description}
          </p>
        </header>

        <div className="relative mt-10 md:mt-12">
          <div
            className="pointer-events-none absolute top-4 right-[12%] left-[12%] hidden h-px bg-petrol/20 md:block"
            aria-hidden
          />
          <ol className="grid gap-0 md:grid-cols-3 md:gap-8">
            {workdayHighlights.map((item, index) => (
              <li key={item.title} className="relative">
                <Reveal delayMs={index * 60}>
                  <div className="flex gap-4 md:flex-col">
                    {index < workdayHighlights.length - 1 ? (
                      <span
                        className="absolute top-9 bottom-0 left-3 w-px bg-petrol/20 md:hidden"
                        aria-hidden
                      />
                    ) : null}
                    <span
                      className="relative z-[1] mt-1 size-2.5 shrink-0 rounded-full bg-petrol md:mt-0 md:mb-4"
                      aria-hidden
                    />
                    <div className="min-w-0 pb-8 md:pb-0">
                      <p className="text-xs font-semibold tracking-[0.08em] text-sage uppercase">
                        {item.marker}
                      </p>
                      <h3 className="mt-2 font-display text-xl text-petrol">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 6. Bewerbungsablauf */}
      <Section tone="cream">
        <header className="max-w-2xl">
          <h2 className="font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
            {copy.process.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            {copy.process.description}
          </p>
        </header>

        <div className="relative mt-10 md:mt-12">
          <div
            className="pointer-events-none absolute top-5 right-[16%] left-[16%] hidden h-px bg-petrol/20 md:block"
            aria-hidden
          />
          <ol className="grid gap-0 md:grid-cols-3 md:gap-8">
            {applicationSteps.map((step, index) => (
              <li key={step.step} className="relative">
                <Reveal delayMs={index * 55}>
                  <div className="flex gap-4 md:flex-col">
                    {index < applicationSteps.length - 1 ? (
                      <span
                        className="absolute top-10 bottom-0 left-[0.9rem] w-px bg-petrol/20 md:hidden"
                        aria-hidden
                      />
                    ) : null}
                    <div
                      className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full border border-petrol/25 bg-surface font-display text-sm font-semibold text-petrol md:mb-4 md:size-10"
                      aria-hidden
                    >
                      {step.step}
                    </div>
                    <div className="min-w-0 pb-8 md:pb-0">
                      <h3 className="font-display text-xl text-petrol">
                        <span className="sr-only">
                          {step.step}
                          {": "}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 7. Kurzbewerbung */}
      <Section tone="surface" id="bewerbung" className="scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-14 lg:items-start">
          <div className="max-w-md">
            <p className="text-sm font-semibold tracking-[0.08em] text-sage uppercase">
              {copy.apply.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
              {copy.apply.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {copy.apply.description}
            </p>
            <ul className="mt-6 space-y-0 border-t border-line">
              {copy.apply.benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className="grid grid-cols-[auto_1fr] gap-3 border-b border-line py-3.5"
                >
                  <span
                    className="font-display text-base text-petrol/35 tabular-nums"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              {copy.apply.demoNote}
            </p>
          </div>
          <ApplicationForm />
        </div>
      </Section>

      {/* 8. FAQ */}
      <FaqSection
        items={faqCareer}
        layout="split"
        eyebrow={copy.faq.eyebrow}
        title={copy.faq.title}
        description={copy.faq.description}
        tone="cream"
      />
    </>
  );
}

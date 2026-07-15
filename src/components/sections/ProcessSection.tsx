import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy, processSteps } from "@/content/site-content";

export function ProcessSection() {
  const { process } = homeCopy;

  return (
    <Section tone="sage">
      <header className="max-w-2xl">
        <h2 className="font-display text-balance text-3xl leading-tight tracking-tight text-petrol md:text-4xl">
          {process.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
          {process.description}
        </p>
      </header>

      <div className="relative mt-10 md:mt-12">
        <div
          className="pointer-events-none absolute top-5 right-[16.66%] left-[16.66%] hidden h-px bg-petrol/20 md:block"
          aria-hidden
        />
        <ol className="grid gap-0 md:grid-cols-3 md:gap-8 lg:gap-10">
        {processSteps.map((step, index) => (
          <li key={step.step} className="relative">
            <Reveal delayMs={index * 70}>
              <div className="flex gap-4 md:flex-col md:gap-0">
                {index < processSteps.length - 1 ? (
                  <span
                    className="absolute top-10 bottom-0 left-[0.9rem] w-px bg-petrol/20 md:hidden"
                    aria-hidden
                  />
                ) : null}

                <div
                  className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full border border-petrol/25 bg-elevated font-display text-sm font-semibold text-petrol md:mb-5 md:size-10 md:text-base"
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
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted md:mt-3 md:text-base">
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
  );
}

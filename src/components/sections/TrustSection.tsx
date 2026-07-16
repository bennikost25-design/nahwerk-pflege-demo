import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { homeCopy, principles } from "@/content/site-content";
import { Handshake, MessageCircle, CalendarCheck } from "lucide-react";

const icons = [Handshake, MessageCircle, CalendarCheck];

export function TrustSection() {
  const { trust } = homeCopy;

  return (
    <Section tone="surface" className="!py-10 md:!py-12">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.08em] text-sage-text uppercase">
          {trust.eyebrow}
        </p>
        <h2 className="mt-2 font-display text-balance text-2xl leading-tight tracking-tight text-petrol md:text-3xl">
          {trust.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          {trust.description}
        </p>
      </header>

      <ul className="mt-8 border-t border-line md:mt-9 md:grid md:grid-cols-3">
        {principles.map((item, index) => {
          const Icon = icons[index] ?? Handshake;
          return (
            <li
              key={item.title}
              className="border-b border-line md:border-b-0 md:border-r md:border-line md:last:border-r-0"
            >
              <Reveal delayMs={index * 60}>
                <div className="flex gap-4 py-6 md:flex-col md:gap-3 md:px-6 md:py-7 lg:px-8">
                  <Icon
                    className="mt-0.5 size-5 shrink-0 text-sage"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-lg text-petrol md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
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
  );
}

"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: ReadonlyArray<FaqItem>;
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className={cn(
                  "flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left md:min-h-16 md:py-5",
                  "font-display text-lg font-semibold text-petrol transition-colors hover:text-petrol-soft md:text-xl",
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-pretty pr-2">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-sage transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
              inert={!isOpen}
            >
              <div className="accordion-panel-inner">
                <p className="pb-5 pr-8 text-ink-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

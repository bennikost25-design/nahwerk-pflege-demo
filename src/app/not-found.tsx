import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: `Die gesuchte Seite existiert nicht. Zurück zur Demo-Website von ${siteConfig.name}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-site flex min-h-[60vh] flex-col justify-center py-16 md:py-24">
        <BrandMark
          titled
          className="size-10 text-petrol"
          title={siteConfig.name}
        />
        <p className="mt-8 text-sm font-semibold tracking-[0.1em] text-sage-text uppercase">
          Seite nicht gefunden
        </p>
        <h1 className="mt-3 max-w-xl font-display text-balance text-[2rem] leading-[1.14] tracking-tight text-petrol min-[380px]:text-4xl md:text-5xl">
          Hier führt der Weg leider nicht weiter.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:flex-wrap">
          <Button href="/" size="lg">
            Zur Startseite
          </Button>
          <Button href="/kontakt" variant="secondary" size="lg">
            Kontakt ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}

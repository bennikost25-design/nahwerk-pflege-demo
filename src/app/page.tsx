import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { ContactCta } from "@/components/sections/ContactCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RelativesSection } from "@/components/sections/RelativesSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrustSection } from "@/components/sections/TrustSection";
import { faqHome } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesPreview />
      <ProcessSection />
      <RelativesSection />
      <CareerTeaser />
      <FaqSection
        items={faqHome}
        layout="split"
        eyebrow="Orientierung"
        title="Häufige Fragen"
        description="Kurze Antworten für Pflegebedürftige und Angehörige – in ruhiger Sprache."
        tone="surface"
      />
      <ContactCta variant="closing" />
    </>
  );
}

import { generateMetadata } from "./metadata";
import {
  AboutHero,
  AboutStory,
  ServicesSection,
  ProcessSection,
  TeamSection,
  ValuesSection,
  FAQSection,
  CTASection
} from "@/components/about"
import { NavBar, Footer } from "@/components/layout";
import { BrandSignature } from "@/components/shared";

export { generateMetadata };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 pt-[5rem] sm:px-6 lg:px-8 py-16">
        <AboutHero />
        <AboutStory />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <ValuesSection />
        <FAQSection />
        <CTASection />
      </main>
      <div className="text-center py-12">
        <BrandSignature />
      </div>
      <Footer />
    </div>
  );
}


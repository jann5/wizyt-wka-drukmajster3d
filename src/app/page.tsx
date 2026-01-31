import HeroSection from "@/components/sections/HeroSection";
import F170ShowcaseSection from "@/components/sections/F170ShowcaseSection";
import PortfolioGallerySection from "@/components/sections/PortfolioGallerySection";
import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import PricingCalculatorSection from "@/components/sections/PricingCalculatorSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Main Page - Cinematic Portfolio Experience
 *
 * Scroll-driven storytelling with 6 major sections:
 * 1. Hero - Particle intro with kinetic typography
 * 2. F170 Showcase - Interactive 3D model and specifications
 * 3. Portfolio Gallery - Horizontal scroll with projects
 * 4. Process Timeline - Vertical with diagonal transition
 * 5. Pricing Calculator - Real-time cost estimation
 * 6. Contact - Morphing form with particle explosion
 */
export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: F170 Showcase */}
      <F170ShowcaseSection />

      {/* Section 3: Portfolio Gallery */}
      <PortfolioGallerySection />

      {/* Section 4: Process Timeline */}
      <ProcessTimelineSection />

      {/* Section 5: Pricing Calculator */}
      <PricingCalculatorSection />

      {/* Section 6: Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0A0E17] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">
              Grzegorz Nawrot
            </h3>
            <p className="text-sm text-neutral-300">
              Stratasys F170 Premium 3D Printing
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-100 mb-2">
              Services
            </h4>
            <ul className="text-sm text-neutral-300 space-y-1">
              <li>Functional Prototyping</li>
              <li>Manufacturing Tooling</li>
              <li>End-Use Parts</li>
              <li>Design Validation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-100 mb-2">
              Contact
            </h4>
            <p className="text-sm text-neutral-300">
              Email: kontakt@example.pl
            </p>
            <p className="text-sm text-neutral-300">Tel: +48 XXX XXX XXX</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-neutral-300">
          <p>© {new Date().getFullYear()} Grzegorz Nawrot. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

import CollapsibleSection from "@/components/CollapsibleSection";
import CinematicIntro from "@/components/CinematicIntro";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="scanlines noise relative flex flex-1 flex-col">
      <CinematicIntro />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stack />

        <div className="mx-auto max-w-6xl px-6">
          <p className="pb-6 pt-16 font-mono text-[10px] uppercase tracking-[0.22em] text-mist/50 md:pt-20">
            Explore
          </p>
        </div>

        <div className="mx-auto max-w-6xl border-t border-edge px-0">
          <CollapsibleSection
            id="services"
            eyebrow="01 — What we do"
            title="Services"
            summary="Mobile, web, security research and embedded hardware — built end to end, in-house."
            defaultOpen
          >
            <Services />
          </CollapsibleSection>

          <CollapsibleSection
            id="projects"
            eyebrow="02 — Proof"
            title="Selected work"
            summary="Shipped products, open-source tooling and live security infrastructure."
          >
            <Projects />
          </CollapsibleSection>

          <CollapsibleSection
            id="approach"
            eyebrow="03 — How"
            title="Approach"
            summary="Small senior teams, working software, and no hand-offs to the void."
          >
            <Approach />
          </CollapsibleSection>

          <CollapsibleSection
            id="pricing"
            eyebrow="04 — Engagement"
            title="Pricing"
            summary="Fixed scope, transparent rates, and a commercial model that scales with you."
          >
            <Pricing />
          </CollapsibleSection>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

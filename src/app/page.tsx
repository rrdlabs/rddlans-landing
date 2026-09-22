import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="scanlines noise relative flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stack />
        <Services />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,#1e293b,#020617_55%)] text-slate-100">
      <Navbar onNavigate={scrollToSection} showLogo={false} />

      <main className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-6">
        <section id="hero">
          <Hero />
        </section>

        <section
          id="about"
          className="scroll-mt-32 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <About />
        </section>

        <section
          id="services"
          className="scroll-mt-32 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <Services />
        </section>

        <section
          id="contact"
          className="scroll-mt-32 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

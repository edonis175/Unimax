import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="min-h-screen overflow-x-clip bg-[#061126] font-sans text-slate-100">
      <Navbar onNavigate={scrollToSection} />
      <main>
        <section id="hero">
          <Hero onNavigate={scrollToSection} />
        </section>
        <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <About onNavigate={scrollToSection} />
        </section>
        <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <Services onNavigate={scrollToSection} />
        </section>
        <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <Contact />
        </section>
      </main>
      <Footer onNavigate={scrollToSection} />
      <ScrollToTop />
    </div>
  );
}

export default App;

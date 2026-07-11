import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Hero from "./pages/Hero";
// import Services from "./pages/Services";

function App() {
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);

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
    <div className="app-root">
      <div className="intro-overlay"></div>
      <Navbar onNavigate={scrollToSection} showLogo={showNavbarLogo} />

      <main className="app-main pt-24 sm:pt-28 lg:pt-32">
        {/* <section
          id="hero"
          className="app-section pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-24"
        >
          <Hero />
        </section> */}
        <section
          id="about"
          className="app-section py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <About />
        </section>
        {/* <section
          id="services"
          className="app-section py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <Services />
        </section> */}
        {/* <section
          id="contact"
          className="app-section py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <Contact />
        </section> */}
      </main>
    </div>
  );
}

export default App;

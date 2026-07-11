import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function Navbar({ onNavigate, showLogo }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (id) => {
    if (typeof onNavigate === "function") {
      onNavigate(id);
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-2.5 left-1/2 z-100 w-[95vw] max-w-6xl -translate-x-1/2">
      <nav
        className="relative flex min-h-16 items-center justify-between rounded-full border border-white/30 bg-white/10 px-3 py-2 shadow-[0_12px_40px_rgba(2,6,23,0.4),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-2xl backdrop-saturate-150 sm:px-5"
        aria-label="Primary navigation"
      >
        <button
          type="button"
          className="cursor-pointer border-none bg-transparent p-0"
          onClick={() => handleNavigate("hero")}
          aria-label="Go to home section"
        >
          <img
            src="/images/Unimax-logo.png"
            alt="Unimax"
            className={`h-auto w-28 transition-opacity duration-200 sm:w-32 ${
              showLogo ? "opacity-100" : "opacity-95"
            }`}
          />
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`cursor-pointer rounded-full px-4 py-2 text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:text-sky-300 md:text-base md:px-5 lg:text-lg lg:px-4 ${
                  item.id === "hero" ||
                  item.id === "about" ||
                  item.id === "services" ||
                  item.id === "contact"
                    ? "md:text-lg md:px-6 lg:text-lg lg:px-5"
                    : ""
                }`}
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border-none bg-transparent md:hidden"
          aria-expanded={isOpen}
          aria-controls="unimax-mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`absolute h-0.5 w-5 origin-center rounded-full bg-white transform-gpu transition-all duration-300 ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 origin-center rounded-full bg-white transform-gpu transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 origin-center rounded-full bg-white transform-gpu transition-all duration-300 ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      <div
        id="unimax-mobile-menu"
        style={{
          transitionDelay: isOpen ? "0ms" : `${NAV_ITEMS.length * 110 + 300}ms`,
        }}
        className={`mt-2 mx-3 overflow-hidden rounded-2xl bg-white/10 shadow-[0_12px_40px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl backdrop-saturate-150 transition-[max-height,opacity,transform] duration-500 ease-out md:hidden ${
          isOpen
            ? "max-h-72 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-1 p-2">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              style={{
                transitionDelay: isOpen
                  ? `${index * 110 + 80}ms`
                  : `${(NAV_ITEMS.length - 1 - index) * 110}ms`,
              }}
              className={`transform-gpu cursor-pointer rounded-xl px-3 py-3 text-left text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-650 ease hover:-translate-y-1 hover:text-white ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
              } ${
                item.id === "hero" ||
                item.id === "about" ||
                item.id === "services" ||
                item.id === "contact"
                  ? "text-base"
                  : "text-sm"
              }`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

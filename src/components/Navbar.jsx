import { useEffect, useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function AnimatedLink({ item, onNavigate }) {
  const [direction, setDirection] = useState("left");
  const [hovered, setHovered] = useState(false);
  const letters = [...item.label];
  const handlePointerEnter = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setDirection(event.clientX - rect.left < rect.width / 2 ? "left" : "right");
    setHovered(true);
  };
  return (
    <a
      href={`#${item.id}`}
      aria-label={`Go to ${item.label}`}
      data-hovered={hovered}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => {
        setDirection("left");
        setHovered(true);
      }}
      onBlur={() => setHovered(false)}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(item.id);
      }}
      className="nav-link inline-flex rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-200 outline-none transition-colors hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-sky-200 md:px-4"
    >
      <span aria-hidden="true">
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="nav-character"
            style={{
              "--char-order":
                direction === "left" ? index : letters.length - 1 - index,
            }}
          >
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
    </a>
  );
}

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const closeAtDesktop = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", closeAtDesktop);
    return () => window.removeEventListener("resize", closeAtDesktop);
  }, []);
  const navigate = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };
  return (
    <header className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 sm:w-[calc(100%-3rem)]">
      <nav className="flex min-h-16 items-center justify-between rounded-[1.35rem] border border-white/20 bg-[#061735]/72 px-3 py-2 shadow-[0_16px_45px_rgba(1,9,27,.35),inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-2xl">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            navigate("hero");
          }}
          aria-label="UNIMAX home"
          className="rounded-xl p-1 outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
        >
          <img
            src="/images/Unimax-logo.png"
            alt="Unimax"
            className="h-16 w-25 object-contain brightness-0 invert sm:w-32"
          />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <AnimatedLink key={item.id} item={item} onNavigate={navigate} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => navigate("contact")}
          className="hidden items-center gap-2 rounded-xl border border-sky-200/30 bg-sky-300/15 px-4 py-2 text-sm font-bold text-sky-50 shadow-[inset_0_1px_0_rgba(255,255,255,.18)] transition-all hover:-translate-y-0.5 hover:bg-sky-300/25 focus-visible:outline-2 focus-visible:outline-sky-200 md:inline-flex"
        >
          Get in touch <ImArrowUpRight2 className="text-xs" />
        </button>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white focus-visible:outline-2 focus-visible:outline-sky-200 md:hidden"
        >
          <span aria-hidden="true" className="relative h-4 w-5">
            <i
              className={`absolute left-0 top-0 block h-px w-5 bg-current transition-transform ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <i
              className={`absolute left-0 top-[7px] block h-px w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <i
              className={`absolute left-0 top-[14px] block h-px w-5 bg-current transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`grid overflow-hidden rounded-2xl border border-white/12 bg-[#061735]/94 px-3 backdrop-blur-2xl transition-all duration-300 md:hidden ${isOpen ? "mt-2 max-h-72 py-3 opacity-100" : "pointer-events-none max-h-0 py-0 opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => {
              event.preventDefault();
              navigate(item.id);
            }}
            className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-sky-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;

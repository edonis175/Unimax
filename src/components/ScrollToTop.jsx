import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 560);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-sky-300/15 text-sky-50 shadow-[0_12px_32px_rgba(2,18,48,.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-sky-300/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 sm:right-7 sm:bottom-7 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;

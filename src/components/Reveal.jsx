import { createElement, useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // eslint-disable-next-line react-hooks/refs -- React's ref prop is intentionally forwarded to the reveal wrapper.
  return createElement(Tag, { ref, className: `reveal ${className}`, "data-visible": visible, style: { "--reveal-delay": `${delay}ms` } }, children);
}

export default Reveal;

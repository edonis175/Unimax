import { createElement, useCallback, useEffect, useState } from "react";

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [node, setNode] = useState(null);
  const ref = useCallback((element) => setNode(element), []);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return createElement(
    Tag,
    {
      ref,
      className: `reveal ${className}`,
      "data-visible": visible,
      style: { "--reveal-delay": `${delay}ms` },
    },
    children,
  );
}

export default Reveal;

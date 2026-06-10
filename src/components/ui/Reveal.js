"use client";

import { useRef, useLayoutEffect } from "react";

/**
 * Reveal — SSR-safe scroll-triggered fade+slide animation.
 *
 * - The hidden state (.reveal) is applied CLIENT-SIDE only (useLayoutEffect),
 *   so without JS the content is always visible. No flash, no SEO impact.
 * - Respects prefers-reduced-motion: if reduced, skips the hidden state entirely.
 * - Uses IntersectionObserver; disconnects after reveal when `once` is true.
 *
 * Props:
 *   as        — HTML tag to render (default: "div")
 *   delay     — transition-delay in ms for stagger (default: 0)
 *   className — extra classes forwarded to the element
 *   threshold — IO threshold (default: 0.15)
 *   once      — disconnect observer after first reveal (default: true)
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  threshold = 0.15,
  once = true,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — never hide content
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Apply hidden state before first paint (client only)
    el.classList.add("reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

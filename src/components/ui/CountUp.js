"use client";

import { useState, useEffect, useRef } from "react";

/**
 * CountUp — animates a number from 0 to `target` when the element
 * enters the viewport (IntersectionObserver). No setTimeout workaround.
 *
 * Props:
 *   target   — final numeric value
 *   suffix   — string appended after the number (e.g. "+", "%")
 *   className — forwarded to the wrapper <b>
 */
export default function CountUp({ target, suffix = "", className = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (target === 0) {
          setVal(0);
          return;
        }

        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          cur += step;
          if (cur >= target) {
            setVal(target);
            return;
          }
          setVal(cur);
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <b ref={ref} className={className}>
      {val}{suffix}
    </b>
  );
}

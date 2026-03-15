"use client";

import { useEffect, useRef, useState } from "react";

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

type Props = {
  value: string;
  className?: string;
};

export default function AnimatedCounter({ value, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const animated = useRef(false);

  const match = value.match(/^(\d+)(.*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1600;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.round(target * easeOutQuart(progress));
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, match]);

  const initialDisplay = match ? `0${match[2]}` : value;

  return (
    <span ref={ref} className={className}>
      {animated.current || !match ? display : initialDisplay}
    </span>
  );
}

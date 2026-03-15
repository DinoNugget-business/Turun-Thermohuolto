"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
};

const DIRECTION_CLASS: Record<Direction, string> = {
  up: "",
  left: "anim-fadeLeft",
  right: "anim-fadeRight",
  scale: "anim-scaleIn",
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = DIRECTION_CLASS[direction];

  return (
    <div ref={ref} className={`animate-on-scroll ${dirClass} ${className}`}>
      {children}
    </div>
  );
}

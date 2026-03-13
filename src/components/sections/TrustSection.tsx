"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string; isNumeric: boolean; numericValue?: number; suffix?: string };

export default function TrustSection() {
  const t = useTranslations("trust");

  const stats: Stat[] = [
    { value: "2004", label: t("founded"), isNumeric: true, numericValue: 2004 },
    { value: "15+", label: t("brands"), isNumeric: true, numericValue: 15, suffix: "+" },
    { value: "24/7", label: t("emergency"), isNumeric: false },
    { value: t("atpValue"), label: t("atpLabel"), isNumeric: false },
  ];

  return (
    <section
      className="clip-diagonal-top py-20 sm:py-24 px-5"
      style={{ backgroundColor: "#1B3A5C" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center ${i < stats.length - 1 ? "lg:border-r" : ""}`}
              style={{ borderColor: "rgba(10,205,223,0.15)" }}
            >
              <CountUpValue stat={stat} />
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpValue({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(stat.isNumeric ? "0" : stat.value);
  const animated = useRef(false);

  useEffect(() => {
    if (!stat.isNumeric || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const target = stat.numericValue!;
          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current}${stat.suffix || ""}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <p
      ref={ref}
      className="text-4xl sm:text-5xl font-extrabold"
      style={{ fontFamily: "var(--font-display)", color: "#0ACDDF" }}
    >
      {display}
    </p>
  );
}

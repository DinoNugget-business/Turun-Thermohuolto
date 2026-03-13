"use client";

import { useTranslations } from "next-intl";
import { Phone, Search, Wrench, ShieldCheck } from "lucide-react";

const STEPS = [
  { icon: Phone, key: "step1" },
  { icon: Search, key: "step2" },
  { icon: Wrench, key: "step3" },
  { icon: ShieldCheck, key: "step4" },
] as const;

export default function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section
      className="clip-diagonal-top py-20 sm:py-24 px-5"
      style={{ backgroundColor: "#1B3A5C" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
          >
            {t("title")}
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 stagger-sm">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.key} className="relative text-center animate-on-scroll">
                {/* Step number watermark */}
                <span
                  className="absolute -top-2 left-1/2 -translate-x-1/2 text-7xl font-extrabold pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(10,205,223,0.06)",
                    lineHeight: 1,
                  }}
                >
                  {i + 1}
                </span>

                {/* Icon */}
                <div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "rgba(10,205,223,0.1)",
                    border: "1px solid rgba(10,205,223,0.2)",
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#0ACDDF" }} />
                </div>

                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
                >
                  {t(`${step.key}Title`)}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {t(`${step.key}Desc`)}
                </p>

                {/* Dashed connector (desktop only, not after last) */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 -right-3 w-6 border-t-2 border-dashed"
                    style={{ borderColor: "rgba(10,205,223,0.2)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

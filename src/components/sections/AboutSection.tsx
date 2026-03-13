"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const MILESTONES = [
  { year: "2004", key: "milestone1" },
  { year: "2010", key: "milestone2" },
  { year: "2024", key: "milestone3" },
] as const;

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 sm:py-24 px-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — heading + description + photos */}
          <div className="animate-on-scroll">
            <div className="accent-bar mb-8">
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
              >
                {t("title")}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B7280", fontFamily: "var(--font-body)" }}
              >
                {t("description")}
              </p>
            </div>

            {/* Company photos grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/facility.jpg"
                  alt="Thermohuolto workshop facility in Lieto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/company.jpg"
                  alt="Thermohuolto company and team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Right — vertical timeline */}
          <div className="relative pl-8">
            {/* Timeline line */}
            <div
              className="absolute left-3 top-2 bottom-2 w-px"
              style={{ backgroundColor: "rgba(10,205,223,0.2)" }}
            />

            <div className="space-y-10">
              {MILESTONES.map((m) => (
                <div key={m.key} className="relative animate-on-scroll">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-5 top-1 w-4 h-4 rounded-full border-[3px]"
                    style={{
                      borderColor: "#0ACDDF",
                      backgroundColor: "#FAFAF8",
                    }}
                  />

                  <p
                    className="text-2xl font-extrabold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "#0ACDDF" }}
                  >
                    {m.year}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {t(m.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Calendar, MapPin, Award } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const milestones = [
    { icon: Calendar, year: "2004", key: "milestone1" },
    { icon: MapPin, year: "2010", key: "milestone2" },
    { icon: Award, year: "2024", key: "milestone3" },
  ];

  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#0F1B2D" }}
          >
            {t("title")}
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#5A6B7F" }}>
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.key} className="glass-card rounded-xl p-6 text-center animate-on-scroll">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(0,163,191,0.1)", border: "1px solid rgba(0,163,191,0.15)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#00A3BF" }} />
                </div>
                <p className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#00A3BF" }}>
                  {m.year}
                </p>
                <p className="text-sm" style={{ color: "#5A6B7F" }}>
                  {t(m.key)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

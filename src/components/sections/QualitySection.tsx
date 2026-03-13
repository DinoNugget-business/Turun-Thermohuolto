"use client";

import { useTranslations } from "next-intl";
import { Shield, Clock, Award, BarChart3 } from "lucide-react";

export default function QualitySection() {
  const t = useTranslations("quality");

  const items = [
    { icon: Shield, key: "standards" },
    { icon: Clock, key: "service247" },
    { icon: Award, key: "training" },
    { icon: BarChart3, key: "reporting" },
  ];

  return (
    <section id="quality" className="py-20 px-6" style={{ backgroundColor: "#0F1B2D" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
          >
            {t("title")}
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#8A9BB0" }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="dark-card rounded-xl p-6 animate-on-scroll group">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-hover-lift"
                    style={{ backgroundColor: "rgba(0,163,191,0.12)", border: "1px solid rgba(0,163,191,0.25)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#00A3BF" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: "#F5F5F5" }}>
                      {t(`${item.key}Title`)}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#8A9BB0" }}>
                      {t(`${item.key}Desc`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

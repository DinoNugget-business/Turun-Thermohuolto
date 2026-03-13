"use client";

import { useTranslations, useLocale } from "next-intl";
import { SERVICES } from "@/lib/constants";
import * as Icons from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section id="services" className="py-20 px-6" style={{ backgroundColor: "#F2F5F8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#0F1B2D" }}
          >
            {t("title")}
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5A6B7F" }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 stagger-children">
          {SERVICES.map((service) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComp = (Icons as any)[service.icon] as React.ComponentType<{ className?: string; style?: React.CSSProperties }> | undefined;
            return (
              <div
                key={service.id}
                className="group glass-card rounded-xl p-5 text-center cursor-default animate-on-scroll"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 icon-hover-lift"
                  style={{ backgroundColor: "rgba(0,163,191,0.1)", border: "1px solid rgba(0,163,191,0.15)" }}
                >
                  {IconComp && <IconComp className="w-5 h-5" style={{ color: "#00A3BF" }} />}
                </div>
                <h3 className="font-semibold text-sm mb-1.5" style={{ color: "#0F1B2D" }}>
                  {locale === "fi" ? service.fi : service.en}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#5A6B7F" }}>
                  {locale === "fi" ? service.descFi : service.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

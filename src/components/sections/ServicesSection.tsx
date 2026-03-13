"use client";

import { useTranslations, useLocale } from "next-intl";
import { SERVICES } from "@/lib/constants";
import * as Icons from "lucide-react";
import Image from "next/image";

const FEATURED_IDS = ["refrigeration", "heating", "ac"] as const;

const FEATURED_IMAGES: Record<string, string> = {
  refrigeration: "/images/references/refrigeration-units.jpg",
  heating: "/images/news/vehicle-ac.jpg",
  ac: "/images/news/ac-service.jpg",
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();

  const featured = SERVICES.filter((s) => FEATURED_IDS.includes(s.id as typeof FEATURED_IDS[number]));
  const compact = SERVICES.filter((s) => !FEATURED_IDS.includes(s.id as typeof FEATURED_IDS[number]));

  return (
    <section id="services" className="py-20 sm:py-24 px-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="accent-bar mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
          >
            {t("title")}
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#6B7280", fontFamily: "var(--font-body)" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Featured trio — cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 stagger-sm">
          {featured.map((service) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComp = (Icons as any)[service.icon] as React.ComponentType<{ className?: string; style?: React.CSSProperties }> | undefined;
            const imgSrc = FEATURED_IMAGES[service.id];
            return (
              <div
                key={service.id}
                className="elevated-card rounded-xl overflow-hidden animate-on-scroll group"
              >
                {/* Image */}
                {imgSrc && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={locale === "fi" ? service.fi : service.en}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(27,58,92,0.4) 0%, transparent 60%)" }}
                    />
                  </div>
                )}

                <div className="p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(10,205,223,0.08)" }}
                  >
                    {IconComp && <IconComp className="w-6 h-6" style={{ color: "#0ACDDF" }} />}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
                  >
                    {locale === "fi" ? service.fi : service.en}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {locale === "fi" ? service.descFi : service.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact list — remaining services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
          {compact.map((service) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComp = (Icons as any)[service.icon] as React.ComponentType<{ className?: string; style?: React.CSSProperties }> | undefined;
            return (
              <div
                key={service.id}
                className="flex items-center gap-4 py-4 animate-on-scroll"
                style={{ borderBottom: "1px solid #E8E4DF" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(10,205,223,0.06)" }}
                >
                  {IconComp && <IconComp className="w-4 h-4" style={{ color: "#0ACDDF" }} />}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm" style={{ color: "#1B3A5C" }}>
                    {locale === "fi" ? service.fi : service.en}
                  </h4>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    {locale === "fi" ? service.descFi : service.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

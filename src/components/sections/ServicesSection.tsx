"use client";

import { useTranslations } from "next-intl";
import { SERVICES } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import Image from "next/image";

const FEATURED_IDS = ["refrigeration", "heating", "ac"] as const;

const FEATURED_IMAGES: Record<string, string> = {
  refrigeration: "/images/references/refrigeration-units.jpg",
  heating: "/images/news/vehicle-ac.jpg",
  ac: "/images/news/ac-service.jpg",
};

/* Map service.id → translation key prefix in servicesPage */
const T_KEY: Record<string, string> = {
  refrigeration: "refrigeration",
  heating: "heating",
  ac: "ac",
  electrical: "electrical",
  atp: "atp",
  bio: "bio",
  "boat-rv": "boatRv",
  agriculture: "agriculture",
  addvolt: "addvolt",
  vulcan: "vulcan",
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const ts = useTranslations("servicesPage");

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
            const imgSrc = FEATURED_IMAGES[service.id];
            const tKey = T_KEY[service.id] || service.id;
            return (
              <div
                key={service.id}
                className="elevated-card rounded-xl overflow-hidden animate-on-scroll group"
              >
                {imgSrc && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={ts(`${tKey}Title`)}
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
                    <Icon name={service.icon as IconName} size={24} className="text-cyan" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
                  >
                    {ts(`${tKey}Title`)}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {ts(`${tKey}Desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact list — remaining services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
          {compact.map((service) => {
            const tKey = T_KEY[service.id] || service.id;
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
                  <Icon name={service.icon as IconName} size={16} className="text-cyan" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm" style={{ color: "#1B3A5C" }}>
                    {ts(`${tKey}Title`)}
                  </h4>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    {ts(`${tKey}Desc`)}
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

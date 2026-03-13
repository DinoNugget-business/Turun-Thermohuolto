"use client";

import { useTranslations } from "next-intl";
import { BRANDS } from "@/lib/constants";

export default function BrandsSection() {
  const t = useTranslations("brands");
  const allBrands = [...BRANDS.refrigeration, ...BRANDS.heating, ...BRANDS.ac, ...BRANDS.other];

  return (
    <section id="brands" className="py-16 px-6" style={{ backgroundColor: "#0F1B2D" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-on-scroll">
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

        <div className="flex flex-wrap justify-center gap-3 stagger-children">
          {allBrands.map((brand) => (
            <div
              key={brand}
              className="dark-card rounded-xl px-5 py-3 text-sm font-medium animate-on-scroll"
              style={{ color: "#E0E4E8" }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

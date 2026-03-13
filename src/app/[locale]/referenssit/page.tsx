import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import Image from "next/image";
import FooterSection from "@/components/sections/FooterSection";
import ScrollAnimator from "@/components/sections/ScrollAnimator";

const REFERENCE_CATEGORIES = [
  { key: "boats", image: "/images/references/boats-motorhomes.jpg" },
  { key: "refrigeration", image: "/images/references/refrigeration-units.jpg" },
  { key: "bio", image: "/images/references/bio-refrigeration.jpg" },
  { key: "tractors", image: "/images/references/tractors-equipment.jpg" },
  { key: "vehicles", image: "/images/references/vehicles.jpg" },
] as const;

export default function ReferenssitPage() {
  const t = useTranslations("referencesPage");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  return (
    <>
      <ScrollAnimator />

      {/* Hero banner */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 px-5 overflow-hidden"
        style={{ backgroundColor: "#0C1824" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("/images/hero/hero-2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,24,36,0.85), rgba(12,24,36,0.95))" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <a
            href={`/${locale === "fi" ? "" : locale}`}
            className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-80"
            style={{ color: "#0ACDDF" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {tNav("backHome")}
          </a>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
          >
            {t("title")}
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#C0CCD8" }}>
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Reference categories */}
      <section className="py-16 sm:py-20 px-5" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFERENCE_CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                className="elevated-card rounded-xl overflow-hidden animate-on-scroll group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={t(`${cat.key}Title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(12,24,36,0.7) 0%, transparent 50%)" }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t(`${cat.key}Title`)}
                    </h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {t(`${cat.key}Desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-12 px-5" style={{ backgroundColor: "#1B3A5C" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
          >
            {t("ctaTitle")}
          </h2>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#0ACDDF" }}
          >
            <Phone className="w-4 h-4" />
            {CONTACT.phone}
          </a>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

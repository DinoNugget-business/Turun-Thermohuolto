import { useTranslations, useLocale } from "next-intl";
import { SERVICES, CONTACT } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { Phone, ArrowLeft } from "lucide-react";
import Image from "next/image";
import FooterSection from "@/components/sections/FooterSection";
import ScrollAnimator from "@/components/sections/ScrollAnimator";

const SERVICE_IMAGES: Record<string, string> = {
  refrigeration: "/images/references/refrigeration-units.jpg",
  heating: "/images/news/vehicle-ac.jpg",
  ac: "/images/news/ac-service.jpg",
  "boat-rv": "/images/references/boats-motorhomes.jpg",
  bio: "/images/references/bio-refrigeration.jpg",
  agriculture: "/images/references/tractors-equipment.jpg",
  vulcan: "/images/news/mercedes-service.jpg",
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

export default function PalvelutPage() {
  const t = useTranslations("servicesPage");
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
            backgroundImage: `url("/images/hero/hero-4.jpg")`,
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

      {/* Services grid */}
      <section className="py-16 sm:py-20 px-5" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const imgSrc = SERVICE_IMAGES[service.id];
              const tKey = T_KEY[service.id] || service.id;

              return (
                <div
                  key={service.id}
                  className="elevated-card rounded-xl overflow-hidden animate-on-scroll group"
                >
                  {imgSrc && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={t(`${tKey}Title`)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(27,58,92,0.5) 0%, transparent 50%)" }}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(10,205,223,0.08)" }}
                      >
                        <Icon name={service.icon as IconName} size={24} className="text-cyan" />
                      </div>
                      <div>
                        <h2
                          className="text-xl font-bold mb-2"
                          style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
                        >
                          {t(`${tKey}Title`)}
                        </h2>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
                          {t(`${tKey}Desc`)}
                        </p>
                        <a
                          href={CONTACT.phoneHref}
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                          style={{ color: "#0ACDDF" }}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          {CONTACT.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#0ACDDF" }}
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emergencyHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#E85C2A" }}
            >
              <Phone className="w-4 h-4" />
              24/7: {CONTACT.emergency}
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

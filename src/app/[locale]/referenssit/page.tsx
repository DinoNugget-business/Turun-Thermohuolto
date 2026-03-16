import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";

import { CONTACT, SITE, WEBSITE_URL } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "referencesPage" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `${WEBSITE_URL}/${locale}/referenssit`,
      languages: { fi: `${WEBSITE_URL}/fi/referenssit`, en: `${WEBSITE_URL}/en/referenssit` },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      url: `${WEBSITE_URL}/${locale}/referenssit`,
      type: "website",
      siteName: SITE.name,
      locale: locale === "fi" ? "fi_FI" : "en_US",
    },
    twitter: { card: "summary", title: t("title"), description: t("subtitle") },
  };
}
import Image from "next/image";
import { Link } from "@/i18n/navigation";
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

  return (
    <>
      <ScrollAnimator />

      {/* Hero banner */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 px-5 overflow-hidden bg-dark">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("/images/hero/hero-2.jpg")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/85 to-dark/95" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-6 text-cyan transition-opacity hover:opacity-80"
          >
            ← {tNav("backHome")}
          </Link>
          <h1 className="page-heading text-4xl sm:text-5xl font-bold mb-4 font-display text-text-light">
            {t("title")}
          </h1>
          <p className="page-subtitle text-lg max-w-2xl text-text-light-muted">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Reference categories */}
      <section className="py-16 sm:py-20 px-5 bg-warm-white">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-bold text-white font-display">
                      {t(`${cat.key}Title`)}
                    </h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-text-muted">
                    {t(`${cat.key}Desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-12 px-5 bg-steel">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display text-text-light">
            {t("ctaTitle")}
          </h2>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white bg-cyan hover:bg-cyan-dark transition-colors"
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

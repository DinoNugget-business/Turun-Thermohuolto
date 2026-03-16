import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SERVICES, CONTACT, SITE, WEBSITE_URL } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `${WEBSITE_URL}/${locale}/palvelut`,
      languages: { fi: `${WEBSITE_URL}/fi/palvelut`, en: `${WEBSITE_URL}/en/palvelut` },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      url: `${WEBSITE_URL}/${locale}/palvelut`,
      type: "website",
      siteName: SITE.name,
      locale: locale === "fi" ? "fi_FI" : "en_US",
    },
    twitter: { card: "summary", title: t("title"), description: t("subtitle") },
  };
}
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
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

  return (
    <>
      <ScrollAnimator />

      {/* Hero banner */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 px-5 overflow-hidden bg-dark">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("/images/hero/hero-4.jpg")` }}
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

      {/* Services grid */}
      <section className="py-16 sm:py-20 px-5 bg-warm-white">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-steel/50 to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-cyan/8">
                        <Icon name={service.icon as IconName} size={24} className="text-cyan" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-2 font-display text-steel">
                          {t(`${tKey}Title`)}
                        </h2>
                        <p className="text-sm leading-relaxed mb-4 text-text-muted">
                          {t(`${tKey}Desc`)}
                        </p>
                        <a
                          href={CONTACT.phoneHref}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-opacity hover:opacity-80"
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
      <section className="py-12 px-5 bg-steel">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display text-text-light">
            {t("ctaTitle")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white bg-cyan hover:bg-cyan-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emergencyHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white bg-emergency hover:bg-emergency-dark transition-colors"
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

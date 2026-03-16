import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { BRANDS, CONTACT, SITE, WEBSITE_URL } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productsPage" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `${WEBSITE_URL}/${locale}/tuotteet`,
      languages: { fi: `${WEBSITE_URL}/fi/tuotteet`, en: `${WEBSITE_URL}/en/tuotteet` },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      url: `${WEBSITE_URL}/${locale}/tuotteet`,
      type: "website",
      siteName: SITE.name,
      locale: locale === "fi" ? "fi_FI" : "en_US",
    },
    twitter: { card: "summary", title: t("title"), description: t("subtitle") },
  };
}
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";
import FooterSection from "@/components/sections/FooterSection";

export default function ProductsPage() {
  const t = useTranslations("productsPage");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Refrigeration */}
          <ScrollReveal>
            <h2 className="font-bold text-xl mb-6 text-text flex items-center gap-2 font-display">
              <Icon name="snowflake" size={22} className="text-steel" />
              {t("refrigerationTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
              {BRANDS.refrigeration.map((brand) => (
                <ScrollReveal key={brand.name} direction="scale">
                  <BrandCard brand={brand} visitLabel={t("visitWebsite")} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Heating & AC */}
          <ScrollReveal>
            <h2 className="font-bold text-xl mb-6 text-text flex items-center gap-2 font-display">
              <Icon name="flame" size={22} className="text-emergency" />
              {t("heatingTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
              {[...BRANDS.heating, ...BRANDS.ac].map((brand) => (
                <ScrollReveal key={brand.name} direction="scale">
                  <BrandCard brand={brand} visitLabel={t("visitWebsite")} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Other */}
          <ScrollReveal>
            <h2 className="font-bold text-xl mb-6 text-text font-display">
              {t("otherTitle")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {BRANDS.other.map((brand) => (
                <BrandCard key={brand.name} brand={brand} visitLabel={t("visitWebsite")} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Used equipment + pipe repair */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="light-card rounded-xl p-6 sm:p-8 h-full">
                <h2 className="font-bold text-xl mb-4 text-text font-display">
                  {t("usedEquipmentTitle")}
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">{t("usedEquipmentDesc")}</p>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-steel hover:text-cyan transition-colors"
                >
                  <Icon name="phone" size={16} />
                  {t("askAvailability")}
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="light-card rounded-xl p-6 sm:p-8 h-full">
                <h2 className="font-bold text-xl mb-3 text-text font-display">
                  {t("pipeRepairTitle")}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed">{t("pipeRepairDesc")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-steel">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-bold text-2xl sm:text-3xl mb-6 font-display text-text-light">
              {t("ctaTitle")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-emergency hover:bg-emergency-dark btn-shimmer shadow-md transition-colors"
              >
                <Icon name="phone" size={16} />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border-2 border-cyan text-cyan hover:bg-cyan/10 transition-colors"
              >
                <Icon name="mail" size={16} />
                {CONTACT.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

function BrandCard({
  brand,
  visitLabel,
}: {
  brand: { name: string; url: string | null };
  visitLabel: string;
}) {
  const inner = (
    <div className="light-card rounded-lg p-4 text-center h-full flex flex-col items-center justify-center gap-2">
      <span className="font-semibold text-sm text-text font-display">
        {brand.name}
      </span>
      {brand.url && (
        <span className="inline-flex items-center gap-1 text-xs text-cyan">
          {visitLabel}
          <Icon name="external-link" size={12} />
        </span>
      )}
    </div>
  );

  if (brand.url) {
    return (
      <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }

  return inner;
}

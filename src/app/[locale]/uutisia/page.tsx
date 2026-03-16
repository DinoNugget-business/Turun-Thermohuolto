import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { SITE, WEBSITE_URL } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "newsPage" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `${WEBSITE_URL}/${locale}/uutisia`,
      languages: { fi: `${WEBSITE_URL}/fi/uutisia`, en: `${WEBSITE_URL}/en/uutisia` },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      url: `${WEBSITE_URL}/${locale}/uutisia`,
      type: "website",
      siteName: SITE.name,
      locale: locale === "fi" ? "fi_FI" : "en_US",
    },
    twitter: { card: "summary", title: t("title"), description: t("subtitle") },
  };
}
import { NEWS_ARTICLES } from "@/lib/news-data";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FooterSection from "@/components/sections/FooterSection";

export default function NewsPage() {
  const t = useTranslations("newsPage");
  const locale = useLocale();
  const dateLocale = locale === "fi" ? "fi-FI" : "en-US";

  const featured = NEWS_ARTICLES[0];
  const rest = NEWS_ARTICLES.slice(1);

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured article */}
          <ScrollReveal>
            <article className="light-card rounded-xl overflow-hidden mb-10 grid grid-cols-1 md:grid-cols-2">
              {featured.image && (
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featured.image}
                    alt={t(`articles.${featured.id}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <time className="text-xs text-text-dim font-medium">
                  {new Date(featured.date).toLocaleDateString(dateLocale, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="font-bold text-2xl mt-2 mb-3 text-text font-display">
                  {t(`articles.${featured.id}.title`)}
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {t(`articles.${featured.id}.excerpt`)}
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
            {rest.map((article) => (
              <ScrollReveal key={article.id}>
                <article className="light-card rounded-xl overflow-hidden h-full">
                  {article.image && (
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={t(`articles.${article.id}.title`)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <time className="text-xs text-text-dim font-medium">
                      {new Date(article.date).toLocaleDateString(dateLocale, {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="font-semibold text-lg mt-1 mb-2 text-text font-display">
                      {t(`articles.${article.id}.title`)}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {t(`articles.${article.id}.excerpt`)}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

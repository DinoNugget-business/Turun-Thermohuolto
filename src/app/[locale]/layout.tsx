import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SITE, CONTACT, WEBSITE_URL } from "@/lib/constants";
import HeaderNav from "@/components/sections/HeaderNav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const ogLocale = locale === "fi" ? "fi_FI" : "en_US";
  const altLocale = locale === "fi" ? "en_US" : "fi_FI";

  return {
    title: {
      default: t("title"),
      template: `%s | ${SITE.name}`,
    },
    description: t("description"),
    metadataBase: new URL(WEBSITE_URL),
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: altLocale,
      siteName: SITE.name,
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary",
      title: SITE.name,
      description: t("description"),
    },
    alternates: {
      canonical: `${WEBSITE_URL}/${locale}`,
      languages: {
        fi: `${WEBSITE_URL}/fi`,
        en: `${WEBSITE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: WEBSITE_URL,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.city,
      postalCode: CONTACT.postalCode,
      addressCountry: "FI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 60.5144,
      longitude: 22.4137,
    },
    foundingDate: SITE.founded,
    description:
      "Ajoneuvojen kylmäkoneiden, lisälämmittimien ja ilmastointilaitteiden asennus, korjaus ja huolto.",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "16:00",
    },
    sameAs: [CONTACT.facebook],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 60.5144,
        longitude: 22.4137,
      },
      geoRadius: "100000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Palvelut",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kylmäkoneiden asennus ja huolto" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lisälämmittimien asennus ja huolto" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ilmastointilaitteiden huolto" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ATP-tarkastukset" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 päivystys" } },
      ],
    },
  };

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <HeaderNav />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

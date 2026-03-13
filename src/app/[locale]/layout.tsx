import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { routing } from "@/i18n/routing";
import ChatbotProvider from "@/components/chatbot/ChatbotProvider";
import ChatbotTrigger from "@/components/chatbot/ChatbotTrigger";
import ChatbotWindow from "@/components/chatbot/ChatbotWindow";
import HeaderNav from "@/components/sections/HeaderNav";
import "../globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Turun Thermohuolto Oy — Kylmälaitteet, lämmittimet & ilmastointi",
  description: "Ajoneuvojen kylmäkoneiden, lisälämmittimien ja ilmastointilaitteiden asennus, korjaus ja huolto. 24/7 päivystys. Lieto.",
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${barlowCondensed.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <NextIntlClientProvider messages={messages}>
          <ChatbotProvider>
            <HeaderNav />
            <main>{children}</main>
            <ChatbotWindow />
            <ChatbotTrigger />
          </ChatbotProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Rajdhani } from "next/font/google";
import { routing } from "@/i18n/routing";
import ChatbotProvider from "@/components/chatbot/ChatbotProvider";
import ChatbotTrigger from "@/components/chatbot/ChatbotTrigger";
import ChatbotWindow from "@/components/chatbot/ChatbotWindow";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
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
    <html lang={locale} className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="bg-white font-body antialiased" style={{ color: "#0F1B2D" }}>
        <NextIntlClientProvider messages={messages}>
          <ChatbotProvider>
            <main className="min-h-screen">{children}</main>
            <ChatbotWindow />
            <ChatbotTrigger />
          </ChatbotProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

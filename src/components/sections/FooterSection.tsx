"use client";

import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, CONTACT, NAV_ITEMS } from "@/lib/constants";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export default function FooterSection() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Oversized brand name — ghosted typographic background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-white/[0.025] whitespace-nowrap select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
        aria-hidden="true"
      >
        THERMOHUOLTO
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-12">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo/white_logo_smaller.png"
              alt="Turun Thermohuolto Oy"
              width={160}
              height={36}
              className="h-8 w-auto mb-3"
            />
            <p className="text-sm leading-relaxed mb-3 text-text-light-muted">
              {t("description")}
            </p>
            <p className="text-xs text-text-light-muted/50">
              {t("est")}
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-text-light">
              {t("quickLinks")}
            </h3>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-sm text-text-light-muted transition-opacity hover:opacity-80"
                >
                  {tn(item.id)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-text-light">
              {t("contactTitle")}
            </h3>
            <div className="space-y-2">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-sm text-text-light-muted hover:opacity-80 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5 text-cyan" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emergencyHref}
                className="flex items-center gap-2 text-sm text-emergency hover:opacity-80 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" />
                {t("emergency")} {CONTACT.emergency}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-text-light-muted hover:opacity-80 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5 text-cyan" />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-text-light-muted">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan" />
                {CONTACT.fullAddress}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar with language switcher */}
        <div className="pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-light-muted/50">
            &copy; {new Date().getFullYear()} {SITE.name}. {t("rights")}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => switchLocale("fi")}
              className={`text-xs px-2.5 py-1 rounded transition-colors ${
                locale === "fi"
                  ? "bg-cyan-glow text-cyan"
                  : "text-text-light-muted/50 hover:text-text-light-muted"
              }`}
            >
              FI
            </button>
            <button
              onClick={() => switchLocale("en")}
              className={`text-xs px-2.5 py-1 rounded transition-colors ${
                locale === "en"
                  ? "bg-cyan-glow text-cyan"
                  : "text-text-light-muted/50 hover:text-text-light-muted"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

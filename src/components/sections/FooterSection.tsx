"use client";

import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, CONTACT } from "@/lib/constants";
import { useRouter, usePathname } from "@/i18n/navigation";
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
    <footer style={{ backgroundColor: "#0C1824" }}>
      {/* Emergency repeat bar */}
      <div style={{ backgroundColor: "#E85C2A" }}>
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-white">
            {t("emergency")} {CONTACT.emergency}
          </span>
          <a
            href={CONTACT.emergencyHref}
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {CONTACT.emergency}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo/white_logo_smaller.png"
              alt="Turun Thermohuolto Oy"
              width={160}
              height={36}
              className="h-8 w-auto mb-3"
            />
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#8A9BB0" }}>
              {t("description")}
            </p>
            <p className="text-xs" style={{ color: "rgba(138,155,176,0.5)" }}>
              {t("est")}
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#F5F5F5" }}>
              {t("quickLinks")}
            </h3>
            <nav className="space-y-2">
              {[
                { id: "palvelut", label: "Palvelut" },
                { id: "tuotteet", label: "Tuotteet" },
                { id: "yritys", label: "Yritys" },
                { id: "referenssit", label: "Referenssit" },
                { id: "uutisia", label: "Uutisia" },
                { id: "yhteydenotto", label: "Yhteystiedot" },
              ].map(({ id }) => (
                <a
                  key={id}
                  href={locale === "fi" ? `/${id}` : `/${locale}/${id}`}
                  className="block text-sm transition-opacity hover:opacity-80"
                  style={{ color: "#8A9BB0" }}
                >
                  {tn(id)}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#F5F5F5" }}>
              {t("contactTitle")}
            </h3>
            <div className="space-y-2">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#8A9BB0" }}
              >
                <Phone className="w-3.5 h-3.5" style={{ color: "#0ACDDF" }} />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emergencyHref}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#E85C2A" }}
              >
                <Phone className="w-3.5 h-3.5" />
                {t("emergency")} {CONTACT.emergency}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#8A9BB0" }}
              >
                <Mail className="w-3.5 h-3.5" style={{ color: "#0ACDDF" }} />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#8A9BB0" }}>
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "#0ACDDF" }} />
                {CONTACT.fullAddress}
              </div>
            </div>
          </div>

          {/* Col 4: Business info */}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#F5F5F5" }}>
              {SITE.name}
            </h3>
            <p className="text-sm" style={{ color: "#8A9BB0" }}>
              {CONTACT.fullAddress}
            </p>
            <p className="text-sm mt-1" style={{ color: "#8A9BB0" }}>
              {CONTACT.email}
            </p>
          </div>
        </div>

        {/* Copyright bar with language switcher */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #1E3348" }}
        >
          <p className="text-xs" style={{ color: "#5A6B7F" }}>
            &copy; {new Date().getFullYear()} {SITE.name}. {t("rights")}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => switchLocale("fi")}
              className="text-xs px-2.5 py-1 rounded transition-colors"
              style={{
                backgroundColor: locale === "fi" ? "rgba(10,205,223,0.15)" : "transparent",
                color: locale === "fi" ? "#0ACDDF" : "#5A6B7F",
              }}
            >
              FI
            </button>
            <button
              onClick={() => switchLocale("en")}
              className="text-xs px-2.5 py-1 rounded transition-colors"
              style={{
                backgroundColor: locale === "en" ? "rgba(10,205,223,0.15)" : "transparent",
                color: locale === "en" ? "#0ACDDF" : "#5A6B7F",
              }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Snowflake, Phone, Mail, MapPin } from "lucide-react";
import { SITE, CONTACT } from "@/lib/constants";

export default function FooterSection() {
  const t = useTranslations("footer");

  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#0A1320", borderTop: "1px solid #162236" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Snowflake className="w-5 h-5" style={{ color: "#00A3BF" }} />
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}>
                {SITE.shortName}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8A9BB0" }}>
              {t("description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#F5F5F5" }}>{t("quickLinks")}</h3>
            <nav className="space-y-2">
              {["services", "brands", "about", "team", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block text-sm transition-colors"
                  style={{ color: "#8A9BB0" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00A3BF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9BB0")}
                >
                  {t(`link_${id}`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#F5F5F5" }}>{t("contactTitle")}</h3>
            <div className="space-y-2">
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-sm" style={{ color: "#8A9BB0" }}>
                <Phone className="w-3.5 h-3.5" style={{ color: "#00A3BF" }} />
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emergencyHref} className="flex items-center gap-2 text-sm" style={{ color: "#E85C2A" }}>
                <Phone className="w-3.5 h-3.5" />
                {t("emergency")} {CONTACT.emergency}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm" style={{ color: "#8A9BB0" }}>
                <Mail className="w-3.5 h-3.5" style={{ color: "#00A3BF" }} />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#8A9BB0" }}>
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "#00A3BF" }} />
                {CONTACT.fullAddress}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6" style={{ borderTop: "1px solid #162236" }}>
          <p className="text-center text-xs" style={{ color: "#5A6B7F" }}>
            &copy; {new Date().getFullYear()} {SITE.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

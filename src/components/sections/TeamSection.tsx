"use client";

import { useTranslations, useLocale } from "next-intl";
import { User, Phone, Mail } from "lucide-react";
import { STAFF } from "@/lib/constants";

export default function TeamSection() {
  const t = useTranslations("team");
  const locale = useLocale();

  return (
    <section id="team" className="py-20 px-6" style={{ backgroundColor: "#F2F5F8" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#0F1B2D" }}
          >
            {t("title")}
          </h2>
          <p className="text-base" style={{ color: "#5A6B7F" }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {STAFF.map((person) => (
            <div key={person.name} className="glass-card rounded-xl p-5 animate-on-scroll group">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-hover-lift"
                  style={{ backgroundColor: "rgba(0,163,191,0.1)", border: "1px solid rgba(0,163,191,0.15)" }}
                >
                  <User className="w-4 h-4" style={{ color: "#00A3BF" }} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm" style={{ color: "#0F1B2D" }}>
                    {person.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "#00A3BF" }}>
                    {locale === "fi" ? person.role : person.roleEn}
                  </p>
                  {person.phone && (
                    <a
                      href={`tel:${person.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-1 text-xs mt-2 transition-colors"
                      style={{ color: "#5A6B7F" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00A3BF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#5A6B7F")}
                    >
                      <Phone className="w-3 h-3" />
                      {person.phone}
                    </a>
                  )}
                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-1 text-xs mt-1 transition-colors truncate"
                      style={{ color: "#5A6B7F" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00A3BF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#5A6B7F")}
                    >
                      <Mail className="w-3 h-3 shrink-0" />
                      <span className="truncate">{person.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

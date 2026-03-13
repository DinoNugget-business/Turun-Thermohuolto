"use client";

import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail } from "lucide-react";
import { STAFF } from "@/lib/constants";

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export default function TeamSection() {
  const t = useTranslations("team");
  const locale = useLocale();

  const director = STAFF[0];
  const others = STAFF.slice(1);

  return (
    <section id="team" className="py-20 sm:py-24 px-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="accent-bar mb-14 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
          >
            {t("title")}
          </h2>
          <p className="text-base" style={{ color: "#6B7280" }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Director spotlight */}
        <div className="elevated-card rounded-xl overflow-hidden mb-8 animate-on-scroll">
          <div className="flex items-stretch">
            {/* Orange stripe */}
            <div className="w-1.5 shrink-0" style={{ backgroundColor: "#E85C2A" }} />

            <div className="flex items-center gap-5 p-6 sm:p-8">
              {/* Initials circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-xl font-bold"
                style={{
                  backgroundColor: "#1B3A5C",
                  color: "#0ACDDF",
                  fontFamily: "var(--font-display)",
                }}
              >
                {getInitials(director.name)}
              </div>

              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
                >
                  {director.name}
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: "#0ACDDF" }}>
                  {locale === "fi" ? director.role : director.roleEn}
                </p>
                <div className="flex flex-wrap gap-4">
                  {director.phone && (
                    <a
                      href={`tel:${director.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                      style={{ color: "#6B7280" }}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {director.phone}
                    </a>
                  )}
                  {director.email && (
                    <a
                      href={`mailto:${director.email}`}
                      className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                      style={{ color: "#6B7280" }}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {director.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-sm">
          {others.map((person) => (
            <div
              key={person.name}
              className="elevated-card rounded-xl p-5 animate-on-scroll"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(27,58,92,0.08)",
                    color: "#1B3A5C",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {getInitials(person.name)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm" style={{ color: "#1B3A5C" }}>
                    {person.name}
                  </h4>
                  <p className="text-xs" style={{ color: "#0ACDDF" }}>
                    {locale === "fi" ? person.role : person.roleEn}
                  </p>
                </div>
              </div>

              {person.phone && (
                <a
                  href={`tel:${person.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-70"
                  style={{ color: "#6B7280" }}
                >
                  <Phone className="w-3 h-3" />
                  {person.phone}
                </a>
              )}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-1.5 text-xs mt-1 transition-opacity hover:opacity-70 truncate"
                  style={{ color: "#6B7280" }}
                >
                  <Mail className="w-3 h-3 shrink-0" />
                  <span className="truncate">{person.email}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

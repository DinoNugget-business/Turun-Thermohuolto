"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";
import { STAFF } from "@/lib/constants";

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export default function TeamSection() {
  const t = useTranslations("team");
  const tc = useTranslations("contact");

  const director = STAFF[0];
  const others = STAFF.slice(1);

  return (
    <section id="team" className="py-20 sm:py-24 px-5 bg-bg-light">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-14 animate-on-scroll">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-3 font-display">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-steel font-display">
            {t("title")}
          </h2>
        </div>

        {/* Director spotlight */}
        <div className="elevated-card rounded-xl overflow-hidden mb-8 animate-on-scroll">
          <div className="flex items-stretch">
            {/* Orange stripe */}
            <div className="w-1.5 shrink-0 bg-emergency" />

            <div className="flex items-center gap-5 p-6 sm:p-8">
              {/* Initials circle */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-xl font-bold bg-steel text-cyan font-display">
                {getInitials(director.name)}
              </div>

              <div>
                <h3 className="text-xl font-bold font-display text-steel">
                  {director.name}
                </h3>
                <p className="text-sm font-semibold mb-2 text-cyan">
                  {tc(director.positionKey)}
                </p>
                <div className="flex flex-wrap gap-4">
                  {director.phone && (
                    <a
                      href={director.phoneHref}
                      className="flex items-center gap-1.5 text-sm text-text-muted transition-opacity hover:opacity-70"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {director.phone}
                    </a>
                  )}
                  {director.email && (
                    <a
                      href={`mailto:${director.email}`}
                      className="flex items-center gap-1.5 text-sm text-text-muted transition-opacity hover:opacity-70"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((person) => (
            <div
              key={person.name}
              className="elevated-card rounded-xl p-5 animate-on-scroll"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold bg-steel/8 text-steel font-display">
                  {getInitials(person.name)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-steel">
                    {person.name}
                  </h4>
                  <p className="text-xs text-cyan">
                    {tc(person.positionKey)}
                  </p>
                </div>
              </div>

              {person.phone && person.phoneHref && (
                <a
                  href={person.phoneHref}
                  className="flex items-center gap-1.5 text-xs text-text-muted transition-opacity hover:opacity-70"
                >
                  <Phone className="w-3 h-3" />
                  {person.phone}
                </a>
              )}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-1.5 text-xs mt-1 text-text-muted transition-opacity hover:opacity-70 truncate"
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

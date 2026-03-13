"use client";

import { Phone, AlertCircle, Snowflake, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { CONTACT, SITE } from "@/lib/constants";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0F1B2D" }}
    >
      {/* Background gradient effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(0,163,191,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,163,191,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Snowflake icon */}
        <div className="flex justify-center mb-6" style={{ animation: "fadeIn 0.8s ease-out" }}>
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center pulse-glow"
            style={{ backgroundColor: "rgba(0,163,191,0.15)", border: "1px solid rgba(0,163,191,0.3)" }}
          >
            <Snowflake className="w-8 h-8" style={{ color: "#00A3BF" }} />
          </div>
        </div>

        {/* Company name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", animation: "fadeInUp 0.8s ease-out" }}
        >
          {SITE.name}
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl mb-4 max-w-2xl mx-auto"
          style={{ color: "#8A9BB0", animation: "fadeInUp 0.8s ease-out 0.1s both" }}
        >
          {t("tagline")}
        </p>

        {/* 24/7 emergency badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 emergency-pulse"
          style={{
            backgroundColor: "rgba(232,92,42,0.15)",
            border: "1px solid rgba(232,92,42,0.4)",
            animation: "fadeInUp 0.8s ease-out 0.2s both",
          }}
        >
          <AlertCircle className="w-4 h-4" style={{ color: "#E85C2A" }} />
          <span className="text-sm font-semibold" style={{ color: "#E85C2A" }}>
            {t("emergency")} {CONTACT.emergency}
          </span>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
        >
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 btn-shimmer"
            style={{ backgroundColor: "#00A3BF" }}
          >
            <Phone className="w-4 h-4" />
            {t("callUs")} {CONTACT.phone}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
            style={{ color: "#00A3BF", border: "1px solid rgba(0,163,191,0.4)", backgroundColor: "rgba(0,163,191,0.08)" }}
          >
            {t("seeServices")}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce" style={{ color: "#5A6B7F" }}>
          <ChevronDown className="w-6 h-6 mx-auto" />
        </div>
      </div>
    </section>
  );
}

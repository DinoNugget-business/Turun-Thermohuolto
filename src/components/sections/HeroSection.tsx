"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { CONTACT, SITE } from "@/lib/constants";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden bg-dark">
      {/* Single background image with CSS treatment */}
      <Image
        src="/images/hero/hero-2.jpg"
        alt="Turun Thermohuolto workshop"
        fill
        className="object-cover img-hero"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay — stronger at bottom for text */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-dark via-dark/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-16 pt-40 sm:pb-24 sm:pt-48">
        {/* Category label */}
        <p className="hero-heading text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-5 font-display">
          {t("category")}
        </p>

        {/* Main headline — large, left-aligned, not centered */}
        <h1 className="hero-heading font-display hero-headline text-text-light max-w-[16ch] mb-6">
          {SITE.name}
        </h1>

        {/* Tagline */}
        <p className="hero-subtext text-base sm:text-lg text-text-light-muted max-w-xl mb-10 leading-relaxed font-body">
          {t("tagline")}
        </p>

        {/* Trust stats — horizontal, not in boxes */}
        <div className="hero-subtext flex flex-wrap items-center gap-x-8 gap-y-3 mb-10">
          <TrustStat value="20+" label={t("statYears")} />
          <span className="hidden sm:block w-px h-8 bg-dark-border" />
          <TrustStat value="13+" label={t("statBrands")} />
          <span className="hidden sm:block w-px h-8 bg-dark-border" />
          <TrustStat value="24/7" label={t("statEmergency")} accent />
        </div>

        {/* CTA row */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-dark bg-cyan transition-all hover:bg-cyan-dark text-sm tracking-wide font-body"
          >
            <Phone className="w-4 h-4" />
            {t("callUs")} {CONTACT.phone}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-text-light border border-dark-border transition-all hover:border-cyan/40 hover:text-cyan text-sm tracking-wide font-body"
          >
            {t("seeServices")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Emergency bar — always visible */}
        <a
          href={CONTACT.emergencyHref}
          className="hero-emergency inline-flex items-center gap-3 text-sm group"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emergency/15 emergency-pulse">
            <Phone className="w-3.5 h-3.5 text-emergency" />
          </span>
          <span className="text-text-light-muted group-hover:text-text-light transition-colors">
            {t("emergency")}{" "}
            <span className="font-semibold text-emergency">{CONTACT.emergency}</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function TrustStat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${accent ? "text-emergency" : "text-cyan"}`}>
        {value}
      </span>
      <span className="text-text-light-muted text-[11px] uppercase tracking-widest mt-0.5">
        {label}
      </span>
    </div>
  );
}

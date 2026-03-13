"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { CONTACT, SITE } from "@/lib/constants";
import Image from "next/image";

const HERO_IMAGES = [
  { src: "/images/hero/hero-1.jpg", alt: "Webasto hydronic control elements" },
  { src: "/images/hero/hero-2.jpg", alt: "Thermohuolto workshop" },
  { src: "/images/hero/hero-3.jpg", alt: "Company anniversary celebration" },
  { src: "/images/hero/hero-4.jpg", alt: "Vehicle refrigeration service" },
  { src: "/images/hero/hero-5.jpg", alt: "Equipment installation" },
];

export default function HeroSection() {
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image carousel */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(12,24,36,0.92) 0%, rgba(12,24,36,0.8) 50%, rgba(12,24,36,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left column — text */}
          <div>
            <p
              className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ color: "#0ACDDF", fontFamily: "var(--font-body)" }}
            >
              {t("category")}
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
            >
              {SITE.name}
            </h1>

            <p
              className="text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
              style={{ color: "#C0CCD8", fontFamily: "var(--font-body)" }}
            >
              {t("tagline")}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#0ACDDF", fontFamily: "var(--font-body)" }}
              >
                <Phone className="w-4 h-4" />
                {t("callUs")} {CONTACT.phone}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all hover:opacity-80"
                style={{
                  color: "#0ACDDF",
                  border: "1px solid rgba(10,205,223,0.4)",
                  backgroundColor: "rgba(10,205,223,0.1)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {t("seeServices")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Emergency bar */}
            <a
              href={CONTACT.emergencyHref}
              className="flex items-center gap-3 rounded-lg overflow-hidden transition-all hover:opacity-90"
              style={{ backgroundColor: "rgba(232,92,42,0.12)", maxWidth: "fit-content" }}
            >
              <div className="w-1 self-stretch" style={{ backgroundColor: "#E85C2A" }} />
              <div className="flex items-center gap-2 pr-5 py-3">
                <Phone className="w-4 h-4" style={{ color: "#E85C2A" }} />
                <span className="text-sm font-bold" style={{ color: "#E85C2A" }}>
                  {t("emergency")} {CONTACT.emergency}
                </span>
              </div>
            </a>
          </div>

          {/* Right column — stat boxes */}
          <div className="relative flex items-center justify-center lg:justify-end min-h-[280px] lg:min-h-[400px]">
            <div className="relative z-10 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full lg:w-auto lg:items-end">
              <StatBox value="20+" label={t("statYears")} />
              <StatBox value="15+" label={t("statBrands")} />
              <StatBox value="24/7" label={t("statEmergency")} accent />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: "rgba(10,205,223,0.15)", color: "#0ACDDF", border: "1px solid rgba(10,205,223,0.3)" }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === current ? "#0ACDDF" : "rgba(245,245,245,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: "rgba(10,205,223,0.15)", color: "#0ACDDF", border: "1px solid rgba(10,205,223,0.3)" }}
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

function StatBox({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div
      className="flex-shrink-0 rounded-lg px-5 py-4 min-w-[140px] backdrop-blur-sm"
      style={{
        backgroundColor: accent ? "rgba(232,92,42,0.15)" : "rgba(12,24,36,0.7)",
        border: `1px solid ${accent ? "rgba(232,92,42,0.3)" : "rgba(10,205,223,0.2)"}`,
      }}
    >
      <p
        className="text-3xl sm:text-4xl font-extrabold"
        style={{
          fontFamily: "var(--font-display)",
          color: accent ? "#E85C2A" : "#0ACDDF",
        }}
      >
        {value}
      </p>
      <p
        className="text-xs mt-1"
        style={{ color: "#C0CCD8", fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
    </div>
  );
}

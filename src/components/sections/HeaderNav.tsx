"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { CONTACT } from "@/lib/constants";
import Image from "next/image";

type NavItem = { id: string; href: string };

function useNavItems(): NavItem[] {
  const locale = useLocale();
  const prefix = locale === "fi" ? "" : `/${locale}`;
  return [
    { id: "palvelut", href: `${prefix}/palvelut` },
    { id: "tuotteet", href: `${prefix}/tuotteet` },
    { id: "yritys", href: `${prefix}/yritys` },
    { id: "referenssit", href: `${prefix}/referenssit` },
    { id: "uutisia", href: `${prefix}/uutisia` },
    { id: "yhteydenotto", href: `${prefix}/yhteydenotto` },
  ];
}

export default function HeaderNav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = useNavItems();
  const locale = useLocale();
  const homeHref = locale === "fi" ? "/" : `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 64,
        backgroundColor: scrolled ? "rgba(12,24,36,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,51,72,0.5)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">
        {/* Logo */}
        <a href={homeHref} className="shrink-0">
          <Image
            src="/images/logo/thermohuolto_logo.png"
            alt="Turun Thermohuolto Oy"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link text-sm font-semibold transition-opacity"
              style={{ color: "rgba(245,245,245,0.7)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,245,0.7)")}
            >
              {t(item.id)}
            </a>
          ))}
        </nav>

        {/* Right side: emergency CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT.emergencyHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{ backgroundColor: "#E85C2A", color: "#FFFFFF" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D14E22";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E85C2A";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            24/7
          </a>

          {/* Mobile: always-visible emergency icon */}
          <a
            href={CONTACT.emergencyHref}
            className="sm:hidden w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(232,92,42,0.15)", color: "#E85C2A" }}
            aria-label="24/7 päivystys"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            style={{ color: "#0ACDDF" }}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "#0C1824", borderTop: "1px solid #1E3348" }}
        >
          <nav className="px-5 py-4 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-item py-3 text-base font-semibold"
                style={{
                  color: "rgba(245,245,245,0.8)",
                  fontFamily: "var(--font-body)",
                  borderBottom: "1px solid #1E3348",
                  animationDelay: `${i * 50}ms`,
                }}
              >
                {t(item.id)}
              </a>
            ))}
            <a
              href={CONTACT.emergencyHref}
              className="mt-3 flex items-center gap-2 py-3 text-base font-bold"
              style={{ color: "#E85C2A" }}
            >
              <Phone className="w-4 h-4" />
              {t("emergency")} {CONTACT.emergency}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 py-3 text-sm"
              style={{ color: "#8A9BB0" }}
            >
              <Phone className="w-3.5 h-3.5" />
              {CONTACT.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

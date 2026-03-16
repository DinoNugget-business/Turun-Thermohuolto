"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { CONTACT, NAV_ITEMS } from "@/lib/constants";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";

export default function HeaderNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-dark/97 backdrop-blur-md border-b border-dark-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label={t("homeLink")}>
          <Image
            src="/images/logo/thermohuolto_logo.png"
            alt="Turun Thermohuolto Oy"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`nav-link text-sm font-medium transition-colors font-body ${
                pathname === item.href
                  ? "text-text-light"
                  : "text-text-light/60 hover:text-text-light"
              }`}
            >
              {t(item.id)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher — desktop */}
          <div className="hidden md:flex items-center gap-1 mr-2" role="group" aria-label="Kieli / Language">
            <button
              onClick={() => switchLocale("fi")}
              aria-label="Suomeksi"
              aria-current={locale === "fi" ? "true" : undefined}
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                locale === "fi"
                  ? "text-cyan bg-cyan/10"
                  : "text-text-light/40 hover:text-text-light/70"
              }`}
            >
              FI
            </button>
            <button
              onClick={() => switchLocale("en")}
              aria-label="In English"
              aria-current={locale === "en" ? "true" : undefined}
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                locale === "en"
                  ? "text-cyan bg-cyan/10"
                  : "text-text-light/40 hover:text-text-light/70"
              }`}
            >
              EN
            </button>
          </div>

          {/* Emergency CTA — desktop */}
          <a
            href={CONTACT.emergencyHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-emergency text-white transition-all hover:bg-emergency-dark"
          >
            <Phone className="w-3.5 h-3.5" />
            24/7
          </a>

          {/* Emergency CTA — mobile */}
          <a
            href={CONTACT.emergencyHref}
            className="sm:hidden w-10 h-10 rounded-md flex items-center justify-center bg-emergency/15 text-emergency"
            aria-label={t("emergency")}
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-cyan transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-dark border-t border-dark-border">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-item py-3 text-base font-medium text-text-light/80 hover:text-text-light border-b border-dark-border font-body"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {t(item.id)}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 py-3 border-b border-dark-border">
              <button
                onClick={() => { switchLocale("fi"); setMenuOpen(false); }}
                className={`text-sm font-medium px-3 py-1.5 rounded transition-colors ${
                  locale === "fi" ? "text-cyan bg-cyan/10" : "text-text-light/50"
                }`}
              >
                Suomi
              </button>
              <button
                onClick={() => { switchLocale("en"); setMenuOpen(false); }}
                className={`text-sm font-medium px-3 py-1.5 rounded transition-colors ${
                  locale === "en" ? "text-cyan bg-cyan/10" : "text-text-light/50"
                }`}
              >
                English
              </button>
            </div>

            <a
              href={CONTACT.emergencyHref}
              className="mt-2 flex items-center gap-2 py-3 text-base font-bold text-emergency"
            >
              <Phone className="w-4 h-4" />
              {t("emergency")} {CONTACT.emergency}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 py-3 text-sm text-text-light-muted"
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

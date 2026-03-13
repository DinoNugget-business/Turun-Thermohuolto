"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, AlertCircle, Send } from "lucide-react";
import { CONTACT, GOOGLE_MAPS_EMBED } from "@/lib/constants";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <div className="space-y-4 animate-on-scroll">
            <a
              href={CONTACT.phoneHref}
              className="glass-card rounded-xl p-5 flex items-center gap-4 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-hover-lift"
                style={{ backgroundColor: "rgba(0,163,191,0.1)", border: "1px solid rgba(0,163,191,0.15)" }}
              >
                <Phone className="w-5 h-5" style={{ color: "#00A3BF" }} />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: "#5A6B7F" }}>{t("phone")}</p>
                <p className="font-semibold" style={{ color: "#0F1B2D" }}>{CONTACT.phone}</p>
              </div>
            </a>

            <a
              href={CONTACT.emergencyHref}
              className="rounded-xl p-5 flex items-center gap-4 group transition-all"
              style={{
                backgroundColor: "rgba(232,92,42,0.06)",
                border: "1px solid rgba(232,92,42,0.2)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(232,92,42,0.12)", border: "1px solid rgba(232,92,42,0.25)" }}
              >
                <AlertCircle className="w-5 h-5" style={{ color: "#E85C2A" }} />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: "#E85C2A" }}>{t("emergencyLabel")}</p>
                <p className="font-semibold" style={{ color: "#0F1B2D" }}>{CONTACT.emergency}</p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="glass-card rounded-xl p-5 flex items-center gap-4 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 icon-hover-lift"
                style={{ backgroundColor: "rgba(0,163,191,0.1)", border: "1px solid rgba(0,163,191,0.15)" }}
              >
                <Mail className="w-5 h-5" style={{ color: "#00A3BF" }} />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: "#5A6B7F" }}>{t("email")}</p>
                <p className="font-semibold text-sm" style={{ color: "#0F1B2D" }}>{CONTACT.email}</p>
              </div>
            </a>

            <div className="glass-card rounded-xl p-5 flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(0,163,191,0.1)", border: "1px solid rgba(0,163,191,0.15)" }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#00A3BF" }} />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: "#5A6B7F" }}>{t("address")}</p>
                <p className="font-semibold text-sm" style={{ color: "#0F1B2D" }}>{CONTACT.fullAddress}</p>
              </div>
            </div>

            {/* Visual-only contact form */}
            <div className="glass-card rounded-xl p-5 mt-4">
              <h3 className="font-semibold text-sm mb-3" style={{ color: "#0F1B2D" }}>{t("formTitle")}</h3>
              <div className="space-y-2.5">
                <input
                  type="text"
                  placeholder={t("formName")}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ border: "1px solid #D8DEE6", color: "#0F1B2D" }}
                  readOnly
                />
                <input
                  type="email"
                  placeholder={t("formEmail")}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ border: "1px solid #D8DEE6", color: "#0F1B2D" }}
                  readOnly
                />
                <textarea
                  placeholder={t("formMessage")}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
                  style={{ border: "1px solid #D8DEE6", color: "#0F1B2D" }}
                  readOnly
                />
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all btn-shimmer"
                  style={{ backgroundColor: "#00A3BF" }}
                >
                  <Send className="w-4 h-4" />
                  {t("formSubmit")}
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-on-scroll">
            <div className="rounded-xl overflow-hidden h-full min-h-[400px]" style={{ border: "1px solid #D8DEE6" }}>
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thermohuolto sijainti"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

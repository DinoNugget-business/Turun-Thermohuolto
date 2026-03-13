"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { CONTACT, GOOGLE_MAPS_EMBED } from "@/lib/constants";
import Image from "next/image";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-24 px-5" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Emergency banner */}
        <a
          href={CONTACT.emergencyHref}
          className="flex items-center gap-3 rounded-xl overflow-hidden mb-12 transition-all hover:opacity-90 animate-on-scroll"
          style={{ backgroundColor: "rgba(232,92,42,0.06)", border: "1px solid rgba(232,92,42,0.15)" }}
        >
          <div className="w-1.5 self-stretch" style={{ backgroundColor: "#E85C2A" }} />
          <div className="flex items-center gap-3 py-4 pr-5">
            <Phone className="w-5 h-5" style={{ color: "#E85C2A" }} />
            <div>
              <p className="text-xs font-semibold" style={{ color: "#E85C2A" }}>
                {t("emergencyLabel")}
              </p>
              <p className="text-lg font-bold" style={{ color: "#1B3A5C" }}>
                {CONTACT.emergency}
              </p>
            </div>
          </div>
        </a>

        {/* Heading */}
        <div className="accent-bar mb-12 animate-on-scroll">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — contact info + form */}
          <div>
            {/* Contact info list */}
            <div className="space-y-3 mb-8 animate-on-scroll">
              <ContactRow
                icon={<Phone className="w-4 h-4" style={{ color: "#0ACDDF" }} />}
                label={t("phone")}
                value={CONTACT.phone}
                href={CONTACT.phoneHref}
              />
              <ContactRow
                icon={<Mail className="w-4 h-4" style={{ color: "#0ACDDF" }} />}
                label={t("email")}
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactRow
                icon={<MapPin className="w-4 h-4" style={{ color: "#0ACDDF" }} />}
                label={t("address")}
                value={CONTACT.fullAddress}
              />
            </div>

            {/* Interactive form */}
            <div className="elevated-card rounded-xl p-6 animate-on-scroll">
              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "#1B3A5C" }}
              >
                {t("formTitle")}
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-10 h-10 mx-auto mb-3" style={{ color: "#0ACDDF" }} />
                  <p className="font-semibold" style={{ color: "#1B3A5C" }}>
                    {t("formSuccess")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder={t("formName")}
                    className="form-input"
                    required
                  />
                  <input
                    type="email"
                    placeholder={t("formEmail")}
                    className="form-input"
                    required
                  />
                  <input
                    type="tel"
                    placeholder={t("formPhone")}
                    className="form-input"
                  />
                  <textarea
                    placeholder={t("formMessage")}
                    rows={4}
                    className="form-input resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#0ACDDF" }}
                  >
                    <Send className="w-4 h-4" />
                    {t("formSubmit")}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — map + facility image */}
          <div className="animate-on-scroll space-y-4">
            <div className="relative rounded-xl overflow-hidden min-h-[350px]" style={{ border: "1px solid #E8E4DF" }}>
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thermohuolto sijainti"
              />
              {/* Floating address card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-xs elevated-card rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: "#0ACDDF" }} />
                  <p className="text-sm font-semibold" style={{ color: "#1B3A5C" }}>
                    {CONTACT.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Facility image below map */}
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/about/facility.jpg"
                alt="Thermohuolto toimitilat Liedossa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(27,58,92,0.6) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-bold text-white">{CONTACT.fullAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid #E8E4DF" }}>
      {icon}
      <div>
        <p className="text-xs" style={{ color: "#6B7280" }}>{label}</p>
        <p className="text-sm font-semibold" style={{ color: "#1B3A5C" }}>{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-70">
      {inner}
    </a>
  ) : (
    inner
  );
}

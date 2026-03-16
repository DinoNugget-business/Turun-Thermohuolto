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
    <section id="contact" className="py-20 sm:py-24 px-5 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 animate-on-scroll">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-3 font-display">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-steel font-display">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — contact info + form */}
          <div>
            {/* Contact info list */}
            <div className="space-y-0 mb-8 animate-on-scroll">
              <ContactRow
                icon={<Phone className="w-4 h-4 text-cyan" />}
                label={t("phone")}
                value={CONTACT.phone}
                href={CONTACT.phoneHref}
              />
              <ContactRow
                icon={<Mail className="w-4 h-4 text-cyan" />}
                label={t("email")}
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactRow
                icon={<MapPin className="w-4 h-4 text-cyan" />}
                label={t("address")}
                value={CONTACT.fullAddress}
              />
            </div>

            {/* Form */}
            <div className="elevated-card rounded-xl p-6 animate-on-scroll">
              <h3 className="text-lg font-bold mb-4 font-display text-steel">
                {t("formTitle")}
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-10 h-10 mx-auto mb-3 text-cyan" />
                  <p className="font-semibold text-steel">
                    {t("formSuccess")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label className="block">
                    <span className="text-sm font-medium text-steel">{t("formName")} *</span>
                    <input
                      type="text"
                      className="form-input mt-1"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-steel">{t("formEmail")} *</span>
                    <input
                      type="email"
                      className="form-input mt-1"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-steel">{t("formPhone")}</span>
                    <input
                      type="tel"
                      className="form-input mt-1"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-steel">{t("formMessage")} *</span>
                    <textarea
                      rows={4}
                      className="form-input mt-1 resize-none"
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-cyan hover:bg-cyan-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {t("formSubmit")}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — map + facility image */}
          <div className="animate-on-scroll anim-fadeRight space-y-4">
            <div className="relative rounded-xl overflow-hidden min-h-[350px] border border-concrete-dark">
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
                  <MapPin className="w-4 h-4 shrink-0 text-cyan" />
                  <p className="text-sm font-semibold text-steel">
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
              <div className="absolute inset-0 bg-gradient-to-t from-steel/60 to-transparent" />
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
    <div className="flex items-center gap-3 py-3 border-b border-concrete">
      {icon}
      <div>
        <p className="text-xs text-text-muted">{label}</p>
        <p className="text-sm font-semibold text-steel">{value}</p>
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

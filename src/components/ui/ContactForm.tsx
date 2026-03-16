"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Button from "./Button";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="elevated-card rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" fill="none" stroke="#16a34a" strokeWidth="2.5" aria-hidden="true">
            <path d="M6 14l6 6L22 8" />
          </svg>
        </div>
        <h3 className="font-bold text-xl mb-2 font-display">
          {t("formSuccess")}
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="elevated-card rounded-xl p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-text">{t("formName")} *</span>
          <input type="text" required className="form-input mt-1" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-text">{t("formEmail")} *</span>
          <input type="email" required className="form-input mt-1" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-text">{t("formPhone")}</span>
        <input type="tel" className="form-input mt-1" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-text">{t("formMessage")} *</span>
        <textarea required rows={5} className="form-input mt-1 resize-y" />
      </label>
      <Button type="submit" variant="primary">
        {t("formSubmit")}
      </Button>
    </form>
  );
}

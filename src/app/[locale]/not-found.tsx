"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("nav");

  return (
    <div className="flex items-center justify-center min-h-screen px-6 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2 font-display text-steel">
          404
        </h1>
        <p className="text-text-muted">{t("notFoundText")}</p>
        <Link
          href="/"
          className="inline-block mt-4 px-5 py-2 rounded-lg text-white text-sm font-medium bg-cyan hover:bg-cyan-dark transition-colors"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}

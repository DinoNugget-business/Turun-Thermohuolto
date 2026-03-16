import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/constants";

const LOCALES = ["fi", "en"];

const PAGES = [
  "",
  "/palvelut",
  "/tuotteet",
  "/yritys",
  "/referenssit",
  "/uutisia",
  "/yhteydenotto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${WEBSITE_URL}/${locale}${page}`,
        lastModified: "2026-03-16",
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            fi: `${WEBSITE_URL}/fi${page}`,
            en: `${WEBSITE_URL}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}

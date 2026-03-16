import { getTranslations } from "next-intl/server";
import Image from "next/image";

const MILESTONES = [
  { year: "2004", key: "milestone1" },
  { year: "2010", key: "milestone2" },
  { year: "2024", key: "milestone3" },
] as const;

export default async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="py-20 sm:py-24 px-5 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — text content */}
          <div className="animate-on-scroll">
            <p className="text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-3 font-display">
              {t("label") ?? "Yritys"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-steel font-display mb-6">
              {t("title")}
            </h2>
            <p className="text-base leading-relaxed text-text-muted font-body mb-8">
              {t("description")}
            </p>

            {/* Milestones — simple list, not timeline */}
            <div className="space-y-5">
              {MILESTONES.map((m) => (
                <div key={m.key} className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-bold text-cyan shrink-0">
                    {m.year}
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t(m.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photos with presence */}
          <div className="animate-on-scroll anim-fadeRight">
            <div className="relative">
              {/* Main facility photo */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about/facility.jpg"
                  alt="Thermohuolto workshop facility in Lieto"
                  fill
                  className="object-cover img-muted"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Smaller inset photo */}
              <div className="absolute -bottom-6 -left-4 w-36 sm:w-44 aspect-[4/3] rounded-lg overflow-hidden border-4 border-warm-white shadow-lg">
                <Image
                  src="/images/about/company.jpg"
                  alt="Thermohuolto company and team"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

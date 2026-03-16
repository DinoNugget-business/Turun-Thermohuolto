import { getTranslations } from "next-intl/server";

export default async function TrustSection() {
  const t = await getTranslations("trust");

  const stats = [
    { value: "2004", label: t("founded") },
    { value: "15+", label: t("brands") },
    { value: "24/7", label: t("emergency") },
    { value: t("atpValue"), label: t("atpLabel") },
  ];

  return (
    <section className="py-14 sm:py-16 pb-20 sm:pb-24 px-5 bg-steel section-angle-bottom">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center animate-on-scroll ${
                i < stats.length - 1 ? "lg:border-r lg:border-cyan/15" : ""
              }`}
            >
              <p className="text-4xl sm:text-5xl font-bold font-display stat-glow">
                {stat.value}
              </p>
              <p className="text-sm mt-1 text-text-light-muted font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

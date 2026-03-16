import { getTranslations } from "next-intl/server";

const STEPS = [
  { key: "step1", num: "01" },
  { key: "step2", num: "02" },
  { key: "step3", num: "03" },
  { key: "step4", num: "04" },
] as const;

export default async function ProcessSection() {
  const t = await getTranslations("process");

  return (
    <section className="py-20 sm:py-24 pt-28 sm:pt-32 px-5 bg-steel section-angle-top">
      <div className="max-w-5xl mx-auto">
        {/* Heading — left-aligned, not centered */}
        <div className="mb-14 animate-on-scroll">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-3 font-display">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light font-display">
            {t("title")}
          </h2>
        </div>

        {/* Steps as horizontal rows, not identical columns */}
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <div
              key={step.key}
              className={`animate-on-scroll ${i % 2 === 0 ? "" : "anim-fadeRight sm:ml-16"} flex items-start gap-6 sm:gap-8 py-6 ${
                i < STEPS.length - 1 ? "border-b border-dark-border/40" : ""
              }`}
            >
              {/* Step number */}
              <span className="font-display text-4xl sm:text-5xl font-bold text-cyan/20 shrink-0 w-14 sm:w-20">
                {step.num}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-text-light font-display mb-1">
                  {t(`${step.key}Title`)}
                </h3>
                <p className="text-sm text-text-light/50 max-w-md leading-relaxed">
                  {t(`${step.key}Desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

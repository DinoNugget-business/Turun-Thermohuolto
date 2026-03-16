import { getTranslations } from "next-intl/server";
import { SERVICES } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

/* Map service.id → translation key prefix in servicesPage */
const T_KEY: Record<string, string> = {
  refrigeration: "refrigeration",
  heating: "heating",
  ac: "ac",
  electrical: "electrical",
  atp: "atp",
  bio: "bio",
  "boat-rv": "boatRv",
  agriculture: "agriculture",
  addvolt: "addvolt",
  vulcan: "vulcan",
};

/* Group services by category for visual distinction */
const SERVICE_GROUPS = [
  {
    labelKey: "groupCold",
    ids: ["refrigeration", "bio"],
  },
  {
    labelKey: "groupHeat",
    ids: ["heating", "ac"],
  },
  {
    labelKey: "groupSpecialist",
    ids: ["atp", "electrical", "boat-rv", "agriculture", "addvolt", "vulcan"],
  },
] as const;

export default async function ServicesSection() {
  const t = await getTranslations("services");
  const ts = await getTranslations("servicesPage");

  return (
    <section id="services" className="py-20 sm:py-24 px-5 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 animate-on-scroll">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-3 font-display">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-steel font-display mb-3">
            {t("title")}
          </h2>
        </div>

        {/* Service groups */}
        <div className="space-y-12">
          {SERVICE_GROUPS.map((group, groupIndex) => {
            const services = group.ids
              .map((id) => SERVICES.find((s) => s.id === id))
              .filter(Boolean);

            return (
              <div key={group.labelKey} className="animate-on-scroll">
                {/* Group label with oversized decorative number */}
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    className="font-display text-5xl sm:text-6xl font-bold text-steel/[0.07] leading-none select-none"
                    aria-hidden="true"
                  >
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xs tracking-[0.15em] uppercase font-medium text-text-muted font-body">
                    {t(group.labelKey)}
                  </h3>
                </div>

                {/* Service items as rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                  {services.map((service) => {
                    if (!service) return null;
                    const tKey = T_KEY[service.id] || service.id;
                    return (
                      <div
                        key={service.id}
                        className="flex items-start gap-4 py-5 border-b border-concrete"
                      >
                        <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-concrete/60">
                          <Icon name={service.icon as IconName} size={18} className="text-steel" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-sm text-steel font-display">
                            {ts(`${tKey}Title`)}
                          </h4>
                          <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                            {ts(`${tKey}Desc`)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

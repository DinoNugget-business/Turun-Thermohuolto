import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StaffCard from "@/components/ui/StaffCard";
import Icon from "@/components/ui/Icon";
import { STAFF } from "@/lib/constants";

const MILESTONES = [
  { yearKey: "milestone1Year", labelKey: "milestone1" },
  { yearKey: "milestone2Year", labelKey: "milestone2" },
  { yearKey: "milestone3Year", labelKey: "milestone3" },
] as const;

export default function CompanyPage() {
  const t = useTranslations("companyPage");
  const tc = useTranslations("contactPage");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      {/* History */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <h2
                className="font-bold text-2xl mb-6 text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("historyTitle")}
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>{t("historyP1")}</p>
                <p>{t("historyP2")}</p>
                <p>{t("historyP3")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/about/company.jpg"
                  alt="Thermohuolto toimitilat"
                  width={500}
                  height={333}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <Image
                  src="/images/about/facility.jpg"
                  alt="Thermohuolto halli"
                  width={500}
                  height={333}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("missionTitle")} accent />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            <ScrollReveal>
              <div className="light-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-steel/10 flex items-center justify-center mb-4">
                  <Icon name="snowflake" size={24} className="text-steel" />
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("missionExpertise")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("missionP1")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="light-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
                  <Icon name="shield" size={24} className="text-cyan" />
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("missionAuthority")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("missionP2")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="light-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-steel/10 flex items-center justify-center mb-4">
                  <Icon name="award" size={24} className="text-steel" />
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("qualityTitle")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("qualityP1")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("staffTitle")} accent />
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-muted leading-relaxed max-w-2xl mx-auto text-center mb-10">
              {t("staffP1")}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
            {STAFF.map((person) => (
              <ScrollReveal key={person.name}>
                <StaffCard
                  name={person.name}
                  position={tc(person.positionKey)}
                  phone={person.phone}
                  phoneHref={person.phoneHref}
                  email={person.email}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 sm:py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title={t("milestonesTitle")} accent />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-children">
            {MILESTONES.map(({ yearKey, labelKey }) => (
              <ScrollReveal key={yearKey} direction="scale">
                <div className="light-card rounded-xl overflow-hidden p-6 text-center">
                  <div
                    className="font-bold text-4xl mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "#0ACDDF" }}
                  >
                    {t(yearKey)}
                  </div>
                  <p className="text-sm text-text-muted">{t(labelKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

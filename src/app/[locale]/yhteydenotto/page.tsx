import { useTranslations } from "next-intl";
import { CONTACT, STAFF } from "@/lib/constants";
import PageHeader from "@/components/layout/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StaffCard from "@/components/ui/StaffCard";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMap from "@/components/ui/GoogleMap";
import Icon from "@/components/ui/Icon";

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const tc = useTranslations("common");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 stagger-children">
            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-steel/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="phone" size={20} className="text-steel" />
                </div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tc("callUs")}
                </h3>
                <a
                  href={CONTACT.phoneHref}
                  className="text-steel font-medium text-sm hover:text-cyan transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full emergency-pulse">
                <div className="w-10 h-10 rounded-full bg-emergency/15 flex items-center justify-center mx-auto mb-3">
                  <Icon name="alert-circle" size={20} className="text-emergency" />
                </div>
                <h3
                  className="font-semibold text-sm mb-1 text-emergency"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tc("emergencyService")}
                </h3>
                <a
                  href={CONTACT.emergencyHref}
                  className="text-emergency font-bold text-sm"
                >
                  {CONTACT.emergency}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-steel/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="mail" size={20} className="text-steel" />
                </div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tc("emailField")}
                </h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-steel font-medium text-xs hover:text-cyan transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="light-card rounded-xl p-5 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-steel/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="map-pin" size={20} className="text-steel" />
                </div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("locationTitle")}
                </h3>
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel font-medium text-xs hover:text-cyan transition-colors"
                >
                  {CONTACT.fullAddress}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Staff directory */}
          <ScrollReveal>
            <SectionHeading title={t("staffTitle")} accent />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 stagger-children">
            {STAFF.map((person) => (
              <ScrollReveal key={person.name}>
                <StaffCard
                  name={person.name}
                  position={t(person.positionKey)}
                  phone={person.phone}
                  phoneHref={person.phoneHref}
                  email={person.email}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <h2
                className="font-bold text-xl mb-6 text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("formTitle")}
              </h2>
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2
                className="font-bold text-xl mb-6 text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("locationTitle")}
              </h2>
              <GoogleMap />
              <div className="flex gap-3 mt-4">
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-steel hover:bg-steel/5 transition-colors border border-concrete-dark"
                >
                  <Icon name="map-pin" size={16} />
                  {tc("directions")}
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-steel hover:bg-steel/5 transition-colors border border-concrete-dark"
                >
                  Facebook
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

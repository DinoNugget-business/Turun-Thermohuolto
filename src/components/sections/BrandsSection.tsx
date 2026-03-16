import { getTranslations } from "next-intl/server";
import Image from "next/image";

const BRAND_LOGOS: Record<string, { src: string; width: number; height: number }> = {
  "Thermo King": { src: "/images/brands/thermo-king.gif", width: 200, height: 26 },
  "Lumikko": { src: "/images/brands/lumikko.jpg", width: 200, height: 67 },
  "Carrier": { src: "/images/brands/carrier.gif", width: 200, height: 84 },
  "Hultsteins": { src: "/images/brands/hultsteins.jpg", width: 200, height: 95 },
  "Mitsubishi": { src: "/images/brands/mitsubishi.png", width: 160, height: 80 },
  "Webasto": { src: "/images/brands/webasto.jpg", width: 200, height: 80 },
  "Eberspächer": { src: "/images/brands/eberspacher.gif", width: 200, height: 57 },
  "Mercedes-Benz": { src: "/images/brands/mercedes.gif", width: 200, height: 29 },
  "Setra": { src: "/images/brands/setra.gif", width: 160, height: 60 },
  "EvoBus": { src: "/images/brands/evobus.gif", width: 160, height: 60 },
  "Finnotzo": { src: "/images/brands/finnotzo.jpg", width: 160, height: 60 },
  "Sutrak": { src: "/images/brands/sutrak.jpg", width: 200, height: 46 },
  "Konvekta": { src: "/images/brands/konvekta.jpg", width: 200, height: 32 },
};

type Category = {
  key: string;
  brands: readonly string[];
};

const CATEGORIES: Category[] = [
  { key: "catRefrigeration", brands: ["Thermo King", "Lumikko", "Carrier", "Frigoblock", "Hultsteins", "Mitsubishi"] },
  { key: "catHeating", brands: ["Webasto", "Eberspächer"] },
  { key: "catAc", brands: ["Mercedes-Benz", "Setra", "EvoBus", "Finnotzo", "Sutrak", "Konvekta"] },
];

export default async function BrandsSection() {
  const t = await getTranslations("brands");

  return (
    <section id="brands" className="py-20 sm:py-24 px-5 bg-bg-light dot-grid">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 animate-on-scroll anim-fadeLeft">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-cyan mb-3 font-display">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-steel font-display">
            {t("title")}
          </h2>
        </div>

        {/* Category rows */}
        <div className="space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="animate-on-scroll">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-text-muted mb-4 font-body">
                {t(cat.key)}
              </p>

              <div className="flex flex-wrap gap-4">
                {cat.brands.map((brand) => {
                  const logo = BRAND_LOGOS[brand];
                  return (
                    <div
                      key={brand}
                      className="flex items-center justify-center rounded-lg px-6 py-4 bg-white border border-concrete-dark min-h-[72px] min-w-[140px] transition-shadow hover:shadow-md"
                    >
                      {logo ? (
                        <Image
                          src={logo.src}
                          alt={brand}
                          width={logo.width}
                          height={logo.height}
                          className="max-h-12 w-auto object-contain"
                          sizes="200px"
                        />
                      ) : (
                        <span className="text-lg font-bold font-display text-steel">
                          {brand}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

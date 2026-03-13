export const SITE = {
  name: "Turun Thermohuolto Oy",
  shortName: "Thermohuolto",
  domain: "thermohuolto.fi",
} as const;

export const CONTACT = {
  phone: "0207 980 280",
  phoneHref: "tel:+358207980280",
  emergency: "0400 947 244",
  emergencyHref: "tel:+358400947244",
  email: "turun.thermohuolto@thermohuolto.fi",
  address: "Luolakalliontie 5",
  postalCode: "21420",
  city: "Lieto",
  fullAddress: "Luolakalliontie 5, 21420 Lieto",
} as const;

type StaffMember = { name: string; role: string; roleEn: string; phone?: string; email?: string };

export const STAFF: StaffMember[] = [
  { name: "Marko Jämsén", role: "Toimitusjohtaja", roleEn: "Managing Director", phone: "0207 980 281", email: "marko.jamsen@thermohuolto.fi" },
  { name: "Markku Jyränti", role: "ATP-kausitarkastukset", roleEn: "ATP Seasonal Inspections", phone: "0207 980 280", email: "markku.jyranti@thermohuolto.fi" },
  { name: "Olli-Pekka Rehvonen", role: "Kylmälaiteteknikko", roleEn: "Refrigeration Technician", phone: "0207 980 284", email: "olli-pekka.rehvonen@thermohuolto.fi" },
  { name: "Kaarel Möldre", role: "Kylmälaiteteknikko", roleEn: "Refrigeration Technician" },
  { name: "Jarko Mäkelä", role: "Kylmälaiteteknikko", roleEn: "Refrigeration Technician" },
];

export const SERVICES = [
  { id: "refrigeration", icon: "Snowflake", fi: "Kylmälaitteet", en: "Refrigeration Units", descFi: "Kylmäkoneiden myynti, asennus, korjaus ja huolto", descEn: "Sales, installation, repair and maintenance of refrigeration units" },
  { id: "heating", icon: "Flame", fi: "Lisälämmittimet", en: "Auxiliary Heaters", descFi: "Webasto & Eberspächer -lämmittimien asennus ja huolto", descEn: "Webasto & Eberspächer heater installation and service" },
  { id: "ac", icon: "Wind", fi: "Ilmastointi", en: "Air Conditioning", descFi: "Linja-autojen ja ajoneuvojen ilmastointilaitteet", descEn: "Bus and vehicle air conditioning systems" },
  { id: "electrical", icon: "Zap", fi: "Autosähkötyöt", en: "Auto Electrical", descFi: "Jätepuristimet, takalaitanostimet ja sähkötyöt", descEn: "Waste compactors, tailgates and electrical work" },
  { id: "atp", icon: "ClipboardCheck", fi: "ATP-tarkastukset", en: "ATP Inspections", descFi: "Elintarvikekuljetusvälineiden virallinen kausitarkastus", descEn: "Official seasonal inspection for food transport vehicles" },
  { id: "bio", icon: "Leaf", fi: "Biokylmälaitteet", en: "Bio-Refrigeration", descFi: "Lumikko-biokylmäkoneiden myynti ja huolto", descEn: "Lumikko bio-refrigeration unit sales and service" },
  { id: "boat-rv", icon: "Ship", fi: "Veneet & matkailuautot", en: "Boats & RVs", descFi: "Lämmittimien asennus, korjaus ja huolto", descEn: "Heater installation, repair and maintenance" },
  { id: "agriculture", icon: "Tractor", fi: "Traktorit & työkoneet", en: "Tractors & Equipment", descFi: "Maatalous- ja työkoneiden kylmä- ja lämpölaitteet", descEn: "Refrigeration and heating for agricultural machinery" },
  { id: "addvolt", icon: "Battery", fi: "AddVolt", en: "AddVolt", descFi: "Akselienergiaa hyödyntävät akkuratkaisut", descEn: "Axle energy storage battery solutions" },
  { id: "vulcan", icon: "Wrench", fi: "VULCAN Lockring", en: "VULCAN Lockring", descFi: "Alumiini-ilmastointiputkien korjaus ilman purkamista", descEn: "Aluminum AC pipe repair without disassembly" },
] as const;

export const BRANDS = {
  refrigeration: ["Thermo King", "Lumikko", "Carrier", "Frigoblock", "Hultsteins", "Mitsubishi"],
  heating: ["Webasto", "Eberspächer"],
  ac: ["Mercedes-Benz", "Setra", "EvoBus", "Finnotzo", "Sutrak", "Konvekta"],
  other: ["AddVolt"],
} as const;

export const WEBSITE_URL = "https://thermohuolto.fi";

export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.5!2d22.4137!3d60.5144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76f0a8e9c9c7%3A0x0!2sLuolakalliontie+5%2C+21420+Lieto!5e0!3m2!1sfi!2sfi!4v1" as const;

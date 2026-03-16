export const SITE = {
  name: "Turun Thermohuolto Oy",
  shortName: "Thermohuolto",
  domain: "thermohuolto.fi",
  founded: "2004-03-01",
  foundedYear: 2004,
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
  facebook: "https://www.facebook.com/pages/Turun-Thermohuolto-Oy/281478665336310",
  googleMapsLink: "https://www.google.com/maps/place/Luolakalliontie+5,+21420+Lieto",
} as const;

export const STAFF = [
  {
    name: "Marko Jämsén",
    positionKey: "managingDirector",
    phone: "0207 980 281",
    phoneHref: "tel:+358207980281",
    email: "marko.jamsen@thermohuolto.fi",
  },
  {
    name: "Markku Jyränti",
    positionKey: "atpInspector",
    phone: "0207 980 280",
    phoneHref: "tel:+358207980280",
    email: "markku.jyranti@thermohuolto.fi",
  },
  {
    name: "Olli-Pekka Rehvonen",
    positionKey: "mechanic",
    phone: "0207 980 284",
    phoneHref: "tel:+358207980284",
    email: "olli-pekka.rehvonen@thermohuolto.fi",
  },
  {
    name: "Kaarel Möldre",
    positionKey: "mechanic",
    phone: null,
    phoneHref: null,
    email: null,
  },
  {
    name: "Jarko Mäkelä",
    positionKey: "mechanic",
    phone: null,
    phoneHref: null,
    email: null,
  },
] as const;

export type Brand = {
  name: string;
  url: string | null;
};

export const BRANDS = {
  refrigeration: [
    { name: "Thermo King", url: "https://www.thermoking.com" },
    { name: "Lumikko", url: "https://www.lumikko.fi" },
    { name: "Carrier", url: "https://www.carriertransicold.eu" },
    { name: "Frigoblock", url: null },
    { name: "Hultsteins", url: "https://www.a-cool.fi/hulsteins/" },
    { name: "Mitsubishi", url: null },
  ] satisfies Brand[],
  heating: [
    { name: "Webasto", url: "https://www.kaha.fi/tuotemerkkimme/webasto/" },
    { name: "Eberspächer", url: "https://www.eberi.fi" },
  ] satisfies Brand[],
  ac: [
    { name: "MB / Setra / EvoBus", url: "https://www.vehotrucks.fi" },
    { name: "Finnotzo", url: "https://www.suomenkuljetuslaite.fi" },
    { name: "Sutrak", url: "https://www.scannotec.fi" },
    { name: "Konvekta", url: null },
  ] satisfies Brand[],
  other: [
    { name: "AddVolt", url: null },
  ] satisfies Brand[],
} as const;

export const NAV_ITEMS = [
  { id: "palvelut", href: "/palvelut" },
  { id: "tuotteet", href: "/tuotteet" },
  { id: "yritys", href: "/yritys" },
  { id: "referenssit", href: "/referenssit" },
  { id: "uutisia", href: "/uutisia" },
  { id: "yhteydenotto", href: "/yhteydenotto" },
] as const;

export const SERVICES = [
  { id: "refrigeration", icon: "snowflake" },
  { id: "heating", icon: "flame" },
  { id: "ac", icon: "wind" },
  { id: "electrical", icon: "zap" },
  { id: "atp", icon: "clipboard-check" },
  { id: "bio", icon: "leaf" },
  { id: "boat-rv", icon: "ship" },
  { id: "agriculture", icon: "tractor" },
  { id: "addvolt", icon: "battery" },
  { id: "vulcan", icon: "wrench" },
] as const;

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.5!2d22.4137!3d60.5144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76f0a8e9c9c7%3A0x0!2sLuolakalliontie+5%2C+21420+Lieto!5e0!3m2!1sfi!2sfi!4v1" as const;

export const WEBSITE_URL = "https://thermohuolto.fi";

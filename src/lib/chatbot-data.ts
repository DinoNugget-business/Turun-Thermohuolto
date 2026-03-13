import { CONTACT, WEBSITE_URL } from "./constants";

export type ChatFAQ = {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  quickReplies?: string[];
  link?: { url: string; label: string };
};

export type ChatCategory = {
  id: string;
  label: string;
  icon: string;
  faqId: string;
};

export const CHAT_CATEGORIES: ChatCategory[] = [
  { id: "services", label: "Palvelut", icon: "Wrench", faqId: "services-overview" },
  { id: "emergency", label: "Päivystys 24/7", icon: "AlertCircle", faqId: "emergency" },
  { id: "brands", label: "Merkit", icon: "Shield", faqId: "brands-refrigeration" },
  { id: "atp", label: "ATP-tarkastukset", icon: "ClipboardCheck", faqId: "atp-inspections" },
  { id: "location", label: "Sijainti", icon: "MapPin", faqId: "location" },
  { id: "about", label: "Yritys", icon: "Building2", faqId: "company-info" },
  { id: "team", label: "Tiimi", icon: "Users", faqId: "staff-overview" },
  { id: "contact", label: "Yhteystiedot", icon: "Phone", faqId: "contact" },
];

export const FAQ_DATA: ChatFAQ[] = [
  // === COMPANY INFO (3) ===
  {
    id: "company-info",
    category: "about",
    keywords: ["yritys", "thermohuolto", "kuka", "mika", "tietoa", "esittely", "perustiedot"],
    question: "Kerro Thermohuollosta",
    answer: `**Turun Thermohuolto Oy** on erikoistunut ajoneuvojen kylmäkoneiden, lisälämmittimien ja ilmastointilaitteiden asennukseen, korjaukseen ja huoltoon.\n\n• Perustettu 1.3.2004 Turussa\n• Sijainti: Lieto (vuodesta 2010)\n• Valtuutettu kylmälaitemyyjä\n• ATP-kausitarkastusvaltuudet\n• Yli 20 vuoden kokemus`,
    quickReplies: ["company-history", "services-overview", "contact"],
  },
  {
    id: "company-history",
    category: "about",
    keywords: ["historia", "perustettu", "milloin", "tausta", "tarina", "alku"],
    question: "Mikä on Thermohuollon historia?",
    answer: `**Thermohuollon historia:**\n\n• **1.3.2004** — Yritys perustettu Turussa, Oriketon kaupunginosassa\n• **Syksy 2010** — Muutto nykyisiin tiloihin Lietoon, Tuulissuon alueelle\n• **2024** — 20-vuotisjuhlavuosi\n\nYritys on kasvanut luotettavaksi kylmälaite- ja lämmitinhuollon ammattilaiseksi.`,
    quickReplies: ["company-info", "staff-overview", "location"],
  },
  {
    id: "company-director",
    category: "about",
    keywords: ["toimitusjohtaja", "johtaja", "omistaja", "marko", "jamsen", "pomo"],
    question: "Kuka on toimitusjohtaja?",
    answer: `Toimitusjohtaja on **Marko Jämsén**.\n\n📞 Puhelin: 0207 980 281\n✉️ Sähköposti: marko.jamsen@thermohuolto.fi`,
    quickReplies: ["staff-overview", "contact"],
  },

  // === SERVICES (7) ===
  {
    id: "services-overview",
    category: "services",
    keywords: ["palvelu", "palvelut", "mita", "teette", "tarjoatte", "tyo", "tyot"],
    question: "Mitä palveluja tarjoatte?",
    answer: `Tarjoamme kattavat palvelut:\n\n• **Kylmälaitteet** — myynti, asennus, korjaus, huolto\n• **Lisälämmittimet** — Webasto & Eberspächer\n• **Ilmastointi** — linja-autot ja ajoneuvot\n• **Autosähkötyöt** — jätepuristimet, takalaitanostimet\n• **ATP-tarkastukset** — elintarvikekuljetus\n• **Biokylmälaitteet** — Lumikko\n• **Veneet & matkailuautot** — lämmittimet\n• **Traktorit & työkoneet**\n• **AddVolt** — akkuratkaisut\n• **VULCAN Lockring** — putkikorjaukset`,
    quickReplies: ["service-refrigeration", "service-heating", "emergency"],
  },
  {
    id: "service-refrigeration",
    category: "services",
    keywords: ["kylmakone", "kylmalaite", "kylma", "pakastin", "jaahdy", "kuljetuskylma"],
    question: "Kylmälaitepalvelut?",
    answer: `**Kylmälaitepalvelut:**\n\nMyymme, asennamme, korjaamme ja huollamme kylmäkoneita useille merkeille:\n\n• Thermo King\n• Lumikko\n• Carrier\n• Frigoblock\n• Hultsteins\n• Mitsubishi\n\nToimimme valtuutettuna kylmälaitemyyjänä.`,
    quickReplies: ["brands-refrigeration", "emergency", "booking"],
  },
  {
    id: "service-heating",
    category: "services",
    keywords: ["lammit", "lisalammit", "webasto", "eberspacher", "polttoaine", "lammitys"],
    question: "Lisälämmittimien huolto?",
    answer: `**Lisälämmitinpalvelut:**\n\nAsennamme ja huollamme ammattitaitoisesti:\n\n• **Webasto** — polttoainelisälämmittimet\n• **Eberspächer** — polttoainelisälämmittimet\n\nPalvelemme henkilöautoja, pakettiautoja, kuorma-autoja, matkailuautoja ja veneitä.`,
    quickReplies: ["service-boat-rv", "brands-heating", "booking"],
  },
  {
    id: "service-ac",
    category: "services",
    keywords: ["ilmastointi", "ac", "ilmanvaihto", "viilennys", "linja-auto", "bussi"],
    question: "Ilmastointipalvelut?",
    answer: `**Ilmastointipalvelut:**\n\nHuollamme ja korjaamme ajoneuvojen ilmastointilaitteita:\n\n• Mercedes-Benz\n• Setra\n• EvoBus\n• Finnotzo\n• Sutrak\n• Konvekta\n\nErikoisosaamista linja-autojen ja matkailuautojen ilmastoinnissa.`,
    quickReplies: ["brands-ac", "vulcan-lockring", "booking"],
  },
  {
    id: "service-electrical",
    category: "services",
    keywords: ["sahko", "autosahko", "sahkotyo", "jatepuristin", "takalaita", "nostin"],
    question: "Autosähkötyöt?",
    answer: `**Autosähkötyöt:**\n\n• Jätepuristimien asennus ja korjaus\n• Takalaitanostimien huolto\n• Yleiset ajoneuvosähkötyöt\n\nYhteydenotto: ${CONTACT.phone}`,
    quickReplies: ["services-overview", "booking", "contact"],
  },
  {
    id: "service-boat-rv",
    category: "services",
    keywords: ["vene", "matkailuauto", "asuntoauto", "karavaanari", "merenkulku"],
    question: "Vene- ja matkailuautopalvelut?",
    answer: `**Veneet & matkailuautot:**\n\nTarjoamme lämmittimien asennus-, korjaus- ja huoltopalvelut:\n\n• Veneiden lämmittimet\n• Matkailuautojen lämmittimet\n• Webasto & Eberspächer -merkit\n\nOlimme mukana myös Turun vierasvenesataman satamaoppaassa 2018.`,
    quickReplies: ["service-heating", "service-agriculture", "booking"],
  },
  {
    id: "service-agriculture",
    category: "services",
    keywords: ["traktori", "tyokone", "maatalous", "kaivinkone", "maansiirto"],
    question: "Palveletteko traktoreita ja työkoneita?",
    answer: `**Traktorit & työkoneet:**\n\nAsennamme ja huollamme kylmä- ja lämpölaitteita:\n\n• Maataloustraktorit\n• Työkoneet\n• Kaivurit ja maansiirtokoneet\n\nOta yhteyttä räätälöityä palvelua varten: ${CONTACT.phone}`,
    quickReplies: ["services-overview", "booking", "contact"],
  },

  // === ATP INSPECTIONS (3) ===
  {
    id: "atp-inspections",
    category: "atp",
    keywords: ["atp", "tarkastus", "elintarvike", "kuljetus", "sertifikaatti", "todistus", "kausitarkastus"],
    question: "Mitä ovat ATP-tarkastukset?",
    answer: `**ATP-kausitarkastukset:**\n\nATP (Accord relatif aux Transports internationaux de denrées Périssables) on kansainvälinen sopimus helposti pilaantuvien elintarvikkeiden kuljetuksesta.\n\n• Tarkastamme elintarvikekuljetusvälineiden vaatimustenmukaisuuden\n• Meillä on viralliset tarkastusvaltuudet\n• Tarkastus on nopea ja vaivaton\n• Koskee 6 vuotta vanhoja ja sitä vanhempia kuorirakenteiden tarkastuksia`,
    quickReplies: ["atp-who-needs", "atp-booking", "contact"],
  },
  {
    id: "atp-who-needs",
    category: "atp",
    keywords: ["kuka", "tarvitsee", "pitaa", "velvollisuus", "laki", "vaatimus", "pakollinen"],
    question: "Kenen pitää tehdä ATP-tarkastus?",
    answer: `**ATP-tarkastus vaaditaan:**\n\n• Kaikilta yrityksiltä, jotka kuljettavat helposti pilaantuvia elintarvikkeita\n• Pakastetut ja tuoreet tuotteet\n• Sekä kotimaan että kansainväliset kuljetukset\n• Kuorirakenteiden kausitarkastus 6 vuoden iästä alkaen\n\nTarkastus varmistaa, että kuljetusväline täyttää lämpötilavaatimukset.`,
    quickReplies: ["atp-inspections", "atp-booking", "contact"],
  },
  {
    id: "atp-booking",
    category: "atp",
    keywords: ["varaa", "ajanvaraus", "atp aika", "markku", "jyranti", "tarkastusaika"],
    question: "Miten varaan ATP-tarkastuksen?",
    answer: `**ATP-tarkastuksen varaus:**\n\nOta yhteyttä ATP-vastaavaamme:\n\n👤 **Markku Jyränti**\n📞 ${CONTACT.phone}\n✉️ markku.jyranti@thermohuolto.fi\n\nTarkastus on nopea ja vaivaton.`,
    quickReplies: ["atp-inspections", "location", "contact"],
  },

  // === BRANDS (3) ===
  {
    id: "brands-refrigeration",
    category: "brands",
    keywords: ["merkki", "kylmamerkki", "thermo king", "lumikko", "carrier", "frigoblock"],
    question: "Mitä kylmälaitteita edustatte?",
    answer: `**Kylmälaitemerkit:**\n\n• **Thermo King**\n• **Lumikko**\n• **Carrier**\n• **Frigoblock**\n• **Hultsteins**\n• **Mitsubishi**\n\nMyymme, asennamme ja huollamme kaikkia näitä merkkejä.`,
    quickReplies: ["brands-heating", "brands-ac", "service-refrigeration"],
  },
  {
    id: "brands-heating",
    category: "brands",
    keywords: ["lammitinmerkki", "webasto", "eberspacher", "lammitinmerkit"],
    question: "Mitä lämmitinmerkkejä huollatte?",
    answer: `**Lämmitinmerkit:**\n\n• **Webasto**\n• **Eberspächer**\n\nAsennamme ja huollamme molempia merkkejä ammattitaitoisesti. Palvelemme kaikkia ajoneuvotyyppejä henkilöautoista linja-autoihin.`,
    quickReplies: ["brands-refrigeration", "service-heating", "booking"],
  },
  {
    id: "brands-ac",
    category: "brands",
    keywords: ["ilmastointimerkki", "mercedes", "setra", "evobus", "konvekta", "sutrak"],
    question: "Mitä ilmastointimerkkejä huollatte?",
    answer: `**Ilmastointimerkit:**\n\n• **Mercedes-Benz**\n• **Setra**\n• **EvoBus**\n• **Finnotzo**\n• **Sutrak**\n• **Konvekta**\n\nErikoisosaamista erityisesti linja-autojen ja matkailuajoneuvojen ilmastoinnissa.`,
    quickReplies: ["brands-refrigeration", "service-ac", "booking"],
  },

  // === SPECIAL SERVICES (3) ===
  {
    id: "bio-refrigeration",
    category: "services",
    keywords: ["bio", "biokylma", "biopakastin", "lumikko bio", "ymparisto", "ekologinen"],
    question: "Biokylmälaitteet?",
    answer: `**Biokylmälaitteet (Lumikko):**\n\nMyymme ja huollamme Lumikon valmistamia biokylmäkoneita.\n\n• Ympäristöystävällinen kylmäratkaisu\n• Myynti ja huolto/korjaus\n• Soveltuu elintarvikekuljetuksiin`,
    quickReplies: ["service-refrigeration", "brands-refrigeration", "booking"],
  },
  {
    id: "addvolt-info",
    category: "services",
    keywords: ["addvolt", "akku", "akseli", "energia", "sahko", "akselisahko"],
    question: "Mikä on AddVolt?",
    answer: `**AddVolt — akselienergiaa hyödyntävä akkuratkaisu:**\n\n• Hyödyntää ajoneuvon akselin tuottamaa energiaa\n• Vähentää polttoaineen kulutusta\n• Ympäristöystävällinen ratkaisu kuljetusyrityksille\n\nKysy lisää: ${CONTACT.phone}`,
    quickReplies: ["services-overview", "contact"],
  },
  {
    id: "vulcan-lockring",
    category: "services",
    keywords: ["vulcan", "lockring", "putki", "alumiini", "putkikorjaus", "ilmastointiputki"],
    question: "VULCAN Lockring -korjaus?",
    answer: `**VULCAN Lockring -menetelmä:**\n\nAlumiini-ilmastointiputkien korjaus ilman ajoneuvon purkamista.\n\n• Ei tarvitse purkaa ajoneuvoa\n• Nopea ja kustannustehokas\n• Soveltuu kaikkiin alumiini-ilmastointiputkiin\n\nTiedustelut: ${CONTACT.phone}`,
    quickReplies: ["service-ac", "services-overview", "booking"],
  },

  // === EMERGENCY (2) ===
  {
    id: "emergency",
    category: "emergency",
    keywords: ["paivystys", "hatanumero", "kiireellinen", "rikki", "24h", "24/7", "yolla", "viikonloppu"],
    question: "Onko teillä päivystyspalvelua?",
    answer: `**24/7 Päivystyspalvelu:**\n\n📞 **${CONTACT.emergency}**\n\nPäivystys on käytettävissä ympäri vuorokauden, myös viikonloppuisin.\n\nPalvelemme kaikissa kylmälaite- ja lämmitinhätätapauksissa.`,
    quickReplies: ["emergency-how", "contact", "services-overview"],
  },
  {
    id: "emergency-how",
    category: "emergency",
    keywords: ["miten paivystys", "miten toimii", "paivystysnumero", "soittaa paivystys"],
    question: "Miten päivystys toimii?",
    answer: `**Päivystyksen toiminta:**\n\n1. Soita päivystysnumeroon: **${CONTACT.emergency}**\n2. Kerro vikatilanteesi\n3. Teknikko lähetetään paikalle\n\nPäivystys kattaa:\n• Kylmälaitteiden hätäkorjaukset\n• Lämmittimien vikatilaneet\n• Kuljetuskaluston toimintahäiriöt`,
    quickReplies: ["emergency", "contact", "location"],
  },

  // === LOCATION (2) ===
  {
    id: "location",
    category: "location",
    keywords: ["sijainti", "osoite", "missa", "lieto", "kartta", "paikka", "tuulissuo"],
    question: "Missä olette?",
    answer: `**Sijaintimme:**\n\n📍 **${CONTACT.fullAddress}**\n\nSijaitsemme Liedon Tuulissuon alueella.\n\nReitti Turusta: Noin 15 minuutin ajomatka Turun keskustasta itään.`,
    quickReplies: ["how-to-get-there", "contact"],
    link: { url: "https://maps.google.com/?q=Luolakalliontie+5,+21420+Lieto", label: "Avaa Google Maps" },
  },
  {
    id: "how-to-get-there",
    category: "location",
    keywords: ["reitti", "ajo-ohje", "miten paasee", "parkkipaikka", "pysakointi"],
    question: "Miten pääsen teille?",
    answer: `**Ajo-ohjeet:**\n\nOsoite: ${CONTACT.fullAddress}\n\n• **Turusta:** Noin 15 min ajomatka itään\n• **Helsingistä:** E18/Moottoritietä Turun suuntaan, erkaneminen Lietoon\n• Pysäköintitilaa löytyy kiinteistön pihalta`,
    quickReplies: ["location", "contact"],
    link: { url: "https://maps.google.com/?q=Luolakalliontie+5,+21420+Lieto", label: "Avaa Google Maps" },
  },

  // === TEAM (2) ===
  {
    id: "staff-overview",
    category: "team",
    keywords: ["tiimi", "henkilokunta", "tyontekija", "keita", "teknikko", "asentaja"],
    question: "Ketkä työskentelevät teillä?",
    answer: `**Tiimimme:**\n\n👤 **Marko Jämsén** — Toimitusjohtaja\n📞 0207 980 281\n\n👤 **Markku Jyränti** — ATP-kausitarkastukset\n✉️ markku.jyranti@thermohuolto.fi\n\n👤 **Olli-Pekka Rehvonen** — Kylmälaiteteknikko\n📞 0207 980 284\n\n👤 **Kaarel Möldre** — Kylmälaiteteknikko\n\n👤 **Jarko Mäkelä** — Kylmälaiteteknikko`,
    quickReplies: ["company-director", "atp-booking", "contact"],
  },
  {
    id: "staff-atp-contact",
    category: "team",
    keywords: ["atp yhteyshenkilö", "markku", "jyranti", "atp vastuuhenkilö"],
    question: "Kuka hoitaa ATP-asiat?",
    answer: `**ATP-vastaava:**\n\n👤 **Markku Jyränti**\n📞 ${CONTACT.phone}\n✉️ markku.jyranti@thermohuolto.fi\n\nHoitaa kaikki ATP-kausitarkastuksiin liittyvät asiat.`,
    quickReplies: ["atp-inspections", "atp-booking", "contact"],
  },

  // === BOOKING & PRICING (2) ===
  {
    id: "booking",
    category: "contact",
    keywords: ["varaa", "ajanvaraus", "aika", "varata", "tilata", "tulla"],
    question: "Miten varaan ajan?",
    answer: `**Ajanvaraus:**\n\n📞 Soita: **${CONTACT.phone}**\n✉️ Sähköposti: **${CONTACT.email}**\n\nKerro meille:\n• Ajoneuvosi tyyppi ja merkki\n• Millaista palvelua tarvitset\n• Toivottu ajankohta`,
    quickReplies: ["contact", "services-overview", "location"],
  },
  {
    id: "pricing",
    category: "contact",
    keywords: ["hinta", "maksaa", "paljonko", "kustannus", "hinnasto", "tarjous"],
    question: "Mitä palvelut maksavat?",
    answer: `**Hinnoittelu:**\n\nHintamme määräytyvät työn laajuuden ja varaosatarpeen mukaan.\n\nPyydä tarjous:\n📞 ${CONTACT.phone}\n✉️ ${CONTACT.email}\n\nKerro ajoneuvon tiedot ja tarvittava palvelu, niin annamme tarjouksen.`,
    quickReplies: ["booking", "services-overview", "contact"],
  },

  // === QUALITY & VEHICLES (2) ===
  {
    id: "quality",
    category: "about",
    keywords: ["laatu", "sertifikaatti", "standardi", "kalibrointi", "testaus", "luotettavuus"],
    question: "Miten laatu varmistetaan?",
    answer: `**Laatupolitiikka:**\n\n• Toimintajärjestelmämme täyttää kansainväliset testaus- ja kalibrointilaboratorioiden vaatimukset\n• Jatkuva laadun parantaminen koulutuksen ja kehityksen kautta\n• Virheettömät, oikea-aikaiset tuotteet ja palvelut\n• Kattava raportointijärjestelmä asiakkaille ja viranomaisille`,
    quickReplies: ["company-info", "services-overview", "contact"],
  },
  {
    id: "vehicle-types",
    category: "services",
    keywords: ["ajoneuvo", "auto", "kuorma-auto", "linja-auto", "pakettiauto", "rekka"],
    question: "Mitä ajoneuvotyyppejä palvelette?",
    answer: `**Palvelemme laajan valikoiman ajoneuvoja:**\n\n• **Kuorma-autot** — kylmäkuljetus, lämmittimet\n• **Linja-autot** — ilmastointi, lämmittimet\n• **Pakettiautot** — kylmälaitteet, lämmittimet\n• **Henkilöautot** — lisälämmittimet\n• **Matkailuautot** — lämmittimet, ilmastointi\n• **Veneet** — lämmittimet\n• **Traktorit** — kylmä- ja lämpölaitteet\n• **Työkoneet** — erikoisratkaisut`,
    quickReplies: ["services-overview", "brands-refrigeration", "booking"],
  },

  // === CONTACT (1) ===
  {
    id: "contact",
    category: "contact",
    keywords: ["puhelin", "numero", "soittaa", "yhteystieto", "sahkoposti", "email"],
    question: "Miten otan yhteyttä?",
    answer: `**Yhteystiedot:**\n\n📞 **Puhelin:** ${CONTACT.phone}\n🚨 **Päivystys 24/7:** ${CONTACT.emergency}\n✉️ **Sähköposti:** ${CONTACT.email}\n\n📍 **Osoite:** ${CONTACT.fullAddress}`,
    quickReplies: ["location", "booking", "emergency"],
  },

  // === USED EQUIPMENT (1) ===
  {
    id: "used-equipment",
    category: "services",
    keywords: ["kaytetty", "vaihtolaite", "tarjous", "myynti", "kaytettya"],
    question: "Onko teillä käytettyjä laitteita myynnissä?",
    answer: `Meillä on ajoittain käytettyjä kylmälaitteita myynnissä.\n\nSaatavuus vaihtelee — kysy ajankohtaista valikoimaa:\n\n📞 ${CONTACT.phone}\n✉️ ${CONTACT.email}`,
    quickReplies: ["services-overview", "brands-refrigeration", "contact"],
  },
];

// --- KEYWORD MATCHING ENGINE ---

const FINNISH_SUFFIXES = [
  "ssa", "ssä", "sta", "stä", "lle", "lta", "ltä",
  "een", "ään", "aan", "iin", "lla", "llä",
  "ksi", "tta", "ttä", "na", "nä",
  "n", "t", "a", "ä",
];

function stemFinnish(word: string): string {
  const lower = word.toLowerCase();
  for (const suffix of FINNISH_SUFFIXES) {
    if (lower.length > suffix.length + 2 && lower.endsWith(suffix)) {
      return lower.slice(0, -suffix.length);
    }
  }
  return lower;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äå]/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

export function findBestMatch(input: string): ChatFAQ | null {
  const normalizedInput = normalize(input);
  const inputWords = normalizedInput.split(/\s+/).filter(Boolean);
  const stemmedInput = inputWords.map(stemFinnish);

  let bestScore = 0;
  let bestMatch: ChatFAQ | null = null;

  for (const faq of FAQ_DATA) {
    let score = 0;

    for (const keyword of faq.keywords) {
      const normalizedKeyword = normalize(keyword);
      const keywordParts = normalizedKeyword.split(/\s+/);

      if (normalizedInput.includes(normalizedKeyword)) {
        score += 3 * keywordParts.length;
        continue;
      }

      for (const kw of keywordParts) {
        const stemmedKw = stemFinnish(kw);
        for (const sw of stemmedInput) {
          if (sw === kw || sw === stemmedKw) {
            score += 2;
          } else if (sw.includes(stemmedKw) || stemmedKw.includes(sw)) {
            score += 1;
          }
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestScore >= 2 ? bestMatch : null;
}

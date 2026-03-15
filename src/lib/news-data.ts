export type NewsArticle = {
  id: string;
  date: string;
  image: string | null;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "thermohuolto-20v",
    date: "2024-02-14",
    image: "/images/about/facility.jpg",
  },
  {
    id: "veneiden-lammitinasennukset",
    date: "2021-04-21",
    image: "/images/references/boats-motorhomes.jpg",
  },
  {
    id: "ilmastointihuolto-korjaus",
    date: "2021-03-01",
    image: "/images/news/ac-service.jpg",
  },
  {
    id: "lisalammittimien-syyshuollot",
    date: "2020-10-19",
    image: "/images/news/vehicle-ac.jpg",
  },
  {
    id: "el-kori-elli-60v",
    date: "2016-04-20",
    image: "/images/news/el-kori-event.jpg",
  },
  {
    id: "auto-veneilmastoinnit",
    date: "2016-02-17",
    image: "/images/references/vehicles.jpg",
  },
  {
    id: "eberi-lampopaivat",
    date: "2015-11-12",
    image: null,
  },
  {
    id: "alumiinisten-putkien-korjaus",
    date: "2015-09-07",
    image: "/images/news/mercedes-service.jpg",
  },
  {
    id: "konvekta-yhteistyo",
    date: "2015-05-28",
    image: null,
  },
  {
    id: "uutta-huoltokalustoa",
    date: "2013-12-23",
    image: "/images/about/company.jpg",
  },
];

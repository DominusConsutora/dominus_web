import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dominuslogistica.com";
const serviceSlugs = [
  "master-plans-portuarios",
  "concesiones-ppp-licitaciones",
  "gobernanza-y-tarifas",
  "optimizacion-operativa-terminales",
  "transformacion-digital-pcs",
  "sostenibilidad-y-green-ports",
  "regulacion-y-politicas-publicas",
  "capacitacion-y-talento",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["es", "en"];
  const routes = [
    "",
    "/nosotros",
    "/nosotros/diego-salom",
    "/servicios",
    ...serviceSlugs.map((slug) => `/servicios/${slug}`),
    "/contacto",
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route === "" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: route.includes("servicios/") ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.includes("servicios/") ? 0.8 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((otherLocale) => [
            otherLocale,
            `${siteUrl}/${otherLocale}${route === "" ? "" : route}`,
          ]),
        ),
      },
    })),
  );
}

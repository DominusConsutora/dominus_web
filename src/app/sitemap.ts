import type { MetadataRoute } from "next";
import { getBlogSlugs } from "../data/blogPosts";

export const dynamic = "force-static";

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
  const blogSlugs = getBlogSlugs();
  const routes = [
    "",
    "/nosotros",
    "/nosotros/diego-salom",
    "/servicios",
    ...serviceSlugs.map((slug) => `/servicios/${slug}`),
    "/blog",
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    "/contacto",
    "/preguntas-frecuentes",
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

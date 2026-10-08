import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Crawlers de motores de IA que se permiten explícitamente para visibilidad en
// respuestas generativas (GEO). Si en el futuro se quiere bloquear alguno,
// mover su userAgent a una regla con `disallow: "/"`.
const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dominuslogistica.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
      {
        userAgent: aiBots,
        allow: "/",
        disallow: ["/private/", "/api/"],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`],
    host: siteUrl,
  };
}


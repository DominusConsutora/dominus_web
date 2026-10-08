import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dominuslogistica.com";

export function localizedAlternates(path: string, locale: string): Metadata["alternates"] {
    const normalizedLocale = locale === "en" ? "en" : "es";
    const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");

    return {
        canonical: `/${normalizedLocale}${normalizedPath}` || `/${normalizedLocale}`,
        languages: {
            es: `/es${normalizedPath}` || "/es",
            en: `/en${normalizedPath}` || "/en",
            "x-default": `/es${normalizedPath}` || "/es",
        },
    };
}

export function absoluteUrl(path: string): string {
    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

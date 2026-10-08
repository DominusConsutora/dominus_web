import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import CtaOne from "../_components/CtaOne";
import HeroBlog from "./_components/HeroBlog";
import BlogIndexGrid from "./_components/BlogIndexGrid";
import { localizedAlternates } from "../../../lib/seo";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isEnglish = locale === "en";

    return {
        title: isEnglish
            ? "Blog | Port development analysis and opinion"
            : "Blog | Análisis y opinión sobre desarrollo portuario",
        description: isEnglish
            ? "Articles and opinion from the DOMINUS team on port planning, governance, concessions, operations and sustainability."
            : "Artículos y opiniones del equipo de DOMINUS sobre planificación, gobernanza, concesiones, operación y sostenibilidad portuaria.",
        alternates: localizedAlternates("/blog", locale),
    };
}

/**
 * Página `/blog` — Listado de notas con hero, grid completo y CTA final.
 */
export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="blog" />
            <HeroBlog />
            <BlogIndexGrid />
            <CtaOne
                namespace="blogPage.finalCta"
                primaryHref="/contacto"
                secondaryHref="/servicios"
            />
            <FooterTwo />
        </main>
    );
}

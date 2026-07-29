import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../../_components/HeaderTwo";
import FooterTwo from "../../_components/FooterTwo";
import CtaOne from "../../_components/CtaOne";
import HeroServiceDetail from "./_components/HeroServiceDetail";
import ServiceDetailBody from "./_components/ServiceDetailBody";
import { routing } from "../../../../i18n/routing";

/**
 * Página dinámica `/servicios/[slug]` — Detalle por línea de trabajo.
 * Slugs alineados con `DominusNav` y con el índice de CONTENT.md · Servicios.
 * Textos por slug en `services.list.<slug>` (título, descripción corta,
 * descripción larga y entregables típicos).
 */
const SERVICE_SLUGS = [
    "master-plans-portuarios",
    "concesiones-ppp-licitaciones",
    "gobernanza-y-tarifas",
    "optimizacion-operativa-terminales",
    "transformacion-digital-pcs",
    "sostenibilidad-y-green-ports",
    "regulacion-y-politicas-publicas",
    "capacitacion-y-talento",
] as const;

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        SERVICE_SLUGS.map((slug) => ({ locale, slug })),
    );
}

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    if (!SERVICE_SLUGS.includes(slug as (typeof SERVICE_SLUGS)[number])) {
        notFound();
    }
    setRequestLocale(locale);
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="servicios" />
            <HeroServiceDetail slug={slug} />
            <ServiceDetailBody slug={slug} />
            <CtaOne
                namespace="servicesPage.finalCta"
                primaryHref="/contacto"
                secondaryHref="/servicios"
            />
            <FooterTwo />
        </main>
    );
}

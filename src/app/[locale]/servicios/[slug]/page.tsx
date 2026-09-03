import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../../_components/HeaderTwo";
import FooterTwo from "../../_components/FooterTwo";
import CtaOne from "../../_components/CtaOne";
import HeroServiceDetail from "./_components/HeroServiceDetail";
import ServiceDetailBody from "./_components/ServiceDetailBody";
import { routing } from "../../../../i18n/routing";

const SERVICE_LABELS: Record<string, { es: string; en: string }> = {
    "master-plans-portuarios": {
        es: "Master plans portuarios",
        en: "Port master plans",
    },
    "concesiones-ppp-licitaciones": {
        es: "Concesiones, PPP y licitaciones",
        en: "Concessions, PPP and tenders",
    },
    "gobernanza-y-tarifas": {
        es: "Gobernanza y tarifas",
        en: "Governance and tariffs",
    },
    "optimizacion-operativa-terminales": {
        es: "Optimización operativa de terminales",
        en: "Terminal operational optimization",
    },
    "transformacion-digital-pcs": {
        es: "Transformación digital y PCS",
        en: "Digital transformation and PCS",
    },
    "sostenibilidad-y-green-ports": {
        es: "Sostenibilidad y green ports",
        en: "Sustainability and green ports",
    },
    "regulacion-y-politicas-publicas": {
        es: "Regulación y políticas públicas",
        en: "Regulation and public policy",
    },
    "capacitacion-y-talento": {
        es: "Capacitación y talento portuario",
        en: "Training and port talent",
    },
};

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

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const label = SERVICE_LABELS[slug]?.[locale === "en" ? "en" : "es"] ?? slug;
    const isEnglish = locale === "en";

    return {
        title: isEnglish
            ? `${label} | DOMINUS Services`
            : `${label} | Servicios DOMINUS`,
        description: isEnglish
            ? `Learn more about ${label.toLowerCase()} and how DOMINUS helps port authorities and operators improve planning, governance and performance.`
            : `Conocé más sobre ${label.toLowerCase()} y cómo DOMINUS ayuda a autoridades y operadores portuarios a mejorar planificación, gobernanza y desempeño.`,
        keywords: isEnglish
            ? [label, "port consulting", "port strategy", "terminal performance", "governance"]
            : [label, "consultoría portuaria", "estrategia portuaria", "desarrollo portuario", "gobernanza"],
    };
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

import React from "react";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import CtaOne from "../_components/CtaOne";
import HeroServices from "./_components/HeroServices";
import ServicesIndexGrid from "./_components/ServicesIndexGrid";

/**
 * Página `/servicios` — Landing con hero, grid de las 8 líneas de trabajo y
 * CTA final que enlaza a `/contacto` (secundario a `/nosotros`).
 * Fuente de contenido: CONTENT.md · Servicios.
 */
export default function ServicesPage() {
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="servicios" />
            <HeroServices />
            <ServicesIndexGrid />
            <CtaOne
                namespace="servicesPage.finalCta"
                primaryHref="/contacto"
                secondaryHref="/nosotros"
            />
            <FooterTwo />
        </main>
    );
}

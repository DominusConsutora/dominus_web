import React from "react";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import CtaOne from "../_components/CtaOne";
import HeroAbout from "./_components/HeroAbout";
import IntroBlock from "./_components/IntroBlock";
import ReachBlock from "./_components/ReachBlock";
import MethodBlock from "./_components/MethodBlock";
import ValuesBlock from "./_components/ValuesBlock";
import AdvantagesBlock from "./_components/AdvantagesBlock";

/**
 * Página `/nosotros` (About).
 * Fuente de contenido: CONTENT.md · §Nosotros (bloques 1..7).
 * El bloque 7 (CTA de cierre) reusa el componente `CtaOne` con namespace
 * `aboutPage.finalCta` y `secondaryHref` a `/servicios` (según CONTENT.md).
 */
export default function AboutPage() {
    return (
        <main className="page-wrapper">
            <HeaderTwo />
            <HeroAbout />
            <IntroBlock />
            <ReachBlock />
            <MethodBlock />
            <ValuesBlock />
            <AdvantagesBlock />
            <CtaOne
                namespace="aboutPage.finalCta"
                primaryHref="/contacto"
                secondaryHref="/servicios"
            />
            <FooterTwo />
        </main>
    );
}

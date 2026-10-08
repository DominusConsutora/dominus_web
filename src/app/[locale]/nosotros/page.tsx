import type { Metadata } from "next";
import React from "react";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import CtaOne from "../_components/CtaOne";
import HeroAbout from "./_components/HeroAbout";
import IntroBlock from "./_components/IntroBlock";
import FounderBlock from "./_components/FounderBlock";
import ReachBlock from "./_components/ReachBlock";
import MethodBlock from "./_components/MethodBlock";
import ValuesBlock from "./_components/ValuesBlock";
import AdvantagesBlock from "./_components/AdvantagesBlock";
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
      ? "About DOMINUS | Port strategy and institutional consulting"
      : "Nosotros | DOMINUS · Consultoría portuaria institucional",
    description: isEnglish
      ? "Learn about DOMINUS, a firm specialized in port development, governance, planning and strategic projects for authorities and operators worldwide."
      : "Conocé DOMINUS, consultora especializada en desarrollo portuario, gobernanza, planificación y proyectos estratégicos para autoridades y operadores del sector.",
    alternates: localizedAlternates("/nosotros", locale),
  };
}

/**
 * Página `/nosotros` (About).
 * Fuente de contenido: CONTENT.md · §Nosotros (bloques 1..7).
 * El bloque 7 (CTA de cierre) reusa el componente `CtaOne` con namespace
 * `aboutPage.finalCta` y `secondaryHref` a `/servicios` (según CONTENT.md).
 */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

    return (
        <main className="page-wrapper">
            <HeaderTwo />
            <HeroAbout />
            <IntroBlock />
            <FounderBlock />
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

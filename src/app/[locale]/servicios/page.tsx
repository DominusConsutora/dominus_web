import type { Metadata } from "next";
import React from "react";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import CtaOne from "../_components/CtaOne";
import HeroServices from "./_components/HeroServices";
import ServicesIndexGrid from "./_components/ServicesIndexGrid";
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
      ? "Services | Port strategy, governance and digital transformation"
      : "Servicios | Estrategia, gobernanza y transformación portuaria",
    description: isEnglish
      ? "Explore DOMINUS services for port planning, concessions, governance, operations, sustainability and digital transformation for ports and terminals."
      : "Explorá los servicios de DOMINUS en planificación portuaria, concesiones, gobernanza, operaciones, sostenibilidad y transformación digital para puertos y terminales.",
    alternates: localizedAlternates("/servicios", locale),
  };
}

/**
 * Página `/servicios` — Landing con hero, grid de las 8 líneas de trabajo y
 * CTA final que enlaza a `/contacto` (secundario a `/nosotros`).
 * Fuente de contenido: CONTENT.md · Servicios.
 */
export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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

import type { Metadata } from "next";
import React from "react";
import { Link } from "../../../i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import HeroContact from "./_components/HeroContact";
import ContactFormSection from "./_components/ContactFormSection";
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
      ? "Contact DOMINUS | Port consulting and strategic projects"
      : "Contacto | DOMINUS · Consultoría portuaria",
    description: isEnglish
      ? "Contact DOMINUS to discuss a port strategy, governance, concession, digital transformation or sustainability project."
      : "Contactá a DOMINUS para hablar de estrategia portuaria, gobernanza, concesiones, transformación digital o sostenibilidad.",
    alternates: localizedAlternates("/contacto", locale),
  };
}

/**
 * Página `/contacto` — Hero y formulario de contacto.
 * El CTA final de Servicios navega aquí para centralizar las consultas.
 */
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="contacto" />
            <HeroContact />
            <ContactFormSection />
            <FooterTwo />
        </main>
    );
}

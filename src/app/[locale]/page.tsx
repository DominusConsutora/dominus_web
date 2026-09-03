import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import React from "react";
import HeaderTwo from "./_components/HeaderTwo";
import BannerTwo from "./_components/BannerTwo";
import AboutTwo from "./_components/AboutTwo";
import ServicesThree from "./_components/ServicesThree";
import ServiceTwo from "./_components/ServiceTwo";
import CtaOne from "./_components/CtaOne";
import FooterTwo from "./_components/FooterTwo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish
      ? "DOMINUS | Port development consultancy"
      : "DOMINUS | Consultora de desarrollo portuario",
    description: isEnglish
      ? "DOMINUS supports port authorities and operators with strategic plans, governance, digital transformation and sustainability projects across the port sector."
      : "DOMINUS acompaña a autoridades y operadores portuarios con planes estratégicos, gobernanza, transformación digital y sostenibilidad para el desarrollo portuario.",
    keywords: isEnglish
      ? [
          "port consultancy",
          "port development",
          "port strategy",
          "terminal optimization",
          "green ports",
          "port governance",
        ]
      : [
          "consultoría portuaria",
          "desarrollo portuario",
          "estrategia portuaria",
          "optimización de terminales",
          "green ports",
          "gobernanza portuaria",
        ],
  };
}

// Componentes comentados hasta tener contenido validado por el cliente:
// - CaseStudyOne  → Proyectos / Casos de éxito (fase 2, requiere autorización de clientes)
// - VideoTwo      → Video institucional (sin material aún)
// - FaqOne        → No definido en CONTENT.md
// - TestimonialOne → "Confían en DOMINUS" (fase 2, requiere logos autorizados)
// - BlogOne       → Publicaciones / Insights (fase 2)

export default function HomePage() {
  return (
    <main className="page-wrapper">
      <HeaderTwo />
      <BannerTwo />
      <AboutTwo />
      <ServicesThree />
      <ServiceTwo />
      <CtaOne />
      <FooterTwo />
    </main>
  );
}

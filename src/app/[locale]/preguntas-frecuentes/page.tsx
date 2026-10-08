import type { Metadata } from "next";
import React from "react";
import { setRequestLocale } from "next-intl/server";
import FooterTwo from "../_components/FooterTwo";
import HeaderTwo from "../_components/HeaderTwo";
import FaqOne from "../_components/FaqOne";
import CtaOne from "../_components/CtaOne";
import HeroFaq from "./_components/HeroFaq";
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
      ? "Frequently asked questions | DOMINUS"
      : "Preguntas frecuentes | DOMINUS",
    description: isEnglish
      ? "Answers to common questions about DOMINUS and its port development consulting services."
      : "Respuestas a las consultas habituales sobre DOMINUS y sus servicios de consultoría en desarrollo portuario.",
    alternates: localizedAlternates("/preguntas-frecuentes", locale),
  };
}

export default async function FrequentlyAskedQuestionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="page-wrapper">
      <HeaderTwo />
      <HeroFaq />
      <FaqOne />
      <CtaOne />
      <FooterTwo />
    </main>
  );
}
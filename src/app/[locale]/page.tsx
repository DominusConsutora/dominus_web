import React from "react";
import HeaderTwo from "./_components/HeaderTwo";
import BannerTwo from "./_components/BannerTwo";
import AboutTwo from "./_components/AboutTwo";
import ServicesThree from "./_components/ServicesThree";
import ServiceTwo from "./_components/ServiceTwo";
import CtaOne from "./_components/CtaOne";
import ContactOne from "./_components/ContactOne";
import FooterTwo from "./_components/FooterTwo";

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
      <ContactOne />
      <FooterTwo />
    </main>
  );
}

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import HeroContact from "./_components/HeroContact";
import ContactFormSection from "./_components/ContactFormSection";

/**
 * Página `/contacto` — Hero y formulario de contacto.
 * El CTA final de Servicios navega aquí para centralizar las consultas.
 */
export default function ContactPage() {
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="contacto" />
            <HeroContact />
            <ContactFormSection />
            <FooterTwo />
        </main>
    );
}

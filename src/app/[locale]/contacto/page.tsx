import React from "react";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import HeroContact from "./_components/HeroContact";
import ContactChannels from "./_components/ContactChannels";
import ContactFormSection from "./_components/ContactFormSection";

/**
 * Página `/contacto` — Hero + canales de contacto + formulario.
 * Nota: los datos de contacto (email, teléfono, WhatsApp, LinkedIn,
 * dirección) son PLACEHOLDER en `contactPage.channels.items.*` y se van a
 * reemplazar cuando estén los oficiales.
 */
export default function ContactPage() {
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="contacto" />
            <HeroContact />
            <ContactChannels />
            <ContactFormSection />
            <FooterTwo />
        </main>
    );
}

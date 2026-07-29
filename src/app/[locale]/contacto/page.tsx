import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeaderTwo from "../_components/HeaderTwo";
import FooterTwo from "../_components/FooterTwo";
import HeroContact from "./_components/HeroContact";
// Nota: `ContactChannels` y `ContactFormSection` están temporalmente
// desactivados mientras se define la información oficial (canales, form
// backend). Se dejan los componentes en `_components/` para reactivarlos
// cuando esté pronto. En su lugar mostramos `UnderConstructionNotice`.

/**
 * Aviso in-line — Sitio en desarrollo.
 * Se muestra en `/contacto` mientras no estén los canales oficiales ni el
 * backend del formulario. Textos en `contactPage.underConstruction`.
 */
function UnderConstructionNotice() {
    const t = useTranslations("contactPage.underConstruction");
    return (
        <div className="tmp-service-area tmp-section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div
                            className="dominus-contact-card text-center"
                            style={{ padding: "56px 40px" }}
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="dominus-contact-icon mx-auto"
                                aria-hidden="true"
                                style={{ marginBottom: "24px" }}
                            >
                                <i className="feather-tool" />
                            </div>
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 mt--10">{t("title")}</h2>
                            <p className="description b1 mt--20">{t("description")}</p>
                            <p
                                className="dominus-contact-hint mt--20"
                                style={{ opacity: 0.85 }}
                            >
                                {t("note")}
                            </p>
                            <div className="mt--30">
                                <Link
                                    className="btn-read-more dominus-contact-action"
                                    href={t("ctaHref")}
                                >
                                    <span>{t("ctaLabel")}</span>
                                    <i className="feather-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Página `/contacto` — Hero + aviso de sitio en desarrollo.
 * Temporalmente los canales de contacto y el formulario están desactivados
 * (ver imports comentados arriba). Cuando estén los datos oficiales, volver
 * a montar `<ContactChannels />` y `<ContactFormSection />` en lugar del
 * `<UnderConstructionNotice />`.
 */
export default function ContactPage() {
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="contacto" />
            <HeroContact />
            <UnderConstructionNotice />
            <FooterTwo />
        </main>
    );
}

"use client";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";
import ContactOne from "../../_components/ContactOne";

/**
 * Contacto · Sección del formulario en la página `/contacto`.
 * Renderiza un encabezado propio (namespace `contactPage.form`) y debajo
 * el formulario `ContactOne` con `hideHeader` para no duplicar títulos.
 */
export default function ContactFormSection() {
    const t = useTranslations("contactPage.form");
    useTitleSplitAnimation();
    return (
        <>
            <div className="tmp-section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="subtitle-text">
                                            {t("eyebrow")}
                                        </span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    {t("title")}
                                </h2>
                                <p className="description b1 tmp-title-split-p">
                                    {t("description")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactOne hideHeader />
        </>
    );
}

import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

/**
 * Footer DOMINUS.
 * Estructura basada en FooterTwo del template, con contenido alineado al
 * reposicionamiento (CONTENT.md · Posicionamiento y Servicios).
 * Los labels de servicios se leen de `footer.linksServicesShort.<slug>`.
 */

const serviciosSlugs = [
    "master-plans-portuarios",
    "concesiones-ppp-licitaciones",
    "gobernanza-y-tarifas",
    "transformacion-digital-pcs",
    "sostenibilidad-y-green-ports",
] as const;

function FooterTwo() {
    const t = useTranslations("footer");
    const tNav = useTranslations("nav");
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="tmp-footer footer-style-default variation-two position-relative">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="tmp-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <img
                                                className="logo-light"
                                                src="/logo_bco.png"
                                                alt="DOMINUS"
                                                style={{
                                                    height: "50px",
                                                    width: "auto",
                                                    maxHeight: "none",
                                                    maxWidth: "none",
                                                }}
                                            />
                                            <img
                                                className="logo-dark"
                                                src="/logo_bco.png"
                                                alt="DOMINUS"
                                                style={{
                                                    height: "50px",
                                                    width: "auto",
                                                    maxHeight: "none",
                                                    maxWidth: "none",
                                                }}
                                            />
                                        </Link>
                                    </div>
                                    <p className="subtitle mt--30">{t("tagline")}</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="tmp-footer-widget">
                                    <h4 className="title">{t("sectionInstitutional")}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>
                                                <Link href="/nosotros">{tNav("about")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/equipo">{tNav("team")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/servicios">{tNav("services")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/contacto">{tNav("contact")}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="tmp-footer-widget">
                                    <h4 className="title">{t("sectionServices")}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {serviciosSlugs.map((slug) => (
                                                <li key={slug}>
                                                    <Link href={`/servicios/${slug}`}>
                                                        {t(`linksServicesShort.${slug}`)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="tmp-footer-widget">
                                    <h4 className="title">{t("sectionContact")}</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">{t("contactPrompt")}</h6>
                                        <ul className="social-icon social-default justify-content-start mt--20">
                                            <li>
                                                <Link href="mailto:contacto@dominus.example">
                                                    <i className="feather-mail" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/">
                                                    <i className="feather-linkedin" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area copyright-style-one">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover">
                                        <li>
                                            <Link href="/privacy-policy">
                                                {t("legal.privacy")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-condition">
                                                {t("legal.terms")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contacto">{t("legal.contact")}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                                <div className="copyright-right text-center text-lg-end">
                                    <p className="copyright-text">
                                        {t("copyright", { year })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterTwo;

"use client";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

/**
 * "Sobre DOMINUS" — bloque introductorio institucional.
 * Fuente: CONTENT.md · Home · §2 "Bloque introductorio Sobre DOMINUS".
 * Se conserva el layout de 2 imágenes del template y se retira el badge de
 * reviews (odómetro) porque no aplica a la naturaleza de DOMINUS.
 */
export default function AboutTwo() {
    const t = useTranslations("about");

    return (
        <>
            {/* Start About Area  */}
            <div className="about-area about-style-4 tmp-section-gap dominus-home-about">
                <div className="container">
                    <div className="row row--5 align-items-start dominus-about-columns">
                        <div className="col-lg-4 pr--40 pr_sm--0">
                            <div className="about-2-thumbnail-left-wrapper">
                                <div className="single-thumbnail">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/about/01.webp"
                                        alt={t("imgAlt1")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt_md--50 mt_sm--50">
                            <div className="content">
                                <div className="inner">
                                    <div className="tmp-section-title-border text-start hero__sub-title">
                                        <div className="pres-line-separator-wrapper mb--10">
                                            <span className="subtitle">
                                                <span className="number">{t("subtitleNumber")}</span>{" "}
                                                <span className="subtitle-text">
                                                    {t("subtitleText")}
                                                </span>
                                            </span>
                                            <div className="line-separator" />
                                        </div>
                                    </div>
                                    <div className="dominus-about-intro-row">
                                        <h2 className="title w-700">
                                            {t("title")}
                                        </h2>
                                        <p className="description b1">
                                            {t("description")}
                                        </p>
                                    </div>
                            <ul className="feature-list">
                                        <li>
                                            <div className="icon">
                                                <i className="feather-anchor" aria-hidden="true" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h3 className="title h4">
                                                    {t("feature1Title")}
                                                </h3>
                                                <p className="text">
                                                    {t("feature1Text")}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="feather-anchor" aria-hidden="true" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h3 className="title h4">
                                                    {t("feature2Title")}
                                                </h3>
                                                <p className="text">
                                                    {t("feature2Text")}
                                                </p>
                                            </div>
                                        </li>
                            </ul>
                                    <div className="about-btn mt--30">
                                        <Link
                                            className="tmp-btn round text-center"
                                            href="/nosotros"
                                        >
                                            {t("cta")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}
        </>
    );
}

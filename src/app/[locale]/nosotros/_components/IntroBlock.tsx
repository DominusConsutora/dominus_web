"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Nosotros · Bloque 2 · Presentación institucional.
 * CONTENT.md §Nosotros.2: dos columnas (imagen a la izquierda, texto a la
 * derecha). Eyebrow "Quiénes somos", título + 2 párrafos + CTA a /servicios.
 */
export default function IntroBlock() {
    const t = useTranslations("aboutPage.intro");
    useTitleSplitAnimation();
    return (
        <div className="tmp-about-area tmp-section-gap">
            <div className="container">
                <div className="row row--5 align-items-center">
                    <div className="col-lg-6 pr--40 pr_sm--0">
                        <div className="about-2-thumbnail-left-wrapper">
                            <div className="single-thumbnail invers-anime">
                                <img
                                    loading="lazy"
                                    src="/assets/images/about/04.webp"
                                    alt={t("imgAlt1")}
                                />
                            </div>
                            <div className="single-thumbnail invers-anime mt--80">
                                <img
                                    loading="lazy"
                                    src="/assets/images/about/05.webp"
                                    alt={t("imgAlt2")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <div className="tmp-section-title-border text-start hero__sub-title">
                                    <div className="pres-line-separator-wrapper mb--10">
                                        <span className="subtitle">
                                            <span className="subtitle-text">
                                                {t("eyebrow")}
                                            </span>
                                        </span>
                                        <div className="line-separator" />
                                    </div>
                                </div>
                                <h2 className="title w-700 tmp-title-split">{t("title")}</h2>
                                <p className="description b1 tmp-title-split-p">
                                    {t("paragraph1")}
                                </p>
                                <p className="description b1 tmp-title-split-p">
                                    {t("paragraph2")}
                                </p>
                                <div className="mt--30">
                                    <Link
                                        className="tmp-btn round hover-icon-reverse"
                                        href="/servicios"
                                    >
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">{t("cta")}</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

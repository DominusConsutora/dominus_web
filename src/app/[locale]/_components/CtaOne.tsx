'use client'
import Link from 'next/link'

import React from 'react'
import { useTranslations } from 'next-intl'
import { useTitleSplitAnimation } from "../../components/useTitleSplitAnimation";

interface CtaOneProps {
    /** Namespace de i18n del que se leen los textos. Default: `cta` (Home). */
    namespace?: string;
    /** Href del CTA primario. Default: `/contacto`. */
    primaryHref?: string;
    /** Href del enlace secundario (bajo el botón). Default: `mailto:contacto@dominus.example`. */
    secondaryHref?: string;
}

function CtaOne({
    namespace = "cta",
    primaryHref = "/contacto",
    secondaryHref = "mailto:contacto@dominus.example",
}: CtaOneProps = {}) {
    const t = useTranslations(namespace);
    useTitleSplitAnimation();
    return (
        <>
            {/* Start Call TO Action Area  */}
            <div className="tmp-callto-action-area tmp-section-gapBottom">
                <div className="wrapper">
                    <div className="tmp-callto-action-area with-shape position-relative">
                        <div className="wrapper">
                            <div className="tmp-callto-action clltoaction-style-default style-5">
                                <div className="container">
                                    <div className="row row--0 align-items-center content-wrapper theme-shape">
                                        <div className="col-lg-12">
                                            <div className="inner">
                                                <div className="content text-center">
                                                    <h2 className="title tmp-title-split">
                                                        {t("titleLine1")} <br /> {t("titleLine2")}
                                                    </h2>
                                                    <h6 className="subtitle tmp-title-split">
                                                        {t("subtitle")}
                                                    </h6>
                                                    <div className="call-to-btn d-flex justify-content-center">
                                                        <Link
                                                            className="tmp-btn btn-extra-large hover-icon-reverse"
                                                            href={primaryHref}
                                                        >
                                                            <span className="icon-reverse-wrapper">
                                                                <span className="btn-text">{t("primary")}</span>
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
                                                <div className="tmp-profile-box mt--30">
                                                    <div className="profile-share justify-content-center">
                                                        <div className="more-author-text text-center">
                                                            <p className="subtitle">
                                                                <Link
                                                                    className="btn-read-more"
                                                                    href={secondaryHref}
                                                                >
                                                                    <span>{t("emailLink")}</span>
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="person-stand">
                                            <img
                                                loading="lazy"
                                                src="/assets/images/call-to-action/0808.webp"
                                                alt={t("imgAlt")}
                                            />
                                        </div>
                                        <div className="bg-line-animatoin-area-global" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Call TO Action Area  */}
        </>

    )
}

export default CtaOne
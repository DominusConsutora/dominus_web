"use client";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

/**
 * Diferenciales DOMINUS — "Consultoría con impacto real".
 * Fuente: CONTENT.md · Home · §4 "Diferenciales".
 * Se reusa el layout list-service del template con 4 filas alternadas.
 */

type DiferencialKey = "oficio" | "implementable" | "global" | "independencia";

type Diferencial = {
    key: DiferencialKey;
    thumbnail: string;   // ruta a imagen en public/assets/images/services/list/
};

const diferenciales: Diferencial[] = [
    { key: "oficio", thumbnail: "/assets/images/services/list/01.webp" },
    { key: "implementable", thumbnail: "/assets/images/services/list/02.webp" },
    { key: "global", thumbnail: "/assets/images/services/list/03.webp" },
    { key: "independencia", thumbnail: "/assets/images/services/list/04.webp" },
];

function ServicesThree() {
    const t = useTranslations("differentiators");
    return (
        <>
            {/* Diferenciales area start */}
            <div className="my-business-service-area tmp-section-gapBottom dominus-differentiators">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-flex-between dominus-differentiators__head">
                                <div className="tmp-section-title-border text-start">
                                    <div className="pres-line-separator-wrapper text-start mb--10">
                                        <span className="subtitle">
                                            <span className="subtitle-text">
                                                {t("subtitle")}
                                            </span>
                                        </span>
                                        <div className="line-separator line-right" />
                                    </div>
                                    <h2 className="title w-700 tmp-title-split">
                                        {t("titleLine1")} <br />
                                        {t("titleLine2")}
                                    </h2>
                                </div>
                                <div className="tmp-load-more d-flex justify-content-center dominus-differentiators__cta-wrap">
                                    <Link
                                        className="tmp-btn btn-large hover-icon-reverse dominus-differentiators__cta"
                                        href="/nosotros"
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
                    <div className="row g-4 mt--10 dominus-differentiators__list">
                        <div className="col-lg-12">
                            {diferenciales.map((item, index) => {
                                const title = t(`items.${item.key}.title`);
                                const description = t(`items.${item.key}.description`);
                                return (
                                    <div
                                        key={item.key}
                                        className="single-service-list-area dominus-differentiators__item"
                                        data-aos="slide-up"
                                        data-aos-duration="700"
                                        data-aos-delay={100}
                                    >
                                        <div className="row g-5 align-items-center">
                                            <div className="col-lg-6">
                                                <div className="thumbnail-service-list invers-anime dominus-differentiators__thumb-wrap">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={title}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="inner-content dominus-differentiator-card">
                                                    <div className="head dominus-differentiator-card__head">
                                                        <div className="dominus-differentiator-card__meta">
                                                            <span className="dominus-differentiator-card__index">
                                                                {(index + 1).toString().padStart(2, "0")}
                                                            </span>
                                                            <h3 className="title h6">{title}</h3>
                                                        </div>
                                                    </div>
                                                    <p className="disc dominus-differentiator-card__disc">{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* Diferenciales area end */}
        </>
    );
}

export default ServicesThree;

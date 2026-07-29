"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

/**
 * Diferenciales DOMINUS — "Consultoría con impacto real".
 * Fuente: CONTENT.md · Home · §4 "Diferenciales".
 * Se reusa el layout list-service del template con 4 filas alternadas.
 */

type DiferencialKey = "oficio" | "implementable" | "global" | "independencia";

type Diferencial = {
    key: DiferencialKey;
    icon: string;        // clase feather (icon set del template)
    thumbnail: string;   // ruta a imagen en public/assets/images/services/list/
};

const diferenciales: Diferencial[] = [
    { key: "oficio", icon: "feather-anchor", thumbnail: "/assets/images/services/list/01.webp" },
    { key: "implementable", icon: "feather-target", thumbnail: "/assets/images/services/list/02.webp" },
    { key: "global", icon: "feather-globe", thumbnail: "/assets/images/services/list/03.webp" },
    { key: "independencia", icon: "feather-shield", thumbnail: "/assets/images/services/list/04.webp" },
];

function ServicesThree() {
    const t = useTranslations("differentiators");
    return (
        <>
            {/* Diferenciales area start */}
            <div className="my-business-service-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-flex-between">
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
                                <div className="tmp-load-more d-flex justify-content-center">
                                    <Link
                                        className="tmp-btn btn-large hover-icon-reverse"
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
                    <div className="row g-5 mt--20">
                        <div className="col-lg-12">
                            {diferenciales.map((item, index) => {
                                const isEven = index % 2 === 1;
                                const title = t(`items.${item.key}.title`);
                                const description = t(`items.${item.key}.description`);
                                return (
                                    <div
                                        key={item.key}
                                        className="single-service-list-area"
                                        data-aos="slide-up"
                                        data-aos-duration="700"
                                        data-aos-delay={100}
                                    >
                                        <div className="row g-5 align-items-center">
                                            {!isEven && (
                                                <div className="col-lg-6">
                                                    <div className="thumbnail-service-list invers-anime">
                                                        <img
                                                            src={item.thumbnail}
                                                            alt={title}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            <div
                                                className={
                                                    isEven
                                                        ? "col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2"
                                                        : "col-lg-6"
                                                }
                                            >
                                                <div className="inner-content">
                                                    <div className="head">
                                                        <div className="icon">
                                                            <i
                                                                className={item.icon}
                                                                style={{
                                                                    fontSize: "36px",
                                                                    color: "var(--dominus-navy)",
                                                                }}
                                                            />
                                                        </div>
                                                        <h6 className="title">{title}</h6>
                                                    </div>
                                                    <p className="disc">{description}</p>
                                                </div>
                                            </div>
                                            {isEven && (
                                                <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                                                    <div className="thumbnail-service-list invers-anime">
                                                        <img
                                                            src={item.thumbnail}
                                                            alt={title}
                                                        />
                                                    </div>
                                                </div>
                                            )}
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

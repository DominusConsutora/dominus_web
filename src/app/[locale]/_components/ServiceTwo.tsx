"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../components/useTitleSplitAnimation";

/**
 * Servicios DOMINUS — grid con los 8 servicios de consultoría portuaria.
 * Fuente: CONTENT.md · Servicios (índice 1..8).
 * Slugs alineados con /servicios/[slug] y con el dropdown de DominusNav.
 * Los textos se leen del namespace `services.list.<slug>` en messages/*.json.
 */

type Servicio = {
    slug: string;
    icon: string; // clase feather
};

const servicios: Servicio[] = [
    { slug: "master-plans-portuarios", icon: "feather-compass" },
    { slug: "concesiones-ppp-licitaciones", icon: "feather-file-text" },
    { slug: "gobernanza-y-tarifas", icon: "feather-award" },
    { slug: "optimizacion-operativa-terminales", icon: "feather-activity" },
    { slug: "transformacion-digital-pcs", icon: "feather-cpu" },
    { slug: "sostenibilidad-y-green-ports", icon: "feather-wind" },
    { slug: "regulacion-y-politicas-publicas", icon: "feather-book-open" },
    { slug: "capacitacion-y-talento", icon: "feather-users" },
];

function ServiceTwo() {
    const t = useTranslations("services");
    useTitleSplitAnimation();

    return (
        <>
            {/* Servicios area start */}
            <div className="tmp-service-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">{t("subtitleNumber")}</span>
                                        <span className="subtitle-text">
                                            {t("subtitleText")}
                                        </span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    {t("titleLine1")} <br />
                                    {t("titleLine2")}
                                </h2>
                                <p className="description b1 tmp-title-split-p">
                                    {t("descriptionLine1")}
                                    <br />
                                    {t("descriptionLine2")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 service-wrapper mt--10">
                        {servicios.map((s, index) => {
                            const title = t(`list.${s.slug}.title`);
                            const description = t(`list.${s.slug}.description`);
                            return (
                                <div
                                    key={s.slug}
                                    className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                                    data-aos="slide-up"
                                    data-aos-duration="700"
                                    data-aos-delay={(index % 4) * 100}
                                >
                                    <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                        <div className="icon">
                                            <i
                                                className={s.icon}
                                                style={{
                                                    fontSize: "44px",
                                                    color: "#ffffff",
                                                }}
                                            />
                                        </div>
                                        <div className="content">
                                            <h4 className="title w-600">
                                                <Link href={`/servicios/${s.slug}`}>
                                                    {title}
                                                </Link>
                                            </h4>
                                            <p className="description mb--0">{description}</p>
                                            <div className="discover-btn mt--20">
                                                <Link
                                                    className="tmp-btn round btn-small btn-border hover-icon-reverse"
                                                    href={`/servicios/${s.slug}`}
                                                >
                                                    <span className="icon-reverse-wrapper">
                                                        <span className="btn-text">{t("detailCta")}</span>
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
                            );
                        })}
                    </div>
                    <div className="row mt--40">
                        <div className="col-lg-12 text-center">
                            <Link
                                className="tmp-btn btn-large round hover-icon-reverse"
                                href="/servicios"
                            >
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">{t("allCta")}</span>
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
            {/* Servicios area end */}
        </>
    );
}

export default ServiceTwo;

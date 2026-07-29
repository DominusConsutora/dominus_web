"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ServiceDetailBodyProps {
    slug: string;
}

/**
 * Servicios · Cuerpo de la página de detalle `/servicios/[slug]`.
 * Muestra la descripción larga del servicio y la lista de entregables
 * típicos definidos en `services.list.<slug>` (fuente: CONTENT.md).
 * Incluye botón principal a `/contacto` y volver a `/servicios`.
 */
export default function ServiceDetailBody({ slug }: ServiceDetailBodyProps) {
    const tDetail = useTranslations("servicesPage.detail");
    const tService = useTranslations("services");
    const longDescription = tService(`list.${slug}.longDescription`);
    const deliverables = (tService.raw(`list.${slug}.deliverables`) as string[]) || [];
    return (
        <div className="tmp-service-details-area tmp-section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="service-details-content">
                            <div className="pres-line-separator-wrapper mb--10">
                                <span className="subtitle">
                                    <span className="subtitle-text">
                                        {tDetail("overviewLabel")}
                                    </span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <p className="description b1 mb--40">
                                {longDescription}
                            </p>

                            <h3 className="title w-600 mb--20">
                                {tDetail("deliverablesTitle")}
                            </h3>
                            <ul
                                className="service-deliverables"
                                style={{ listStyle: "none", padding: 0, margin: 0 }}
                            >
                                {deliverables.map((item, idx) => (
                                    <li
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            gap: "12px",
                                            alignItems: "flex-start",
                                            padding: "10px 0",
                                            borderBottom: "1px solid rgba(0, 25, 75, 0.08)",
                                        }}
                                    >
                                        <i
                                            className="feather-check-circle"
                                            aria-hidden="true"
                                            style={{
                                                color: "var(--dominus-navy, #00194b)",
                                                fontSize: "20px",
                                                marginTop: "2px",
                                                flexShrink: 0,
                                            }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div
                                className="service-detail-actions mt--40"
                                style={{
                                    display: "flex",
                                    gap: "20px",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                }}
                            >
                                <Link
                                    className="tmp-btn round hover-icon-reverse"
                                    href="/contacto"
                                >
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">
                                            {tDetail("contactCtaLabel")}
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </span>
                                </Link>
                                <Link href="/servicios" className="btn-read-more">
                                    <span>{tDetail("backToServices")}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../../components/useTitleSplitAnimation";

interface HeroServiceDetailProps {
    slug: string;
}

/**
 * Servicios · Hero de la página de detalle `/servicios/[slug]`.
 * Reusa el patrón visual de `HeroServices` (fondo con imagen + overlay
 * navy). El breadcrumb incluye el nivel intermedio "Servicios".
 * Los textos del servicio vienen de `services.list.<slug>`; los labels
 * genéricos, de `servicesPage.detail`.
 */
export default function HeroServiceDetail({ slug }: HeroServiceDetailProps) {
    const tDetail = useTranslations("servicesPage.detail");
    const tService = useTranslations("services");
    useTitleSplitAnimation();
    const title = tService(`list.${slug}.title`);
    const shortDescription = tService(`list.${slug}.description`);
    return (
        <div
            className="dominus-hero-bg position-relative"
            style={{
                backgroundImage: "url('/assets/images/services/02.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "460px",
                display: "flex",
                alignItems: "center",
                zIndex: 1,
            }}
        >
            <div className="dominus-hero-overlay" aria-hidden="true" />
            <div
                className="container"
                style={{ paddingTop: "140px", paddingBottom: "80px" }}
            >
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="breadcrumb-inner text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">
                                        {tDetail("parentLabel")}
                                    </span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h1 className="title w-700 tmp-title-split">
                                {title}
                            </h1>
                            <p className="description b1 tmp-title-split-p mt--20">
                                {shortDescription}
                            </p>
                            <ul
                                className="page-list mt--20"
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    display: "inline-flex",
                                    gap: "12px",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                }}
                            >
                                <li>
                                    <Link href="/">{tDetail("breadcrumbHome")}</Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li>
                                    <Link href="/servicios">{tDetail("parentLabel")}</Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="tmp-breadcrumb-item active">
                                    {title}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

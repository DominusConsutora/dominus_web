"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Nosotros · Bloque 1 · Hero de la página.
 * CONTENT.md §Nosotros.1: banda superior con imagen institucional de fondo y
 * overlay oscuro, eyebrow "Institucional", título "Conocé DOMINUS", subtítulo
 * y breadcrumb `Home / Nosotros`.
 */
export default function HeroAbout() {
    const t = useTranslations("aboutPage.hero");
    useTitleSplitAnimation();
    return (
        <div
            className="dominus-hero-bg position-relative"
            style={{
                backgroundImage: "url('/assets/images/about/03.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "480px",
                display: "flex",
                alignItems: "center",
                zIndex: 1,
            }}
        >
            <div className="dominus-hero-overlay" aria-hidden="true" />
            <div className="container" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        <div className="breadcrumb-inner text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h1 className="title w-700 tmp-title-split" style={{ color: "#ffffff" }}>
                                {t("title")}
                            </h1>
                            <p
                                className="description b1 tmp-title-split-p mt--20"
                                style={{ color: "rgba(255,255,255,0.85)" }}
                            >
                                {t("subtitle")}
                            </p>
                            <ul
                                className="page-list mt--20"
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    display: "inline-flex",
                                    gap: "12px",
                                    color: "rgba(255,255,255,0.8)",
                                }}
                            >
                                <li>
                                    <Link href="/" style={{ color: "rgba(255,255,255,0.8)" }}>
                                        {t("breadcrumbHome")}
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="tmp-breadcrumb-item active" style={{ color: "#ffffff" }}>
                                    {t("breadcrumbCurrent")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

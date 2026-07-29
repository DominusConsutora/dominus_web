"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Contacto · Hero de la página `/contacto`.
 * Mismo patrón visual que `HeroAbout` / `HeroServices` (fondo con imagen +
 * overlay navy). Textos desde `contactPage.hero`.
 */
export default function HeroContact() {
    const t = useTranslations("contactPage.hero");
    useTitleSplitAnimation();
    return (
        <div
            className="dominus-hero-bg position-relative"
            style={{
                backgroundImage: "url('/assets/images/about/09.webp')",
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
                    <div className="col-lg-9 col-xl-8">
                        <div className="breadcrumb-inner text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h1 className="title w-700 tmp-title-split">{t("title")}</h1>
                            <p className="description b1 tmp-title-split-p mt--20">
                                {t("subtitle")}
                            </p>
                            <ul
                                className="page-list mt--20"
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    display: "inline-flex",
                                    gap: "12px",
                                }}
                            >
                                <li>
                                    <Link href="/">{t("breadcrumbHome")}</Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="tmp-breadcrumb-item active">
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

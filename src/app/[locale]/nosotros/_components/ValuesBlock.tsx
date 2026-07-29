"use client";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Nosotros · Bloque 5 · Valores.
 * CONTENT.md §Nosotros.5: grid de 6 tarjetas (icono + título + copy).
 * Se reusa el estilo `.service.service__style--1.bg-color-card` con override
 * navy definido en `globals.css`.
 */
type ValueKey =
    | "independence"
    | "public"
    | "rigor"
    | "confidentiality"
    | "implementation"
    | "longterm";

const values: { key: ValueKey; icon: string }[] = [
    { key: "independence", icon: "feather-award" }, // sugerido: Scale
    { key: "public", icon: "feather-briefcase" }, // sugerido: Landmark
    { key: "rigor", icon: "feather-book-open" },
    { key: "confidentiality", icon: "feather-lock" },
    { key: "implementation", icon: "feather-target" },
    { key: "longterm", icon: "feather-users" }, // sugerido: Handshake
];

export default function ValuesBlock() {
    const t = useTranslations("aboutPage.values");
    useTitleSplitAnimation();
    return (
        <div className="tmp-section-gapBottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">{t("title")}</h2>
                            <p className="description b1 tmp-title-split-p">
                                {t("subtitle")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-5 service-wrapper mt--20">
                    {values.map((v, index) => (
                        <div
                            key={v.key}
                            className="col-lg-4 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={(index % 3) * 100}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <i
                                        className={v.icon}
                                        style={{ fontSize: "44px", color: "#ffffff" }}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        {t(`items.${v.key}.title`)}
                                    </h4>
                                    <p className="description mb--0">
                                        {t(`items.${v.key}.description`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

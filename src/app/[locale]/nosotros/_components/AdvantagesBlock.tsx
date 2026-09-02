"use client";
import { useTranslations } from "next-intl";

/**
 * Nosotros · Bloque 6 · Ventajas competitivas.
 * CONTENT.md §Nosotros.6: banda con fondo institucional y 8 puntos en dos
 * columnas de 4, cada uno con icono + label corto.
 */
type AdvantageKey =
    | "expert-team"
    | "comparative"
    | "integral"
    | "methodology"
    | "independence"
    | "implementable"
    | "confidentiality"
    | "transfer";

const advantages: { key: AdvantageKey; icon: string }[] = [
    { key: "expert-team", icon: "feather-anchor" },
    { key: "comparative", icon: "feather-globe" },
    { key: "integral", icon: "feather-layers" },
    { key: "methodology", icon: "feather-settings" }, // sugerido: Cog
    { key: "independence", icon: "feather-award" }, // sugerido: Scale
    { key: "implementable", icon: "feather-target" },
    { key: "confidentiality", icon: "feather-lock" },
    { key: "transfer", icon: "feather-book-open" }, // sugerido: GraduationCap
];

export default function AdvantagesBlock() {
    const t = useTranslations("aboutPage.advantages");
    return (
        <div className="tmp-section-gapBottom dominus-about-advantages">
            <div className="container">
                <div className="dominus-advantages-band">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="subtitle-text">
                                            {t("eyebrow")}
                                        </span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700">
                                    {t("title")}
                                </h2>
                                <p className="description b1">
                                    {t("subtitle")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mt--20">
                        {advantages.map((a, index) => (
                            <div
                                key={a.key}
                                className="col-lg-6"
                            >
                                <div className="dominus-advantage-row">
                                    <div className="dominus-advantage-icon">
                                        <i className={a.icon} />
                                    </div>
                                    <p className="dominus-advantage-text">
                                        {t(`items.${a.key}`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

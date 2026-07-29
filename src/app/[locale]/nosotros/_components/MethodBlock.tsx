"use client";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Nosotros · Bloque 4 · Cómo trabajamos.
 * CONTENT.md §Nosotros.4: 7 principios con icono + frase. El template no
 * incluye todos los iconos sugeridos en CONTENT.md; se usan equivalentes de
 * la fuente `feather` disponible en el proyecto.
 */
type PrincipleKey =
    | "listen"
    | "mixed-teams"
    | "direct-dialog"
    | "benchmarking"
    | "independent"
    | "implementable"
    | "confidential";

const principles: { key: PrincipleKey; icon: string }[] = [
    { key: "listen", icon: "feather-headphones" }, // sugerido: Ear
    { key: "mixed-teams", icon: "feather-users" },
    { key: "direct-dialog", icon: "feather-message-square" },
    { key: "benchmarking", icon: "feather-globe" },
    { key: "independent", icon: "feather-award" }, // sugerido: Scale
    { key: "implementable", icon: "feather-check-circle" },
    { key: "confidential", icon: "feather-lock" },
];

export default function MethodBlock() {
    const t = useTranslations("aboutPage.method");
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

                <div className="row g-4 mt--30">
                    {principles.map((p, index) => (
                        <div
                            key={p.key}
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={(index % 2) * 100}
                        >
                            <div className="dominus-principle-row">
                                <div className="dominus-principle-icon">
                                    <i className={p.icon} />
                                </div>
                                <p className="dominus-principle-text">
                                    {t(`principles.${p.key}`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

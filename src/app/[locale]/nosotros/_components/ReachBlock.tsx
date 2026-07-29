"use client";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Nosotros · Bloque 3 · Alcance de proyectos.
 * CONTENT.md §Nosotros.3: listado en tarjetas con bandera (emoji) + país,
 * más una tarjeta final "Consultá por otros mercados".
 *
 * ⚠️ Los países listados son PLACEHOLDER (a validar por el cliente). Ver
 * `aboutPage.reach.countries` en `messages/*.json`. Mantener el orden ES/EN
 * en sincronía.
 */
type CountryKey =
    | "ar"
    | "uy"
    | "cl"
    | "pe"
    | "co"
    | "pa"
    | "do"
    | "mx"
    | "us";

const countries: { key: CountryKey; flag: string }[] = [
    { key: "ar", flag: "🇦🇷" },
    { key: "uy", flag: "🇺🇾" },
    { key: "cl", flag: "🇨🇱" },
    { key: "pe", flag: "🇵🇪" },
    { key: "co", flag: "🇨🇴" },
    { key: "pa", flag: "🇵🇦" },
    { key: "do", flag: "🇩🇴" },
    { key: "mx", flag: "🇲🇽" },
    { key: "us", flag: "🇺🇸" },
];

export default function ReachBlock() {
    const t = useTranslations("aboutPage.reach");
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
                                {t("description")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt--30 justify-content-center">
                    {countries.map((c, index) => (
                        <div
                            key={c.key}
                            className="col-lg-3 col-md-4 col-sm-6 col-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={(index % 4) * 80}
                        >
                            <div className="dominus-country-card">
                                <span className="dominus-country-flag" aria-hidden="true">
                                    {c.flag}
                                </span>
                                <span className="dominus-country-name">
                                    {t(`countries.${c.key}`)}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div
                        className="col-lg-3 col-md-4 col-sm-6 col-6"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={100}
                    >
                        <div className="dominus-country-card dominus-country-card--more">
                            <span className="dominus-country-flag" aria-hidden="true">
                                <i className="feather-plus-circle" />
                            </span>
                            <span className="dominus-country-name">
                                {t("moreLabel")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

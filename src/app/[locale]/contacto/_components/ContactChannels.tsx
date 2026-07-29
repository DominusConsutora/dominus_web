"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";

/**
 * Contacto · Bloque de canales.
 * Renderiza una grilla de tarjetas con: icono, label, valor (email /
 * teléfono / dirección / etc.), un hint y un CTA opcional.
 * Los datos actuales son PLACEHOLDER — se cargan desde `contactPage.channels.items.*`
 * y se reemplazarán por los oficiales cuando estén disponibles.
 */

const CHANNEL_KEYS = [
    "email",
    "phone",
    "whatsapp",
    "linkedin",
    "address",
    "schedule",
] as const;

type ChannelKey = (typeof CHANNEL_KEYS)[number];

// Canales cuyo href debe abrirse en nueva pestaña (LinkedIn, WhatsApp, Maps).
const EXTERNAL_CHANNELS: ChannelKey[] = ["linkedin", "whatsapp", "address"];

export default function ContactChannels() {
    const t = useTranslations("contactPage.channels");
    useTitleSplitAnimation();

    return (
        <div className="tmp-service-area tmp-section-gap">
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

                <div className="row g-4 mt--30">
                    {CHANNEL_KEYS.map((key, index) => {
                        const icon = t(`items.${key}.icon`);
                        const label = t(`items.${key}.label`);
                        const value = t(`items.${key}.value`);
                        const hint = t(`items.${key}.hint`);
                        const action = t(`items.${key}.action`);
                        const href = t(`items.${key}.href`);
                        const isExternal = EXTERNAL_CHANNELS.includes(key);
                        return (
                            <div
                                key={key}
                                className="col-lg-4 col-md-6 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay={(index % 3) * 100}
                            >
                                <div className="dominus-contact-card">
                                    <div className="dominus-contact-icon" aria-hidden="true">
                                        <i className={icon} />
                                    </div>
                                    <span className="dominus-contact-label">{label}</span>
                                    <p className="dominus-contact-value">{value}</p>
                                    <p className="dominus-contact-hint">{hint}</p>
                                    {action && href ? (
                                        <Link
                                            className="btn-read-more dominus-contact-action"
                                            href={href}
                                            {...(isExternal
                                                ? {
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                  }
                                                : {})}
                                        >
                                            <span>{action}</span>
                                        </Link>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

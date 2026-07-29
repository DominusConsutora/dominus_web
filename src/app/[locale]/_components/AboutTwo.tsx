"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

/**
 * "Sobre DOMINUS" — bloque introductorio institucional.
 * Fuente: CONTENT.md · Home · §2 "Bloque introductorio Sobre DOMINUS".
 * Se conserva el layout de 2 imágenes del template y se retira el badge de
 * reviews (odómetro) porque no aplica a la naturaleza de DOMINUS.
 */
export default function AboutTwo() {
    const t = useTranslations("about");
    const floatRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let floatTween: gsap.core.Tween | undefined;

        if (floatRef.current) {
            gsap.killTweensOf(floatRef.current);
            floatTween = gsap.fromTo(
                floatRef.current,
                { x: 0 },
                {
                    x: -150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: floatRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    },
                }
            );
        }

        return () => {
            floatTween?.scrollTrigger?.kill();
            floatTween?.kill();
        };
    }, []);

    return (
        <>
            {/* Start About Area  */}
            <div className="about-area about-style-4 tmp-section-gap">
                <div className="container">
                    <div className="row row--5 align-items-center">
                        <div className="col-lg-7 pr--40 pr_sm--0">
                            <div className="about-2-thumbnail-left-wrapper">
                                <div className="single-thumbnail invers-anime">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/about/01.webp"
                                        alt={t("imgAlt1")}
                                    />
                                </div>
                                <div className="single-thumbnail invers-anime mt--80">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/about/02.webp"
                                        alt={t("imgAlt2")}
                                    />
                                </div>
                                <div
                                    ref={floatRef}
                                    className="absolute-rating-area images-left-right-float image"
                                >
                                    <div className="stars-area">
                                        <i className="feather-anchor" style={{ fontSize: "28px", color: "#ffffff" }} />
                                        <span>&nbsp;{t("badgeTitle")}</span>
                                    </div>
                                    <p>
                                        {t("badgeLine1")}{" "}
                                        <br />
                                        {t("badgeLine2")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <div className="tmp-section-title-border text-start hero__sub-title">
                                        <div className="pres-line-separator-wrapper mb--10">
                                            <span className="subtitle">
                                                <span className="number">{t("subtitleNumber")}</span>{" "}
                                                <span className="subtitle-text">
                                                    {t("subtitleText")}
                                                </span>
                                            </span>
                                            <div className="line-separator" />
                                        </div>
                                    </div>
                                    <h2 className="title w-700 tmp-title-split">
                                        {t("title")}
                                    </h2>
                                    <p className="description b1 tmp-title-split-p">
                                        {t("description")}
                                    </p>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">
                                                    {t("feature1Title")}
                                                </h4>
                                                <p className="text">
                                                    {t("feature1Text")}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">
                                                    {t("feature2Title")}
                                                </h4>
                                                <p className="text">
                                                    {t("feature2Text")}
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="about-btn mt--30">
                                        <Link
                                            className="tmp-btn round text-center"
                                            href="/nosotros"
                                        >
                                            {t("cta")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}
        </>
    );
}

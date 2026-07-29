"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Hero DOMINUS.
 * Título fijo + palabra rotativa (concepto de posicionamiento).
 * CTAs a /nosotros y /servicios (según CONTENT.md · Home · Hero).
 */
export default function BannerTwo() {
  const t = useTranslations("hero");
  const rotatingWords = t.raw("rotatingWords") as string[];
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateWidth = () => {
    if (wrapperRef.current && textRef.current) {
      wrapperRef.current.style.width = textRef.current.offsetWidth + "px";
    }
  };

  useEffect(() => {
    const changeWord = () => {
      if (!wrapperRef.current) return;
      wrapperRef.current.style.width = "2px";
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 400);
    };

    intervalRef.current = setInterval(changeWord, 2800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateWidth);
  }, [activeIndex]);

  return (
    <div
      className="slider-area banner-two-shape-control tmp-slider-style-1 with-bg-tin bg-transparent height-850 position-relative dominus-hero-bg"
      style={{
        zIndex: 1,
        backgroundImage: "url('/assets/images/shape/headers_01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="dominus-hero-overlay" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title display-two w-700 mt--20 mb--20">
                <span>{t("titleStatic")}</span>
                <br />
                <span className="dominus-hero-line">
                  <span>{t("titleWord")}</span>{" "}
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <span
                        ref={wrapperRef}
                        className="cd-words-wrapper"
                        style={{
                          width: "2px",
                          overflow: "hidden",
                          display: "inline-block",
                          transition: "width 0.5s ease",
                          verticalAlign: "baseline",
                        }}
                      >
                        {rotatingWords.map((word, index) => (
                          <b
                            key={index}
                            ref={index === activeIndex ? textRef : null}
                            className={
                              index === activeIndex
                                ? "theme-gradient is-visible"
                                : "theme-gradient is-hidden"
                            }
                            style={{
                              position:
                                index === activeIndex ? "relative" : "absolute",
                              whiteSpace: "nowrap",
                              left: 0,
                              top: 0,
                            }}
                          >
                            {word}
                          </b>
                        ))}
                      </span>
                    </span>
                  </span>
                </span>
              </h1>

              <p className="description b1 tmp-title-split-p">
                {t("descriptionLine1")}
                <br />
                {t("descriptionLine2")}
              </p>

              <div className="button-group">
                <Link
                  className="tmp-btn round hover-icon-reverse"
                  href="/nosotros"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">{t("ctaAbout")}</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                  </span>
                </Link>

                <Link
                  className="tmp-btn btn-border round hover-icon-reverse"
                  href="/servicios"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">{t("ctaServices")}</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

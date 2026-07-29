
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

interface SectionAppoinmentProps {
  /** Oculta el encabezado (título + subtítulo + descripción) de la sección.
   * Útil cuando el componente se reusa en `/contacto`, que ya tiene su
   * propio hero y bloque de canales por encima del formulario. */
  hideHeader?: boolean;
}

function SectionAppoinment({ hideHeader = false }: SectionAppoinmentProps = {}) {
  const t = useTranslations("contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_8jqp6e8",
        "template_ozlprhn",
        formRef.current,
        {
          publicKey: "icIGBT37l1cSvgSZ4",
        }
      );

      setMessage(t("form.success"));
      formRef.current.reset();
    } catch {
      setMessage(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inv-appoinment-area-start tmp-section-gapBottom">
      <div className="container">
        {!hideHeader && (
          <div className="row mb--20">
            <div className="col-lg-12">
                <div
                    className="tmp-section-title-border text-center"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="100"
                >
                    <div className="pres-line-separator-wrapper text-center mb--10">
                        <div className="line-separator line-left" />
                        <span className="subtitle">
                            <span className="number">{t("subtitleNumber")}</span>
                            <span className="subtitle-text">{t("subtitleText")}</span>
                        </span>
                        <div className="line-separator line-right" />
                    </div>
                    <h2 className="title w-700 tmp-title-split">{t("title")}</h2>
                    <p className="description b1 tmp-title-split-p">
                        {t("descriptionLine1")} <br /> {t("descriptionLine2")}
                    </p>
                </div>
            </div>
          </div>
        )}
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="aapoiment-left-area-thumbnail">
              <img src="/assets/images/appoinment/01.webp" alt={t("imgAlt")} />
            </div>
          </div>

          <div className="col-lg-7">
            <form
              ref={formRef}
              className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group-wrapper">
                <div className="form-group tmponhover">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("form.name")}
                    required
                  />
                </div>

                <div className="form-group tmponhover">
                  <input
                    type="text"
                    name="institution"
                    placeholder={t("form.institution")}
                  />
                </div>
              </div>

              <div className="form-group tmponhover">
                <input
                  type="email"
                  name="email"
                  placeholder={t("form.email")}
                  required
                />
              </div>

              <div className="form-group tmponhover">
                <input
                  type="text"
                  name="title"
                  placeholder={t("form.subject")}
                />
              </div>

              <div className="form-group tmponhover">
                <textarea
                  name="message"
                  placeholder={t("form.message")}
                  required
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn-default btn-large tmp-btn"
                  style={{ width: "100%" }}
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? t("form.submitting") : t("form.submit")}</span>
                </button>
              </div>

              {message && <p className="mt-3">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionAppoinment;
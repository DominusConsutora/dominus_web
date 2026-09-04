import { useTranslations } from "next-intl";

const FAQ_KEYS = [
    "what",
    "services",
    "notLogistics",
    "masterPlan",
    "clients",
    "leader",
] as const;

function FaqOne() {
    const t = useTranslations("faq");
    const items = FAQ_KEYS.map((key) => ({
        q: t(`items.${key}.q`),
        a: t(`items.${key}.a`),
    }));

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };

    return (
        <div className="tmp-service-area tmp-section-gapBottom dominus-faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">{t("title")}</h2>
                            <p className="description b1">{t("subtitle")}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt--10">
                    <div className="col-xl-11 col-lg-12">
                        <div className="dominus-faq__list accordion" id="dominusFaq">
                            {items.map((item, index) => {
                                const isFirst = index === 0;
                                return (
                                    <div className="dominus-faq__item" key={index}>
                                        <h3 className="dominus-faq__header" id={`faqHeading${index}`}>
                                            <button
                                                className={`dominus-faq__button${isFirst ? "" : " collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faqCollapse${index}`}
                                                aria-expanded={isFirst}
                                                aria-controls={`faqCollapse${index}`}
                                            >
                                                <span className="dominus-faq__q">{item.q}</span>
                                                <span className="dominus-faq__icon" aria-hidden="true">
                                                    <i className="feather-plus" />
                                                </span>
                                            </button>
                                        </h3>
                                        <div
                                            id={`faqCollapse${index}`}
                                            className={`dominus-faq__collapse collapse${isFirst ? " show" : ""}`}
                                            aria-labelledby={`faqHeading${index}`}
                                            data-bs-parent="#dominusFaq"
                                        >
                                            <div className="dominus-faq__body">{item.a}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </div>
    );
}

export default FaqOne;
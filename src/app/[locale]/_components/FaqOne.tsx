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
        <div className="tmp-faq-area tmp-section-gap">
            <div className="container">
                <div className="section-title text-center mb--40">
                    <h2 className="title w-700">{t("title")}</h2>
                    <p className="description b1">{t("subtitle")}</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tmp-accordion-style accordion">
                            <div className="accordion" id="dominusFaq">
                                {items.map((item, index) => {
                                    const isFirst = index === 0;
                                    return (
                                        <div className="accordion-item card tmponhover" key={index}>
                                            <h3 className="accordion-header card-header" id={`faqHeading${index}`}>
                                                <button
                                                    className={`accordion-button${isFirst ? "" : " collapsed"}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#faqCollapse${index}`}
                                                    aria-expanded={isFirst}
                                                    aria-controls={`faqCollapse${index}`}
                                                >
                                                    {item.q}
                                                </button>
                                            </h3>
                                            <div
                                                id={`faqCollapse${index}`}
                                                className={`accordion-collapse collapse${isFirst ? " show" : ""}`}
                                                aria-labelledby={`faqHeading${index}`}
                                                data-bs-parent="#dominusFaq"
                                            >
                                                <div className="accordion-body card-body">{item.a}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
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
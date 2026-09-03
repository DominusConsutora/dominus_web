import Link from "next/link";
import { useLocale } from "next-intl";

const dimensionIcons = [
    "feather-flag",
    "feather-users",
    "feather-anchor",
    "feather-globe",
    "feather-shield",
    "feather-award",
];

export default function FounderBlock() {
    const isEnglish = useLocale() === "en";
    const content = isEnglish
        ? {
              eyebrow: "Founder",
              role: "Founder of DOMINUS | UNCTAD Consultant in Argentina",
              paragraphs: [
                  "An international consultant specializing in port management, strategic planning, waterways and capacity building. His career combines over fifteen years at the General Ports Administration with sustained regional cooperation alongside UNCTAD - TRAINFORTRADE.",
                  "He has led teams, professional development programs and strategic processes for critical infrastructure, bringing together public bodies, international operators and industry stakeholders.",
              ],
              cta: "View full career profile",
              photoLabel: "No Photo",
              photoAriaLabel: "Founder photo placeholder",
              dimensionTitle: "Institutional dimension",
              dimensions: [
                  "Governments and embassies",
                  "Users and industry chambers",
                  "International operators",
                  "Global economic interests",
                  "Oversight bodies",
                  "UNCTAD and international best practices",
              ],
          }
        : {
              eyebrow: "Fundador",
              role: "Fundador de DOMINUS | Consultor de UNCTAD en Argentina",
              paragraphs: [
                  "Consultor internacional especializado en gestión portuaria, planificación estratégica, vías navegables y formación de capacidades. Su trayectoria combina más de quince años en la Administración General de Puertos con una labor sostenida de cooperación regional junto a UNCTAD - TRAINFORTRADE.",
                  "Ha liderado equipos, programas de profesionalización y procesos estratégicos para infraestructura crítica, articulando organismos públicos, operadores internacionales y actores del sector.",
              ],
              cta: "Ver trayectoria completa",
              photoLabel: "Sin foto",
              photoAriaLabel: "Espacio reservado para foto del fundador",
              dimensionTitle: "Dimensión institucional",
              dimensions: [
                  "Gobiernos y embajadas",
                  "Usuarios y cámaras sectoriales",
                  "Operadores internacionales",
                  "Intereses económicos globales",
                  "Organismos de control",
                  "UNCTAD y buenas prácticas internacionales",
              ],
          };

    return (
        <section className="dominus-founder tmp-section-gapBottom">
            <div className="container">
                <div className="dominus-founder__inner">
                    <div className="dominus-founder__identity">
                        <div className="dominus-founder__photo-frame" aria-label={content.photoAriaLabel}>
                            <img
                                src="/assets/images/founder/diego-salom.jpg"
                                alt={content.photoAriaLabel}
                                className="dominus-founder__photo"
                            />
                        </div>
                        <div className="dominus-founder__intro">
                            <span className="dominus-founder__eyebrow">{content.eyebrow}</span>
                            <h2 className="title w-700">Diego Salom</h2>
                            <p className="dominus-founder__role">{content.role}</p>
                        </div>
                    </div>
                    <div className="dominus-founder__profile">
                        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <div className="dominus-founder__dimensions">
                        <h3>{content.dimensionTitle}</h3>
                        <div className="dominus-founder__dimensions-grid">
                            {content.dimensions.map((dimension, index) => (
                                <div className="dominus-founder__dimension" key={dimension}>
                                    <i className={dimensionIcons[index]} aria-hidden="true" />
                                    <span>{dimension}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link className="dominus-founder__link" href="/nosotros/diego-salom">
                        <span>{content.cta}</span>
                        <i className="feather-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
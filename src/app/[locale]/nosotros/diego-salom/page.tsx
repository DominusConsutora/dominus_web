import Link from "next/link";
import HeaderTwo from "../../_components/HeaderTwo";
import FooterTwo from "../../_components/FooterTwo";

const rolesEs = [
    ["2026 - actualidad", "Consultor de UNCTAD en Argentina", "Consultoría en gestión portuaria, logística, vías navegables y fortalecimiento institucional para Naciones Unidas."],
    ["2022 - 2026", "Director de Planificación Estratégica, AGP", "Conducción de una estructura de más de 700 profesionales, planificación de la Vía Navegable Troncal, concesiones y proyectos de transformación del Puerto Buenos Aires."],
    ["2016 - 2022", "Director del Centro Nacional de Capacitación Portuaria (CENCAPOR), AGP", "Expansión regional de la capacitación portuaria con más de 6.000 participantes, 10.000 horas de formación y alcance en 13 países."],
    ["2011 - 2016", "Jefe de Relaciones Internacionales, AGP", "Desarrollo de la cooperación institucional e incorporación de AGP al Programa de Gestión Portuaria TRAINFORTRADE de UNCTAD."],
];

const rolesEn = [
    ["2026 - present", "UNCTAD Consultant in Argentina", "Consulting on port management, logistics, waterways and institutional strengthening for the United Nations."],
    ["2022 - 2026", "Director of Strategic Planning, AGP", "Led a structure of more than 700 professionals and contributed to planning for the Main Navigable Waterway, concession processes and the transformation of the Port of Buenos Aires."],
    ["2016 - 2022", "Director of the National Port Training Center (CENCAPOR), AGP", "Expanded regional port training to more than 6,000 participants, 10,000 training hours and 13 countries."],
    ["2011 - 2016", "Head of International Relations, AGP", "Developed institutional cooperation and supported AGP's participation in UNCTAD's TRAINFORTRADE Port Management Programme."],
];

const projectsEs = [
    ["2021 - 2026", "Vía Navegable Troncal", "Participó en la puesta en marcha y consolidación de la administración estatal de una infraestructura estratégica de aproximadamente 1.400 km, que canaliza cerca del 80% del comercio exterior argentino. Su trabajo acompañó una transición de alta complejidad institucional y operativa, preservando la continuidad de la navegación comercial.", "Intervino en la gestión de dragado y redragado, señalización, balizamiento, controles hidrométricos, cobro de peajes, mantenimiento y obras estratégicas. También contribuyó a la elaboración técnica y estratégica de los pliegos para una nueva concesión privada de 25 años, con modernización y profundización previstas hasta 40 pies."],
    ["2023 - 2026", "Transformación del Puerto Buenos Aires", "Tuvo un papel protagónico en la renegociación de concesiones que transformó la operación portuaria de tres a dos operadores, articulando una transición con empresas internacionales y autoridades públicas. En 2026 participó además en una propuesta de mercado para evolucionar hacia una terminal unificada de contenedores.", "Integró la planificación del Master Plan, los proyectos Puerto-Ciudad, una terminal de cruceros independiente y la relocalización de las áreas de apoyo operativo y logístico. También planificó inversiones en escolleras, infraestructura portuaria y obras viales, con un presupuesto anual aproximado de USD 150 millones."],
    ["UNCTAD - TRAINFORTRADE", "Capacitación y cooperación regional", "Lideró programas de profesionalización portuaria con más de 6.000 participantes, 10.000 horas de formación y presencia en 13 países de América. Esta agenda combinó desarrollo de capacidades, formación técnica y redes de cooperación entre autoridades, universidades y organizaciones del sector.", "Extendió TRAINFORTRADE a más de 650 profesionales, impulsó el subprograma Puertos del Corredor Atlántico Sur y articuló cooperación con los puertos de Valencia y Gijón. Su participación incluyó congresos y encuentros portuarios internacionales en Ginebra y distintas ciudades de España."],
];

const projectsEn = [
    ["2021 - 2026", "Main Navigable Waterway", "Contributed to launching and consolidating state administration of a strategic waterway of approximately 1,400 km, which carries close to 80% of Argentina's foreign trade. His work supported a highly complex institutional and operational transition while preserving the continuity of commercial navigation.", "Contributed to dredging and re-dredging, signalling, buoyage, hydrometric controls, toll collection, maintenance and strategic works. He also supported the technical and strategic preparation of tender documents for a new 25-year private concession, including planned modernization and deepening to 40 feet."],
    ["2023 - 2026", "Transformation of the Port of Buenos Aires", "Played a leading role in concession renegotiations that changed port operations from three to two operators, coordinating a transition involving international companies and public authorities. In 2026, he also contributed to a market proposal for a unified container terminal.", "Contributed to the Master Plan, Port-City projects, an independent cruise terminal and relocation of operational and logistics support areas. He also planned investments in breakwaters, port infrastructure and road works, with annual planning of approximately USD 150 million."],
    ["UNCTAD - TRAINFORTRADE", "Regional training and cooperation", "Led port professionalization programs with more than 6,000 participants, 10,000 training hours and a presence in 13 countries across the Americas. This agenda combined capacity building, technical training and cooperation networks among authorities, universities and industry organizations.", "Expanded TRAINFORTRADE to more than 650 professionals, promoted the South Atlantic Corridor subprogramme and coordinated cooperation with the ports of Valencia and Gijón. His work also included international port conferences and meetings in Geneva and several cities in Spain."],
];

export default async function DiegoSalomPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const isEnglish = locale === "en";
    const roles = isEnglish ? rolesEn : rolesEs;
    const projects = isEnglish ? projectsEn : projectsEs;
    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="nosotros" />
            <section className="dominus-founder-detail tmp-section-gap">
                <div className="container">
                    <Link className="dominus-founder-detail__back" href="/nosotros">
                        <i className="feather-arrow-left" />
                        <span>{isEnglish ? "Back to About" : "Volver a Nosotros"}</span>
                    </Link>
                    <div className="dominus-founder-detail__heading">
                        <span>{isEnglish ? "Founder" : "Fundador"}</span>
                        <h1>Diego Salom</h1>
                        <p>{isEnglish ? "UNCTAD Consultant in Argentina | Ports, logistics, waterways and technical cooperation." : "Consultor de UNCTAD en Argentina | Puertos, logística, vías navegables y cooperación técnica."}</p>
                    </div>
                    <div className="dominus-founder-detail__grid">
                        <aside>
                            <div className="dominus-founder-detail__photo-placeholder" aria-label={isEnglish ? "Founder photo placeholder" : "Espacio reservado para foto del fundador"}>
                                <i className="feather-user" aria-hidden="true" />
                                <span>{isEnglish ? "No Photo" : "Sin foto"}</span>
                            </div>
                            <h2>{isEnglish ? "Specialization" : "Especialización"}</h2>
                            <ul>
                                <li>{isEnglish ? "Port management and planning" : "Gestión y planificación portuaria"}</li>
                                <li>{isEnglish ? "Waterways and governance" : "Vías navegables y gobernanza"}</li>
                                <li>{isEnglish ? "Capacity building" : "Formación de capacidades"}</li>
                                <li>{isEnglish ? "International cooperation" : "Cooperación internacional"}</li>
                                <li>{isEnglish ? "Regional program design" : "Diseño de programas regionales"}</li>
                            </ul>
                            <h2>{isEnglish ? "Education" : "Formación"}</h2>
                            <p>{isEnglish ? "Master's Degree in Port Logistics and Management, Fundación Valenciaport, Spain." : "Máster en Logística y Gestión Portuaria, Fundación Valenciaport, España."}</p>
                            <p>{isEnglish ? "Modern Port Management, UNCTAD - TRAINFORTRADE, Valencia and Gijón, Spain." : "Gestión Moderna de Puertos, UNCTAD - TRAINFORTRADE, Valencia y Gijón, España."}</p>
                            <p>{isEnglish ? "Bachelor's Degree in Public and Institutional Relations, UADE, Argentina." : "Licenciatura en Relaciones Públicas e Institucionales, UADE, Argentina."}</p>
                        </aside>
                        <div>
                            <h2>{isEnglish ? "Executive profile" : "Perfil ejecutivo"}</h2>
                            <p>{isEnglish ? "A specialist in port management, strategic planning and institutional development. His experience brings together public management of critical infrastructure, engagement with international operators and a sustained record of cooperation with UNCTAD - TRAINFORTRADE." : "Especialista en gestión portuaria, planificación estratégica y desarrollo institucional. Su experiencia reúne la gestión pública de infraestructura crítica, la relación con operadores internacionales y una trayectoria sostenida de cooperación con UNCTAD - TRAINFORTRADE."}</p>
                            <h2>{isEnglish ? "Professional experience" : "Experiencia profesional"}</h2>
                            <div className="dominus-founder-detail__timeline">
                                {roles.map(([period, title, description]) => (
                                    <article key={period}>
                                        <span>{period}</span>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                    <section className="dominus-founder-detail__projects">
                        <h2>{isEnglish ? "Strategic projects" : "Proyectos estratégicos"}</h2>
                        <p className="dominus-founder-detail__projects-intro">
                            {isEnglish
                                ? "Critical infrastructure, concession processes and international cooperation."
                                : "Infraestructura crítica, concesiones y cooperación internacional."}
                        </p>
                        <div className="dominus-founder-detail__projects-grid">
                            {projects.map(([period, title, description, detail]) => (
                                <article key={title}>
                                    <span>{period}</span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <p>{detail}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
            <FooterTwo />
        </main>
    );
}
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dominuslogistica.com";

const services: { name: string; slug: string }[] = [
  { name: "Master plans portuarios", slug: "master-plans-portuarios" },
  { name: "Concesiones, PPP y licitaciones", slug: "concesiones-ppp-licitaciones" },
  { name: "Gobernanza y tarifas", slug: "gobernanza-y-tarifas" },
  { name: "Optimización operativa de terminales", slug: "optimizacion-operativa-terminales" },
  { name: "Transformación digital y PCS", slug: "transformacion-digital-pcs" },
  { name: "Sostenibilidad y green ports", slug: "sostenibilidad-y-green-ports" },
  { name: "Regulación y políticas públicas", slug: "regulacion-y-politicas-publicas" },
  { name: "Capacitación y talento portuario", slug: "capacitacion-y-talento" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DOMINUS",
      legalName: "DOMINUS Consultora Portuaria",
      url: siteUrl,
      logo: `${siteUrl}/logo_dark.png`,
      image: `${siteUrl}/og-image.svg`,
      description:
        "Consultora especializada en desarrollo portuario, gobernanza, planificación estratégica, sostenibilidad y transformación digital para autoridades y operadores portuarios.",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: ["https://www.linkedin.com/company/dominus-portuaria"],
      founder: { "@id": `${siteUrl}/#diego-salom` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "DOMINUS",
      url: siteUrl,
      inLanguage: ["es", "en"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "DOMINUS",
      url: siteUrl,
      description:
        "Consultoría en desarrollo portuario: master plans, concesiones, gobernanza, optimización de terminales, transformación digital, sostenibilidad, regulación y capacitación.",
      areaServed: "Worldwide",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      serviceType: [
        "Port development consulting",
        "Port strategy",
        "Port governance",
        "Terminal optimization",
        "Digital transformation",
        "Sustainability and green ports",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de consultoría portuaria",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: `${siteUrl}/es/servicios/${service.slug}`,
            provider: { "@id": `${siteUrl}/#organization` },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#diego-salom`,
      name: "Diego Salom",
      url: `${siteUrl}/es/nosotros/diego-salom`,
      image: `${siteUrl}/assets/images/founder/diego-salom-perfil.jpg`,
      jobTitle: "Consultor en gestión y desarrollo portuario",
      description:
        "Especialista en gestión portuaria, planificación estratégica, gobernanza y desarrollo institucional. Consultor de UNCTAD en Argentina con trayectoria en infraestructura crítica, concesiones y cooperación internacional (UNCTAD - TRAINFORTRADE).",
      sameAs: ["https://www.linkedin.com/in/diegosalom/"],
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: [
        "Gestión portuaria",
        "Planificación estratégica portuaria",
        "Gobernanza portuaria",
        "Vías navegables",
        "Concesiones portuarias",
        "Transformación digital portuaria",
        "Cooperación internacional",
        "Capacitación portuaria",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Fundación Valenciaport",
        },
        {
          "@type": "EducationalOrganization",
          name: "UADE - Universidad Argentina de la Empresa",
        },
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

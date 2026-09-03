const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "DOMINUS",
      legalName: "DOMINUS Consultora Portuaria",
      url: "https://www.dominus-portuaria.com",
      logo: "https://www.dominus-portuaria.com/assets/images/favicon.png",
      description:
        "Consultora especializada en desarrollo portuario, gobernanza, planificación estratégica, sostenibilidad y transformación digital para autoridades y operadores portuarios.",
      areaServed: "Worldwide",
      sameAs: ["https://www.linkedin.com/company/dominus-portuaria"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contacto@dominus.example",
          availableLanguage: ["Spanish", "English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      name: "DOMINUS",
      url: "https://www.dominus-portuaria.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.dominus-portuaria.com/es?query={search_term_string}",
        },
      },
    },
    {
      "@type": "ProfessionalService",
      name: "DOMINUS",
      serviceType: [
        "Port development consulting",
        "Port strategy",
        "Port governance",
        "Terminal optimization",
        "Digital transformation",
        "Sustainability and green ports",
      ],
      areaServed: "Worldwide",
      url: "https://www.dominus-portuaria.com",
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

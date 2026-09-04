// Blog / Insights de DOMINUS.
// Contenido bilingüe (es/en) firmado por el equipo. Estructura pensada para
// que agregar un artículo sea editar este archivo: cada post lleva metadatos
// + cuerpo por idioma (array de párrafos). Alimenta la home, /blog y /blog/[slug].

export type Locale = 'es' | 'en'
type Localized = Record<Locale, string>

export type BlogPost = {
  slug: string
  category: Localized
  title: Localized
  excerpt: Localized
  author: string
  date: string // ISO (YYYY-MM-DD) — se usa para orden y datePublished del schema
  readingMinutes: number
  heroImage: string
  tags: string[]
  body: Record<Locale, string[]>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'que-es-master-plan-portuario',
    category: { es: 'Planificación', en: 'Planning' },
    title: {
      es: 'Qué es un master plan portuario y por qué define el futuro de un puerto',
      en: 'What a port master plan is and why it shapes a port’s future',
    },
    excerpt: {
      es: 'El plan maestro ordena el desarrollo de un puerto a largo plazo: usos del suelo, infraestructura, inversiones y etapas. Sin él, las decisiones se toman de forma reactiva.',
      en: 'A master plan guides a port’s long-term development: land use, infrastructure, investment and phasing. Without one, decisions are made reactively.',
    },
    author: 'Diego Salom',
    date: '2026-08-20',
    readingMinutes: 6,
    heroImage: '/assets/images/blog/blog-01.jpg',
    tags: ['Master plan', 'Planificación', 'Estrategia'],
    body: {
      es: [
        'Un master plan portuario es el instrumento que ordena el desarrollo de un puerto en un horizonte de 15 a 30 años. Define los usos del suelo y del agua, la infraestructura necesaria, las inversiones por etapa y la secuencia en que deben ejecutarse para que capacidad, operación y sostenibilidad crezcan de manera coordinada.',
        'Su valor no está solo en el documento final, sino en el proceso: obliga a alinear a la autoridad portuaria, los operadores, los organismos reguladores y la comunidad en torno a una visión compartida. Cuando ese consenso falta, cada obra se decide de forma aislada y el puerto termina resolviendo urgencias en lugar de anticipar demanda.',
        'Un buen plan maestro parte de proyecciones de tráfico realistas, no optimistas. Sobre esa base dimensiona muelles, áreas de almacenamiento, accesos terrestres y conexiones ferroviarias, y reserva suelo para etapas futuras que hoy parecen lejanas pero que condicionan cualquier ampliación.',
        'También es una herramienta de gobernanza: ordena las prioridades de inversión, da previsibilidad a los concesionarios y sirve de marco para negociar con financiadores. Un puerto con un plan maestro sólido reduce el riesgo percibido y accede a mejores condiciones de financiamiento.',
        'La recomendación práctica es tratar el master plan como un documento vivo, con revisiones periódicas que incorporen cambios en el comercio, la tecnología y la regulación ambiental. Un plan que no se actualiza envejece rápido y pierde su capacidad de guiar decisiones.',
      ],
      en: [
        'A port master plan is the instrument that structures a port’s development over a 15 to 30 year horizon. It defines land and water use, the required infrastructure, phased investment and the sequence in which those investments must be executed so that capacity, operations and sustainability grow in a coordinated way.',
        'Its value lies not only in the final document but in the process: it forces the port authority, operators, regulators and the community to align around a shared vision. When that consensus is missing, every project is decided in isolation and the port ends up managing emergencies instead of anticipating demand.',
        'A good master plan starts from realistic traffic projections, not optimistic ones. On that basis it sizes berths, storage areas, land access and rail connections, and reserves land for future stages that seem distant today but constrain any later expansion.',
        'It is also a governance tool: it orders investment priorities, gives predictability to concessionaires and provides a framework to negotiate with lenders. A port with a solid master plan reduces perceived risk and secures better financing conditions.',
        'The practical recommendation is to treat the master plan as a living document, with periodic reviews that incorporate changes in trade, technology and environmental regulation. A plan that is not updated ages quickly and loses its ability to guide decisions.',
      ],
    },
  },
  {
    slug: 'concesiones-ppp-puertos',
    category: { es: 'Concesiones', en: 'Concessions' },
    title: {
      es: 'Concesiones y PPP: cómo estructurar acuerdos portuarios que funcionen a largo plazo',
      en: 'Concessions and PPPs: structuring port agreements that last',
    },
    excerpt: {
      es: 'Una concesión mal diseñada condiciona a un puerto por décadas. El equilibrio entre riesgo, inversión y retorno se define antes de la licitación, no después.',
      en: 'A poorly designed concession can lock a port in for decades. The balance between risk, investment and return is set before the tender, not after.',
    },
    author: 'Diego Salom',
    date: '2026-07-15',
    readingMinutes: 7,
    heroImage: '/assets/images/blog/blog-02.jpg',
    tags: ['Concesiones', 'PPP', 'Gobernanza'],
    body: {
      es: [
        'Las concesiones y las asociaciones público-privadas (PPP) son el mecanismo más común para atraer inversión y gestión especializada a los puertos. Bien diseñadas, permiten que el Estado conserve la titularidad del bien público mientras un operador aporta capital, tecnología y eficiencia operativa.',
        'El problema aparece cuando el contrato se estructura sin un análisis riguroso de la demanda y del reparto de riesgos. Un plazo demasiado corto desincentiva la inversión; uno demasiado largo, sin cláusulas de revisión, congela tarifas y estándares durante décadas.',
        'La clave está en definir con claridad qué riesgo asume cada parte: demanda, construcción, tipo de cambio, cambios regulatorios. Cada riesgo debe quedar en manos de quien mejor puede gestionarlo, y eso debe reflejarse en la ecuación económica del contrato.',
        'Los indicadores de desempeño son igual de importantes que la tarifa. Un buen acuerdo fija metas medibles de productividad, inversión y calidad de servicio, con consecuencias concretas si no se cumplen. Sin métricas, la autoridad portuaria pierde capacidad de exigir.',
        'Finalmente, la transparencia del proceso de licitación determina la calidad de los oferentes. Reglas claras, información simétrica y criterios de adjudicación objetivos atraen operadores serios y reducen la litigiosidad posterior.',
      ],
      en: [
        'Concessions and public-private partnerships (PPPs) are the most common mechanism to attract investment and specialised management to ports. Well designed, they let the State retain ownership of the public asset while an operator provides capital, technology and operational efficiency.',
        'Problems arise when the contract is structured without a rigorous analysis of demand and risk allocation. A term that is too short discourages investment; one that is too long, without review clauses, freezes tariffs and standards for decades.',
        'The key is to define clearly which risk each party assumes: demand, construction, exchange rate, regulatory change. Each risk should sit with whoever can best manage it, and that must be reflected in the contract’s economics.',
        'Performance indicators matter as much as the tariff. A good agreement sets measurable targets for productivity, investment and service quality, with concrete consequences if they are not met. Without metrics, the port authority loses its leverage.',
        'Finally, the transparency of the tender process determines the quality of bidders. Clear rules, symmetric information and objective award criteria attract serious operators and reduce later disputes.',
      ],
    },
  },
  {
    slug: 'green-ports-sostenibilidad',
    category: { es: 'Sostenibilidad', en: 'Sustainability' },
    title: {
      es: 'Green ports: la sostenibilidad como ventaja competitiva portuaria',
      en: 'Green ports: sustainability as a competitive advantage',
    },
    excerpt: {
      es: 'La descarbonización dejó de ser un costo regulatorio para convertirse en un factor de competitividad. Los puertos que se anticipan capturan carga, inversión y talento.',
      en: 'Decarbonisation has shifted from a regulatory cost to a competitiveness factor. Ports that move early capture cargo, investment and talent.',
    },
    author: 'Diego Salom',
    date: '2026-06-10',
    readingMinutes: 5,
    heroImage: '/assets/images/blog/blog-03.jpg',
    tags: ['Green ports', 'Sostenibilidad', 'Energía'],
    body: {
      es: [
        'Durante años la sostenibilidad portuaria se percibió como un costo impuesto por la regulación. Hoy esa lógica se invirtió: las navieras, los cargadores y los financiadores eligen puertos con credenciales ambientales sólidas, y eso convierte a la descarbonización en un factor de competitividad.',
        'El concepto de green port abarca electrificación de muelles, suministro de energía limpia a los buques atracados, gestión eficiente de residuos y agua, y reducción de emisiones en la operación terrestre. No es una acción aislada, sino una estrategia integral.',
        'Los puertos que se anticipan obtienen tres ventajas concretas: acceso a financiamiento verde en mejores condiciones, preferencia de clientes con objetivos de reducción de huella de carbono y una licencia social más sólida para crecer.',
        'La transición exige planificación e inversión, pero también gobernanza: metas claras, indicadores públicos y alianzas con operadores y comunidad. La sostenibilidad que no se mide no se gestiona ni se comunica.',
        'La conclusión es simple: el puerto que trate la agenda ambiental como una obligación mínima quedará rezagado frente al que la asuma como parte de su propuesta de valor.',
      ],
      en: [
        'For years, port sustainability was seen as a cost imposed by regulation. That logic has now reversed: shipping lines, shippers and lenders choose ports with strong environmental credentials, turning decarbonisation into a competitiveness factor.',
        'The green port concept covers berth electrification, clean shore power for docked vessels, efficient waste and water management, and lower emissions in landside operations. It is not an isolated action but an integrated strategy.',
        'Ports that move early gain three concrete advantages: access to green financing on better terms, preference from customers with carbon reduction targets, and a stronger social licence to grow.',
        'The transition requires planning and investment, but also governance: clear targets, public indicators and partnerships with operators and community. Sustainability that is not measured is neither managed nor communicated.',
        'The conclusion is simple: a port that treats the environmental agenda as a minimum obligation will fall behind one that embraces it as part of its value proposition.',
      ],
    },
  },
]

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

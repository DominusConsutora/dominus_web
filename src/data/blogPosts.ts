// Blog / Insights de DOMINUS.
// Contenido bilingüe (es/en) firmado por el equipo. Estructura pensada para
// que agregar un artículo sea editar este archivo: cada post lleva metadatos
// + cuerpo por idioma (array de párrafos). Alimenta la home, /blog y /blog/[slug].

import { publishedBlogPosts } from './publishedBlogPosts'

export type Locale = 'es' | 'en'
type Localized = Record<Locale, string>

export const blogAxes = [
  'master-plans-portuarios',
  'concesiones-ppp-licitaciones',
  'gobernanza-y-tarifas',
  'optimizacion-operativa-terminales',
  'transformacion-digital-pcs',
  'sostenibilidad-y-green-ports',
  'regulacion-y-politicas-publicas',
  'capacitacion-y-talento',
] as const

export type BlogAxis = (typeof blogAxes)[number]

type BlogSection = {
  heading: Localized
  paragraphs: Record<Locale, string[]>
}

export type BlogPost = {
  slug: string
  category: Localized
  axis: BlogAxis
  title: Localized
  excerpt: Localized
  author: string
  date: string // ISO (YYYY-MM-DD) — se usa para orden y datePublished del schema
  readingMinutes: number
  heroImage: string
  tags: string[]
  body: Record<Locale, string[]>
  sections?: BlogSection[]
}

export const referenceBlogPosts: BlogPost[] = [
  {
    slug: 'master-plan-portuario-planificar-incertidumbre',
    category: { es: 'Planificación', en: 'Planning' },
    axis: 'master-plans-portuarios',
    title: {
      es: 'Master plan portuario: planificar para la incertidumbre, no para una única proyección',
      en: 'Port master planning: preparing for uncertainty, not one single forecast',
    },
    excerpt: {
      es: 'Un plan maestro útil no pretende acertar el futuro. Define decisiones reversibles, umbrales de inversión y escenarios que permiten a un puerto adaptarse sin perder rumbo.',
      en: 'A useful master plan does not try to predict the future. It defines reversible decisions, investment triggers and scenarios that let a port adapt without losing direction.',
    },
    author: 'Diego Salom',
    date: '2026-09-15',
    readingMinutes: 12,
    heroImage: '/assets/images/blog/master-plan-portuario-decision.webp',
    tags: ['Master plan', 'Planificación', 'Infraestructura'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: { es: 'El problema de la falsa precisión', en: 'The problem with false precision' },
        paragraphs: {
          es: [
            'Los puertos toman decisiones que duran décadas con información que cambia cada trimestre. Por eso una proyección única de carga, por sofisticada que sea, no puede ser el centro de un master plan. Puede orientar una conversación, pero no debería definir por sí sola una obra, una concesión o el uso irreversible de un frente de agua.',
            'El error aparece cuando el plan se lee como una promesa de futuro. Si el comercio, la matriz de cargas o la tecnología se apartan de esa promesa, la organización queda con activos sobredimensionados, suelo mal asignado o inversiones que ya no responden a su mercado.',
            'La tarea del planificador no es acertar el volumen exacto de 2045. Es preparar al puerto para tomar buenas decisiones cuando las señales reales del mercado aparezcan.',
          ],
          en: [
            'Ports make decisions that last decades with information that changes every quarter. That is why a single cargo forecast, however sophisticated, cannot sit at the centre of a master plan. It can guide a conversation, but it should not by itself determine a project, a concession or the irreversible use of waterfront land.',
            'The mistake comes when the plan is read as a promise about the future. If trade, cargo mix or technology move away from that promise, the organisation is left with oversized assets, poorly allocated land or investments that no longer serve its market.',
            'A planner’s task is not to get the exact 2045 volume right. It is to prepare the port to make sound decisions when real market signals emerge.',
          ],
        },
      },
      {
        heading: { es: 'Pensar en escenarios, no en apuestas', en: 'Thinking in scenarios, not bets' },
        paragraphs: {
          es: [
            'Un master plan robusto trabaja al menos con escenarios de crecimiento, estancamiento y transformación. El último suele ser el más revelador: el tonelaje total puede mantenerse, pero cambiar de contenedores a graneles, de importación a exportación, o de carga convencional a proyectos de energía.',
            'Cada escenario debe responder preguntas operativas. Qué infraestructura es imprescindible en todos los casos. Qué superficie conviene reservar como opción. Qué activos pueden construirse por módulos. Y qué decisiones deben posponerse hasta que haya evidencia suficiente.',
            'Este enfoque no paraliza la inversión. La ordena: primero el capital que protege la conectividad, la seguridad y la resiliencia; después, las expansiones vinculadas a una demanda comprobable.',
          ],
          en: [
            'A resilient master plan works with at least growth, stagnation and transformation scenarios. The last one is often the most revealing: total tonnage may remain steady while moving from containers to bulk, imports to exports, or conventional cargo to energy projects.',
            'Each scenario should answer operational questions. Which infrastructure is indispensable in every case. Which land should be kept as an option. Which assets can be built in modules. And which decisions should wait until there is enough evidence.',
            'This approach does not freeze investment. It orders it: first the capital that protects connectivity, safety and resilience; then expansions linked to proven demand.',
          ],
        },
      },
      {
        heading: { es: 'Los umbrales convierten el plan en gestión', en: 'Triggers turn a plan into management' },
        paragraphs: {
          es: [
            'La diferencia entre un documento archivado y una herramienta de gestión está en los umbrales. En lugar de decir que una nueva posición de atraque se construirá en un año determinado, el plan puede definir qué nivel de ocupación, espera o demanda sostenida activa su diseño, licitación y ejecución.',
            'Los indicadores deben ser pocos, verificables y conocidos por quienes toman decisiones: utilización de muelle, permanencia de carga, confiabilidad de accesos, disponibilidad de patio y evolución por segmento. Medir demasiado puede producir informes; medir bien produce acción.',
            'Cuando los gatillos están acordados de antemano, la organización reduce discusiones reactivas y gana velocidad sin comprometer el rigor técnico.',
          ],
          en: [
            'The difference between an archived document and a management tool lies in triggers. Rather than stating that a new berth will be built in a certain year, the plan can define which level of utilisation, waiting time or sustained demand activates its design, tender and delivery.',
            'Indicators should be few, verifiable and understood by decision makers: berth utilisation, cargo dwell time, access reliability, yard availability and performance by segment. Measuring too much can produce reports; measuring well produces action.',
            'When triggers are agreed in advance, the organisation reduces reactive debate and gains speed without compromising technical rigour.',
          ],
        },
      },
      {
        heading: { es: 'Un plan que se revisa sin empezar de cero', en: 'A plan that evolves without starting over' },
        paragraphs: {
          es: [
            'La revisión no implica rehacer el master plan ante cada cambio. Implica mantener una gobernanza de seguimiento: contrastar hipótesis, actualizar indicadores y revisar la cartera de inversiones con una frecuencia definida.',
            'La visión de largo plazo debe permanecer estable en aquello que no admite improvisación, como los accesos, el suelo estratégico y la adaptación climática. Las decisiones más reversibles, en cambio, necesitan margen para cambiar de secuencia o tecnología.',
            'Planificar de este modo es reconocer la incertidumbre sin convertirla en excusa. Un puerto no controla el futuro del comercio, pero sí puede controlar qué tan preparado está para responder.',
          ],
          en: [
            'Review does not mean rewriting the master plan after every change. It means maintaining a governance process: testing assumptions, updating indicators and reviewing the investment portfolio at a defined cadence.',
            'The long-term vision should remain stable in areas that do not allow improvisation, such as access, strategic land and climate adaptation. More reversible decisions, on the other hand, need room to change sequence or technology.',
            'Planning this way acknowledges uncertainty without turning it into an excuse. A port does not control the future of trade, but it can control how ready it is to respond.',
          ],
        },
      },
      {
        heading: { es: 'El suelo portuario es una decisión de una sola vez', en: 'Port land is a one-time decision' },
        paragraphs: {
          es: [
            'En un puerto consolidado, el suelo disponible es escaso y cualquier uso temporal puede terminar siendo permanente. Un depósito, un estacionamiento o una operación de bajo valor pueden ocupar durante años el espacio que una futura ampliación necesitará para crecer.',
            'El master plan debe clasificar el suelo por su valor estratégico, no solo por su uso actual. Debe identificar qué áreas requieren protección, qué actividades pueden relocalizarse y qué reservas justifican permanecer vacantes mientras maduran las condiciones de mercado.',
            'Esa disciplina puede parecer costosa en el corto plazo, pero evita que la organización descubra demasiado tarde que su principal restricción física fue una decisión administrativa de rutina.',
          ],
          en: [
            'In a mature port, available land is scarce and any temporary use can become permanent. A warehouse, parking area or low-value operation can occupy for years the space a future expansion needs to grow.',
            'The master plan should classify land by strategic value, not only by current use. It should identify which areas require protection, which activities can be relocated and which reserves justify remaining vacant while market conditions mature.',
            'That discipline may seem costly in the short term, but it prevents the organisation from discovering too late that its main physical constraint came from a routine administrative decision.',
          ],
        },
      },
      {
        heading: { es: 'Conectividad: el límite suele estar fuera del puerto', en: 'Connectivity: the constraint is often outside the port' },
        paragraphs: {
          es: [
            'La eficiencia de un muelle no compensa por sí sola un acceso vial saturado, una conexión ferroviaria discontinua o una interfaz urbana que genera conflictos. El puerto es un nodo y su desempeño depende de las redes que lo alimentan y distribuyen carga.',
            'Por eso la planificación debe incorporar actores que no administran el puerto: municipios, operadores ferroviarios, organismos viales, aduana y desarrolladores logísticos. El valor del plan también está en convertir esa dependencia en una agenda común de proyectos y prioridades.',
            'Donde el puerto no tiene control directo, necesita capacidad de coordinación, información compartida y argumentos técnicos para sostener inversiones de terceros.',
          ],
          en: [
            'Berth efficiency alone does not compensate for a congested road approach, an unreliable rail link or an urban interface that creates conflict. A port is a node, and its performance depends on the networks that feed and distribute cargo.',
            'Planning must therefore include actors who do not manage the port: municipalities, rail operators, road authorities, customs and logistics developers. The plan’s value also lies in turning that dependency into a shared agenda of projects and priorities.',
            'Where the port has no direct control, it needs coordination capacity, shared information and technical arguments to support third-party investment.',
          ],
        },
      },
      {
        heading: { es: 'Resiliencia climática como criterio de inversión', en: 'Climate resilience as an investment criterion' },
        paragraphs: {
          es: [
            'El cambio climático no es un capítulo ambiental separado del plan. Afecta cotas de diseño, drenajes, continuidad operativa, seguros, mantenimiento y la vida útil de los activos. Ignorarlo en la etapa de planificación vuelve más cara cualquier corrección posterior.',
            'La respuesta no requiere certeza absoluta sobre cada evento. Requiere evaluar vulnerabilidades, definir niveles de servicio aceptables durante contingencias y priorizar obras que mantengan operativos los componentes críticos del sistema.',
            'Una infraestructura resistente puede tener un costo inicial mayor, pero protege ingresos, reduce interrupciones y mejora la capacidad del puerto para atraer financiamiento de largo plazo.',
          ],
          en: [
            'Climate change is not an environmental chapter separate from the plan. It affects design levels, drainage, business continuity, insurance, maintenance and asset life. Ignoring it at the planning stage makes every later correction more expensive.',
            'The response does not require absolute certainty about every event. It requires assessing vulnerabilities, defining acceptable service levels during contingencies and prioritising works that keep critical system components operating.',
            'Resilient infrastructure may carry a higher initial cost, but it protects revenue, reduces disruptions and improves the port’s ability to attract long-term finance.',
          ],
        },
      },
      {
        heading: { es: 'La prueba final: una cartera que se puede ejecutar', en: 'The final test: an executable portfolio' },
        paragraphs: {
          es: [
            'Un master plan genera valor cuando termina en una cartera priorizada: proyectos con propósito, responsable, dependencia, costo de referencia, fuente posible de financiamiento y condición que justifica iniciarlos. Sin esa traducción, la visión sigue siendo aspiracional.',
            'La cartera también permite conversar con directorios, gobiernos e inversores con transparencia. Expone qué decisiones dependen de demanda, cuáles son habilitantes y cuáles pueden esperar, evitando prometer todo al mismo tiempo.',
            'El mejor plan no es el que acumula más proyectos. Es el que ayuda a elegir, en el momento correcto, el siguiente proyecto que hace al sistema más competitivo.',
          ],
          en: [
            'A master plan creates value when it ends in a prioritised portfolio: projects with a purpose, owner, dependency, reference cost, possible funding source and condition that justifies starting them. Without that translation, the vision remains aspirational.',
            'The portfolio also enables transparent conversations with boards, governments and investors. It shows which decisions depend on demand, which are enabling and which can wait, avoiding the promise of everything at once.',
            'The best plan is not the one that accumulates the most projects. It is the one that helps choose, at the right time, the next project that makes the system more competitive.',
          ],
        },
      },
    ],
  },
  {
    slug: 'concesiones-portuarias-desempeno-incentivos',
    category: { es: 'Concesiones', en: 'Concessions' },
    axis: 'concesiones-ppp-licitaciones',
    title: {
      es: 'Concesiones portuarias: de exigir activos a alinear desempeño e incentivos',
      en: 'Port concessions: from prescribing assets to aligning performance and incentives',
    },
    excerpt: {
      es: 'La solidez de una concesión no se mide por la cantidad de cláusulas, sino por su capacidad de proteger el interés público mientras hace viable la inversión y premia un buen servicio.',
      en: 'A concession’s strength is not measured by the number of clauses, but by its ability to protect the public interest while making investment viable and rewarding good service.',
    },
    author: 'Diego Salom',
    date: '2026-09-08',
    readingMinutes: 12,
    heroImage: '/assets/images/blog/concesiones-portuarias-riesgos.webp',
    tags: ['Concesiones', 'PPP', 'Desempeño'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: { es: 'El contrato no reemplaza a la estrategia', en: 'A contract does not replace strategy' },
        paragraphs: {
          es: [
            'Antes de redactar un pliego, una autoridad necesita responder qué servicio quiere asegurar, para qué mercado y con qué nivel de riesgo público aceptable. Cuando esa estrategia no existe, el contrato intenta compensarla con una lista extensa de obligaciones que rara vez resuelve los problemas relevantes.',
            'Una concesión ordena la relación entre Estado, operador y usuarios durante muchos años. No puede diseñarse solo como una transferencia de obra o como una fuente inmediata de canon. Debe ser consistente con el master plan, la política tarifaria y el rol que el puerto cumple en su territorio.',
          ],
          en: [
            'Before drafting tender documents, an authority needs to answer which service it wants to secure, for which market and with what acceptable level of public risk. When that strategy is missing, the contract tries to compensate with a long list of obligations that rarely solves the relevant problems.',
            'A concession structures the relationship between the State, operator and users for many years. It cannot be designed only as a works transfer or an immediate source of fees. It must be consistent with the master plan, tariff policy and the role the port plays in its territory.',
          ],
        },
      },
      {
        heading: { es: 'Exigir resultados antes que una lista de equipos', en: 'Require outcomes before a list of equipment' },
        paragraphs: {
          es: [
            'Prescribir cada grúa, sistema o edificio parece ofrecer control, pero suele inmovilizar la innovación. El activo correcto al inicio de un contrato puede dejar de serlo cuando cambian la carga, los costos de energía o las soluciones digitales disponibles.',
            'La autoridad debe concentrarse en capacidades y niveles de servicio: disponibilidad de infraestructura, productividad, confiabilidad, seguridad y calidad de atención. El operador conserva espacio para elegir cómo alcanzarlos, y el regulador mantiene una base objetiva para verificar que los alcance.',
            'Hay inversiones que sí son indelegables, como la rehabilitación de un muelle crítico. Aun así, deben insertarse en una lógica de desempeño, no convertirse en el único indicador de cumplimiento.',
          ],
          en: [
            'Prescribing every crane, system or building may appear to offer control, but it often freezes innovation. The right asset at the start of a contract may no longer be right when cargo, energy costs or available digital solutions change.',
            'The authority should focus on capabilities and service levels: infrastructure availability, productivity, reliability, safety and quality of service. The operator retains room to decide how to achieve them, while the regulator keeps an objective basis to verify delivery.',
            'Some investments are non-negotiable, such as the rehabilitation of a critical berth. Even then, they should sit within a performance logic rather than become the only compliance measure.',
          ],
        },
      },
      {
        heading: { es: 'Asignar cada riesgo a quien puede gestionarlo', en: 'Allocate each risk to the party that can manage it' },
        paragraphs: {
          es: [
            'Transferir todos los riesgos al privado no vuelve más eficiente una concesión: encarece el financiamiento y puede alejar a los mejores operadores. Asumirlos todos desde el Estado tampoco funciona, porque debilita los incentivos para operar bien.',
            'Los riesgos operativos y de mantenimiento suelen estar donde el concesionario puede actuar. Los riesgos normativos, de permisos públicos o de decisiones soberanas requieren otro tratamiento. La demanda merece un análisis más fino: una parte puede incentivar desarrollo comercial, pero los shocks extraordinarios no se gestionan desde una terminal.',
            'Una matriz de riesgos clara, traducida a mecanismos de compensación y revisión, reduce conflictos posteriores mucho más que una negociación basada en ambigüedades.',
          ],
          en: [
            'Transferring every risk to the private party does not make a concession more efficient: it raises financing costs and may deter the best operators. Taking all risks on the public side does not work either, because it weakens incentives to operate well.',
            'Operating and maintenance risks generally sit where the concessionaire can act. Regulatory risks, public permits or sovereign decisions require another treatment. Demand needs finer analysis: a share can encourage commercial development, but extraordinary shocks cannot be managed from a terminal.',
            'A clear risk matrix, translated into compensation and review mechanisms, reduces later disputes far more than negotiations built on ambiguity.',
          ],
        },
      },
      {
        heading: { es: 'Revisar sin renegociar todo', en: 'Review without renegotiating everything' },
        paragraphs: {
          es: [
            'Los contratos extensos fallan cuando confunden estabilidad con inmovilidad. Un marco previsible puede incluir instancias periódicas para revisar inversiones futuras, indicadores y condiciones que cambiaron de manera comprobable.',
            'La regla central es definir desde el inicio qué se puede ajustar, quién aporta la evidencia y cómo se resuelve una diferencia. Así, una revisión técnica no se convierte automáticamente en una renegociación política.',
            'Una concesión sostenible no es la que niega que el contexto cambiará. Es la que mantiene los objetivos de servicio y de interés público aun cuando deba recalibrar los medios para alcanzarlos.',
          ],
          en: [
            'Long contracts fail when they confuse stability with immobility. A predictable framework can include periodic moments to review future investment, indicators and conditions that have demonstrably changed.',
            'The core rule is to define from the start what can be adjusted, who provides the evidence and how disagreement is resolved. In that way, a technical review does not automatically become a political renegotiation.',
            'A sustainable concession is not one that denies the context will change. It is one that preserves service and public-interest objectives even when it must recalibrate the means to achieve them.',
          ],
        },
      },
      {
        heading: { es: 'La información es una obligación de servicio público', en: 'Information is a public-service obligation' },
        paragraphs: {
          es: [
            'Una autoridad no puede regular lo que no ve. El contrato debe establecer qué datos operativos, financieros, ambientales y de mantenimiento recibe, con qué periodicidad, formato y nivel de trazabilidad.',
            'No se trata de cargar al operador con reportes que nadie consulta. Se trata de construir un sistema de supervisión útil para anticipar desvíos, validar inversiones y explicar a los usuarios cómo evoluciona el servicio.',
            'La calidad de los datos también reduce asimetrías en una eventual revisión contractual. Una discusión basada en evidencia es más rápida y menos costosa que una disputa basada en percepciones.',
          ],
          en: [
            'An authority cannot regulate what it cannot see. The contract should establish which operating, financial, environmental and maintenance data it receives, at what frequency, in which format and with what level of traceability.',
            'This is not about burdening the operator with reports nobody reads. It is about building a supervisory system that anticipates deviations, validates investment and explains to users how service is evolving.',
            'Data quality also reduces asymmetries in a future contract review. A discussion based on evidence is faster and less costly than a dispute based on perceptions.',
          ],
        },
      },
      {
        heading: { es: 'Tarifas y niveles de servicio deben conversar', en: 'Tariffs and service levels must speak to each other' },
        paragraphs: {
          es: [
            'Una tarifa desconectada del servicio crea incentivos equivocados. Si el ingreso del operador no refleja disponibilidad, productividad o confiabilidad, mejorar la experiencia del usuario puede quedar relegado frente a objetivos de corto plazo.',
            'Los mecanismos no tienen que ser complejos para funcionar. Una tarifa base puede convivir con premios por metas verificadas y descuentos o penalidades ante desvíos relevantes. Lo esencial es que las reglas sean transparentes y auditables.',
            'La finalidad no es castigar al concesionario, sino hacer que el beneficio económico de operar mejor coincida con el beneficio que reciben el puerto y sus usuarios.',
          ],
          en: [
            'A tariff disconnected from service creates the wrong incentives. If operator revenue does not reflect availability, productivity or reliability, improving the user experience may fall behind short-term objectives.',
            'Mechanisms do not need to be complex to work. A base tariff can coexist with rewards for verified targets and discounts or penalties for material deviations. What matters is that the rules are transparent and auditable.',
            'The purpose is not to punish the concessionaire, but to make the economic benefit of operating better align with the benefit received by the port and its users.',
          ],
        },
      },
      {
        heading: { es: 'La transición de salida se diseña desde el primer día', en: 'The handback transition is designed from day one' },
        paragraphs: {
          es: [
            'El final de la concesión parece lejano cuando se firma el contrato, pero es entonces cuando deben definirse los estándares de reversión. El Estado necesita saber qué activos recibe, en qué condición, con qué documentación y bajo qué continuidad operativa.',
            'Una política de mantenimiento verificable, un registro de activos actualizado y auditorías programadas protegen tanto al concedente como al operador. Evitan que el último tramo del contrato se transforme en una discusión sobre deterioro acumulado.',
            'Diseñar bien la salida también mejora la entrada: obliga a que las decisiones de inversión consideren el ciclo completo del activo y no solo la rentabilidad del período concesionado.',
          ],
          en: [
            'The end of a concession appears distant when the contract is signed, but that is when handback standards should be defined. The State needs to know which assets it receives, in what condition, with what documentation and under what operating continuity.',
            'A verifiable maintenance policy, current asset register and scheduled audits protect both grantor and operator. They prevent the final contract period from becoming an argument over accumulated deterioration.',
            'Designing the exit well also improves the entry: it requires investment decisions to consider the full asset cycle rather than only returns during the concession term.',
          ],
        },
      },
      {
        heading: { es: 'La licitación empieza antes de publicar el pliego', en: 'The tender begins before documents are published' },
        paragraphs: {
          es: [
            'La calidad de las ofertas depende del trabajo previo: estudios de demanda consistentes, datos ordenados, definición de riesgos y un proceso de consulta que permita corregir ambigüedades sin alterar la igualdad entre participantes.',
            'Una interacción de mercado bien gobernada ayuda a entender qué estructura es financiable y qué requisitos pueden expulsar competencia sin mejorar la protección pública. Escuchar no implica delegar la decisión; implica diseñar con información suficiente.',
            'Cuando el pliego llega al mercado con una lógica económica clara, atrae mejores operadores y reduce la probabilidad de que el contrato deba corregirse apenas comienza a ejecutarse.',
          ],
          en: [
            'Offer quality depends on prior work: consistent demand studies, organised data, risk definition and a consultation process that can correct ambiguity without changing equal treatment among participants.',
            'Well-governed market engagement helps explain what structure is financeable and which requirements may deter competition without improving public protection. Listening does not mean delegating the decision; it means designing with sufficient information.',
            'When tender documents reach the market with clear economic logic, they attract better operators and reduce the likelihood that the contract must be corrected as soon as delivery begins.',
          ],
        },
      },
    ],
  },
  {
    slug: 'capacidad-terminal-friccion-operativa',
    category: { es: 'Operación', en: 'Operations' },
    axis: 'optimizacion-operativa-terminales',
    title: {
      es: 'La capacidad que no se ve: cómo la fricción operativa limita a una terminal',
      en: 'The capacity you cannot see: how operational friction limits a terminal',
    },
    excerpt: {
      es: 'Antes de ampliar un muelle o comprar equipos, una terminal debe entender dónde se pierden horas, movimientos y confiabilidad. Muchas veces la capacidad más valiosa ya está instalada.',
      en: 'Before expanding a berth or buying equipment, a terminal needs to understand where it loses hours, moves and reliability. Often its most valuable capacity is already installed.',
    },
    author: 'Diego Salom',
    date: '2026-08-28',
    readingMinutes: 11,
    heroImage: '/assets/images/blog/puerto-invisible-mala-operacion.webp',
    tags: ['Operación', 'Terminales', 'Productividad'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: { es: 'La infraestructura marca un límite, pero no explica el desempeño', en: 'Infrastructure sets a limit, but does not explain performance' },
        paragraphs: {
          es: [
            'Dos terminales con muelles, grúas y patios comparables pueden entregar resultados radicalmente distintos. La diferencia no siempre está en el activo visible, sino en la coordinación diaria de personas, equipos, información y decisiones.',
            'La capacidad nominal describe lo que una terminal podría hacer en condiciones ideales. La capacidad efectiva muestra lo que realmente puede prometer con regularidad. Entre ambas hay esperas, reprocesos, indisponibilidades y variabilidad que rara vez aparecen en una presentación comercial.',
            'Por eso la pregunta previa a una inversión no es solo cuánto equipo falta. Es cuánta capacidad instalada no llega al usuario por fricción operativa.',
          ],
          en: [
            'Two terminals with comparable berths, cranes and yards can deliver radically different results. The difference is not always in the visible asset, but in the daily coordination of people, equipment, information and decisions.',
            'Nominal capacity describes what a terminal could do under ideal conditions. Effective capacity shows what it can reliably promise. Between the two are waiting time, rework, unavailability and variability that rarely appear in a commercial presentation.',
            'That is why the question before an investment is not only how much equipment is missing. It is how much installed capacity does not reach the customer because of operational friction.',
          ],
        },
      },
      {
        heading: { es: 'Los promedios esconden dónde se pierde el día', en: 'Averages hide where the day is lost' },
        paragraphs: {
          es: [
            'Un promedio aceptable de movimientos por hora puede convivir con turnos muy inestables. Para una naviera o un cargador, la previsibilidad vale tanto como el promedio: una operación rápida una vez no compensa una demora inesperada en la siguiente escala.',
            'El diagnóstico debe desagregar el ciclo completo, desde la planificación de arribo hasta la salida de la carga. Espera de atraque, preparación documental, asignación de equipos, movimientos de patio, inspecciones y gate son partes de una misma experiencia, no silos independientes.',
            'Cuando se observa esa secuencia, suele aparecer que el cuello de botella se desplaza durante el día. Resolverlo exige datos de detalle y observación en campo, no solo un tablero mensual.',
          ],
          en: [
            'An acceptable average number of moves per hour can coexist with highly unstable shifts. For a shipping line or shipper, predictability matters as much as the average: a fast operation once does not compensate for an unexpected delay on the next call.',
            'A diagnosis should break down the full cycle, from arrival planning through cargo exit. Berth waiting, document preparation, equipment assignment, yard moves, inspections and the gate are parts of one experience, not separate silos.',
            'When that sequence is observed, the bottleneck often emerges in different places during the day. Solving it requires granular data and field observation, not only a monthly dashboard.',
          ],
        },
      },
      {
        heading: { es: 'Primero flujo y reglas de trabajo; después CAPEX', en: 'Flow and work rules first; CAPEX second' },
        paragraphs: {
          es: [
            'Muchas mejoras de capacidad empiezan con decisiones de bajo costo: anticipar ventanas de arribo, preparar la carga antes del turno, alinear los criterios de prioridad y coordinar mantenimiento con la programación operativa.',
            'Estos cambios no reemplazan una ampliación cuando la demanda la justifica. Sí permiten definirla mejor. Una terminal que conoce sus pérdidas operativas puede dimensionar el nuevo equipo o la nueva superficie según una necesidad real, y no según una congestión que tal vez era evitable.',
            'La secuencia importa porque cada inversión grande hereda los procesos existentes. Si el flujo es débil, el nuevo activo puede amplificar el problema en lugar de resolverlo.',
          ],
          en: [
            'Many capacity improvements begin with low-cost decisions: anticipating arrival windows, preparing cargo before the shift, aligning priority rules and coordinating maintenance with operating schedules.',
            'These changes do not replace an expansion when demand justifies it. They do make it better defined. A terminal that understands its operational losses can size new equipment or space around a real need, rather than congestion that may have been avoidable.',
            'Sequence matters because every major investment inherits existing processes. If flow is weak, the new asset can amplify the problem rather than solve it.',
          ],
        },
      },
      {
        heading: { es: 'Gestionar la mejora como una rutina', en: 'Managing improvement as a routine' },
        paragraphs: {
          es: [
            'La optimización no termina con un informe. Necesita un tablero operativo que conecte metas con responsables y una cadencia corta para revisar desvíos. Los indicadores deben permitir detectar una tendencia antes de que se convierta en una crisis de servicio.',
            'También requiere que las áreas compartan una medida de éxito. Cuando muelle, patio, gate y mantenimiento optimizan métricas aisladas, el sistema completo pierde fluidez. El objetivo común es el flujo confiable de la carga y del buque.',
            'La capacidad invisible se recupera cuando la terminal aprende a transformar datos y experiencia de campo en decisiones repetibles. Esa disciplina suele ser la inversión más rentable antes de construir el siguiente metro de muelle.',
          ],
          en: [
            'Optimisation does not end with a report. It needs an operating dashboard connecting targets with owners and a short cadence to review deviations. Indicators should reveal a trend before it becomes a service crisis.',
            'It also requires areas to share one measure of success. When berth, yard, gate and maintenance optimise isolated metrics, the whole system loses flow. The common goal is reliable movement of cargo and vessels.',
            'Invisible capacity is recovered when a terminal learns to turn data and field experience into repeatable decisions. That discipline is often the most profitable investment before building the next metre of berth.',
          ],
        },
      },
      {
        heading: { es: 'El patio es donde una demora se multiplica', en: 'The yard is where a delay multiplies' },
        paragraphs: {
          es: [
            'El patio concentra decisiones que afectan a toda la terminal. Una ubicación mal asignada puede generar movimientos adicionales, bloquear equipos, aumentar el tiempo de búsqueda y trasladar la demora al gate o al muelle.',
            'La gestión eficaz del patio combina reglas simples de apilamiento, visibilidad de inventario y una disciplina para liberar espacio antes de que se convierta en una urgencia. El objetivo no es ocupar cada metro, sino preservar fluidez para las operaciones que vienen.',
            'Revisar la utilización por zonas, por tipo de carga y por hora del día revela restricciones que una ocupación promedio nunca muestra.',
          ],
          en: [
            'The yard concentrates decisions that affect the entire terminal. A poorly assigned location can create extra moves, block equipment, increase search time and transfer delay to the gate or berth.',
            'Effective yard management combines simple stacking rules, inventory visibility and discipline to release space before it becomes urgent. The goal is not to occupy every metre, but to preserve flow for the operations ahead.',
            'Reviewing utilisation by zone, cargo type and hour of day reveals constraints that an average occupancy figure never shows.',
          ],
        },
      },
      {
        heading: { es: 'La planificación diaria empieza antes de que llegue el buque', en: 'Daily planning begins before the vessel arrives' },
        paragraphs: {
          es: [
            'La productividad del turno se prepara con anticipación: información de escala confiable, secuencia de operaciones acordada, equipos disponibles, personal asignado y carga con documentación resuelta. Cuando estas decisiones se toman al inicio del turno, la terminal ya opera a la defensiva.',
            'Una ventana de planificación de varios días no elimina la variabilidad, pero permite absorberla. También mejora el diálogo con navieras, transportistas, aduana y depósitos, que necesitan saber qué condiciones encontrarán.',
            'La planificación no debe ser una reunión extensa. Debe producir compromisos concretos, visibles y revisables para quienes están ejecutando la operación.',
          ],
          en: [
            'Shift productivity is prepared in advance: reliable call information, agreed operating sequence, available equipment, assigned staff and cargo with documentation resolved. When these decisions are made at shift start, the terminal is already operating defensively.',
            'A planning window of several days does not eliminate variability, but it makes it manageable. It also improves dialogue with shipping lines, carriers, customs and depots, all of which need to know the conditions they will encounter.',
            'Planning should not be a long meeting. It should produce concrete, visible and reviewable commitments for the people executing the operation.',
          ],
        },
      },
      {
        heading: { es: 'Mantenimiento y operación no son agendas separadas', en: 'Maintenance and operations are not separate agendas' },
        paragraphs: {
          es: [
            'Una grúa o un equipo móvil fuera de servicio en el momento equivocado tiene un efecto que supera su propia indisponibilidad: cambia secuencias, congestiona el patio y obliga a rehacer planes. La confiabilidad es una variable comercial, no solo técnica.',
            'La planificación de mantenimiento debe usar los datos de operación para reservar ventanas realistas y priorizar los equipos que sostienen el flujo crítico. A su vez, operaciones necesita conocer el estado real de los activos para no construir planes imposibles.',
            'Compartir indicadores de disponibilidad, causas de detención y cumplimiento preventivo permite pasar de la reparación urgente a una gestión predecible del activo.',
          ],
          en: [
            'A crane or mobile unit unavailable at the wrong time has an effect beyond its own downtime: it changes sequences, congests the yard and forces plans to be redone. Reliability is a commercial variable, not only a technical one.',
            'Maintenance planning should use operating data to reserve realistic windows and prioritise equipment that supports critical flow. In turn, operations needs to know the real state of assets so it does not build impossible plans.',
            'Sharing availability indicators, causes of stoppage and preventive-compliance data enables a move from urgent repair to predictable asset management.',
          ],
        },
      },
      {
        heading: { es: 'Una mejora sostenible se mide en confiabilidad', en: 'Sustainable improvement is measured in reliability' },
        paragraphs: {
          es: [
            'La mejora no se consolida cuando un día sale excepcionalmente bien. Se consolida cuando la terminal puede repetir un estándar de servicio aun frente a variaciones razonables de demanda, clima o disponibilidad de recursos.',
            'Por eso el seguimiento debe combinar productividad con dispersión, cumplimiento de ventanas y causas de excepción. El equipo directivo necesita ver no solo cuánto se movió, sino cuán previsible fue el resultado y qué parte del sistema lo condicionó.',
            'La terminal competitiva no promete máximos teóricos. Construye una operación confiable que los usuarios puedan incorporar a sus propias decisiones logísticas.',
          ],
          en: [
            'Improvement is not embedded when one day goes exceptionally well. It is embedded when the terminal can repeat a service standard even under reasonable variation in demand, weather or resource availability.',
            'That is why monitoring should combine productivity with dispersion, window compliance and causes of exception. Leadership needs to see not only how much moved, but how predictable the result was and which part of the system constrained it.',
            'A competitive terminal does not promise theoretical peaks. It builds reliable operations that users can incorporate into their own logistics decisions.',
          ],
        },
      },
    ],
  },
]

// Las notas de referencia se conservan para reutilizarlas, pero no se publican.
export const blogPosts: BlogPost[] = publishedBlogPosts

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

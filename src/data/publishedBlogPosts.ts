import type { BlogPost } from './blogPosts'

export const publishedBlogPosts: BlogPost[] = [
  {
    slug: 'master-plans-portuarios-planificar-decidir',
    category: { es: 'Planificación', en: 'Planning' },
    axis: 'master-plans-portuarios',
    title: {
      es: 'Master plans portuarios: planificar para decidir, no para adivinar',
      en: 'Port master plans: planning to decide, not to guess',
    },
    excerpt: {
      es: 'Un master plan portuario no debería ser una apuesta sobre el futuro. Debería ser un sistema de decisiones que permita actuar hoy, preservar opciones y esperar señales antes de comprometer nuevas inversiones.',
      en: 'A port master plan should not be a bet on the future. It should be a decision system that supports action today, preserves options and waits for signals before committing further investment.',
    },
    author: 'Diego Salom',
    date: '2026-10-01',
    readingMinutes: 10,
    heroImage: '/assets/images/blog/master-plan-portuario-decision.webp',
    tags: ['Master plans', 'Planificación portuaria', 'Infraestructura', 'Resiliencia'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: { es: 'Escenarios en lugar de apuestas', en: 'Scenarios instead of bets' },
        paragraphs: {
          es: [
            'Los puertos toman decisiones que pueden condicionar su operación durante décadas, pero lo hacen en un entorno en el que la información cambia constantemente. Cambian los mercados, las cargas, las rutas comerciales, las tecnologías, los costos logísticos y las exigencias ambientales. Por eso, una proyección única de carga no debería convertirse en el eje de un master plan.',
            'El verdadero desafío no es acertar cuánto movimiento tendrá un puerto en 2045. Es construir un marco que permita tomar buenas decisiones cuando las condiciones reales del mercado comiencen a mostrar qué escenario se está materializando.',
            'Un master plan robusto necesita trabajar con escenarios diferentes: crecimiento, estancamiento, cambios en la composición de las cargas y transformaciones en las cadenas logísticas. Cada escenario debería traducirse en preguntas concretas: qué infraestructura resulta necesaria, qué superficie conviene preservar, qué inversiones pueden ejecutarse por etapas y qué decisiones deberían esperar evidencia suficiente.',
            'Trabajar con escenarios no significa postergar las inversiones. Significa establecer una secuencia: primero, aquellas inversiones que sostienen la conectividad, la seguridad, la resiliencia y la capacidad operativa; después, las expansiones vinculadas con una demanda que efectivamente se esté verificando.',
          ],
          en: [
            'Ports make decisions that can shape operations for decades, yet they do so while markets, cargo flows, trade routes, technologies, logistics costs and environmental requirements keep changing. A single cargo forecast should therefore not become the centre of a master plan.',
            'The real challenge is not guessing how much traffic a port will handle in 2045. It is building a framework that supports sound decisions when real market conditions begin to show which scenario is taking shape.',
            'A resilient master plan needs different scenarios: growth, stagnation, changes in cargo composition and transformations in logistics chains. Each scenario should become practical questions about necessary infrastructure, strategic land, phased investments and decisions that should wait for evidence.',
            'Working with scenarios does not mean postponing investment. It means sequencing it: first, investments that protect connectivity, safety, resilience and operating capacity; then, expansions linked to demand that is actually materialising.',
          ],
        },
      },
      {
        heading: { es: 'Del documento al sistema de decisiones', en: 'From document to decision system' },
        paragraphs: {
          es: [
            'Una de las principales debilidades de muchos master plans es que terminan convertidos en documentos de referencia, pero no necesariamente en herramientas de gestión. La diferencia está en los umbrales. En lugar de establecer que una nueva posición de atraque deberá construirse en determinado año, el plan puede definir qué condiciones deberán verificarse para activar esa decisión: determinado nivel de ocupación, aumento sostenido de la demanda, crecimiento de los tiempos de espera, restricciones de capacidad o cambios en la composición de las cargas.',
            'Los indicadores no necesitan ser numerosos. Necesitan ser útiles para decidir. Utilización de muelle, tiempos de espera, permanencia de la carga, disponibilidad de patio, confiabilidad de los accesos y evolución de cada segmento de mercado pueden convertirse en señales concretas para revisar una hipótesis o activar una inversión.',
          ],
          en: [
            'Many master plans become reference documents rather than management tools. The difference lies in triggers. Instead of stating that a new berth must be built in a certain year, the plan can define the conditions that activate the decision: utilisation, sustained demand growth, waiting times, capacity constraints or changes in cargo composition.',
            'Indicators do not need to be numerous. They need to support decisions. Berth utilisation, waiting times, cargo dwell time, yard availability, access reliability and market evolution can become practical signals for revising an assumption or activating an investment.',
          ],
        },
      },
      {
        heading: { es: 'Revisar el plan sin empezar de cero', en: 'Reviewing the plan without starting over' },
        paragraphs: {
          es: [
            'La incertidumbre no significa que un master plan deba modificarse permanentemente. Significa que debe existir una estructura de seguimiento capaz de contrastar las hipótesis originales con lo que efectivamente está ocurriendo. Eso requiere una gobernanza definida: indicadores, responsables, frecuencia de revisión y criterios para modificar la cartera de inversiones.',
            'La visión de largo plazo debe mantenerse estable en los accesos, el suelo estratégico, las condiciones de navegación, las áreas de expansión y la adaptación frente a riesgos climáticos. Las decisiones más reversibles deberían conservar margen para modificar su secuencia, escala o tecnología.',
            'Un buen master plan no elimina la incertidumbre. La incorpora dentro del proceso de decisión.',
          ],
          en: [
            'Uncertainty does not mean that a master plan must change constantly. It means that a monitoring structure must compare the original assumptions with what is actually happening. That requires indicators, responsibilities, review frequency and criteria for changing the investment portfolio.',
            'The long-term vision should remain stable in access, strategic land, navigation conditions, expansion areas and climate adaptation. More reversible decisions should retain room to change in sequence, scale or technology.',
            'A good master plan does not eliminate uncertainty. It incorporates it into the decision-making process.',
          ],
        },
      },
      {
        heading: { es: 'El límite del puerto muchas veces está afuera', en: 'The port boundary often lies outside the port' },
        paragraphs: {
          es: [
            'Un muelle eficiente no puede compensar indefinidamente un acceso vial congestionado, una conexión ferroviaria incompleta o una interfaz urbana que genera conflictos. El puerto no funciona como una infraestructura aislada: es un nodo dentro de una red logística.',
            'Por eso, un master plan portuario debería involucrar también a municipios, organismos viales, operadores ferroviarios, autoridades aduaneras, terminales, transportistas y desarrolladores logísticos. Donde el puerto no tiene capacidad de decisión directa, necesita capacidad de coordinación.',
            'La planificación deja así de concentrarse exclusivamente dentro del perímetro portuario y comienza a considerar el sistema logístico del que el puerto forma parte.',
          ],
          en: [
            'An efficient berth cannot indefinitely compensate for a congested road connection, an incomplete rail link or an urban interface that creates conflict. A port is a node within a logistics network, not isolated infrastructure.',
            'A port master plan should therefore involve municipalities, road authorities, rail operators, customs, terminals, carriers and logistics developers. Where the port has no direct decision-making power, it needs coordination capacity.',
            'Planning then moves beyond the port perimeter and considers the logistics system the port belongs to.',
          ],
        },
      },
      {
        heading: { es: 'De la visión a una cartera ejecutable', en: 'From vision to an executable portfolio' },
        paragraphs: {
          es: [
            'El master plan adquiere verdadero valor cuando puede traducirse en una cartera de proyectos. Cada iniciativa debería tener un propósito claro, un responsable, dependencias identificadas, una estimación de costos, posibles fuentes de financiamiento y una condición concreta que justifique su inicio.',
            'Un master plan no debería ser una apuesta sobre cómo será el puerto dentro de veinte años. Debería ser un sistema que permita decidir qué hacer hoy, qué preservar para mañana y qué señales esperar antes de comprometer el siguiente nivel de inversión.',
            'Porque el futuro del comercio no está bajo control del puerto. Pero sí está bajo su responsabilidad estar preparado para responder cuando ese futuro empiece a hacerse visible.',
          ],
          en: [
            'A master plan creates real value when it becomes an executable project portfolio. Each initiative should have a clear purpose, an owner, identified dependencies, estimated costs, potential funding sources and a condition that justifies starting it.',
            'A master plan should not be a bet on what the port will look like twenty years from now. It should be a system for deciding what to do today, what to preserve for tomorrow and which signals to wait for before committing further investment.',
            'The future of trade is not under the port’s control. But being prepared to respond when that future becomes visible is its responsibility.',
          ],
        },
      },
    ],
  },
  {
    slug: 'que-hace-competitivo-a-un-puerto',
    category: { es: 'Optimización operativa de terminales', en: 'Terminal operational optimization' },
    axis: 'optimizacion-operativa-terminales',
    title: {
      es: '¿Qué hace competitivo a un puerto? Mucho más que infraestructura',
      en: 'What makes a port competitive? Much more than infrastructure',
    },
    excerpt: {
      es: 'La competitividad portuaria no depende únicamente de cuánto puede crecer un puerto, sino de cómo funciona el sistema que lo conecta con sus usuarios, su territorio y las cadenas logísticas.',
      en: 'Port competitiveness depends not only on how much a port can grow, but on how the system connecting it to its users, its region and logistics chains performs.',
    },
    author: 'Diego Salom',
    date: '2026-10-08',
    readingMinutes: 6,
    heroImage: '/assets/images/blog/02_2026.webp',
    tags: ['Competitividad portuaria', 'Operaciones de terminales', 'Productividad', 'Logística'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: { es: 'La competitividad es un problema de sistema', en: 'Competitiveness is a system-wide challenge' },
        paragraphs: {
          es: [
            'Cuando se habla de competitividad portuaria, la conversación suele empezar por la infraestructura: nuevos muelles, mayor profundidad, grúas más modernas o ampliaciones de terminales. Son capacidades importantes. Pero, por sí solas, no garantizan que un puerto sea más competitivo.',
            'Un puerto puede contar con instalaciones adecuadas y, aun así, enfrentar demoras, costos elevados, conexiones terrestres ineficientes, reglas poco claras o dificultades para coordinar a los actores que participan en la operación. La competitividad se define en la interacción de todos esos elementos. Es, ante todo, un problema de sistema.',
          ],
          en: [
            'Discussions about port competitiveness often begin with infrastructure: new berths, greater depth, more modern cranes or terminal expansions. These are important capabilities. But on their own, they do not guarantee a more competitive port.',
            'A port may have suitable facilities and still face delays, high costs, inefficient land connections, unclear rules or difficulty coordinating the parties involved in operations. Competitiveness is shaped by how all these elements interact. Above all, it is a system-wide challenge.',
          ],
        },
      },
      {
        heading: { es: 'La infraestructura es una condición, no el resultado', en: 'Infrastructure is a prerequisite, not the outcome' },
        paragraphs: {
          es: [
            'La infraestructura permite operar, recibir buques y mover carga. La pregunta estratégica es si esa capacidad se traduce en un servicio confiable, eficiente y valioso para quienes utilizan el puerto.',
            'Para responderla, hace falta mirar más allá de los activos físicos. ¿Qué tan productivas son las operaciones? ¿Cuánto tiempo permanece la carga en el puerto? ¿Qué costos afrontan los usuarios? ¿Cómo se coordinan terminales, autoridades, transportistas y organismos públicos? ¿Qué tan predecibles son las reglas, las tarifas y los tiempos?',
            'La respuesta no suele estar en una única obra ni en un indicador aislado. Aparece al observar las conexiones —y los cuellos de botella— entre las partes del sistema.',
          ],
          en: [
            'Infrastructure makes it possible to operate, receive vessels and move cargo. The strategic question is whether that capacity translates into a reliable, efficient and valuable service for port users.',
            'Answering that requires looking beyond physical assets. How productive are operations? How long does cargo stay in port? What costs do users face? How well do terminals, authorities, carriers and public agencies coordinate? How predictable are the rules, tariffs and timelines?',
            'The answer is rarely found in a single project or isolated indicator. It emerges by examining the connections — and bottlenecks — between parts of the system.',
          ],
        },
      },
      {
        heading: { es: 'Productividad y costos: el desempeño cotidiano', en: 'Productivity and costs: day-to-day performance' },
        paragraphs: {
          es: [
            'La productividad portuaria depende de cómo se organizan los procesos, se utilizan los equipos y se coordinan las operaciones. Una mejora en la capacidad instalada puede perder impacto si persisten demoras en los accesos, baja utilización de los recursos o procedimientos que generan esperas.',
            'Esas fricciones repercuten en los costos y en la experiencia de los usuarios. Por eso, antes de concluir que se necesita más infraestructura, conviene entender cómo se aprovecha la existente, dónde se producen las pérdidas de tiempo y qué cambios operativos podrían mejorar el desempeño.',
            'Esto no significa que las inversiones sean innecesarias. Significa que deben responder a un diagnóstico: qué restricción resuelven, qué beneficios se esperan y cómo se integran con las demás capacidades del puerto.',
          ],
          en: [
            'Port productivity depends on how processes are organised, equipment is used and operations are coordinated. Added capacity can have less impact if access delays, underused resources or procedures that create waiting times persist.',
            'These frictions affect costs and the user experience. So before concluding that more infrastructure is needed, it is worth understanding how existing capacity is used, where time is lost and which operational changes could improve performance.',
            'This does not mean investment is unnecessary. It means investment should respond to a diagnosis: which constraint it addresses, what benefits are expected and how it fits with the port’s other capabilities.',
          ],
        },
      },
      {
        heading: { es: 'Conectividad y hinterland: el puerto no termina en el muelle', en: 'Connectivity and hinterland: the port does not end at the quay' },
        paragraphs: {
          es: [
            'La competitividad portuaria también se construye tierra adentro. La conexión con los centros de producción y consumo, la disponibilidad de transporte, la coordinación de los accesos y la fluidez de los intercambios determinan qué tan bien se integra el puerto con las cadenas logísticas.',
            'Un puerto eficiente en el muelle puede perder ventajas si la carga encuentra demoras o costos adicionales al entrar o salir. Del mismo modo, la planificación portuaria necesita considerar las necesidades del hinterland y su evolución: las actividades productivas, los flujos de carga y las alternativas de conexión que condicionan la demanda actual y futura.',
          ],
          en: [
            'Port competitiveness is also built inland. Connections to production and consumption centres, transport availability, access coordination and the smooth flow of exchanges determine how well a port fits into logistics chains.',
            'An efficient quay can lose its advantage if cargo faces delays or extra costs on the way in or out. Port planning must also account for the hinterland and how it evolves: productive activities, cargo flows and connection options that shape present and future demand.',
          ],
        },
      },
      {
        heading: { es: 'Gobernanza y tarifas: reglas que también producen competitividad', en: 'Governance and tariffs: rules also shape competitiveness' },
        paragraphs: {
          es: [
            'La forma en que se toman las decisiones incide directamente en el desempeño. Una gobernanza clara ayuda a coordinar responsabilidades, ordenar prioridades y dar previsibilidad a las inversiones y operaciones. Cuando las funciones se superponen o las decisiones no se articulan, los costos de coordinación pueden trasladarse a todo el sistema.',
            'Las tarifas y los marcos regulatorios también forman parte de esa ecuación. Deben ser comprensibles, consistentes con los servicios que se prestan y compatibles con objetivos de eficiencia y desarrollo. Su diseño requiere considerar los incentivos que generan para los operadores y usuarios, además de sus efectos sobre la sostenibilidad económica del puerto.',
          ],
          en: [
            'How decisions are made has a direct impact on performance. Clear governance helps coordinate responsibilities, set priorities and make investment and operations more predictable. When roles overlap or decisions are not aligned, coordination costs can spread throughout the system.',
            'Tariffs and regulatory frameworks are also part of the equation. They should be understandable, consistent with the services provided and compatible with efficiency and development goals. Their design needs to account for the incentives they create for operators and users, as well as their effects on the port’s financial sustainability.',
          ],
        },
      },
      {
        heading: { es: 'La confiabilidad convierte capacidad en valor', en: 'Reliability turns capacity into value' },
        paragraphs: {
          es: [
            'Para las cadenas logísticas, no alcanza con que un puerto pueda operar: importa que pueda hacerlo de manera previsible. La confiabilidad se expresa en la estabilidad de los tiempos, la continuidad del servicio, la transparencia de la información y la capacidad de responder ante cambios o interrupciones.',
            'Esa confianza no surge de una sola medida. Es el resultado de procesos bien diseñados, coordinación institucional, información útil y decisiones que se sostienen en el tiempo.',
          ],
          en: [
            'For logistics chains, it is not enough for a port to be able to operate: it must do so predictably. Reliability is reflected in stable timelines, service continuity, transparent information and the ability to respond to change or disruption.',
            'That confidence does not come from a single measure. It results from well-designed processes, institutional coordination, useful information and decisions sustained over time.',
          ],
        },
      },
      {
        heading: { es: 'Pensar el sistema para poder implementarlo', en: 'Understand the system to make change happen' },
        paragraphs: {
          es: [
            'Mejorar la competitividad requiere conectar diagnóstico y ejecución. Primero, comprender cómo funciona el puerto en su contexto: sus operaciones, costos, conexiones, reglas y prioridades. Después, identificar las oportunidades con mayor impacto, ordenar las decisiones y definir una hoja de ruta con etapas, responsables, inversiones y riesgos.',
            'Ese enfoque permite comparar alternativas con mayor claridad: optimizar procesos, ajustar mecanismos de coordinación, revisar marcos tarifarios, fortalecer conexiones o desarrollar nueva infraestructura. Cada puerto requiere respuestas acordes con su realidad institucional y operativa; no hay una solución única que pueda trasladarse sin adaptación.',
            'En DOMINUS entendemos el desarrollo portuario desde esa mirada integral. Acompañamos a autoridades y operadores para transformar el análisis en decisiones aplicables, con una visión que articula oficio portuario, criterio local y orientación a la implementación.',
            'La pregunta, entonces, no es solo cuánto puede crecer un puerto. También es cómo puede funcionar mejor, conectarse mejor y ofrecer un servicio más confiable. Ahí comienza una estrategia de competitividad portuaria.',
            'Conocé cómo trabajamos en DOMINUS.',
          ],
          en: [
            'Improving competitiveness means connecting diagnosis with execution. First, understand how the port works in its context: its operations, costs, connections, rules and priorities. Then identify the highest-impact opportunities, organise decisions and define a roadmap with stages, owners, investments and risks.',
            'This approach makes it easier to compare options: improve processes, adjust coordination mechanisms, review tariff frameworks, strengthen connections or develop new infrastructure. Each port needs responses suited to its institutional and operational reality; no single solution can be transferred without adaptation.',
            'At DOMINUS, we approach port development from this integrated perspective. We support authorities and operators in turning analysis into actionable decisions, combining port expertise, local insight and a focus on implementation.',
            'The question, then, is not only how much a port can grow. It is also how it can operate better, connect better and provide a more reliable service. That is where a port competitiveness strategy begins.',
            'Learn more about how we work at DOMINUS.',
          ],
        },
      },
    ],
  },
]

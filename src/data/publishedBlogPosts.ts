import type { BlogPost } from './blogPosts'

export const publishedBlogPosts: BlogPost[] = [
  {
    slug: 'del-puerto-digital-al-puerto-inteligente',
    category: { es: 'Transformación digital', en: 'Digital transformation' },
    axis: 'transformacion-digital-pcs',
    title: {
      es: 'Del puerto digital al puerto inteligente: qué significa realmente digitalizar una comunidad portuaria',
      en: 'From digital port to smart port: what it really means to digitalize a port community',
    },
    excerpt: {
      es: 'Digitalizar un puerto no es incorporar tecnología: es decidir cómo se coordinan las personas, las instituciones y la información que hacen posible la operación.',
      en: 'Digitalizing a port is not about adding technology: it is about deciding how to coordinate the people, institutions and information that make operations possible.',
    },
    author: 'Diego Salom',
    date: '2026-10-28',
    readingMinutes: 10,
    heroImage: '/assets/images/blog/04_2026.jpg',
    tags: ['Transformación digital', 'PCS', 'TOS', 'Puertos inteligentes'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: {
          es: 'Una conversación que suele empezar por el lugar equivocado',
          en: 'A conversation that often starts in the wrong place',
        },
        paragraphs: {
          es: [
            'Cuando se habla de modernizar un puerto, la conversación casi siempre arranca por la herramienta: qué sistema comprar, qué plataforma implementar, qué tecnología incorporar. Son preguntas comprensibles, pero llegan demasiado pronto.',
            'Un puerto no es una terminal ni un software. Es una comunidad de actores —autoridad portuaria, terminales, navieras, agentes, transportistas, despachantes, aduana y organismos de control— que dependen unos de otros para que una carga se mueva. Digitalizar esa comunidad significa, ante todo, cambiar la forma en que esos actores comparten información y toman decisiones. La tecnología es el medio. El resultado que importa es un sistema que funcione con menos fricción, más previsibilidad y reglas más claras.',
          ],
          en: [
            'When people talk about modernizing a port, the conversation almost always starts with the tool: which system to buy, which platform to implement, which technology to adopt. These are understandable questions, but they come too early.',
            'A port is neither a terminal nor a piece of software. It is a community of stakeholders—port authorities, terminals, shipping lines, agents, carriers, customs brokers, customs and control agencies—who depend on one another to move cargo. Digitalizing that community means, first and foremost, changing how those stakeholders share information and make decisions. Technology is the means. What matters is a system that works with less friction, greater predictability and clearer rules.',
          ],
        },
      },
      {
        heading: {
          es: 'Tres capas que se complementan, no se sustituyen',
          en: 'Three layers that complement rather than replace one another',
        },
        paragraphs: {
          es: [
            'El ecosistema digital de un puerto suele describirse con siglas que a menudo se confunden. Conviene distinguirlas, porque cada una resuelve un problema distinto.',
            'El TOS (Terminal Operating System) es el sistema de gestión de la operación dentro de la terminal: planificación del buque y del patio, control de equipos, gestión de entregas y recepciones. Ordena lo que ocurre puertas adentro. Una terminal puede tener un TOS excelente y, aun así, depender de papeles, llamadas y planillas para coordinarse con quienes están afuera.',
            'El PCS (Port Community System) es la plataforma que conecta a la comunidad portuaria. Su función es el intercambio ordenado de información entre actores que de otro modo se comunican de forma bilateral y fragmentada: una misma información cargada una sola vez, disponible para quienes la necesitan, con estados y eventos visibles para todos. Es la infraestructura de coordinación del puerto.',
            'La ventanilla única conecta a la comunidad con el Estado. Permite que operadores y usuarios presenten la información requerida por los distintos organismos de control a través de un único punto de entrada, en lugar de repetir trámites ante cada uno. Su valor no es solo tecnológico: obliga a revisar, armonizar y simplificar procedimientos que durante años se superpusieron.',
            'Estas tres capas no compiten entre sí. Se complementan, y su valor aparece cuando están pensadas como parte de una misma arquitectura, con interfaces claras y datos que circulan sin reingresos manuales.',
          ],
          en: [
            'A port’s digital ecosystem is often described using acronyms that are easily confused. It is worth distinguishing them, because each addresses a different problem.',
            'A TOS (Terminal Operating System) manages operations within the terminal: vessel and yard planning, equipment control, and delivery and receipt management. It organizes what happens inside the gates. A terminal can have an excellent TOS and still rely on paperwork, phone calls and spreadsheets to coordinate with those outside.',
            'A PCS (Port Community System) is the platform that connects the port community. It enables the structured exchange of information among stakeholders who would otherwise communicate bilaterally and in fragments: information entered once, available to those who need it, with statuses and events visible to everyone. It is the port’s coordination infrastructure.',
            'A single window connects the community with the state. It lets operators and users submit information required by different control agencies through one point of entry instead of repeating procedures with each agency. Its value is not only technological: it requires procedures that have overlapped for years to be reviewed, harmonized and simplified.',
            'These three layers do not compete. They complement one another, and their value emerges when they are designed as part of one architecture, with clear interfaces and data that flows without manual re-entry.',
          ],
        },
      },
      {
        heading: {
          es: 'Trazabilidad: saber qué pasa, cuándo y con quién',
          en: 'Traceability: knowing what happens, when and with whom',
        },
        paragraphs: {
          es: [
            'La trazabilidad suele presentarse como una función de seguimiento de la carga. Es más que eso: es la capacidad de reconstruir, con información confiable, qué ocurrió en cada etapa de un proceso, quién intervino y cuánto tiempo tomó.',
            'Ese registro tiene un valor enorme. Permite identificar dónde se generan las demoras, comparar el desempeño de distintas etapas, dar previsibilidad a los usuarios y fundamentar decisiones con datos y no con percepciones. Un puerto que no puede medir sus procesos difícilmente pueda mejorarlos; uno que los mide con información compartida puede discutir sus problemas con evidencia.',
            'Pero la trazabilidad solo es útil si los datos son consistentes. Eso exige definiciones comunes, eventos estandarizados y acuerdos sobre quién registra qué y en qué momento.',
          ],
          en: [
            'Traceability is often presented as a cargo-tracking feature. It is more than that: it is the ability to reconstruct, using reliable information, what happened at each stage of a process, who was involved and how long it took.',
            'That record is extremely valuable. It helps identify where delays occur, compare performance across stages, give users greater predictability and support decisions with data rather than perceptions. A port that cannot measure its processes is unlikely to improve them; one that measures them using shared information can discuss problems with evidence.',
            'But traceability is useful only when the data is consistent. That requires common definitions, standardized events and agreements about who records what and when.',
          ],
        },
      },
      {
        heading: {
          es: 'La integración de actores es un desafío institucional',
          en: 'Integrating stakeholders is an institutional challenge',
        },
        paragraphs: {
          es: [
            'La parte más difícil de digitalizar una comunidad portuaria rara vez es técnica. Es lograr que actores con intereses, ritmos y capacidades diferentes acuerden cómo compartir información.',
            'Aparecen preguntas que ninguna plataforma responde por sí sola. ¿Quién lidera el proyecto y con qué legitimidad? ¿Quién es el propietario de los datos y quién puede acceder a ellos? ¿Cómo se protege la información comercial sensible? ¿Cómo se financia y sostiene el sistema en el tiempo? ¿Qué pasa con los actores con menor capacidad tecnológica? ¿Qué procesos se rediseñan, y cuáles simplemente se trasladan a una pantalla?',
            'Digitalizar un proceso ineficiente solo produce un proceso ineficiente más rápido. Por eso los proyectos más sólidos empiezan por entender y simplificar el flujo, y recién después lo traducen a un sistema.',
          ],
          en: [
            'The hardest part of digitalizing a port community is rarely technical. It is getting stakeholders with different interests, timelines and capabilities to agree on how to share information.',
            'Questions arise that no platform can answer on its own. Who leads the project, and with what legitimacy? Who owns the data, and who can access it? How is commercially sensitive information protected? How is the system funded and maintained over time? What happens to stakeholders with less technological capacity? Which processes are redesigned, and which are simply moved onto a screen?',
            'Digitalizing an inefficient process only makes it an inefficient process that runs faster. That is why the strongest projects begin by understanding and simplifying the workflow, and only then translate it into a system.',
          ],
        },
      },
      {
        heading: {
          es: 'Sin gobernanza, la tecnología no escala',
          en: 'Without governance, technology cannot scale',
        },
        paragraphs: {
          es: [
            'Detrás de cada plataforma portuaria que funciona hay una decisión de gobernanza: un esquema claro de roles, un modelo de neutralidad, reglas de uso, criterios de acceso a la información y un mecanismo para resolver diferencias entre los participantes.',
            'Sin ese marco, los sistemas tienden a repetir la fragmentación que querían resolver: plataformas paralelas, datos duplicados, estándares incompatibles y adopción parcial. Con él, la tecnología se vuelve una infraestructura compartida y no un conjunto de soluciones aisladas.',
            'Por eso la transformación digital portuaria es, en el fondo, una agenda de gobernanza. Define quién coordina, bajo qué reglas y con qué incentivos; y recién entonces qué herramientas lo sostienen.',
          ],
          en: [
            'Behind every port platform that works is a governance decision: a clear allocation of roles, a neutrality model, rules for use, criteria for information access and a mechanism for resolving disagreements among participants.',
            'Without that framework, systems tend to reproduce the fragmentation they were meant to solve: parallel platforms, duplicated data, incompatible standards and partial adoption. With it, technology becomes shared infrastructure rather than a collection of isolated solutions.',
            'That is why port digital transformation is, at its core, a governance agenda. It defines who coordinates, under which rules and with what incentives—and only then which tools will support it.',
          ],
        },
      },
      {
        heading: {
          es: 'Medir para saber si funcionó',
          en: 'Measure to know whether it worked',
        },
        paragraphs: {
          es: [
            'Una iniciativa digital se justifica por lo que cambia en la operación, no por lo que incorpora. Los indicadores deberían estar definidos desde el inicio: tiempos de permanencia de la carga, tiempos de trámite, tiempos de atención en accesos, previsibilidad de los procesos, costos para los usuarios, nivel de adopción por parte de los actores.',
            'Esa disciplina evita uno de los riesgos más frecuentes: proyectos que se evalúan por su grado de avance técnico y no por su efecto sobre la eficiencia del puerto.',
          ],
          en: [
            'A digital initiative is justified by what it changes in operations, not by what it adds. Its indicators should be defined from the outset: cargo dwell times, processing times, gate service times, process predictability, user costs and stakeholder adoption.',
            'That discipline helps avoid one of the most common risks: projects assessed by their technical progress rather than their impact on port efficiency.',
          ],
        },
      },
      {
        heading: {
          es: 'De la digitalización a un puerto inteligente',
          en: 'From digitalization to a smart port',
        },
        paragraphs: {
          es: [
            'Se suele decir que un puerto es «inteligente» por la cantidad de tecnología que utiliza. Nuestra mirada es otra. Un puerto inteligente es aquel que cuenta con información confiable, compartida y a tiempo, y que la usa para coordinar mejor, anticipar problemas y decidir con mayor criterio.',
            'La inteligencia no está en el dispositivo: está en la calidad de las decisiones que el sistema permite tomar. Y esas decisiones dependen de procesos bien diseñados, datos consistentes y actores que confían en compartirlos. La innovación tecnológica puede potenciar ese esquema, pero no lo reemplaza.',
          ],
          en: [
            'A port is often called “smart” because of how much technology it uses. We see it differently. A smart port has reliable, timely, shared information and uses it to coordinate better, anticipate problems and make more informed decisions.',
            'Intelligence is not in the device; it is in the quality of the decisions the system enables. Those decisions depend on well-designed processes, consistent data and stakeholders who trust one another enough to share it. Technological innovation can strengthen that model, but it cannot replace it.',
          ],
        },
      },
      {
        heading: {
          es: 'Cómo lo abordamos en DOMINUS',
          en: 'How we approach it at DOMINUS',
        },
        paragraphs: {
          es: [
            'En DOMINUS entendemos la transformación digital portuaria como un proyecto de sistema, no de producto. Acompañamos a autoridades y operadores a partir de un diagnóstico de procesos y actores, para definir qué problemas se quiere resolver, qué arquitectura de TOS, PCS y ventanilla única tiene sentido para cada realidad, qué modelo de gobernanza la sostiene y cómo se implementa por etapas, con responsables, inversiones, plazos y riesgos.',
            'No hay una receta única. Cada puerto tiene su estructura institucional, su nivel de madurez y su comunidad. Lo que sí es común es el punto de partida: antes de elegir una tecnología, conviene preguntarse qué decisiones se necesita mejorar y quiénes deben participar para lograrlo.',
            'El puerto digital es una etapa necesaria. El puerto inteligente es lo que ocurre cuando esa información se transforma, de manera sostenida, en mejor coordinación, mayor eficiencia y servicios más confiables.',
          ],
          en: [
            'At DOMINUS, we see port digital transformation as a systems project, not a product. We work with authorities and operators, starting with a diagnosis of processes and stakeholders, to define which problems need solving, which TOS, PCS and single-window architecture fits each context, what governance model will sustain it, and how to implement it in stages—with clear owners, investments, timelines and risks.',
            'There is no one-size-fits-all formula. Every port has its own institutional structure, level of maturity and community. What they share is the right starting point: before choosing a technology, ask which decisions need to improve and who must be involved to make that happen.',
            'The digital port is a necessary step. A smart port is what happens when that information is consistently turned into better coordination, greater efficiency and more reliable services.',
          ],
        },
      },
    ],
  },
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
    readingMinutes: 10,
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
  {
    slug: 'concesiones-portuarias-contratos-inversion-eficiencia-servicio',
    category: { es: 'Concesiones', en: 'Concessions' },
    axis: 'concesiones-ppp-licitaciones',
    title: {
      es: 'Concesiones portuarias: cómo diseñar contratos que alineen inversión, eficiencia y servicio',
      en: 'Port concessions: designing contracts that align investment, efficiency and service',
    },
    excerpt: {
      es: 'Una concesión no se mide por lo que se firma, sino por lo que ocurre en el muelle diez o veinte años después. Un buen contrato es, ante todo, un sistema de incentivos.',
      en: 'A concession is not measured by what gets signed, but by what happens at the quay ten or twenty years later. Above all, a good contract is an incentive system.',
    },
    author: 'Diego Salom',
    date: '2026-10-22',
    readingMinutes: 11,
    heroImage: '/assets/images/blog/concesiones-portuarias-contratos.jpg',
    tags: ['Concesiones portuarias', 'Contratos', 'Inversión', 'Eficiencia'],
    body: { es: [], en: [] },
    sections: [
      {
        heading: { es: 'El contrato como sistema de incentivos', en: 'The contract as an incentive system' },
        paragraphs: {
          es: [
            'Una concesión portuaria suele presentarse como un instrumento legal. Pero para quien la diseña, lo que importa es otra cosa: es un mecanismo económico que define quién invierte, quién asume qué riesgos, cómo se recupera el capital invertido y qué recibe el usuario a cambio, tema que parece secundario, pero es de suma importancia para el desarrollo del negocio.',
            'Cuando ese documento está bien construido, los intereses del Estado, del concesionario y de los usuarios del puerto empujan en la misma dirección. Cuando está mal construido, cada parte optimiza lo suyo: el concesionario maximiza retorno con la menor inversión posible, el Estado busca el mayor canon y el usuario paga la diferencia en demoras y costos logísticos perjudicando a todo el conjunto económico de la zona de alcance del puerto.',
            'La pregunta de fondo no es “¿qué cláusulas incluir?”, sino “¿qué comportamiento va a premiar este contrato durante los próximos treinta años?”.',
          ],
          en: [
            'A port concession is often presented as a legal instrument. But for those who design it, what matters is something else: it is an economic mechanism that determines who invests, who bears each risk, how invested capital is recovered and what users receive in return—a topic that may seem secondary but is crucial to the development of the business.',
            'When the document is well designed, the interests of the state, the concessionaire and port users point in the same direction. When it is poorly designed, each party optimises its own interests: the concessionaire maximises returns with the least investment possible, the state seeks the highest concession fee, and users pay the difference in delays and logistics costs, harming the wider economy served by the port.',
            'The fundamental question is not “which clauses should be included?” but “what behaviour will this contract reward over the next thirty years?”',
          ],
        },
      },
      {
        heading: { es: 'Qué debería exigir el Estado', en: 'What the state should require' },
        paragraphs: {
          es: [
            'El error más frecuente es exigir demasiado de lo que se puede medir fácilmente y demasiado poco de lo que realmente importa. Un canon alto o una inversión comprometida en un cronograma rígido son fáciles de verificar, pero no garantizan un puerto eficiente.',
            'Un Estado que concesiona con criterio suele concentrar sus exigencias en cuatro frentes:',
            'Inversión con propósito. No solo cuánto se invierte, sino en qué y cuándo. Las obligaciones de inversión funcionan mejor cuando se activan por condiciones reales de demanda y ocupación que por fechas fijas predeterminadas antes de conocer el mercado y sus variaciones.',
            'Desempeño operativo. Productividad por posición de atraque, tiempos de espera de buques, permanencia de la carga, tiempos de camiones en el acceso. Pocos indicadores, bien definidos y auditables. Así como en la operación y manipulación de la mercadería, la rápida disposición de los datos ayuda a comprender mejor el entorno y tomar decisiones acertadas y rápidas.',
            'Acceso abierto y neutralidad. Que la terminal sirva a todos los usuarios en condiciones transparentes, sin generar posiciones dominantes que terminen encareciendo la cadena.',
            'Reversibilidad ordenada. Que al final del plazo el activo vuelva al Estado en buen estado, con información, sistemas y procesos que permitan una transición sin pérdida de continuidad. Hay que tener en cuenta que el puerto debe seguir operando después de la finalización del contrato, ya sea con una nueva empresa que tome la concesión o con el Estado haciendo una transición temporal y ordenada hacia el nuevo concesionario.',
            'Y hay algo que el Estado debería evitar: intervenir en la gestión diaria. El contrato define el qué; el concesionario decide el cómo. Un Estado que dicta el cómo asume también la responsabilidad por los resultados.',
          ],
          en: [
            'The most common mistake is to demand too much of what is easy to measure and too little of what truly matters. A high concession fee or an investment commitment tied to a rigid schedule is easy to verify, but does not guarantee an efficient port.',
            'A state that awards concessions thoughtfully tends to focus its requirements on four areas:',
            'Purposeful investment. Not just how much is invested, but in what and when. Investment obligations work better when triggered by actual demand and occupancy conditions than by fixed dates set before the market and its fluctuations are known.',
            'Operational performance. Productivity per berth, vessel waiting times, cargo dwell time and truck turnaround at the gate. A few well-defined, auditable indicators. As with cargo handling and operations, timely access to data helps build a better understanding of the environment and supports sound, rapid decisions.',
            'Open access and neutrality. The terminal should serve all users under transparent conditions, without creating dominant positions that ultimately make the supply chain more expensive.',
            'An orderly handback. At the end of the term, the asset should return to the state in good condition, with the information, systems and processes needed for a transition without disruption. The port must continue operating after the contract ends, whether a new company takes over the concession or the state manages a temporary, orderly transition to the new concessionaire.',
            'There is also something the state should avoid: intervening in day-to-day management. The contract defines what must be achieved; the concessionaire decides how. A state that dictates how also assumes responsibility for the results.',
          ],
        },
      },
      {
        heading: { es: 'Qué riesgos asume el privado, y cuáles no le corresponden', en: 'Which risks the private party should bear—and which it should not' },
        paragraphs: {
          es: [
            'El principio es simple y difícil de aplicar: cada riesgo debería recaer en quien mejor puede gestionarlo.',
            'El concesionario está en mejores condiciones de gestionar el riesgo operativo (productividad, costos, mantenimiento, tecnología, comercialización). También el riesgo de construcción cuando tiene control sobre el diseño y la ejecución. Es razonable que enfrente parte del riesgo de demanda, porque es quien conoce el mercado y puede influir sobre él.',
            'En cambio, hay riesgos que el privado no puede controlar y que, si se le trasladan completos, solo se traducen en una prima de riesgo más alta en la oferta: cambios regulatorios, demoras en permisos o dragados a cargo del Estado, decisiones públicas sobre accesos viales y ferroviarios, o eventos de fuerza mayor.',
            'Trasladar todo el riesgo al privado puede parecer una buena negociación. En la práctica suele producir ofertas más caras, menos competidas o proyectos que se renegocian a los pocos años. Un reparto equilibrado no es una concesión al inversor: es una condición para que el proyecto sea financiable y sostenible.',
          ],
          en: [
            'The principle is simple but difficult to apply: each risk should be borne by the party best able to manage it.',
            'The concessionaire is better placed to manage operational risk (productivity, costs, maintenance, technology and commercial activity). It is also better placed to manage construction risk when it controls design and delivery. It is reasonable for it to bear some demand risk, since it knows the market and can influence it.',
            'By contrast, there are risks the private party cannot control. Transferring them in full only results in a higher risk premium in the bid: regulatory changes, delays in permits or dredging handled by the state, public decisions about road and rail access, or force majeure events.',
            'Transferring all risk to the private party may look like a good negotiation. In practice, it tends to produce more expensive, less competitive bids or projects that are renegotiated within a few years. A balanced allocation is not a concession to the investor; it is a condition for the project to be financeable and sustainable.',
          ],
        },
      },
      {
        heading: { es: 'Vincular tarifas con niveles de servicio', en: 'Linking tariffs to service levels' },
        paragraphs: {
          es: [
            'Aquí está el punto donde el contrato se vuelve operativo. Una tarifa que no se relaciona con el servicio prestado desalinea los incentivos: el concesionario cobra lo mismo, funcione bien o mal.',
            'Existen tres lógicas complementarias para vincularlas:',
            'Tarifa máxima con revisión por desempeño. El techo tarifario se mantiene si se cumplen los niveles de servicio acordados, y se ajusta (hacia abajo, o con menor actualización) cuando hay incumplimientos sostenidos.',
            'Incentivos por superar estándares. Bonificaciones o flexibilidad tarifaria cuando la terminal supera los niveles comprometidos, de modo que la mejora operativa se traduce también en mejora económica.',
            'Compensación al usuario. Mecanismos transparentes cuando el servicio falla por causas atribuibles a la terminal, para que el costo de la ineficiencia no recaiga siempre sobre quien espera.',
            'Para que funcione, los indicadores deben cumplir tres condiciones: ser medibles con información verificable, depender razonablemente de la gestión del concesionario y ser pocos. Un contrato con cuarenta indicadores no se controla; uno con cinco o seis, sí.',
            'También importa la calibración. Estándares demasiado laxos no mueven nada; demasiado exigentes generan conflictos permanentes. Se definen mejor con un benchmark de terminales comparables y con una trayectoria de mejora que reconozca la curva de aprendizaje.',
          ],
          en: [
            'This is where the contract becomes operational. A tariff unrelated to the service provided misaligns incentives: the concessionaire collects the same amount whether it performs well or poorly.',
            'There are three complementary ways to link them:',
            'A maximum tariff reviewed against performance. The tariff cap remains in place when agreed service levels are met, and is adjusted (downward or with a smaller increase) when there are sustained failures.',
            'Incentives for exceeding standards. Bonuses or tariff flexibility when the terminal outperforms its commitments, so operational improvements also bring economic benefits.',
            'User compensation. Transparent mechanisms when service failures are attributable to the terminal, so the cost of inefficiency does not always fall on those left waiting.',
            'For this to work, indicators must meet three conditions: they must be measurable using verifiable information, reasonably within the concessionaire’s control, and few in number. A contract with forty indicators cannot be effectively monitored; one with five or six can.',
            'Calibration also matters. Standards that are too lax change nothing; those that are too demanding create constant disputes. They are best set using benchmarks from comparable terminals and an improvement path that recognises the learning curve.',
          ],
        },
      },
      {
        heading: { es: 'Contratos que resistan treinta años', en: 'Contracts built to last thirty years' },
        paragraphs: {
          es: [
            'Ninguna proyección de demanda, tecnología o regulación se sostiene durante tres décadas. Por eso, además de repartir riesgos y fijar incentivos, un contrato robusto necesita mecanismos de adaptación.',
            'Eso implica prever desde el inicio revisiones periódicas, umbrales que activen nuevas inversiones, criterios para reequilibrar la ecuación económica cuando cambian las condiciones de fondo, y una gobernanza de seguimiento con responsables, información compartida y reglas claras para resolver diferencias.',
            'La renegociación no es un fracaso del contrato. Lo es la renegociación sin reglas, improvisada y bajo presión. Un buen diseño convierte la adaptación en un proceso previsible, no en un conflicto.',
          ],
          en: [
            'No forecast of demand, technology or regulation holds for three decades. That is why, alongside risk allocation and incentives, a robust contract needs mechanisms for adaptation.',
            'This means providing from the outset for periodic reviews, thresholds that trigger new investment, criteria for rebalancing the economic equation when underlying conditions change, and monitoring governance with clear responsibilities, shared information and rules for resolving disagreements.',
            'Renegotiation is not a contract failure. Renegotiation without rules—improvised and under pressure—is. Good design turns adaptation into a predictable process rather than a conflict.',
          ],
        },
      },
      {
        heading: { es: 'El contrato que conviene diseñar', en: 'The contract worth designing' },
        paragraphs: {
          es: [
            'Una concesión exitosa no es la que maximiza el canon ni la que minimiza el riesgo del Estado. Es la que logra que el concesionario gane más cuando el puerto funciona mejor, que el Estado preserve el interés público sin gestionar la operación, y que el usuario encuentre un servicio predecible y competitivo. La importancia del interés público es vital, ya que el servicio portuario necesita una salud sólida para el sistema económico y logístico de un país. Si se pierde este objetivo, hay un gran riesgo para todo el sistema productivo de una nación.',
            'Dicho de otro modo: no se trata de escribir un contrato más largo, sino de diseñar uno que haga innecesario discutir cada decisión.',
            'Porque un puerto no se concesiona para cumplir un contrato. Se concesiona para que el contrato lo ayude a funcionar mejor.',
          ],
          en: [
            'A successful concession is not one that maximises the concession fee or minimises the state’s risk. It is one that enables the concessionaire to earn more when the port performs better, allows the state to safeguard the public interest without managing operations, and gives users a predictable, competitive service. The public interest is vital: port services are essential to a country’s economic and logistics systems. Losing sight of this objective puts the entire productive system at risk.',
            'In other words, the goal is not to write a longer contract, but to design one that makes it unnecessary to debate every decision.',
            'A port is not concessioned simply to comply with a contract. It is concessioned so that the contract helps it operate better.',
          ],
        },
      },
    ],
  },
]

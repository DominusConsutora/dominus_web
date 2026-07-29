export type ServiceDetail = {
  slug: string
  title: string
  heroImage: string
  videoMp4?: string
  intro: string
  introSecondary: string
  bullets: string[]
  featureTitle: string
  featureItems: { title: string; text: string }[]
  secondaryImages: [string, string]
  outro: [string, string]
  contactPhone: string
}

export const services: ServiceDetail[] = [
  {
    slug: 'management-leadership',
    title: 'Effective Management & Leadership',
    heroImage: '/assets/images/services/service-details.jpg',
    intro:
      'Continually myocardinate holistic mindshare with client-based web services. Assertively e-enable catalysts for change before tested markets. Phosfluorescently maintain wireless scenarios after intermandated applications.',
    introSecondary:
      'Conveniently predominate revolutionary quality vectors through future-proof manufactured products. Enthusiastically transform distinctive collaboration.',
    bullets: [
      'Comprehensive Strategic Business Planning & Effective Execution',
      'In-Depth Market Research & Detailed Competitive Analysis',
      'Expert Financial Advisory & Advanced Risk Management Solutions',
      'Operational Efficiency Optimization & Process Improvement Strategies',
      'Business Growth Consulting & Long-Term Sustainability Planning',
      'Leadership Training Programs & Team Performance Enhancement',
    ],
    featureTitle: 'We Ensure Best Service',
    featureItems: [
      { title: '24/7 Support', text: 'Lorem ipsum dolor consectetur adipiscing.' },
      { title: 'Secure Payments', text: 'Do eiusmod tempor incididunt labore.' },
      { title: 'Daily Updates', text: 'Daily Updates tempor incididunt labore.' },
      { title: 'Market Research', text: 'Market Research tempor incididunt labore.' },
    ],
    secondaryImages: ['/assets/images/services/08.webp', '/assets/images/services/09.webp'],
    outro: [
      'Manually maintain wireless scenarios after intermandated applications. Conveniently unique predominate revolutionary quality vectors through future-proof manufactured products.',
      'Objectively envisioneer high solution convergence through collaborative networks. Interactively generate B2C e-tailers for business data restore fully researched relationships.',
    ],
    contactPhone: '(+88) 333-213456',
  },
  {
    slug: 'financial-growth',
    title: 'Financial Growth & Advisory',
    heroImage: '/assets/images/services/08.webp',
    intro:
      'Partner with experts who align finance, operations, and strategy so your organization scales with confidence and measurable outcomes.',
    introSecondary:
      'We combine rigorous analysis with practical roadmaps so leadership teams can act decisively on capital, risk, and growth priorities.',
    bullets: [
      'Capital structure optimization',
      'Cash flow forecasting and runway planning',
      'Board-ready reporting packs',
      'Scenario modeling and stress testing',
    ],
    featureTitle: 'What you can expect',
    featureItems: [
      { title: 'Dedicated advisor', text: 'A named partner for your account.' },
      { title: 'Playbooks', text: 'Reusable frameworks tailored to your sector.' },
      { title: 'KPI dashboards', text: 'Visibility into the metrics that matter.' },
      { title: 'Quarterly reviews', text: 'Structured checkpoints and retros.' },
    ],
    secondaryImages: ['/assets/images/services/service-details.jpg', '/assets/images/services/09.webp'],
    outro: [
      'Our advisors work alongside your finance team to institutionalize forecasting discipline and reporting quality.',
      'Every engagement ends with documented processes your team can run without ongoing dependency.',
    ],
    contactPhone: '(+88) 333-213456',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation Programs',
    heroImage: '/assets/images/services/09.webp',
    intro:
      'Modernize customer journeys, automate manual workflows, and migrate safely to cloud-native platforms with a pragmatic roadmap.',
    introSecondary:
      'We balance speed with governance so engineering, product, and operations stay aligned from discovery through rollout.',
    bullets: [
      'Discovery workshops and capability maps',
      'Architecture guardrails and security reviews',
      'Incremental delivery with change management',
      'Platform observability and SRE practices',
    ],
    featureTitle: 'Delivery principles',
    featureItems: [
      { title: 'User-centered', text: 'Design systems anchored in research.' },
      { title: 'Composable', text: 'API-first integrations and observability.' },
      { title: 'Resilient', text: 'SLOs, incident response, and runbooks.' },
      { title: 'Sustainable', text: 'Documentation and handover from day one.' },
    ],
    secondaryImages: ['/assets/images/services/08.webp', '/assets/images/services/service-details.jpg'],
    outro: [
      'Transformation succeeds when teams adopt new ways of working—not only when new software ships.',
      'We embed enablement, training, and clear ownership models into every phase of delivery.',
    ],
    contactPhone: '(+88) 333-213456',
  },
]

export const RELATED_SERVICES = [
  {
    slug: 'management-leadership',
    icon: '/assets/images/services/icons/01.png',
    title: 'Design',
    description: 'There are many variations of passages of Lorem available.',
  },
  {
    slug: 'financial-growth',
    icon: '/assets/images/services/icons/02.png',
    title: 'Team',
    description: 'Passages there are many variations of Lorem available.',
  },
  {
    slug: 'digital-transformation',
    icon: '/assets/images/services/icons/03.png',
    title: 'Application',
    description: 'Variations of passages of Lorem available.',
  },
  {
    slug: 'management-leadership',
    icon: '/assets/images/services/icons/04.png',
    title: 'Support',
    description: 'There are many variations of passages of Lorem available.',
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

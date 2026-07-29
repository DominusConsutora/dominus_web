export type PortfolioProject = {
  slug: string
  title: string
  titleHighlight?: string
  subtitle: string
  client: string
  category: string
  date: string
  tags: string
  area: string
  website: string
  heroImage: string
  bentoLeft: [string, string]
  bentoMain: string
  contentTitle: string
  summary: string
  summarySecondary: string
  technologiesTitle: string
  technologiesText: string
  inlineImages: [string, string]
  benefitsTitle: string
  benefitsText: string
  benefitsList: string[]
  caseStudyImage: string
  caseStudyExcerpt: string
  videoEmbedUrl?: string
  videoMp4?: string
  sliderImages?: string[]
  galleryMain?: string
  galleryImages?: string[]
  rightTitle?: string
  rightDescription?: string[]
  teamAvatars?: string[]
}

const DEFAULT_VIDEO_EMBED = 'https://www.youtube.com/embed/gW22hVe5_fI?si=l7ewYuIMWchWKFLB'
const DEFAULT_VIDEO_MP4 = '/assets/images/video/01.mp4'
const DEFAULT_SLIDER = ['/assets/images/bg/03.webp', '/assets/images/bg/04.webp']
const DEFAULT_GALLERY_MAIN = '/assets/images/portfolio/10.webp'
const DEFAULT_GALLERY = ['/assets/images/portfolio/11.webp', '/assets/images/portfolio/12.webp']
const DEFAULT_AVATARS = [
  '/assets/images/testimonial/tooltip-01.png',
  '/assets/images/testimonial/tooltip-02.png',
  '/assets/images/testimonial/tooltip-03.png',
]

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'brand-refresh-venture',
    title: 'Venture Brand',
    titleHighlight: 'Refresh Program.',
    subtitle: 'Project Details',
    client: 'Northwind Capital',
    category: 'Branding',
    date: 'May 19, 2025',
    tags: 'Business, Branding, Identity',
    area: 'Rivertown Junction, Montana',
    website: 'northwind.example.com',
    heroImage: '/assets/images/portfolio/16.webp',
    bentoLeft: ['/assets/images/portfolio/17.webp', '/assets/images/portfolio/18.webp'],
    bentoMain: '/assets/images/portfolio/16.webp',
    contentTitle: 'Venture Brand Refresh',
    summary:
      'At Corpox, we believe in the potential of strategic design to power a brighter brand future. Our team delivered a comprehensive visual system refresh with motion guidelines and a component library.',
    summarySecondary:
      'Every brand is unique, which is why our first step is always a thorough consultation. We assess positioning, audience, and goals before defining the creative direction.',
    technologiesTitle: 'Used Technologies',
    technologiesText:
      'Design systems, Figma libraries, and token-based theming were used to ensure consistency across web, print, and campaign surfaces.',
    inlineImages: ['/assets/images/portfolio/17.webp', '/assets/images/portfolio/18.webp'],
    benefitsTitle: 'Benefits of Project',
    benefitsText:
      'Our team works closely with you to understand your brand needs and design a solution tailored to your requirements.',
    benefitsList: [
      'Installation Excellence',
      'Consultation and Customization',
      'Quality Products',
      'Brand Governance',
    ],
    caseStudyImage: '/assets/images/portfolio/01.webp',
    caseStudyExcerpt:
      'Growth is not just about getting bigger—it is about getting better. We specialize in empowering businesses strategically.',
    videoEmbedUrl: DEFAULT_VIDEO_EMBED,
    videoMp4: DEFAULT_VIDEO_MP4,
    sliderImages: DEFAULT_SLIDER,
    galleryMain: DEFAULT_GALLERY_MAIN,
    galleryImages: DEFAULT_GALLERY,
    rightTitle: 'Branded client',
    rightDescription: [
      'In a typical application, data is passed top-down via props, but such usage can be cumbersome for certain types of configuration.',
      'Values that are required by many components within an application benefit from shared context and design tokens.',
    ],
    teamAvatars: DEFAULT_AVATARS,
  },
  {
    slug: 'analytics-platform',
    title: 'Unified Analytics',
    titleHighlight: 'Platform.',
    subtitle: 'Project Details',
    client: 'Helios Health',
    category: 'Product',
    date: 'Mar 12, 2025',
    tags: 'Data, Analytics, Healthcare',
    area: 'Boston, Massachusetts',
    website: 'helios.example.com',
    heroImage: '/assets/images/portfolio/16.webp',
    bentoLeft: ['/assets/images/portfolio/02.webp', '/assets/images/portfolio/03.webp'],
    bentoMain: '/assets/images/portfolio/02.webp',
    contentTitle: 'Unified Analytics Platform',
    summary:
      'Data mesh foundations with governed datasets and self-serve exploration for clinical operations teams across multiple hospital networks.',
    summarySecondary:
      'We partnered with clinical ops and engineering to define canonical metrics, lineage, and role-based workspaces.',
    technologiesTitle: 'Used Technologies',
    technologiesText:
      'Cloud warehouses, dbt transformations, and Looker semantic layers powered governed self-serve analytics.',
    inlineImages: ['/assets/images/portfolio/03.webp', '/assets/images/portfolio/04.webp'],
    benefitsTitle: 'Benefits of Project',
    benefitsText:
      'Stakeholders gained a single source of truth for KPIs with faster time-to-insight and reduced ad-hoc reporting load.',
    benefitsList: [
      'Canonical metrics layer',
      'Lineage and governance',
      'Role-based workspaces',
      'Faster reporting cycles',
    ],
    caseStudyImage: '/assets/images/portfolio/02.webp',
    caseStudyExcerpt:
      'Siloed warehouses and conflicting definitions were replaced with governed datasets teams could trust.',
    videoEmbedUrl: DEFAULT_VIDEO_EMBED,
    videoMp4: DEFAULT_VIDEO_MP4,
    sliderImages: DEFAULT_SLIDER,
    galleryMain: '/assets/images/portfolio/02.webp',
    galleryImages: ['/assets/images/portfolio/03.webp', '/assets/images/portfolio/04.webp'],
    rightTitle: 'Clinical partners',
    rightDescription: [
      'Stakeholders needed a single source of truth for KPIs with faster time-to-insight.',
      'We aligned clinical ops and engineering on canonical metrics and governed workspaces.',
    ],
    teamAvatars: DEFAULT_AVATARS,
  },
  {
    slug: 'field-service-modernization',
    title: 'Field Service',
    titleHighlight: 'Modernization.',
    subtitle: 'Project Details',
    client: 'Atlas Utilities',
    category: 'Operations',
    date: 'Jan 08, 2025',
    tags: 'FSM, Mobile, Operations',
    area: 'Denver, Colorado',
    website: 'atlas.example.com',
    heroImage: '/assets/images/portfolio/16.webp',
    bentoLeft: ['/assets/images/portfolio/04.webp', '/assets/images/portfolio/01.webp'],
    bentoMain: '/assets/images/portfolio/03.webp',
    contentTitle: 'Field Service Modernization',
    summary:
      'Mobile-first scheduling, parts logistics, and customer notifications unified in one workflow for dispatch and field crews.',
    summarySecondary:
      'Legacy spreadsheet-based dispatch was replaced with an integrated FSM suite and ERP connectors.',
    technologiesTitle: 'Used Technologies',
    technologiesText:
      'Offline-first mobile apps, event-driven integrations, and real-time dispatch boards improved first-time fix rates.',
    inlineImages: ['/assets/images/portfolio/01.webp', '/assets/images/portfolio/02.webp'],
    benefitsTitle: 'Benefits of Project',
    benefitsText:
      'Operations teams reduced manual coordination and improved customer communication throughout the service lifecycle.',
    benefitsList: [
      'Offline-first mobile',
      'ERP integration',
      'Real-time dispatch',
      'Customer notifications',
    ],
    caseStudyImage: '/assets/images/portfolio/03.webp',
    caseStudyExcerpt:
      'Dispatch moved from voice calls and spreadsheets to a scalable digital workflow.',
    videoEmbedUrl: DEFAULT_VIDEO_EMBED,
    videoMp4: DEFAULT_VIDEO_MP4,
    sliderImages: ['/assets/images/bg/04.webp', '/assets/images/bg/03.webp'],
    galleryMain: '/assets/images/portfolio/03.webp',
    galleryImages: ['/assets/images/portfolio/01.webp', '/assets/images/portfolio/02.webp'],
    rightTitle: 'Field operations',
    rightDescription: [
      'Legacy spreadsheet-based dispatch was replaced with an integrated FSM suite.',
      'Mobile crews gained offline-first scheduling and real-time customer notifications.',
    ],
    teamAvatars: DEFAULT_AVATARS,
  },
]

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug)
}

export function getPortfolioSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug)
}

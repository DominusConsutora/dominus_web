export type TeamSkill = { name: string; percent: number }

export type TeamAward = { icon: string; title: string }

export type TeamMember = {
  slug: string
  name: string
  designation: string
  image: string
  phone: string
  email: string
  experience: string
  shortBio: string
  aboutParagraphs: string[]
  skillsIntro: string
  skills: TeamSkill[]
  awardsIntro: string
  awards: TeamAward[]
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'benjamin-taylor',
    name: 'Benjamin Taylor',
    designation: 'Founder Of Corpox',
    image: '/assets/images/team/team-04.jpg',
    phone: '+00343335566',
    email: 'corpox@gmail.com',
    experience: '10 Years',
    shortBio:
      'Benjamin Taylor, the visionary founder of Corpox, embarked on a mission to revolutionize the renewable energy sector.',
    aboutParagraphs: [
      'Benjamin Taylor, a visionary entrepreneur in the renewable energy sector, is the pioneering force behind one of the most innovative consulting firms of our time. With a passion for sustainability and a commitment to reducing carbon footprints, Taylor built Corpox to make strategic consulting accessible for organizations of every size.',
      "Taylor's background in engineering coupled with his deep-seated environmental consciousness inspired him to found his company. His vision was simple yet profound: to help businesses grow with clarity, resilience, and measurable outcomes.",
      "Under Taylor's leadership, the company has soared to new heights, leveraging cutting-edge technology and streamlined processes to deliver top-notch solutions to residential, commercial, and industrial clients alike.",
    ],
    skillsIntro:
      "Benjamin Taylor is not just a founder; he's a trailblazer whose professional skills have reshaped how clients approach strategy and execution:",
    skills: [
      { name: 'Wind Turbines', percent: 90 },
      { name: 'Problem-Solving', percent: 80 },
      { name: 'Technical Proficiency', percent: 95 },
    ],
    awardsIntro:
      'Beyond business, Taylor is a passionate advocate for environmental causes, leveraging his expertise to promote policies and practices that advance sustainable growth.',
    awards: [
      { icon: '/assets/images/team/award-01.svg', title: 'Renewable Energy Innovator of the Year' },
      { icon: '/assets/images/team/award-02.svg', title: 'Clean Energy Advocate of the Year' },
      { icon: '/assets/images/team/award-03.svg', title: 'Sustainable Business Leadership Award' },
    ],
  },
  {
    slug: 'monsur-mia',
    name: 'Monsur Mia',
    designation: 'Sr Product Designer',
    image: '/assets/images/team/team-04.jpg',
    phone: '+8801712345678',
    email: 'monsur@corpox.com',
    experience: '8 Years',
    shortBio: 'Monsur Mia crafts human-centered product experiences for enterprise and startup teams worldwide.',
    aboutParagraphs: [
      'Monsur leads design systems and product discovery workshops that align stakeholders around clear user journeys and measurable outcomes.',
      'He has shipped design languages for fintech, health, and SaaS products—always balancing aesthetics with conversion and accessibility.',
    ],
    skillsIntro: 'Core strengths that define Monsur’s approach to product design:',
    skills: [
      { name: 'UX Research', percent: 92 },
      { name: 'Design Systems', percent: 88 },
      { name: 'Prototyping', percent: 85 },
    ],
    awardsIntro: 'Recognition for design leadership and mentorship across the team.',
    awards: [
      { icon: '/assets/images/team/award-01.svg', title: 'Product Design Excellence Award' },
      { icon: '/assets/images/team/award-02.svg', title: 'Best UX Team Lead' },
    ],
  },
  {
    slug: 'james-johnson',
    name: 'James Johnson',
    designation: 'Managing Director',
    image: '/assets/images/team/team-05.jpg',
    phone: '+12025550142',
    email: 'james@corpox.com',
    experience: '12 Years',
    shortBio: 'James Johnson drives portfolio strategy and client success for global consulting engagements.',
    aboutParagraphs: [
      'James partners with C-suite leaders to translate vision into operating models, KPI trees, and phased transformation roadmaps.',
      'His background spans management consulting and venture operations, giving him a pragmatic lens on growth and risk.',
    ],
    skillsIntro: 'Professional skills James brings to every engagement:',
    skills: [
      { name: 'Strategy', percent: 94 },
      { name: 'Operations', percent: 87 },
      { name: 'Stakeholder Management', percent: 91 },
    ],
    awardsIntro: 'Honors for client impact and team development.',
    awards: [
      { icon: '/assets/images/team/award-01.svg', title: 'Consulting Leader of the Year' },
      { icon: '/assets/images/team/award-03.svg', title: 'Client Success Champion' },
    ],
  },
  {
    slug: 'david-miller',
    name: 'David Miller',
    designation: 'Finance Consultant',
    image: '/assets/images/team/team-06.jpg',
    phone: '+442071234567',
    email: 'david@corpox.com',
    experience: '9 Years',
    shortBio: 'David Miller helps organizations optimize capital allocation and financial planning.',
    aboutParagraphs: [
      'David builds forecasting models, board packs, and scenario plans that give leadership confidence in every major decision.',
      'He has advised scale-ups through fundraising rounds and public-market readiness programs.',
    ],
    skillsIntro: 'David’s expertise spans corporate finance and analytics:',
    skills: [
      { name: 'Financial Modeling', percent: 93 },
      { name: 'Risk Analysis', percent: 86 },
      { name: 'FP&A', percent: 90 },
    ],
    awardsIntro: 'Awards highlighting excellence in financial advisory.',
    awards: [
      { icon: '/assets/images/team/award-02.svg', title: 'Top Finance Advisor' },
    ],
  },
  {
    slug: 'william-white',
    name: 'William White',
    designation: 'Marketing Strategist',
    image: '/assets/images/team/team-07.jpg',
    phone: '+61370123456',
    email: 'william@corpox.com',
    experience: '7 Years',
    shortBio: 'William White builds brand narratives and demand-generation programs that convert.',
    aboutParagraphs: [
      'William blends content, paid media, and lifecycle marketing to grow pipeline for B2B and B2C brands.',
      'He mentors internal marketing teams on experimentation frameworks and analytics hygiene.',
    ],
    skillsIntro: 'Marketing capabilities William is known for:',
    skills: [
      { name: 'Brand Strategy', percent: 89 },
      { name: 'Growth Marketing', percent: 84 },
      { name: 'Analytics', percent: 82 },
    ],
    awardsIntro: 'Recognition for campaign performance and brand growth.',
    awards: [
      { icon: '/assets/images/team/award-01.svg', title: 'Marketing Innovator Award' },
      { icon: '/assets/images/team/award-02.svg', title: 'Best Growth Campaign' },
    ],
  },
]

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug)
}

export function getTeamSlugs(): string[] {
  return teamMembers.map((m) => m.slug)
}

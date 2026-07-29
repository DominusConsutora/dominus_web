export type BlogPost = {
  slug: string
  title: string
  titleHighlight?: string
  subtitle: string
  author: string
  date: string
  comments: string
  heroImage: string
  heroCaption?: string
  videoEmbedUrl?: string
  videoMp4?: string
  videoPopupUrl?: string
  tags: string[]
  gallery: string[]
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-corporate-tips',
    title: 'Best Corporate Tips You',
    titleHighlight: 'Will Read This Year.',
    subtitle: 'Blog Details',
    author: 'John Deaon',
    date: '10 Dec 2025',
    comments: '16 Comment',
    heroImage: '/assets/images/blog/blog-01.jpg',
    heroCaption: 'Business and core management app are for enterprise.',
    tags: ['Corporate', 'Agency', 'Creative', 'Design', 'Business', 'Development'],
    gallery: [
      '/assets/images/blog/blog-04.jpg',
      '/assets/images/blog/blog-03.jpg',
      '/assets/images/blog/blog-02.jpg',
    ],
    excerpt: 'It is a long established fact that a reader.',
  },
  {
    slug: 'corporate-success-strategy',
    title: 'Corporate Success: How to',
    titleHighlight: 'Achieve Your Goals.',
    subtitle: 'Insights',
    author: 'Sarah Chen',
    date: '02 Nov 2025',
    comments: '8 Comment',
    heroImage: '/assets/images/blog/blog-02.jpg',
    tags: ['Corporate', 'Strategy', 'Growth', 'Consulting'],
    gallery: [
      '/assets/images/blog/blog-01.jpg',
      '/assets/images/blog/blog-03.jpg',
      '/assets/images/blog/blog-04.jpg',
    ],
    excerpt: 'Corporate Success established fact that.',
  },
  {
    slug: 'leadership-confidence',
    title: 'Corporate Leadership: How to',
    titleHighlight: 'Lead with Confidence.',
    subtitle: 'Leadership',
    author: 'Michael Ross',
    date: '18 Oct 2025',
    comments: '12 Comment',
    heroImage: '/assets/images/blog/blog-03.jpg',
    videoEmbedUrl: 'https://www.youtube.com/embed/pVeMT9bBR2A',
    tags: ['Leadership', 'Corporate', 'Training', 'Management'],
    gallery: [
      '/assets/images/blog/blog-02.jpg',
      '/assets/images/blog/blog-04.jpg',
      '/assets/images/blog/blog-01.jpg',
    ],
    excerpt: 'Leadership established fact that a reader.',
  },
]

export const BLOG_LIST_ITEMS = [
  'Comprehensive Strategic Business Planning & Effective',
  'In-Depth Market Research & Detailed Competitive Analysis',
  'Expert Financial Advisory & Advanced Risk Management',
  'Operational Efficiency Optimization & Process Improvement',
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

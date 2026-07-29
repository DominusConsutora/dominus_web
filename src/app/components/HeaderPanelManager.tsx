'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DemoGrid, multipageDemos, onepageDemos } from '../../components/header/OnepageNav'

const searchItems = [
  { title: 'Awarded Design', href: '/service-details/management-leadership', image: '/assets/images/services/serviice-01.jpg', keywords: 'service business consultancy awarded design' },
  { title: 'Design & Creative', href: '/service-details/digital-transformation', image: '/assets/images/services/serviice-02.jpg', keywords: 'service business consultancy design creative' },
  { title: 'App Development', href: '/service-details/financial-growth', image: '/assets/images/services/serviice-03.jpg', keywords: 'service business consultancy app development' },
  { title: 'UI/UX Design', href: '/service-details/management-leadership', image: '/assets/images/services/serviice-04.jpg', keywords: 'service business consultancy ui ux design' },
] as const

const popularTags = ['Service', 'Business', 'Consultancy'] as const

type MenuLink = readonly [label: string, href: string, badge?: string]

const pagesColumns: readonly MenuLink[][] = [
  [
    ['About Company', '/about'],
    ['Our Service', '/our-service'],
    ['Our Service Two', '/our-service-two'],
    ['Our Service Three', '/our-service-three'],
    ['Our Service Four', '/our-service-four'],
    ['Our Service Five', '/our-service-five'],
    ['Service Details Two', '/service-details-two/financial-growth'],
    ['Service Details Three', '/service-details-three/digital-transformation'],
    ['Service Details Four', '/service-details-four/digital-transformation'],
    ['Service Details', '/service-details/management-leadership'],
    ['Our Team', '/team'],
    ['Our Team Two', '/team-two'],
    ['Our History', '/our-history', 'New'],
    ['Clients', '/clients', 'New'],
  ],
  [
    ['Office Branch', '/office-branch', 'New'],
    ['Our Team Three', '/team-three'],
    ['Team Details', '/team-details'],
    ['Pricing Plan', '/pricing'],
    ['Pricing Plan Two', '/pricing-two'],
    ['Pricing Plan Three', '/pricing-three'],
    ['Portfolio Default', '/portfolio'],
    ['Portfolio 3 Column', '/portfolio-three-column'],
    ['Portfolio Full Width', '/portfolio-full-width'],
    ['Portfolio Grid Layout', '/portfolio-grid-layout'],
    ['Portfolio Box Layout', '/portfolio-box-layout'],
    ['Portfolio Card Hover', '/portfolio-card-hover'],
    ['Portfolio with Content', '/portfolio-bottom-content'],
    ['Portfolio Details', '/portfolio-details'],
  ],
  [
    ['Portfolio Details Two', '/portfolio-details-two'],
    ['Portfolio Details Video', '/portfolio-details-three'],
    ['Portfolio Details Video', '/portfolio-details-five'],
    ['Portfolio Details Slider', '/portfolio-details-four'],
    ['Working Process', '/timeline'],
    ['Our Gallery', '/our-gallery'],
    ['Gallery col 3', '/our-gallery-col-3'],
    ['Career Oppertunity', '/career'],
    ['Career Details', '/career-details'],
    ['Apply Job', '/apply'],
    ['Blog Grid', '/blog-grid'],
    ['Blog List View', '/blog-list-view'],
    ['Blog Bento View', '/blog-bento'],
    ['Blog Details', '/blog/corporate-success-strategy'],
  ],
  [
    ['Blog Standard', '/blog-details-standard/best-corporate-tips', 'New'],
    ["Faq's", '/faq', 'New'],
    ['Testimonial', '/testimonial'],
    ['Testimonial Two', '/testimonial-two'],
    ['Testimonial Three', '/testimonial-three'],
    ['Testimonial Modern', '/testimonial-modern'],
    ['Contact Page', '/contact'],
    ['Shop', '/shop', 'New'],
    ['Shop Details', '/shop-details', 'New'],
    ['Cart', '/cart', 'New'],
    ['Checkout', '/checkout', 'New'],
    ['404 Page', '/error'],
    ['Privacy Policy', '/privacy-policy'],
    ['Terms & Condition', '/terms-condition'],
  ],
] as const

const serviceLayoutLinks: readonly MenuLink[] = [
  ['Our Service', '/our-service'],
  ['Our Service Two', '/our-service-two'],
  ['Our Service Three', '/our-service-three'],
  ['Our Service Four', '/our-service-four'],
  ['Our Service Five', '/our-service-five'],
  ['Our Service Six', '/our-service-six'],
  ['Service List Style', '/service-list', 'New'],
] as const

const serviceDetailLinks: readonly MenuLink[] = [
  ['Service Details', '/service-details/management-leadership', 'Popular'],
  ['Service Details center', '/service-details-center/financial-growth'],
  ['Service Details Two', '/service-details-two/digital-transformation'],
  ['Service Details Three', '/service-details-three/financial-growth'],
  ['Service Details Four', '/service-details-four/digital-transformation'],
  ['Service List Style', '/#', 'Coming'],
  ['Service Details Six', '/#', 'Coming'],
] as const

const projectLinks: readonly MenuLink[] = [
  ['Portfolio Default', '/portfolio'],
  ['Portfolio Three Column', '/portfolio-three-column'],
  ['Portfolio Full Width', '/portfolio-full-width'],
  ['Portfolio Grid Layout', '/portfolio-grid-layout'],
  ['Portfolio Box Layout', '/portfolio-box-layout'],
  ['Portfolio Card Hover', '/portfolio-card-hover'],
  ['Portfolio Bottom Content', '/portfolio-bottom-content'],
] as const

const projectDetailLinks: readonly MenuLink[] = [
  ['Portfolio Details', '/portfolio-details'],
  ['Portfolio Details Two', '/portfolio-details-two'],
  ['Portfolio Details Video', '/portfolio-details-three'],
  ['Portfolio Details Video 2', '/portfolio-details-five'],
  ['Portfolio Details Slider', '/portfolio-details-four'],
] as const

const blogLinks: readonly MenuLink[] = [
  ['Blog Grid', '/blog-grid'],
  ['Blog List View', '/blog-list-view'],
  ['Blog Bento', '/blog-bento'],
] as const

const blogDetailLinks: readonly MenuLink[] = [
  ['Blog Details', '/blog/corporate-success-strategy'],
  ['Details Standard', '/blog-details-standard/best-corporate-tips', 'New'],
  ['Blog Details Right Sidebar', '/blog-details-right-sidebar/best-corporate-tips'],
  ['Blog Details Left Sidebar', '/blog-details-left-sidebar/best-corporate-tips'],
  ['Blog Details Video', '/blog-details-video/best-corporate-tips'],
  ['Blog Details Video Two', '/blog-details-video-two/best-corporate-tips'],
  ['Blog Details Video Popup', '/blog-details-video-popup/best-corporate-tips'],
] as const

const elementsColumns: readonly MenuLink[][] = [
  [
    ['Style Guide', '/style-guide', 'Hot'],
    ['Button Page', '/button'],
    ['Our Service', '/service'],
    ['Service Details', '/service-details/management-leadership'],
    ['Accordion Style', '/accordion'],
    ['Progressbar', '/progressbar'],
    ['Blog Grid', '/blog-grid'],
    ['Our Team', '/team'],
    ['Modern Tabs', '/modern-tab'],
    ['Social Share', '/social-share'],
    ['Brand Style', '/brand'],
    ['Contact Page', '/contact'],
  ],
  [
    ['Counter Up', '/counter'],
    ['Gallery', '/gallery'],
    ['404 Page', '/error'],
    ['Video Style', '/video'],
    ['Our Portfolio', '/portfolio'],
    ['Testimonial', '/testimonial'],
    ['Pricing Plan', '/pricing'],
    ['Privacy Policy', '/privacy-policy'],
    ['Tool Tip', '/tooltip'],
    ['Section Title', '/section-title'],
    ['Team Style', '/team-style'],
    ['Typography', '/typography'],
  ],
  [
    ['Form Style', '/form-style'],
    ['Pagination', '/pagination'],
    ['Avatars', '/avatars'],
    ['Heading Split', '/animated-heading'],
    ['Light Box', '/lightbox'],
    ['Call To Action', '/call-to-action'],
    ['Banner Slider', '/banner-slider'],
    ['About Style', '/about-style'],
    ['Timeline', '/timeline'],
    ['Tab Style', '/tab'],
  ],
] as const

function MenuLinkItem({ item, onNavigate }: { item: MenuLink; onNavigate: () => void }) {
  const [label, href, badge] = item

  return (
    <li>
      <Link href={href} onClick={onNavigate}>
        {label}
        {badge ? <> <span className="tmp-badge-card">{badge}</span></> : null}
      </Link>
    </li>
  )
}

type PanelName = 'search' | 'offcanvas' | 'mobile' | ''

const whitePrefixRoutes = new Set([
  '01-index-consulting',
  '02-index-business-consulting-2',
  '03-agency',
  '04-services-agency',
  '05-corporate',
  '06-startup',
  '07-creative-agency',
  '08-business',
  '09-digital-agency',
  '10-marketing-agency',
  '11-hr-website',
  '12-index-business-consulting-3',
  '13-agency',
  '14-financial-consulting',
  '15-business-coach',
  '16-real-estate-consulting',
  '17-real-estate-consulting',
  '18-it-solution',
  '19-personal-advisory',
  '20-gym-fitness',
  '21-medical',
  '22-solar',
  '23-event',
  '24-ai-agency',
  '25-architecture',
  '26-construction',
])

const whiteSuffixRoutes = new Set([
  'about',
  'about-style',
  'accordion',
  'animated-heading',
  'apply',
  'avatars',
  'banner-slider',
  'blog-bento',
  'blog-deails-sidebar',
  'blog-deails-sidebar-left',
  'blog-deails-video',
  'blog-deails-video-popup',
  'blog-deails-video-two',
  'blog-details',
  'blog-details-left-sidebar',
  'blog-details-right-sidebar',
  'blog-details-sidebar',
  'blog-details-standard',
  'blog-details-video',
  'blog-details-video-popup',
  'blog-details-video-two',
  'blog-grid',
  'blog-list-view',
  'brand',
  'button',
  'call-to-action',
  'career',
  'career-details',
  'cart',
  'checkout',
  'clients',
  'contact',
  'counter',
  'error',
  'faq',
  'form-style',
  'gallery',
  'lightbox',
  'modern-tab',
  'office-branch',
  'our-gallery',
  'our-gallery-col-3',
  'our-history',
  'our-service',
  'our-service-five',
  'our-service-four',
  'our-service-six',
  'our-service-three',
  'our-service-two',
  'pagination',
  'portfolio',
  'portfolio-bottom-content',
  'portfolio-box-layout',
  'portfolio-card-hover',
  'portfolio-details',
  'portfolio-details-five',
  'portfolio-details-four',
  'portfolio-details-three',
  'portfolio-details-two',
  'portfolio-full-width',
  'portfolio-grid-layout',
  'portfolio-three-column',
  'pricing',
  'pricing-three',
  'pricing-two',
  'privacy-policy',
  'progressbar',
  'section-title',
  'service',
  'service-details',
  'service-details-center',
  'service-details-four',
  'service-details-three',
  'service-details-two',
  'service-list',
  'shop',
  'shop-details',
  'social-share',
  'style-guide',
  'tab',
  'team',
  'team-details',
  'team-style',
  'team-three',
  'team-two',
  'terms-condition',
  'testimonial',
  'testimonial-modern',
  'testimonial-three',
  'testimonial-two',
  'timeline',
  'tooltip',
  'typography',
  'video',
])

function isWhiteContext(pathname: string | null) {
  if (!pathname) return false

  const firstSegment = pathname.split('/').filter(Boolean)[0] || ''
  return firstSegment.startsWith('white-') || firstSegment.endsWith('-white')
}

function getWhiteAwareHref(href: string, currentPathname: string | null) {
  if (!isWhiteContext(currentPathname)) return href
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return href

  let url: URL

  try {
    url = new URL(href, window.location.origin)
  } catch {
    return href
  }

  if (url.origin !== window.location.origin) return href

  const segments = url.pathname.split('/').filter(Boolean)
  const firstSegment = segments[0] || ''

  if (!firstSegment) {
    url.pathname = '/white-01-index-consulting'
    return `${url.pathname}${url.search}${url.hash}`
  }

  if (firstSegment.startsWith('white-') || firstSegment.endsWith('-white') || firstSegment === '_next') return href

  if (segments.length > 1 && firstSegment === 'blog') {
    segments[0] = 'blog-details-white'
  } else if (segments.length > 1 && firstSegment === 'portfolio') {
    segments[0] = 'portfolio-details-white'
  } else if (segments.length > 1 && firstSegment === 'service') {
    return href
  } else if (segments.length > 1 && firstSegment === 'team') {
    segments[0] = 'team-details-white'
  } else if (whitePrefixRoutes.has(firstSegment)) {
    segments[0] = `white-${firstSegment}`
  } else if (whiteSuffixRoutes.has(firstSegment)) {
    segments[0] = `${firstSegment}-white`
  } else {
    return href
  }

  url.pathname = `/${segments.join('/')}`
  return `${url.pathname}${url.search}${url.hash}`
}

type SidebarLogoConfig = {
  alt: string
  dark: string
  light: string
  routes: readonly string[]
}

const defaultSidebarLogo = {
  alt: 'Corporate Logo',
  dark: '/assets/images/logo/logo-dark.png',
  light: '/assets/images/logo/logo.png',
} as const

const pageSidebarLogos: readonly SidebarLogoConfig[] = [
  {
    alt: 'Gym Fitness',
    light: '/assets/images/logo/gym-logo.svg',
    dark: '/assets/images/logo/gym-logo-dark.svg',
    routes: ['/20-gym-fitness', '/white-20-gym-fitness', '/onepage-twenty', '/onepage-twenty-white'],
  },
  {
    alt: 'Medical Healthcare',
    light: '/assets/images/logo/doctor-logo.svg',
    dark: '/assets/images/logo/doctor-logo-dark.svg',
    routes: ['/21-medical', '/white-21-medical', '/onepage-21', '/onepage-21-white'],
  },
  {
    alt: 'Solar Renewable Energy',
    light: '/assets/images/logo/solar-logo.svg',
    dark: '/assets/images/logo/solar-logo-dark.svg',
    routes: ['/22-solar', '/white-22-solar', '/onepage-22', '/onepage-22-white'],
  },
  {
    alt: 'AI Agency',
    light: '/assets/images/logo/ai-logo.svg',
    dark: '/assets/images/logo/ai-logo-dark.svg',
    routes: ['/24-ai-agency', '/white-24-ai-agency', '/onepage-24', '/onepage-24-white'],
  },
  {
    alt: 'Architecture',
    light: '/assets/images/logo/archi-logo.svg',
    dark: '/assets/images/logo/archi-logo-dark.svg',
    routes: ['/25-architecture', '/white-25-architecture', '/onepage-25', '/onepage-25-white'],
  },
  {
    alt: 'Construction',
    light: '/assets/images/logo/construction-logo.svg',
    dark: '/assets/images/logo/construction-logo-dark.svg',
    routes: ['/26-construction', '/white-26-construction', '/onepage-26', '/onepage-26-white'],
  },
] as const

function getSidebarLogo(pathname: string | null) {
  if (!pathname) return defaultSidebarLogo

  return pageSidebarLogos.find((logo) => logo.routes.some((route) => pathname === route || pathname.startsWith(`${route}/`))) || defaultSidebarLogo
}

export default function HeaderPanelManager() {
  const [activePanel, setActivePanel] = useState<PanelName>('')
  const [openMobileSection, setOpenMobileSection] = useState<string>('Home')
  const [openNested, setOpenNested] = useState<Record<string, boolean>>({})
  const [mobileDemoTab, setMobileDemoTab] = useState<'multipage' | 'onepage'>('multipage')
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const isOpen = activePanel !== ''
  const isOnepageRoute = pathname === '/onepage' || pathname?.startsWith('/onepage-')
  const sidebarLogo = getSidebarLogo(pathname)
  const normalizedSearch = searchValue.trim().toLowerCase()
  const filteredSearchItems = normalizedSearch
    ? searchItems.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(normalizedSearch))
    : searchItems

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setActivePanel('')
      setSearchValue('')
    }, 0)

    return () => window.clearTimeout(closeTimer)
  }, [pathname])

  useEffect(() => {
    setOpenMobileSection('Home')
  }, [isOnepageRoute])

  const closePanels = () => setActivePanel('')

  const toggleNested = (key: string) => {
    setOpenNested((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      if (!target || target.closest('[data-local-header-panel="true"]')) return

      if (target.closest('.search-area-btn')) {
        event.preventDefault()
        setActivePanel('search')
      } else if (target.closest('.offcanvas-trigger')) {
        event.preventDefault()
        setActivePanel('offcanvas')
      } else if (target.closest('.hamberger-button')) {
        event.preventDefault()
        setActivePanel('mobile')
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePanels()
    }

    document.body.classList.toggle('tmp-header-panel-open', isOpen)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('tmp-header-panel-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    const handleWhiteRouteClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) {
        return
      }

      const link = (event.target as Element | null)?.closest('a[href]') as HTMLAnchorElement | null

      if (!link || link.target && link.target !== '_self' || link.hasAttribute('download')) return
      if (link.closest('.demos-area-drop-down')) return

      const originalHref = link.getAttribute('href') || ''
      const nextHref = getWhiteAwareHref(originalHref, pathname)

      if (nextHref === originalHref) return

      event.preventDefault()
      closePanels()
      router.push(nextHref)
    }

    document.addEventListener('click', handleWhiteRouteClick, true)
    return () => document.removeEventListener('click', handleWhiteRouteClick, true)
  }, [pathname, router])

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = getWhiteAwareHref(filteredSearchItems[0]?.href || '/service', pathname)
    closePanels()
    router.push(target)
  }

  return (
    <>
      {isOpen ? (
        <div
          aria-hidden={!isOpen}
          className="bgshow"
          id="anywhere-home"
          onClick={closePanels}
        />
      ) : null}

      <div className={`tmp-search-input-area${activePanel === 'search' ? ' show' : ''}`} role="dialog" aria-modal="true" aria-label="Site search">
        <div className="container">
          <div className="search-input-inner">
            <form action="#" className="input-div tmponhover" onSubmit={handleSearchSubmit}>
              <input
                id="searchInput1"
                className="search-input"
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="🔎 Search products, topics, or #tags"
                aria-label="Search products, topics, or tags"
                autoComplete="off"
                required
              />
              <button type="submit" aria-label="Submit search">
                <i className="feather-search" />
              </button>
            </form>
            <div className="popular-keyword">
              <h4 className="title">Popular Tag :</h4>
              <div className="tag-wrapper">
                {popularTags.map((tag) => (
                  <a
                    className="tmp-btn btn-border btn-small radius-round"
                    href="#"
                    key={tag}
                    onClick={(event) => {
                      event.preventDefault()
                      setSearchValue(tag)
                    }}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            <div className="row g-5 service-wrapper mt--10 mt_md--10 mt_sm--0">
              {filteredSearchItems.slice(0, 4).map((item) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 sal-animate" key={`${item.href}-${item.title}`}>
                  <div className="card-box card-style-1 text-left tmponhover">
                    <div className="inner">
                      <div className="image">
                        <Link href={item.href} onClick={closePanels}>
                          <img src={item.image} alt="card Images" />
                        </Link>
                      </div>
                      <div className="content">
                        <h4 className="title mb--20">
                          <Link href={item.href} onClick={closePanels}>{item.title}</Link>
                        </h4>
                        <div className="discover-btn">
                          <Link className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse" href={item.href} onClick={closePanels}>
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">See More</span>
                              <span className="btn-icon"><i className="feather-arrow-right" /></span>
                              <span className="btn-icon"><i className="feather-arrow-right" /></span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="close"
          className="search-close-icon tmponhover"
          role="button"
          tabIndex={0}
          aria-label="Close search"
          onClick={closePanels}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              closePanels()
            }
          }}
        >
          <img src="/assets/images/icons/close.png" alt="" />
        </div>
        <div className="bg-text">consultancy</div>
      </div>

      <div className={`inverweb-side-bar-close${activePanel === 'offcanvas' ? ' show' : ''}`} role="dialog" aria-modal="true" aria-label="Sidebar menu" aria-hidden={activePanel !== 'offcanvas'}>
        <div className="shape-right-top">
          <img src="/assets/images/banner/shape-it-1.svg" alt="" />
        </div>
        <button className="close-icon-menu tmponhover" type="button" aria-label="Close sidebar menu" onClick={closePanels}>
          <i className="feather-x" />
        </button>
        <div className="logo-side">
          <Link href="/" onClick={closePanels}>
            <img className="logo-light" src={sidebarLogo.light} alt={sidebarLogo.alt} />
            <img className="logo-dark" src={sidebarLogo.dark} alt={sidebarLogo.alt} />
          </Link>
        </div>
        <div className="side-info">
          <div className="contact-list">
            <h4>Office Address</h4>
            <p>456/B, Madison Avenue Kora Road<br /> New York, NY 10022</p>
          </div>
          <div className="contact-list">
            <h4>Phone Number</h4>
            <a href="tel:+8801712345678">+0989 7876 9865 9</a>
            <a href="tel:+8801712345678">+(090) 8765 86543 85</a>
          </div>
          <div className="contact-list">
            <h4>Email Address</h4>
            <a href="mailto:info@yourdomain.com">info@example.com</a>
            <a href="mailto:info@yourdomain.com">example.mail@hum.com</a>
          </div>
        </div>

        <div className="row g-3 mt--15" id="animated-lightbox2">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            const imagePath = `/assets/images/portfolio/portfolio-0${item}.jpg`

            return (
              <a className="col-lg-4 col-md-6 col-sm-6 col-12" href={imagePath} key={imagePath}>
                <div className="tmp-gallery icon-center">
                  <div className="thumbnail">
                    <img className="radius-small" src={imagePath} alt="Corporate Image" />
                  </div>
                  <div className="video-icon">
                    <div className="btn-default rounded-player sm-size">
                      <span><i className="feather-zoom-in" /></span>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <ul className="social-icon social-default justify-content-start mt--30">
          <li><a href="https://www.facebook.com/"><i className="feather-facebook" /></a></li>
          <li><a href="https://www.twitter.com"><i className="feather-twitter" /></a></li>
          <li><a href="https://www.instagram.com/"><i className="feather-instagram" /></a></li>
          <li><a href="https://www.linkdin.com/"><i className="feather-linkedin" /></a></li>
        </ul>
      </div>

      <div className={`popup-mobile-menu${activePanel === 'mobile' ? ' active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/" onClick={closePanels}>
                <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button" type="button" aria-label="Close mobile menu" onClick={closePanels}>
                <i className="feather-x" />
              </button>
            </div>
          </div>
          <ul className={`mainmenu${isOnepageRoute ? ' onepagenav' : ''}`}>
            {isOnepageRoute ? (
              <>
                <li className="with-megamenu has-menu-child-item">
                  <a
                    className={openMobileSection === 'Home' ? 'open' : ''}
                    href="#hero"
                    aria-expanded={openMobileSection === 'Home'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Home' ? '' : 'Home')
                    }}
                  >
                    Home
                  </a>
                  <div className="tmp-megamenu with-mega-item-2 full-width-mega" style={{ display: openMobileSection === 'Home' ? 'block' : 'none' }}>
                    <div className="wrapper demos-area-drop-down">
                      <div className="row row--0">
                        <div className="col-lg-12">
                          <div className="tab_wrapper onapge-multipage-tab-wrapper">
                            <div className="nav nav-pills me-3 tabs-nav" role="tablist">
                              <button
                                className={`nav-links tmp-btn${mobileDemoTab === 'multipage' ? ' active' : ''}`}
                                data-target=".multipage_content"
                                type="button"
                                onClick={() => setMobileDemoTab('multipage')}
                              >
                                Multipage
                              </button>
                              <button
                                className={`nav-links tmp-btn${mobileDemoTab === 'onepage' ? ' active' : ''}`}
                                data-target=".onepage_content"
                                type="button"
                                onClick={() => setMobileDemoTab('onepage')}
                              >
                                Onepage
                              </button>
                            </div>
                            <div className="tab-content">
                              <div className={`tab-pane multipage_content${mobileDemoTab === 'multipage' ? ' active show' : ''}`}>
                                <DemoGrid demos={multipageDemos} onNavigate={closePanels} />
                              </div>
                              <div className={`tab-pane onepage_content${mobileDemoTab === 'onepage' ? ' active show' : ''}`}>
                                <DemoGrid demos={onepageDemos} onNavigate={closePanels} />
                              </div>
                            </div>
                          </div>

                          <div className="load-demo-btn-wrap mt--15">
                            <div className="load-demo-btn text-center">
                              <span className="color-white b3">
                                Scroll to view more{' '}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {[
                  ['with-megamenu', '#about', 'About'],
                  ['with-megamenu position-relative', '#service', 'Service'],
                  ['has-droupdown', '#project', 'Project'],
                  ['has-droupdown', '#team', 'Team'],
                  ['has-droupdown', '#blog', 'Blog'],
                  ['', '#contactus', 'Contact'],
                ].map(([className, href, label]) => (
                  <li className={className} key={href}>
                    <a href={href} onClick={closePanels}>{label}</a>
                  </li>
                ))}
              </>
            ) : (
              <>
                <li className="with-megamenu has-menu-child-item">
                  <Link
                    className={openMobileSection === 'Home' ? 'open' : ''}
                    href="/#"
                    aria-expanded={openMobileSection === 'Home'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Home' ? '' : 'Home')
                    }}
                  >
                    Home
                  </Link>
                  <div className="tmp-megamenu with-mega-item-2 full-width-mega" style={{ display: openMobileSection === 'Home' ? 'block' : 'none' }}>
                    <div className="wrapper demos-area-drop-down">
                      <div className="row row--0">
                        <div className="col-lg-12">
                          <div className="tab_wrapper onapge-multipage-tab-wrapper">
                            <div className="nav nav-pills me-3 tabs-nav" role="tablist">
                              <button
                                className={`nav-links tmp-btn${mobileDemoTab === 'multipage' ? ' active' : ''}`}
                                data-target=".multipage_content"
                                type="button"
                                onClick={() => setMobileDemoTab('multipage')}
                              >
                                Multipage
                              </button>
                              <button
                                className={`nav-links tmp-btn${mobileDemoTab === 'onepage' ? ' active' : ''}`}
                                data-target=".onepage_content"
                                type="button"
                                onClick={() => setMobileDemoTab('onepage')}
                              >
                                Onepage
                              </button>
                            </div>
                            <div className="tab-content">
                              <div className={`tab-pane multipage_content${mobileDemoTab === 'multipage' ? ' active show' : ''}`}>
                                <DemoGrid demos={multipageDemos} onNavigate={closePanels} />
                              </div>
                              <div className={`tab-pane onepage_content${mobileDemoTab === 'onepage' ? ' active show' : ''}`}>
                                <DemoGrid demos={onepageDemos} onNavigate={closePanels} />
                              </div>
                            </div>
                          </div>
                          <div className="load-demo-btn-wrap mt--15">
                            <div className="load-demo-btn text-center">
                              <span className="color-white b3">
                                Scroll to view more{' '}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="with-megamenu has-menu-child-item">
                  <Link
                    className={openMobileSection === 'Pages' ? 'open' : ''}
                    href="/#"
                    aria-expanded={openMobileSection === 'Pages'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Pages' ? '' : 'Pages')
                    }}
                  >
                    Pages
                  </Link>
                  <div className="tmp-megamenu with-mega-item-2 full-width-mega" style={{ display: openMobileSection === 'Pages' ? 'block' : 'none' }}>
                    <div className="wrapper">
                      <div className="row row--0">
                        {pagesColumns.map((column, index) => (
                          <div className="col-xl-2 col-lg-3 single-mega-item" key={index}>
                            <ul className="mega-menu-item">
                              {column.map((item, itemIndex) => (
                                <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="col-xl-4 d-lg-none d-xl-block">
                          <Link href="/contact" className="feature-image-add-header" onClick={closePanels}>
                            <img loading="lazy" src="/assets/images/banner/header-contact-dark.webp" alt="corporate-business" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="with-megamenu has-menu-child-item position-relative">
                  <Link
                    className={openMobileSection === 'Service' ? 'open' : ''}
                    href="/#"
                    aria-expanded={openMobileSection === 'Service'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Service' ? '' : 'Service')
                    }}
                  >
                    Service
                  </Link>
                  <div className="tmp-megamenu width-small-mega" style={{ display: openMobileSection === 'Service' ? 'block' : 'none' }}>
                    <div className="wrapper">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mega-top-banner">
                            <div className="content">
                              <h4 className="title">Service hub</h4>
                              <p className="description">Complete Business Consultation for You, All Services in One Place.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row row--15">
                        <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                          <h3 className="tmp-short-title">Service Layout</h3>
                          <ul className="mega-menu-item">
                            {serviceLayoutLinks.map((item, itemIndex) => (
                              <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                          <h3 className="tmp-short-title">Service Details</h3>
                          <ul className="mega-menu-item">
                            {serviceDetailLinks.map((item, itemIndex) => (
                              <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <ul className="nav-quick-access">
                            {['Quick Start Guide', 'For Open Source', 'API Status', 'Support'].map((label) => (
                              <li key={label}>
                                <Link href="/contact" onClick={closePanels}><i className="feather-folder-minus" /> {label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="has-droupdown has-menu-child-item">
                  <Link
                    className={openMobileSection === 'Project' ? 'open' : ''}
                    href="/#"
                    aria-expanded={openMobileSection === 'Project'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Project' ? '' : 'Project')
                    }}
                  >
                    Project
                  </Link>
                  <ul className="submenu" style={{ display: openMobileSection === 'Project' ? 'block' : 'none' }}>
                    {projectLinks.map((item, itemIndex) => (
                      <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                    ))}
                    <li className="has-third-lev">
                      <a
                        href="/#"
                        onClick={(event) => {
                          event.preventDefault()
                          toggleNested('project-portfolio-details')
                        }}
                        aria-expanded={!!openNested['project-portfolio-details']}
                      >
                        Portfolio Details
                      </a>
                      <ul className="submenu" style={{ display: openNested['project-portfolio-details'] ? 'block' : 'none' }}>
                        {projectDetailLinks.map((item, itemIndex) => (
                          <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-droupdown has-menu-child-item">
                  <Link
                    className={openMobileSection === 'Blog' ? 'open' : ''}
                    href="/#"
                    aria-expanded={openMobileSection === 'Blog'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Blog' ? '' : 'Blog')
                    }}
                  >
                    Blog
                  </Link>
                  <ul className="submenu" style={{ display: openMobileSection === 'Blog' ? 'block' : 'none' }}>
                    {blogLinks.map((item, itemIndex) => (
                      <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                    ))}
                    <li className="has-third-lev">
                      <a
                        href="/#"
                        onClick={(event) => {
                          event.preventDefault()
                          toggleNested('blog-blog-details')
                        }}
                        aria-expanded={!!openNested['blog-blog-details']}
                      >
                        Blog Details
                      </a>
                      <ul className="submenu" style={{ display: openNested['blog-blog-details'] ? 'block' : 'none' }}>
                        {blogDetailLinks.map((item, itemIndex) => (
                          <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/contact" onClick={closePanels}>Contact</Link>
                </li>

                <li className="with-megamenu has-menu-child-item">
                  <Link
                    className={openMobileSection === 'Elements' ? 'open' : ''}
                    href="/#"
                    aria-expanded={openMobileSection === 'Elements'}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(openMobileSection === 'Elements' ? '' : 'Elements')
                    }}
                  >
                    Elements
                  </Link>
                  <div className="tmp-megamenu with-mega-item-2 full-width-mega" style={{ display: openMobileSection === 'Elements' ? 'block' : 'none' }}>
                    <div className="wrapper">
                      <div className="row row--0">
                        <div className="col-lg-3">
                          <div className="feature-image-add-header">
                            <img loading="lazy" src="/assets/images/banner/04.webp" alt="corporate-business" />
                          </div>
                        </div>
                        {elementsColumns.map((column, index) => (
                          <div className={index === 2 ? 'col-lg-3' : 'col-lg-3 single-mega-item'} key={index}>
                            <ul className="mega-menu-item">
                              {column.map((item, itemIndex) => (
                                <MenuLinkItem item={item} key={`${item[0]}-${item[1]}-${itemIndex}`} onNavigate={closePanels} />
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

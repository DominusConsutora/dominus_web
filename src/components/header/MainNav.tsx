'use client'

import Link from 'next/link'
import { useState } from 'react'
type DemoTab = 'multipage' | 'onepage'

interface MainNavProps {
  homeActive?: boolean;
}

export default function MainNav({ homeActive = false }: MainNavProps) {
  const [demoTab, setDemoTab] = useState<DemoTab>('multipage')

  return (
    <nav className="mainmenu-nav d-none d-lg-block" data-lenis-prevent-wheel="">
        <ul className="mainmenu">
            <li className={`with-megamenu has-menu-child-item${homeActive ? ' active' : ''}`}>
                <Link href="/#">Home</Link>
                <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                    <div className="wrapper demos-area-drop-down">
                        <div className="row row--0">
                            <div className="col-lg-12">
                                <div className="tab_wrapper onapge-multipage-tab-wrapper">
                                    <div
                                        className="nav nav-pills me-3 tabs-nav"
                                        role="tablist"
                                    >
                                        <button
                                            className={`nav-links tmp-btn${demoTab === 'multipage' ? ' active' : ''}`}
                                            type="button"
                                            aria-selected={demoTab === 'multipage'}
                                            onClick={() => setDemoTab('multipage')}
                                        >
                                            Multipage
                                        </button>
                                        <button
                                            className={`nav-links tmp-btn${demoTab === 'onepage' ? ' active' : ''}`}
                                            type="button"
                                            aria-selected={demoTab === 'onepage'}
                                            onClick={() => setDemoTab('onepage')}
                                        >
                                            Onepage
                                        </button>
                                    </div>
                                    <div className="tab-content">
                                        <div
                                            className={`tab-pane multipage_content${demoTab === 'multipage' ? ' active show' : ''}`}
                                        >
                                            {/* multipage area start */}
                                            <ul className="mega-menu-item">
                                                <li>
                                                    <Link
                                                        href="/"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/01-business-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/01-index-consulting">
                                                        Business Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Popular
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-01-index-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-01-business-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-01-index-consulting">
                                                        Business Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Popular
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/02-index-business-consulting-2"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/02-business-consulting-2.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/02-index-business-consulting-2">
                                                        Business Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-02-index-business-consulting-2"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-02-business-consulting-2.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-02-index-business-consulting-2">
                                                        Business Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/24-ai-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/24-ai-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/24-ai-agency">
                                                        Ai agency
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-24-ai-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-24-ai-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-24-ai-agency">
                                                        Ai agency
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/03-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/03-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/03-agency">
                                                        Agency{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-03-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-03-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-03-agency">
                                                        Agency{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/04-services-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/04-services-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/04-services-agency">
                                                        Services Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-04-services-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-04-services-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-04-services-agency">
                                                        Services Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/05-corporate"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/05-corporate.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/05-corporate">Corporate</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-05-corporate"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-05-corporate.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-05-corporate">
                                                        Corporate
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/11-hr-website"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/11-personal-portfolio.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/11-hr-website">HR Website</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-11-hr-website"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-11-personal-portfolio.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-11-hr-website">
                                                        HR Website
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/06-startup"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/06-startup.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/06-startup">Startup Business</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-06-startup"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-06-startup.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-06-startup">
                                                        Startup Business
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/07-creative-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/07-creative-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/07-creative-agency">
                                                        Creative Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-07-creative-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-07-creative-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-07-creative-agency">
                                                        Creative Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/08-business"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/08-business.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/08-business">Business</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-08-business"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-08-business.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-08-business">Business</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/09-digital-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/09-digital-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/09-digital-agency">
                                                        Digital Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-09-digital-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-09-digital-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-09-digital-agency">
                                                        Digital Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/10-marketing-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/10-marketing-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/10-marketing-agency">
                                                        Marketing Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-10-marketing-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-10-marketing-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-10-marketing-agency">
                                                        Marketing Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/12-index-business-consulting-3"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/12-index-business-consulting-3.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/12-index-business-consulting-3">
                                                        Business Consulting 3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-12-index-business-consulting-3"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-12-index-business-consulting-3.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-12-index-business-consulting-3">
                                                        Business Consulting 3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/13-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/13-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/13-agency">Agency 2</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-13-agency"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-13-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-13-agency">Agency 2</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/14-financial-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/14-financial-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/14-financial-consulting">
                                                        Financial Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-14-financial-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-14-financial-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-14-financial-consulting">
                                                        Financial Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/15-business-coach"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/15-business-coach.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/15-business-coach">
                                                        Business Coach
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-15-business-coach"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-15-business-coach.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-15-business-coach">
                                                        Business Coach
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/16-real-estate-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/16-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/16-real-estate-consulting">
                                                        Real Estate Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-16-real-estate-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-16-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-16-real-estate-consulting">
                                                        Real Estate Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/17-real-estate-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/17-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/17-real-estate-consulting">
                                                        Real Estate Consulting 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-17-real-estate-consulting"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-17-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-17-real-estate-consulting">
                                                        Real Estate Consulting 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/18-it-solution"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/18-it-solution.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/18-it-solution">It Company </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-18-it-solution"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-18-it-solution.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-18-it-solution">
                                                        It Company{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/19-personal-advisory"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/19-personal-advisory.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/19-personal-advisory">
                                                        Personal Advisory
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-19-personal-advisory"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-19-personal-advisory.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-19-personal-advisory">
                                                        Personal Advisory
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/20-gym-fitness"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/20-gym-fitness.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/20-gym-fitness">
                                                        Gym &amp; Fitness
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-20-gym-fitness"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-20-gym-fitness.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-20-gym-fitness">
                                                        Gym &amp; Fitness
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/21-medical"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/21-medical.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/21-medical">
                                                        Medical &amp; Health Care
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-21-medical"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-21-medical.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-21-medical">
                                                        Medical &amp; Health Care
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/22-solar"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/22-solar.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/22-solar">
                                                        Solar Renewable Energy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-22-solar"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-22-solar.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-22-solar">
                                                        Solar Renewable Energy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/23-event"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/23-event.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/22-solar">
                                                        Event &amp; Conferance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-23-event"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-23-event.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-23-event">
                                                        Event &amp; Conferance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/25-architecture"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/25-architechture.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/25-architecture">
                                                        Architecture
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-25-architecture"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-25-architecture.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-25-architecture">
                                                        Architecture
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/26-construction"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/26-construction.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/26-construction">
                                                        Construction
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/white-26-construction"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-26-construction.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/white-26-construction">
                                                        Construction
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#" className="thumbnail-demos">
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/coming-soon.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/#">
                                                        SEO Website{" "}
                                                        <span className="tmp-badge-card success">
                                                            Coming Soon
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* multipage area end */}
                                        </div>
                                        <div
                                            className={`tab-pane onepage_content${demoTab === 'onepage' ? ' active show' : ''}`}
                                        >
                                            {/* onepage area start */}
                                            <ul className="mega-menu-item">
                                                <li>
                                                    <Link
                                                        href="/onepage-one"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/01-business-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-one">
                                                        Business Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Popular
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-one-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-01-business-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-one-white">
                                                        Business Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Popular
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-two"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/02-business-consulting-2.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-two">
                                                        Business Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-two-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-02-business-consulting-2.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-two-white">
                                                        Business Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-24"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/24-ai-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-24">
                                                        Ai agency
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-24-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-24-ai-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-24-white">
                                                        Ai agency
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-three"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/03-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-three">
                                                        Agency{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-three-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-03-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-three-white">
                                                        Agency{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-four"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/04-services-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-four">
                                                        Services Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-four-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-04-services-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-four-white">
                                                        Services Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-five"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/05-corporate.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-five">Corporate</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-five-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-05-corporate.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-five-white">
                                                        Corporate
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-eleven"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/11-personal-portfolio.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-eleven">HR Website</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-eleven-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-11-personal-portfolio.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-eleven-white">
                                                        HR Website
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-six"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/06-startup.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-six">
                                                        Startup Business
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-six-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-06-startup.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-six-white">
                                                        Startup Business
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-seven"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/07-creative-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-seven">
                                                        Creative Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-seven-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-07-creative-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-seven-white">
                                                        Creative Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-eight"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/08-business.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-eight">Business</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-eight-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-08-business.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-eight-white">
                                                        Business
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-nine"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/09-digital-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-nine">Digital Agency</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-nine-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-09-digital-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-nine-white">
                                                        Digital Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-ten"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/10-marketing-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-ten">
                                                        Marketing Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-ten-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-10-marketing-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-ten-white">
                                                        Marketing Agency
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-twelve"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/12-index-business-consulting-3.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-twelve">
                                                        Business Consulting 3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-twelve-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-12-index-business-consulting-3.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-twelve-white">
                                                        Business Consulting 3
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-thirteen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/13-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-thirteen">Agency 2</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-thirteen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-13-agency.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-thirteen-white">
                                                        Agency 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-fourteen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/14-financial-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-fourteen">
                                                        Financial Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-fourteen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-14-financial-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-fourteen-white">
                                                        Financial Consulting{" "}
                                                        <span className="tmp-badge-card success">
                                                            Hot
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-fifteen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/15-business-coach.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-fifteen">
                                                        Business Coach
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-fifteen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-15-business-coach.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-fifteen-white">
                                                        Business Coach
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-sixteen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/16-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-sixteen">
                                                        Real Estate Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-sixteen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-16-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-sixteen-white">
                                                        Real Estate Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-seventeen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/17-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-seventeen">
                                                        Real Estate Consulting 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-seventeen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-17-real-estate-consulting.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-seventeen-white">
                                                        Real Estate Consulting 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-eighteen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/18-it-solution.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-eighteen">
                                                        It Company{" "}
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-eighteen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-18-it-solution.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-eighteen-white">
                                                        It Company{" "}
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-nineteen"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/19-personal-advisory.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-nineteen">
                                                        Personal Advisory
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-nineteen-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-19-personal-advisory.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-nineteen-white">
                                                        Personal Advisory
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-twenty"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/20-gym-fitness.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-twenty">
                                                        Gym &amp; Fitness
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-twenty-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-20-gym-fitness.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-twenty-white">
                                                        Gym &amp; Fitness
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-21"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/21-medical.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-21">
                                                        Medical &amp; Health Care
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-21-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-21-medical.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-21-white">
                                                        Medical &amp; Health Care
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-22"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/22-solar.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-22">
                                                        Solar Renewable Energy
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-22-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-22-solar.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-22-white">
                                                        Solar Renewable Energy
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-25"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/25-architechture.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-25">
                                                        Architecture
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-25-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-25-architecture.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-25-white">
                                                        Architecture
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-26"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/26-construction.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-26">
                                                        Construction
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/onepage-26-white"
                                                        className="thumbnail-demos"
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/white-26-construction.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/onepage-26-white">
                                                        Construction
                                                        <span className="tmp-badge-card success">
                                                            New
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#" className="thumbnail-demos">
                                                        <img
                                                            loading="lazy"
                                                            src="/assets/images/demo/coming-soon.webp"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <Link href="/#">
                                                        SEO Website{" "}
                                                        <span className="tmp-badge-card success">
                                                            Coming Soon
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* multipage area end */}
                                        </div>
                                    </div>
                                </div>
                                <div className="load-demo-btn-wrap mt--15">
                                    <div className="load-demo-btn text-center">
                                        <span className="color-white b3">
                                            Scroll to view more{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-arrow-down-up"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <span class="bg-content">corpox</span> */}
                    </div>
                </div>
            </li>
            <li className="with-megamenu has-menu-child-item">
                <Link href="/#">
                    Pages
                    
                </Link>
                <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                    <div className="wrapper">
                        <div className="row row--0">
                            <div className="col-xl-2 col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/about">About Company</Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Our Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-two">Our Service Two</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-three">
                                            Our Service Three
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-four">Our Service Four</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-five">Our Service Five</Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details-two/financial-growth">
                                            Service Details Two
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/service-details-three/digital-transformation">
                                            Service Details Three
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/service-details-four/digital-transformation">
                                            Service Details Four
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details/management-leadership">Service Details</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/team-two">Our Team Two</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-history">
                                            Our History{" "}
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/clients">
                                            Clients{" "}
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/office-branch">
                                            Office Branch{" "}
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team-three">Our Team Three</Link>
                                    </li>
                                    <li>
                                        <Link href="/team/benjamin-taylor">Team Details</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">Pricing Plan</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing-two">Pricing Plan Two</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing-three">Pricing Plan Three</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">Portfolio Default</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-three-column">
                                            Portfolio 3 Column
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-full-width">
                                            Portfolio Full Width
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-grid-layout">
                                            Portfolio Grid Layout
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-box-layout">
                                            Portfolio Box Layout
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-card-hover">
                                            Portfolio Card Hover
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-bottom-content">
                                            Portfolio with Content
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-details/brand-refresh-venture">
                                            Portfolio Details
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/portfolio-details-two/brand-refresh-venture">
                                            Portfolio Details Two
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-details-three/brand-refresh-venture">
                                            Portfolio Details Video
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-details-five/brand-refresh-venture">
                                            Portfolio Details Video 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-details-four/brand-refresh-venture">
                                            Portfolio Details Slider
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/timeline">Working Process</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-gallery">Our Gallery</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-gallery-col-3">Gallery col 3</Link>
                                    </li>
                                    <li>
                                        <Link href="/career">Career Oppertunity</Link>
                                    </li>
                                    <li>
                                        <Link href="/career-details">Career Details</Link>
                                    </li>
                                    <li>
                                        <Link href="/apply">Apply Job</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">Blog Grid</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-list-view">Blog List View</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-bento">Blog Bento View</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog/best-corporate-tips">Blog Details</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/blog-details-standard/best-corporate-tips">
                                            Blog Standard{" "}
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            Faq's <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial-two">Testimonial Two</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial-three">
                                            Testimonial Three
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial-modern">
                                            Testimonial Modern
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Page</Link>
                                    </li>
                                    <li>
                                        <Link href="/shop">
                                            Shop <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop-details">
                                            Shop Details
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart">
                                            Cart <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/checkout">
                                            Checkout{" "}
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/error">404 Page</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-condition">
                                            Terms &amp; Condition
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-4 d-lg-none d-xl-block">
                                <Link
                                    href="/contact"
                                    className="feature-image-add-header"
                                >
                                    <img
                                        loading="lazy"
                                        src="/assets/images/banner/header-contact-dark.webp"
                                        alt="corporate-business"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="with-megamenu has-menu-child-item position-relative">
                <Link href="/service">Service</Link>
                <div className="tmp-megamenu width-small-mega">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mega-top-banner">
                                    <div className="content">
                                        <h4 className="title">Service hub</h4>
                                        <p className="description">
                                            Complete Business Consultation for You, All
                                            Services in One Place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row--15">
                            <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                <h3 className="tmp-short-title">Service Layout</h3>
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/service">Our Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-two">Our Service Two</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-three">
                                            Our Service Three
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-four">Our Service Four</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-five">Our Service Five</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-service-six">Our Service Six</Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/service-list">
                                            Service List Style{" "}
                                            <span className="tmp-badge-card">New</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                <h3 className="tmp-short-title">Service Details</h3>
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/service-details/management-leadership">
                                            Service Details{" "}
                                            <span className="tmp-badge-card">Popular</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details-center/financial-growth">
                                            Service Details center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details-two/digital-transformation">
                                            Service Details Two
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/service-details-three/financial-growth">
                                            Service Details Three
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/service-details-four/digital-transformation">
                                            Service Details Four
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/#">
                                            Service List Style{" "}
                                            <span className="tmp-badge-card">Coming</span>
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link href="/#">
                                            Service Details Six{" "}
                                            <span className="tmp-badge-card">Coming</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav-quick-access">
                                    <li>
                                        <Link href="/contact">
                                            <i className="feather-folder-minus" /> Quick Start
                                            Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <i className="feather-folder-minus" /> For Open
                                            Source
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <i className="feather-folder-minus" /> API Status
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <i className="feather-folder-minus" /> Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="has-droupdown has-menu-child-item">
                <Link href="/#">Project</Link>
                <ul className="submenu">
                    <li>
                        <Link href="/portfolio">Portfolio Default</Link>
                    </li>
                    <li>
                        <Link href="/portfolio-three-column">
                            Portfolio Three Column
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio-full-width">Portfolio Full Width</Link>
                    </li>
                    <li>
                        <Link href="/portfolio-grid-layout">
                            Portfolio Grid Layout
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio-box-layout">Portfolio Box Layout</Link>
                    </li>
                    <li>
                        <Link href="/portfolio-card-hover">Portfolio Card Hover</Link>
                    </li>
                    <li>
                        <Link href="/portfolio-bottom-content">
                            Portfolio Bottom Content
                        </Link>
                    </li>
                    <li className="has-third-lev">
                        <Link href="/portfolio-details/brand-refresh-venture">Portfolio Details</Link>
                        <ul className="submenu">
                            <li>
                                <Link href="/portfolio-details/brand-refresh-venture">Portfolio Details</Link>
                            </li>
                            <li>
                                <Link href="/portfolio-details-two/brand-refresh-venture">
                                    Portfolio Details Two
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio-details-three/brand-refresh-venture">
                                    Portfolio Details Video
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio-details-five/brand-refresh-venture">
                                    Portfolio Details Video 2
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio-details-four/brand-refresh-venture">
                                    Portfolio Details Slider
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="has-droupdown has-menu-child-item">
                <Link href="/#">Blog</Link>
                <ul className="submenu">
                    <li>
                        <Link href="/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                        <Link href="/blog-list-view">Blog List View</Link>
                    </li>
                    <li>
                        <Link href="/blog-bento">Blog Bento</Link>
                    </li>
                    <li className="has-third-lev">
                        <Link href="/#">Blog Details</Link>
                        <ul className="submenu">
                            <li>
                                <Link href="/blog/corporate-success-strategy">Blog Details</Link>
                            </li>
                            <li>
                                <Link href="/blog-details-standard/best-corporate-tips">
                                    Details Standard{" "}
                                    <span className="tmp-badge-card">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details-right-sidebar/best-corporate-tips">
                                    Blog Details Right Sidebar
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details-left-sidebar/best-corporate-tips">
                                    Blog Details Left Sidebar
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details-video/best-corporate-tips">Blog Details Video</Link>
                            </li>
                            <li>
                                <Link href="/blog-details-video-two/best-corporate-tips">
                                    Blog Details Video Two
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details-video-popup/best-corporate-tips">
                                    Blog Details Video Popup
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li className="with-megamenu has-menu-child-item">
                <Link href="/#">Elements</Link>
                <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                    <div className="wrapper">
                        <div className="row row--0">
                            <div className="col-lg-3">
                                <div className="feature-image-add-header">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/banner/04.webp"
                                        alt="corporate-business"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/style-guide">
                                            Style Guide{" "}
                                            <span className="tmp-badge-card">Hot</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/button">Button Page</Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Our Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details/management-leadership">Service Details</Link>
                                    </li>
                                    <li>
                                        <Link href="/accordion">Accordion Style</Link>
                                    </li>
                                    <li>
                                        <Link href="/progressbar">Progressbar</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">Blog Grid</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/modern-tab">Modern Tabs</Link>
                                    </li>
                                    <li>
                                        <Link href="/social-share">Social Share</Link>
                                    </li>
                                    <li>
                                        <Link href="/brand">Brand Style</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Page</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/counter">Counter Up</Link>
                                    </li>
                                    <li>
                                        <Link href="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link href="/error">404 Page</Link>
                                    </li>
                                    <li>
                                        <Link href="/video">Video Style</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">Our Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">Pricing Plan</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/tooltip">Tool Tip</Link>
                                    </li>
                                    <li>
                                        <Link href="/section-title">Section Title</Link>
                                    </li>
                                    <li>
                                        <Link href="/team-style">Team Style</Link>
                                    </li>
                                    <li>
                                        <Link href="/typography">Typography</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <ul className="mega-menu-item">
                                    <li>
                                        <Link href="/form-style">Form Style</Link>
                                    </li>
                                    <li>
                                        <Link href="/pagination">Pagination</Link>
                                    </li>
                                    <li>
                                        <Link href="/avatars">Avatars</Link>
                                    </li>
                                    <li>
                                        <Link href="/animated-heading">Heading Split</Link>
                                    </li>
                                    <li>
                                        <Link href="/lightbox">Light Box</Link>
                                    </li>
                                    <li>
                                        <Link href="/call-to-action">Call To Action</Link>
                                    </li>
                                    <li>
                                        <Link href="/banner-slider">Banner Slider</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-style">About Style</Link>
                                    </li>
                                    <li>
                                        <Link href="/timeline">Timeline</Link>
                                    </li>
                                    <li>
                                        <Link href="/tab">Tab Style</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
  )
}

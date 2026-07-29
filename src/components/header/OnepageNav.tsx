"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

export type DemoItem = {
  href: string;
  image: string;
  label: string;
  badge?: {
    label: string;
    className?: string;
  };
};

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#service", label: "Service" },
  { href: "#project", label: "Project" },
  { href: "#team", label: "Team" },
  { href: "#blog", label: "Blog" },
  { href: "#contactus", label: "Contact" },
];

const serviceDetailLinks = [
  { href: "/service-details/management-leadership", label: "Service Details", badge: "Popular" },
  { href: "/service-details-center/financial-growth", label: "Service Details center" },
  { href: "/service-details-two/digital-transformation", label: "Service Details Two" },
  { href: "/service-details-three/financial-growth", label: "Service Details Three" },
  { href: "/service-details-four/digital-transformation", label: "Service Details Four" },
];

export const multipageDemos: DemoItem[] = [
  { href: "/01-index-consulting", image: "/assets/images/demo/01-business-consulting.webp", label: "Business Consulting", badge: { label: "Popular", className: "success" } },
  { href: "/white-01-index-consulting", image: "/assets/images/demo/white-01-business-consulting.webp", label: "Business Consulting", badge: { label: "Popular", className: "success" } },
  { href: "/02-index-business-consulting-2", image: "/assets/images/demo/02-business-consulting-2.webp", label: "Business Consulting" },
  { href: "/white-02-index-business-consulting-2", image: "/assets/images/demo/white-02-business-consulting-2.webp", label: "Business Consulting" },
  { href: "/24-ai-agency", image: "/assets/images/demo/24-ai-agency.webp", label: "Ai agency", badge: { label: "New", className: "success" } },
  { href: "/white-24-ai-agency", image: "/assets/images/demo/white-24-ai-agency.webp", label: "Ai agency", badge: { label: "New", className: "success" } },
  { href: "/03-agency", image: "/assets/images/demo/03-agency.webp", label: "Agency", badge: { label: "Hot", className: "success" } },
  { href: "/white-03-agency", image: "/assets/images/demo/white-03-agency.webp", label: "Agency", badge: { label: "Hot", className: "success" } },
  { href: "/04-services-agency", image: "/assets/images/demo/04-services-agency.webp", label: "Services Agency" },
  { href: "/white-04-services-agency", image: "/assets/images/demo/white-04-services-agency.webp", label: "Services Agency" },
  { href: "/05-corporate", image: "/assets/images/demo/05-corporate.webp", label: "Corporate" },
  { href: "/white-05-corporate", image: "/assets/images/demo/white-05-corporate.webp", label: "Corporate" },
  { href: "/11-hr-website", image: "/assets/images/demo/11-personal-portfolio.webp", label: "HR Website" },
  { href: "/white-11-hr-website", image: "/assets/images/demo/white-11-personal-portfolio.webp", label: "HR Website" },
  { href: "/06-startup", image: "/assets/images/demo/06-startup.webp", label: "Startup Business" },
  { href: "/white-06-startup", image: "/assets/images/demo/white-06-startup.webp", label: "Startup Business" },
  { href: "/07-creative-agency", image: "/assets/images/demo/07-creative-agency.webp", label: "Creative Agency" },
  { href: "/white-07-creative-agency", image: "/assets/images/demo/white-07-creative-agency.webp", label: "Creative Agency" },
  { href: "/08-business", image: "/assets/images/demo/08-business.webp", label: "Business" },
  { href: "/white-08-business", image: "/assets/images/demo/white-08-business.webp", label: "Business" },
  { href: "/09-digital-agency", image: "/assets/images/demo/09-digital-agency.webp", label: "Digital Agency" },
  { href: "/white-09-digital-agency", image: "/assets/images/demo/white-09-digital-agency.webp", label: "Digital Agency" },
  { href: "/10-marketing-agency", image: "/assets/images/demo/10-marketing-agency.webp", label: "Marketing Agency" },
  { href: "/white-10-marketing-agency", image: "/assets/images/demo/white-10-marketing-agency.webp", label: "Marketing Agency" },
  { href: "/12-index-business-consulting-3", image: "/assets/images/demo/12-index-business-consulting-3.webp", label: "Business Consulting 3" },
  { href: "/white-12-index-business-consulting-3", image: "/assets/images/demo/white-12-index-business-consulting-3.webp", label: "Business Consulting 3" },
  { href: "/13-agency", image: "/assets/images/demo/13-agency.webp", label: "Agency 2" },
  { href: "/white-13-agency", image: "/assets/images/demo/white-13-agency.webp", label: "Agency 2" },
  { href: "/14-financial-consulting", image: "/assets/images/demo/14-financial-consulting.webp", label: "Financial Consulting", badge: { label: "Hot", className: "success" } },
  { href: "/white-14-financial-consulting", image: "/assets/images/demo/white-14-financial-consulting.webp", label: "Financial Consulting", badge: { label: "Hot", className: "success" } },
  { href: "/15-business-coach", image: "/assets/images/demo/15-business-coach.webp", label: "Business Coach" },
  { href: "/white-15-business-coach", image: "/assets/images/demo/white-15-business-coach.webp", label: "Business Coach" },
  { href: "/16-real-estate-consulting", image: "/assets/images/demo/16-real-estate-consulting.webp", label: "Real Estate Consulting" },
  { href: "/white-16-real-estate-consulting", image: "/assets/images/demo/white-16-real-estate-consulting.webp", label: "Real Estate Consulting" },
  { href: "/17-real-estate-consulting", image: "/assets/images/demo/17-real-estate-consulting.webp", label: "Real Estate Consulting 2" },
  { href: "/white-17-real-estate-consulting", image: "/assets/images/demo/white-17-real-estate-consulting.webp", label: "Real Estate Consulting 2" },
  { href: "/18-it-solution", image: "/assets/images/demo/18-it-solution.webp", label: "It Company" },
  { href: "/white-18-it-solution", image: "/assets/images/demo/white-18-it-solution.webp", label: "It Company" },
  { href: "/19-personal-advisory", image: "/assets/images/demo/19-personal-advisory.webp", label: "Personal Advisory" },
  { href: "/white-19-personal-advisory", image: "/assets/images/demo/white-19-personal-advisory.webp", label: "Personal Advisory" },
  { href: "/20-gym-fitness", image: "/assets/images/demo/20-gym-fitness.webp", label: "Gym & Fitness" },
  { href: "/white-20-gym-fitness", image: "/assets/images/demo/white-20-gym-fitness.webp", label: "Gym & Fitness" },
  { href: "/21-medical", image: "/assets/images/demo/21-medical.webp", label: "Medical & Health Care" },
  { href: "/white-21-medical", image: "/assets/images/demo/white-21-medical.webp", label: "Medical & Health Care" },
  { href: "/22-solar", image: "/assets/images/demo/22-solar.webp", label: "Solar Renewable Energy" },
  { href: "/white-22-solar", image: "/assets/images/demo/white-22-solar.webp", label: "Solar Renewable Energy" },
  { href: "/23-event", image: "/assets/images/demo/23-event.webp", label: "Event & Conferance" },
  { href: "/white-23-event", image: "/assets/images/demo/white-23-event.webp", label: "Event & Conferance" },
  { href: "/25-architecture", image: "/assets/images/demo/25-architechture.webp", label: "Architecture" },
  { href: "/white-25-architecture", image: "/assets/images/demo/white-25-architecture.webp", label: "Architecture" },
  { href: "/26-construction", image: "/assets/images/demo/26-construction.webp", label: "Construction", badge: { label: "New", className: "success" } },
  { href: "/white-26-construction", image: "/assets/images/demo/white-26-construction.webp", label: "Construction", badge: { label: "New", className: "success" } },
  { href: "/#", image: "/assets/images/demo/coming-soon.webp", label: "SEO Website", badge: { label: "Coming Soon", className: "success" } },
];

export const onepageDemos: DemoItem[] = [
  { href: "/onepage-one", image: "/assets/images/demo/01-business-consulting.webp", label: "Business Consulting", badge: { label: "Popular", className: "success" } },
  { href: "/onepage-one-white", image: "/assets/images/demo/white-01-business-consulting.webp", label: "Business Consulting", badge: { label: "Popular", className: "success" } },
  { href: "/onepage-two", image: "/assets/images/demo/02-business-consulting-2.webp", label: "Business Consulting" },
  { href: "/onepage-two-white", image: "/assets/images/demo/white-02-business-consulting-2.webp", label: "Business Consulting" },
  { href: "/onepage-24", image: "/assets/images/demo/24-ai-agency.webp", label: "Ai agency", badge: { label: "New", className: "success" } },
  { href: "/onepage-24-white", image: "/assets/images/demo/white-24-ai-agency.webp", label: "Ai agency", badge: { label: "New", className: "success" } },
  { href: "/onepage-three", image: "/assets/images/demo/03-agency.webp", label: "Agency", badge: { label: "Hot", className: "success" } },
  { href: "/onepage-three-white", image: "/assets/images/demo/white-03-agency.webp", label: "Agency", badge: { label: "Hot", className: "success" } },
  { href: "/onepage-four", image: "/assets/images/demo/04-services-agency.webp", label: "Services Agency" },
  { href: "/onepage-four-white", image: "/assets/images/demo/white-04-services-agency.webp", label: "Services Agency" },
  { href: "/onepage-five", image: "/assets/images/demo/05-corporate.webp", label: "Corporate" },
  { href: "/onepage-five-white", image: "/assets/images/demo/white-05-corporate.webp", label: "Corporate" },
  { href: "/onepage-eleven", image: "/assets/images/demo/11-personal-portfolio.webp", label: "HR Website" },
  { href: "/onepage-eleven-white", image: "/assets/images/demo/white-11-personal-portfolio.webp", label: "HR Website" },
  { href: "/onepage-six", image: "/assets/images/demo/06-startup.webp", label: "Startup Business" },
  { href: "/onepage-six-white", image: "/assets/images/demo/white-06-startup.webp", label: "Startup Business" },
  { href: "/onepage-seven", image: "/assets/images/demo/07-creative-agency.webp", label: "Creative Agency" },
  { href: "/onepage-seven-white", image: "/assets/images/demo/white-07-creative-agency.webp", label: "Creative Agency" },
  { href: "/onepage-eight", image: "/assets/images/demo/08-business.webp", label: "Business" },
  { href: "/onepage-eight-white", image: "/assets/images/demo/white-08-business.webp", label: "Business" },
  { href: "/onepage-nine", image: "/assets/images/demo/09-digital-agency.webp", label: "Digital Agency" },
  { href: "/onepage-nine-white", image: "/assets/images/demo/white-09-digital-agency.webp", label: "Digital Agency" },
  { href: "/onepage-ten", image: "/assets/images/demo/10-marketing-agency.webp", label: "Marketing Agency" },
  { href: "/onepage-ten-white", image: "/assets/images/demo/white-10-marketing-agency.webp", label: "Marketing Agency" },
  { href: "/onepage-twelve", image: "/assets/images/demo/12-index-business-consulting-3.webp", label: "Business Consulting 3" },
  { href: "/onepage-twelve-white", image: "/assets/images/demo/white-12-index-business-consulting-3.webp", label: "Business Consulting 3" },
  { href: "/onepage-thirteen", image: "/assets/images/demo/13-agency.webp", label: "Agency 2" },
  { href: "/onepage-thirteen-white", image: "/assets/images/demo/white-13-agency.webp", label: "Agency 2" },
  { href: "/onepage-fourteen", image: "/assets/images/demo/14-financial-consulting.webp", label: "Financial Consulting", badge: { label: "Hot", className: "success" } },
  { href: "/onepage-fourteen-white", image: "/assets/images/demo/white-14-financial-consulting.webp", label: "Financial Consulting", badge: { label: "Hot", className: "success" } },
  { href: "/onepage-fifteen", image: "/assets/images/demo/15-business-coach.webp", label: "Business Coach" },
  { href: "/onepage-fifteen-white", image: "/assets/images/demo/white-15-business-coach.webp", label: "Business Coach" },
  { href: "/onepage-sixteen", image: "/assets/images/demo/16-real-estate-consulting.webp", label: "Real Estate Consulting" },
  { href: "/onepage-sixteen-white", image: "/assets/images/demo/white-16-real-estate-consulting.webp", label: "Real Estate Consulting" },
  { href: "/onepage-seventeen", image: "/assets/images/demo/17-real-estate-consulting.webp", label: "Real Estate Consulting 2" },
  { href: "/onepage-seventeen-white", image: "/assets/images/demo/white-17-real-estate-consulting.webp", label: "Real Estate Consulting 2" },
  { href: "/onepage-eighteen", image: "/assets/images/demo/18-it-solution.webp", label: "It Company", badge: { label: "New", className: "success" } },
  { href: "/onepage-eighteen-white", image: "/assets/images/demo/white-18-it-solution.webp", label: "It Company", badge: { label: "New", className: "success" } },
  { href: "/onepage-nineteen", image: "/assets/images/demo/19-personal-advisory.webp", label: "Personal Advisory", badge: { label: "New", className: "success" } },
  { href: "/onepage-nineteen-white", image: "/assets/images/demo/white-19-personal-advisory.webp", label: "Personal Advisory", badge: { label: "New", className: "success" } },
  { href: "/onepage-twenty", image: "/assets/images/demo/20-gym-fitness.webp", label: "Gym & Fitness", badge: { label: "New", className: "success" } },
  { href: "/onepage-twenty-white", image: "/assets/images/demo/white-20-gym-fitness.webp", label: "Gym & Fitness", badge: { label: "New", className: "success" } },
  { href: "/onepage-21", image: "/assets/images/demo/21-medical.webp", label: "Medical & Health Care", badge: { label: "New", className: "success" } },
  { href: "/onepage-21-white", image: "/assets/images/demo/white-21-medical.webp", label: "Medical & Health Care", badge: { label: "New", className: "success" } },
  { href: "/onepage-22", image: "/assets/images/demo/22-solar.webp", label: "Solar Renewable Energy", badge: { label: "New", className: "success" } },
  { href: "/onepage-22-white", image: "/assets/images/demo/white-22-solar.webp", label: "Solar Renewable Energy", badge: { label: "New", className: "success" } },
  { href: "/onepage-25", image: "/assets/images/demo/25-architechture.webp", label: "Architecture", badge: { label: "New", className: "success" } },
  { href: "/onepage-25-white", image: "/assets/images/demo/white-25-architecture.webp", label: "Architecture", badge: { label: "New", className: "success" } },
  { href: "/onepage-26", image: "/assets/images/demo/26-construction.webp", label: "Construction", badge: { label: "New", className: "success" } },
  { href: "/onepage-26-white", image: "/assets/images/demo/white-26-construction.webp", label: "Construction", badge: { label: "New", className: "success" } },
  { href: "/#", image: "/assets/images/demo/coming-soon.webp", label: "SEO Website", badge: { label: "Coming Soon", className: "success" } },
];

export function DemoGrid({ demos, onNavigate }: { demos: DemoItem[]; onNavigate?: () => void }) {
  return (
    <ul className="mega-menu-item">
      {demos.map((demo, index) => (
        <li key={`${demo.href}-${index}`}>
          <Link href={demo.href} className="thumbnail-demos" onClick={onNavigate}>
            <img loading="lazy" src={demo.image} alt="" />
          </Link>
          <Link href={demo.href} onClick={onNavigate}>
            {demo.label}
            {demo.badge ? (
              <>
                {" "}
                <span className={`tmp-badge-card ${demo.badge.className ?? ""}`.trim()}>
                  {demo.badge.label}
                </span>
              </>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function OnepageNav() {
  const [current, setCurrent] = useState("hero");
  const [availableIds, setAvailableIds] = useState(() => navItems.map((item) => item.href.slice(1)));
  const [demoTab, setDemoTab] = useState<"multipage" | "onepage">("multipage");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    setAvailableIds(sections.map((section) => section.id));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setCurrent(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.slice(1);
    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();
    setCurrent(id);
    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="mainmenu-nav d-none d-lg-block">
      <ul className="mainmenu onepagenav">
        {navItems.filter((item) => availableIds.includes(item.href.slice(1))).map((item) => {
          const id = item.href.slice(1);
          const isHome = id === "hero";

          return (
            <li
              key={item.href}
              className={[
                current === id ? "current" : "",
                isHome ? "with-megamenu has-menu-child-item" : "",
                id === "about" ? "with-megamenu" : "",
                id === "service" ? "with-megamenu has-menu-child-item" : "",
                ["project", "team", "blog"].includes(id) ? "has-droupdown" : "",
                id === "service" ? "position-relative" : "",
              ].filter(Boolean).join(" ")}
            >
              <a href={item.href} onClick={(event) => handleClick(event, item.href)}>
                {item.label}
              </a>
              {isHome ? (
                <div className="tmp-megamenu with-mega-item-2 full-width-mega">
                  <div className="wrapper demos-area-drop-down">
                    <div className="row row--0">
                      <div className="col-lg-12">
                        <div className="tab_wrapper onapge-multipage-tab-wrapper">
                          <div className="nav nav-pills me-3 tabs-nav" role="tablist">
                            <button
                              className={`nav-links tmp-btn${demoTab === "multipage" ? " active" : ""}`}
                              data-target=".multipage_content"
                              type="button"
                              onClick={() => setDemoTab("multipage")}
                            >
                              Multipage
                            </button>
                            <button
                              className={`nav-links tmp-btn${demoTab === "onepage" ? " active" : ""}`}
                              data-target=".onepage_content"
                              type="button"
                              onClick={() => setDemoTab("onepage")}
                            >
                              Onepage
                            </button>
                          </div>

                          <div className="tab-content">
                            <div className={`tab-pane multipage_content${demoTab === "multipage" ? " active show" : ""}`}>
                              <DemoGrid demos={multipageDemos} />
                            </div>
                            <div className={`tab-pane onepage_content${demoTab === "onepage" ? " active show" : ""}`}>
                              <DemoGrid demos={onepageDemos} />
                            </div>
                          </div>
                        </div>

                        <div className="load-demo-btn-wrap mt--15">
                          <div className="load-demo-btn text-center">
                            <span className="color-white b3">
                              Scroll to view more{" "}
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
              ) : null}
              {id === "service" ? (
                <div className="tmp-megamenu width-small-mega">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 single-mega-item">
                        <h3 className="tmp-short-title">Service Details</h3>
                        <ul className="mega-menu-item">
                          {serviceDetailLinks.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href}>
                                {link.label}
                                {link.badge ? (
                                  <>
                                    {" "}
                                    <span className="tmp-badge-card">{link.badge}</span>
                                  </>
                                ) : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

'use client'
import Link from 'next/link'

import { useEffect, useRef } from "react";
// import { useTitleSplitAnimation } from "../../components/useTitleSplitAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CaseStudyOne() {
    // useTitleSplitAnimation();
      const jumpWrapperRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let jumpTween: gsap.core.Tween | undefined;
    
        /* =========================
           JUMP ANIMATION
        ========================== */
        const deviceWidth = window.innerWidth;
        if (deviceWidth > 991 && jumpWrapperRef.current) {
          const jumpItems = jumpWrapperRef.current.querySelectorAll(".tmp-jump__item");
          if (jumpItems.length) {
            // initial state
            gsap.set(jumpItems, { opacity: 0, scale: 1.15, rotation: 0 });
    
            // animate on scroll
            jumpTween = gsap.to(jumpItems, {
              scrollTrigger: {
                trigger: jumpWrapperRef.current,
                start: "top 95%",
              },
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: "bounce",
              stagger: 0.3,
            });
          }
        }

        return () => {
          jumpTween?.scrollTrigger?.kill();
          jumpTween?.kill();
        };
      }, []);
    return (
        <>
            {/* tmp business case area start */}
            <div className="tmp-business-case tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">03</span>
                                        <span className="subtitle-text">Case Studies</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Specialist Business Cases
                                </h2>
                                <p className="description b1 tmp-title-split-p">
                                    There are many variations of passages of Lorem Ipsum available,
                                    <br />
                                    but the majority have suffered alteration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10 tmp_jump_animation-wrapper" ref={jumpWrapperRef}>
                        <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
                            <div className="single-project-style-three invers-anime">
                                <Link href="/portfolio/brand-refresh-venture" className="thumbnail">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/portfolio/01.webp"
                                        alt="project"
                                    />
                                </Link>
                                <div className="inner-content tmponhover">
                                    <Link href="/portfolio/analytics-platform">
                                        <h4 className="title">Business Growth</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
                            <div className="single-project-style-three invers-anime">
                                <Link href="/portfolio/field-service-modernization" className="thumbnail">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/portfolio/02.webp"
                                        alt="project"
                                    />
                                </Link>
                                <div className="inner-content tmponhover">
                                    <Link href="/portfolio/brand-refresh-venture">
                                        <h4 className="title">Startup Solution</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
                            <div className="single-project-style-three invers-anime">
                                <Link href="/portfolio/analytics-platform" className="thumbnail">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/portfolio/03.webp"
                                        alt="project"
                                    />
                                </Link>
                                <div className="inner-content tmponhover">
                                    <Link href="/portfolio/field-service-modernization">
                                        <h4 className="title">Growth Manage</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
                            <div className="single-project-style-three invers-anime">
                                <Link href="/portfolio/brand-refresh-venture" className="thumbnail">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/portfolio/04.webp"
                                        alt="project"
                                    />
                                </Link>
                                <div className="inner-content tmponhover">
                                    <Link href="/portfolio/analytics-platform">
                                        <h4 className="title">Company Skills</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tmp business case area end */}
        </>

    )
}

export default CaseStudyOne

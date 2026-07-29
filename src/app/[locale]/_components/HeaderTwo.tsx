'use client'
import DominusNav from '../../../components/header/DominusNav'
import LanguageSwitcher from '../../../components/header/LanguageSwitcher'
import { useState, useEffect } from 'react';
import Link from 'next/link'

interface HeaderTwoProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
    mobileButtonClassName?: string;
    showTopNews?: boolean;
    variant?: 'transparent' | 'not-transparent';
    activeNav?: 'home' | 'nosotros' | 'servicios' | 'contacto';
}

function HeaderTwo({
    className = "",
    logoSrc,
    logoAlt = "",
    mobileButtonClassName = "hamberger-button",
    showTopNews = false,
    variant = 'not-transparent',
    activeNav = 'home',
}: HeaderTwoProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [showTop, setShowTop] = useState(true);
  // Logo blanco cuando el header está sobre el hero (no sticky),
  // logo azul cuando el header pasa a modo sticky sobre fondo claro.
  const logoTop = logoSrc || '/logo_bco.png';
  const logoScrolled = logoSrc || '/logo_dark.png';
  const logoText = logoAlt || 'DOMINUS';
  const headerMods =
    variant === 'transparent'
      ? 'header-transparent header-sticky'
      : 'header-not-transparent header-sticky-smooth header-sticky';
  const headerClassName = [
    `tmp-header header-default header-left-align ${headerMods} dominus-header`,
    isSticky ? 'sticky is-scrolled' : 'is-top',
    className,
  ].filter(Boolean).join(' ');

      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 150) {
                  setIsSticky(true);
              } else {
                  setIsSticky(false);
              }
          };
  
          window.addEventListener('scroll', handleScroll);
  
          // Clean up the event listener on component unmount
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);
  return (
    <>
      {showTopNews && showTop ? (
        <div className="header-top-news bg-image1">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner">
                    <div className="content">
                      <span className="tmp-badge">Limited Time Offer</span>
                      <span className="news-text">
                        Intro price. Get Corpox for Big Sale -95% off.
                      </span>
                    </div>
                    <div className="right-button">
                      <Link
                        className="btn-read-more"
                        target="_blank"
                        href="#"
                      >
                        <span>
                          Purchase Now <i className="feather-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-close">
            <button
              aria-label="Close offer"
              className="close-button bgsection-activation"
              type="button"
              onClick={() => setShowTop(false)}
            >
              <i className="feather-x" />
            </button>
          </div>
        </div>
      ) : null}
      <header className={headerClassName}>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-10 col-md-6 col-4 position-static">
              <div className="header-left d-flex">
                <div className="logo">
                  <Link href="/">
                    <img
                      className="logo-light dominus-logo dominus-logo--top"
                      src={logoTop}
                      alt={logoText}
                      style={{ maxHeight: 'none', maxWidth: 'none' }}
                    />
                    <img
                      className="logo-dark dominus-logo dominus-logo--scrolled"
                      src={logoScrolled}
                      alt={logoText}
                      style={{ maxHeight: 'none', maxWidth: 'none' }}
                    />
                  </Link>
                </div>
                <DominusNav active={activeNav} />
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-8">
              <div className="header-right">
                <div className="header-btn">
                  <LanguageSwitcher />
                </div>
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button className={mobileButtonClassName} type="button">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/* End Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}


export default HeaderTwo

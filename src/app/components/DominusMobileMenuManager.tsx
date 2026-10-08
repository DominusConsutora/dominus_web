'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '../../i18n/navigation'

const serviceSlugs = [
  'master-plans-portuarios',
  'concesiones-ppp-licitaciones',
  'gobernanza-y-tarifas',
  'optimizacion-operativa-terminales',
  'transformacion-digital-pcs',
  'sostenibilidad-y-green-ports',
  'regulacion-y-politicas-publicas',
  'capacitacion-y-talento',
] as const

export default function DominusMobileMenuManager() {
  const t = useTranslations('nav')
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('tmp-header-panel-open', isOpen)
    return () => document.body.classList.remove('tmp-header-panel-open')
  }, [isOpen])

  useEffect(() => {
    const handleMenuClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      if (target?.closest('.hamberger-button')) setIsOpen(true)
    }

    document.addEventListener('click', handleMenuClick)
    return () => document.removeEventListener('click', handleMenuClick)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <div
      className={`popup-mobile-menu${isOpen ? ' active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden={!isOpen}
    >
      <div className="inner">
        <div className="header-top">
          <div className="logo">
            <Link href="/" onClick={closeMenu}>
              <img className="dominus-mobile-menu-logo" src="/logo_bco.png" alt="DOMINUS" />
            </Link>
          </div>
          <div className="close-menu">
            <button className="close-button" type="button" aria-label="Close mobile menu" onClick={closeMenu}>
              <i className="feather-x" />
            </button>
          </div>
        </div>
        <ul className="mainmenu">
          <li><Link href="/" onClick={closeMenu}>{t('home')}</Link></li>
          <li><Link href="/nosotros" onClick={closeMenu}>{t('about')}</Link></li>
          <li className="has-menu-child-item">
            <Link
              className={servicesOpen ? 'open' : ''}
              href="/servicios"
              aria-expanded={servicesOpen}
              onClick={(event) => {
                event.preventDefault()
                setServicesOpen((open) => !open)
              }}
            >
              {t('services')}
            </Link>
            <ul className="submenu" style={{ display: servicesOpen ? 'block' : 'none' }}>
              <li><Link href="/servicios" onClick={closeMenu}>{t('services')}</Link></li>
              {serviceSlugs.map((slug) => (
                <li key={slug}>
                  <Link href={`/servicios/${slug}`} onClick={closeMenu}>
                    {t(`servicesList.${slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="/blog" onClick={closeMenu}>{t('blog')}</Link></li>
          <li><Link href="/contacto" onClick={closeMenu}>{t('contact')}</Link></li>
        </ul>
      </div>
    </div>
  )
}

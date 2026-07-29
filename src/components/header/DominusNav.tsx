'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

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

type NavKey = 'home' | 'nosotros' | 'servicios' | 'contacto'

interface DominusNavProps {
  active?: NavKey
}

export default function DominusNav({ active = 'home' }: DominusNavProps) {
  const t = useTranslations('nav')
  return (
    <nav className="mainmenu-nav d-none d-lg-block ms-auto" data-lenis-prevent-wheel="">
      <ul className="mainmenu">
        <li className={active === 'home' ? 'active' : ''}>
          <Link href="/">{t('home')}</Link>
        </li>
        <li className={active === 'nosotros' ? 'active' : ''}>
          <Link href="/nosotros">{t('about')}</Link>
        </li>
        <li
          className={`has-droupdown has-menu-child-item${active === 'servicios' ? ' active' : ''}`}
        >
          <Link href="/servicios">{t('services')}</Link>
          <ul className="submenu">
            {serviceSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/servicios/${slug}`}>{t(`servicesList.${slug}`)}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={active === 'contacto' ? 'active' : ''}>
          <Link href="/contacto">{t('contact')}</Link>
        </li>
      </ul>
    </nav>
  )
}

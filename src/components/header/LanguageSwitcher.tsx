'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '../../i18n/navigation'

/**
 * Cambia el locale preservando la ruta actual.
 * Config: next-intl con locales ['es','en'] y localePrefix 'as-needed'.
 * `es` → sin prefijo, `en` → prefijo /en.
 * Banderas como SVG inline: los emojis regional-indicator (🇪🇸/🇬🇧) no se
 * renderizan como banderas en Chromium sobre Windows.
 */

const FlagES = () => (
  <svg viewBox="0 0 3 2" width="22" height="16" aria-hidden="true">
    <rect width="3" height="2" fill="#AA151B" />
    <rect y="0.5" width="3" height="1" fill="#F1BF00" />
  </svg>
)

const FlagUK = () => (
  <svg viewBox="0 0 60 30" width="22" height="16" aria-hidden="true">
    <clipPath id="dominus-uk-clip">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <rect width="60" height="30" fill="#012169" />
    <g clipPath="url(#dominus-uk-clip)">
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        stroke="#C8102E"
        strokeWidth="4"
        clipPath="polygon(0 0, 50% 0, 0 50%)"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
)

export default function LanguageSwitcher() {
  const locale = useLocale() as 'es' | 'en'
  const router = useRouter()
  const pathname = usePathname() || '/'
  const tNav = useTranslations('nav')

  const switchTo = (target: 'es' | 'en') => {
    if (target === locale) return
    // `pathname` de next-intl viene SIN prefijo de locale, por lo que basta
    // con pasarle `locale` al router para que él aplique el prefijo correcto
    // y actualice la cookie NEXT_LOCALE.
    router.replace(pathname, { locale: target })
  }

  return (
    <div className="dominus-lang-switcher" role="group" aria-label={tNav('ariaLabelLanguage')}>
      <button
        type="button"
        className={`dominus-lang-btn${locale === 'es' ? ' is-active' : ''}`}
        onClick={() => switchTo('es')}
        aria-label="Español"
        aria-pressed={locale === 'es'}
        title="Español"
      >
        <FlagES />
      </button>
      <button
        type="button"
        className={`dominus-lang-btn${locale === 'en' ? ' is-active' : ''}`}
        onClick={() => switchTo('en')}
        aria-label="English"
        aria-pressed={locale === 'en'}
        title="English"
      >
        <FlagUK />
      </button>
    </div>
  )
}

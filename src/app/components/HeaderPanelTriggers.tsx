import Link from 'next/link'

export function HeaderSearchTrigger({ className = '' }: { className?: string }) {
  return (
    <button
      aria-label="Open search"
      className={`search-area-btn cursor-pointer ${className}`.trim()}
      id="search"
      type="button"
    >
      <i className="feather-search" />
    </button>
  )
}

export function HeaderMobileMenuTrigger() {
  return (
    <button aria-label="Open mobile menu" className="hamberger-button" type="button">
      <i className="feather-menu" />
    </button>
  )
}

export function HeaderSidebarTrigger({ className = '' }: { className?: string }) {
  return (
    <button
      aria-label="Open sidebar menu"
      className={`offcanvas-trigger ${className}`.trim()}
      type="button"
    >
      <i className="feather-menu" />
    </button>
  )
}

export function HeaderDotSidebarTrigger() {
  return (
    <button aria-label="Open sidebar menu" className="offcanvas-trigger" type="button">
      <span className="offcanvas-bars">
        <span />
        <span />
        <span />
      </span>
    </button>
  )
}

export function HeaderCtaButton({ label }: { label: string }) {
  return (
    <Link className="tmp-btn round hover-icon-reverse" href="/contact">
      <span className="icon-reverse-wrapper">
        <span className="btn-text">{label}</span>
        <span className="btn-icon">
          <i className="feather-arrow-right" />
        </span>
        <span className="btn-icon">
          <i className="feather-arrow-right" />
        </span>
      </span>
    </Link>
  )
}

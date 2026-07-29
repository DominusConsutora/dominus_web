'use client'

import Link from 'next/link'

const menuItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/service'],
  ['Portfolio', '/project'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
] as const

type Props = {
  activeLabel?: string
}

export default function SimpleMainNav({ activeLabel = 'Home' }: Props) {
  return (
    <nav className="mainmenu-nav d-none d-lg-block" data-lenis-prevent-wheel="">
      <ul className="mainmenu">
        {menuItems.map(([label, href]) => (
          <li key={label} className={label === activeLabel ? 'active' : ''}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

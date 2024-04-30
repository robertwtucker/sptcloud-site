/**
 * Copyright (c) 2023 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */
import headerNavLinks from '@/config/nav'
import siteConfig from '@/config/site'
import Link from '@/components/ui/link'
import MobileNav from '@/components/ui/mobile-nav'
import { ModeToggle } from '@/components/ui/mode-toggle'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteConfig.name}>
          <div className="flex items-center justify-between">
            {typeof siteConfig.name === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">{siteConfig.name}</div>
            ) : (
              siteConfig.name
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-slate-900 dark:text-slate-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
        <ModeToggle />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

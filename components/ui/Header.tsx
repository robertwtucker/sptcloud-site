/**
 * Copyright (c) 2023 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */
import Link from '@/components/ui/Link'
import siteConfig from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteConfig.headerTitle}>
          <div className="flex items-center justify-between">
            {typeof siteConfig.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteConfig.headerTitle}
              </div>
            ) : (
              siteConfig.headerTitle
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
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

/**
 * Copyright (c) 2023 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */
import '@/styles/globals.css'

import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import siteConfig from '@/config/site'
import { cn } from '@/lib/utils'
import Header from '@/components/ui/header'
import { Analytics } from '@/components/analytics'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icon,
  },
  metadataBase: new URL(siteConfig.baseUrl),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-slate-950 dark:text-white',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex h-screen flex-col justify-between font-sans">
              <Header />
              <main className="mb-auto">{children}</main>
            </div>
          </section>
          <Analytics analyticsConfig={siteConfig.analytics} />
        </ThemeProvider>
      </body>
    </html>
  )
}

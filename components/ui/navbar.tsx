//
// Copyright (c) 2023 Quadient Group AG
//
// This file is subject to the terms and conditions defined in the
// 'LICENSE' file found in the root of this source code package.
//

'use client'
import React from 'react'
import Link from 'next/link'
import siteConfig from '@/config/site'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-slate-900 px-2 py-3 dark:bg-slate-500">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between md:static md:block md:w-auto md:justify-start">
            <Link
              href="/"
              className="mr-4 inline-block whitespace-nowrap py-2 text-xl font-bold leading-relaxed text-slate-900 dark:text-slate-100"
            >
              {siteConfig.headerTitle}
            </Link>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-slate-900 outline-none focus:outline-none dark:text-slate-100 md:hidden"
              type="button"
              onClick={toggle}
            >
              <span className="relative block h-px w-6 rounded-sm bg-white dark:bg-black"></span>
              <span className="relative mt-1 block h-px w-6 rounded-sm bg-white"></span>
              <span className="relative mt-1 block h-px w-6 rounded-sm bg-white"></span>
            </button>
          </div>
          <div className={'flex-grow items-center md:flex ' + (isOpen ? 'flex' : 'hidden')}>
            <ul className="flex list-none flex-col md:ml-auto md:flex-row">
              {[
                ['Demos', '/'],
                ['Projects', '/'],
                ['About', '/'],
              ].map(([title, url], index) => (
                <li
                  key={index}
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-slate-900 hover:opacity-75 dark:text-slate-100 md:text-sm"
                >
                  <Link href={url}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

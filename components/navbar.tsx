//
// Copyright (c) 2023 Quadient Group AG
//
// This file is subject to the terms and conditions defined in the
// 'LICENSE' file found in the root of this source code package.
//

'use client'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <Link href="/" className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-slate-100 ">
              SPT Cloud
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none text-slate-100"
              type="button"
              onClick={toggle}
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center " + (isOpen ? "flex" : "hidden")
            }
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              {[
                ['Demos', '/'],
                ['Projects', '/'],
                ['About', '/'],
              ].map(([title, url], index) => (
                <li key={index} className="px-3 py-2 flex items-center text-xs md:text-sm font-bold leading-snug text-slate-100 hover:opacity-75">
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

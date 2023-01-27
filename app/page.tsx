//
// Copyright (c) 2023 Quadient Group AG
//
// This file is subject to the terms and conditions defined in the
// 'LICENSE' file found in the root of this source code package.
//

import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full flex flex-col items-center my-8 text-slate-900">
          <h1 className="text-lg md:text-2xl">Welcome to the SPT Cloud</h1>
          <p className="mt-2">Now even fluffier!</p>
        </div>
      </main>
    </>
  )
}

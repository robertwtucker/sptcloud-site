/**
 * Copyright (c) 2024 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */

import Script from 'next/script'

export interface UmamiProps {
  umamiWebsiteId: string
  src?: string
}

export const Umami = ({ umamiWebsiteId, src = 'https://us.umami.is/script.js' }: UmamiProps) => {
  return <Script strategy="lazyOnload" src={src} data-website-id={umamiWebsiteId} async defer />
}

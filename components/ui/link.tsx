/**
 * Copyright (c) 2023 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */
import { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'

const LinkWrapper = ({ href, ...props }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...props} />
  }
  if (isAnchorLink) {
    return <a href={href} {...props} />
  }
  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
}

export default LinkWrapper

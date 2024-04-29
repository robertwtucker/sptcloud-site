/**
 * Copyright (c) 2024 Quadient Group AG
 * SPDX-License-Identifier: MIT
 */

import { Umami, UmamiProps } from './umami'

export interface AnalyticsConfig {
  umamiAnalytics?: UmamiProps
}

export interface AnalyticsProps {
  analyticsConfig: AnalyticsConfig
}

const isProduction = process.env.NODE_ENV === 'production'

export const Analytics = ({ analyticsConfig }: AnalyticsProps) => {
  return (
    <>
      {isProduction && analyticsConfig.umamiAnalytics && (
        <Umami {...analyticsConfig.umamiAnalytics} />
      )}
    </>
  )
}

export { Umami }

export type { UmamiProps }

import { AnalyticsConfig } from '@/components/analytics'

export interface SiteConfig {
  title: string
  name: string
  description: string
  baseUrl: string
  icon: string
  analytics: AnalyticsConfig
}

const siteConfig: SiteConfig = {
  title: 'SPT Cloud',
  name: 'SPT Cloud',
  description: 'SPT services and information',
  baseUrl: 'https://sptcloud.com',
  icon: '/favicon.ico',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID || '',
    },
  },
}

export default siteConfig

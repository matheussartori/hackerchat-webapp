'use client'

import { ReactNode } from 'react'
import { I18nProvider } from '@/contexts/I18nContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </I18nProvider>
  )
}

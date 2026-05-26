'use client'

import { createContext, useContext, useState, useEffect, ReactNode, Fragment } from 'react'
import { I18N, type Locale, type TranslationKey } from '@/lib/i18n'

interface I18nContextValue {
  lang: Locale
  setLang: (lang: Locale) => void
  t: (key: TranslationKey, vars?: Record<string, string>) => string
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'pt-br',
  setLang: () => {},
  t: (key) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>('pt-br')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('hc.lang') as Locale | null
      if (stored === 'en' || stored === 'pt-br') setLangState(stored)
    } catch {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('hc.lang', lang) } catch {}
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Locale) => setLangState(l)

  const t = (key: TranslationKey, vars?: Record<string, string>): string => {
    const dict = I18N[lang] ?? I18N['pt-br']
    let value = dict[key] ?? key
    if (vars) {
      for (const k in vars) value = value.replace(`{${k}}`, vars[k])
    }
    return value
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

export function TR({ k, vars }: { k: TranslationKey; vars?: Record<string, string> }) {
  const { t } = useI18n()
  const raw = t(k, vars)
  const parts = raw.split(/(<b>.*?<\/b>)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('<b>')) {
          return <b key={i}>{part.replace(/<\/?b>/g, '')}</b>
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

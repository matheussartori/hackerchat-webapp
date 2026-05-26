'use client'

import { useI18n } from '@/contexts/I18nContext'
import { useTheme } from '@/contexts/ThemeContext'
import { SunIcon, MoonIcon } from '@/components/ui/Icon'

export function Nav() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="top">
      <div className="container inner">
        <div className="brand">
          <span>hackerchat</span>
          <span className="slash">/v1.0.0</span>
        </div>
        <div className="links">
          <a href="#features">{t('nav.features')}</a>
          <a href="#quickstart">{t('nav.quickstart')}</a>
          <a href="#selfhost">{t('nav.selfhost')}</a>
          <a href="#commands">{t('nav.commands')}</a>
          <a href="#github">{t('nav.source')}</a>
        </div>
        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="language">
            <button
              className={lang === 'pt-br' ? 'active' : ''}
              onClick={() => setLang('pt-br')}
              aria-pressed={lang === 'pt-br'}
            >
              PT
            </button>
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="toggle theme"
            title={theme === 'dark' ? 'light' : 'dark'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

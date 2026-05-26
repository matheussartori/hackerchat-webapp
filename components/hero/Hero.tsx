'use client'

import { useI18n, TR } from '@/contexts/I18nContext'
import { ArrowIcon, GithubIcon } from '@/components/ui/Icon'
import { StatusBadge } from './StatusBadge'
import { HeroTerminal } from './HeroTerminal'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <StatusBadge />
            <h1>
              {t('hero.title.l1')}<br />
              {t('hero.title.l2.pre')}<span className="green">{t('hero.title.l2.accent')}</span>
              <span className="cursor" />
            </h1>
            <p className="lead"><TR k="hero.lead" /></p>
            <div className="cta-row">
              <a className="btn primary" href="#quickstart">
                <span>{t('hero.cta.primary')}</span>
                <span className="arrow"><ArrowIcon /></span>
              </a>
              <a className="btn" href="#github">
                <GithubIcon />
                <span>{t('hero.cta.secondary')}</span>
              </a>
            </div>
            <div className="stat-strip">
              <div>
                <div className="k">{t('hero.stat.latency')}</div>
                <div className="v"><span className="acc">~31</span>ms</div>
              </div>
              <div>
                <div className="k">{t('hero.stat.protocol')}</div>
                <div className="v">ws / rfc-6455</div>
              </div>
              <div>
                <div className="k">{t('hero.stat.client')}</div>
                <div className="v">{t('hero.stat.client.v')}</div>
              </div>
              <div>
                <div className="k">{t('hero.stat.license')}</div>
                <div className="v">mit / open</div>
              </div>
            </div>
          </div>
          <div>
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  )
}

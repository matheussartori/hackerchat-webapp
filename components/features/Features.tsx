'use client'

import { useI18n } from '@/contexts/I18nContext'

const FEATURE_GLYPHS = ['◇', '⌁', '◐', '⌂', '✦', '∞'] as const
const FEATURE_TAGS = ['rooms', 'ink', 'colors', 'zero-conf', 'self-host', 'open'] as const
const FEATURE_INDICES = [1, 2, 3, 4, 5, 6] as const

type FeatureIndex = typeof FEATURE_INDICES[number]

export function Features() {
  const { t } = useI18n()

  return (
    <section id="features">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">{t('features.label')}</div>
            <h2>{t('features.title.l1')}<br />{t('features.title.l2')}</h2>
            <p>{t('features.lead')}</p>
          </div>
          <div className="right">
            {t('features.right')}<span className="acc">{t('features.stable')}</span>
          </div>
        </div>
        <div className="features">
          {FEATURE_INDICES.map((i) => (
            <div className="feature" key={i}>
              <div className="tag">— {String(i).padStart(2, '0')} · {FEATURE_TAGS[i - 1]}</div>
              <div className="glyph">{FEATURE_GLYPHS[i - 1]}</div>
              <h3>{t(`feature.${i as FeatureIndex}.title`)}</h3>
              <p>{t(`feature.${i as FeatureIndex}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

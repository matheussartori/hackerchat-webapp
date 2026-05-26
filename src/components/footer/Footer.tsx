'use client'

import { useI18n } from '@/contexts/I18nContext'

export function Footer() {
  const { t } = useI18n()
  const buildDate = new Date().toISOString().slice(0, 10)

  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%' }} />
              <span style={{ fontWeight: 700 }}>hackerchat</span>
              <span style={{ color: 'var(--fg-dim)' }}>/v1.0.0</span>
            </div>
            <p style={{ color: 'var(--fg-dim)', fontSize: 12.5, maxWidth: 320, margin: 0 }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h5>{t('footer.project')}</h5>
            <ul>
              <li><a href="#features">{t('nav.features')}</a></li>
              <li><a href="#quickstart">{t('nav.quickstart')}</a></li>
              <li><a href="#selfhost">{t('nav.selfhost')}</a></li>
              <li><a href="#commands">{t('nav.commands')}</a></li>
            </ul>
          </div>
          <div>
            <h5>{t('footer.source')}</h5>
            <ul>
              <li><a href="https://github.com/matheussartori/hackerchat-terminal-client" target="_blank" rel="noreferrer">terminal-client</a></li>
              <li><a href="https://github.com/matheussartori/hackerchat-server" target="_blank" rel="noreferrer">hackerchat-server</a></li>
              <li><a href="https://www.npmjs.com/package/@matheussartori/hackerchat-js-sdk" target="_blank" rel="noreferrer">hackerchat-js-sdk</a></li>
              <li><a href="https://github.com/matheussartori/hackerchat-terminal-client/blob/main/LICENSE" target="_blank" rel="noreferrer">mit license</a></li>
            </ul>
          </div>
          <div>
            <h5>{t('footer.author')}</h5>
            <ul>
              <li><a href="https://github.com/matheussartori" target="_blank" rel="noreferrer">@matheussartori</a></li>
              <li><a href="mailto:ms.sartori@outlook.com.br">ms.sartori@outlook.com.br</a></li>
              <li><a href="https://github.com/matheussartori/hackerchat-terminal-client/issues" target="_blank" rel="noreferrer">issues</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div>{t('footer.bottom.l', { date: buildDate })}</div>
          <div>{t('footer.bottom.r')}</div>
        </div>
      </div>
    </footer>
  )
}

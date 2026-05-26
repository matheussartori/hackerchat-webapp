'use client'

import { useServerStatus } from '@/hooks/useServerStatus'
import { useI18n } from '@/contexts/I18nContext'

const SERVER_URL = 'https://hackerchatserver.mattsartori.com.br/healthz'

export function StatusBadge() {
  const status = useServerStatus(SERVER_URL)
  const { t } = useI18n()

  const key = `hero.badge.${status}` as const

  return (
    <div className={`badge status-${status}`}>
      <span className="d" />
      {t(key)}
    </div>
  )
}

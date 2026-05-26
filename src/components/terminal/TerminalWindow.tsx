'use client'

import { useTickingClock } from '@/hooks/useTickingClock'
import { getUserColor } from '@/lib/getUserColor'
import { formatTime, formatShort } from '@/lib/formatTime'
import { TerminalUser, TerminalActivity, TerminalMessage } from '@/types/terminal'
import { useI18n } from '@/contexts/I18nContext'

interface TerminalWindowProps {
  windowTitle?: string
  room?: string
  userName?: string
  users?: TerminalUser[]
  activity?: TerminalActivity[]
  messages?: TerminalMessage[]
  draft?: string
  draftPlaceholder?: string
  hints?: string[]
  connected?: boolean
  startClock?: Date
  showCount?: boolean
  maxLength?: number
}

export function TerminalWindow({
  windowTitle = 'hackerchat-terminal-client — zsh — node — 120×32',
  room = 'general',
  userName = 'matt',
  users = [],
  activity = [],
  messages = [],
  draft = '',
  draftPlaceholder = 'type a message and press enter...',
  hints = ['enter send', 'pgup/pgdn scroll', 'end resume', 'esc quit'],
  connected = true,
  startClock,
  showCount = true,
  maxLength = 500,
}: TerminalWindowProps) {
  const { t } = useI18n()
  const clock = useTickingClock(startClock)
  const yourColor = getUserColor(userName)

  const titleParts = windowTitle.split(/\s+—\s+/)
  const head = titleParts[0]
  const tail = titleParts.slice(1).join(' — ')

  return (
    <div className="term-win">
      <div className="titlebar">
        <div className="lights">
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </div>
        <div className="title">
          <span className="folder">▣</span>
          <span className="title-text">
            {head}
            {tail && <span className="tt-tail">{' — ' + tail}</span>}
          </span>
        </div>
        <div className="titlebar-right">⌗</div>
      </div>

      <div className="tui">
        <div className="tui-box tui-header">
          <div className="left">
            <span className="name">hackerchat</span>
            <span className="ver">v1.0.0</span>
          </div>
          <div className="right">
            <span className="room">#{room}</span>
            <span className="sep">·</span>
            <span className="status">
              <span className="dot">●</span>
              <span style={{ color: connected ? 'var(--u-green)' : 'var(--u-red)' }}>
                {connected ? t('tui.online') : t('tui.offline')}
              </span>
            </span>
            <span className="sep">·</span>
            <span>@{userName}</span>
            <span className="sep">·</span>
            <span className="clock">{formatTime(clock)}</span>
          </div>
        </div>

        <div className="tui-body">
          <div className="tui-sidebar">
            <div className="tui-online">
              <div className="tui-section-title">
                <span>{t('tui.section.online')} <span className="count">({users.length})</span></span>
              </div>
              {users.length === 0 ? (
                <div style={{ color: 'var(--tui-fg-dimmer)' }}>{t('tui.empty')}</div>
              ) : users.map((u, i) => {
                const color = getUserColor(u.name)
                return (
                  <div className="tui-user" key={u.name + i}>
                    <span className={color}>●</span>
                    <span className={`${color}${u.self ? ' b' : ''}`}>{u.name}</span>
                    {u.self && <span className="you-tag">{t('tui.you')}</span>}
                  </div>
                )
              })}
            </div>

            <div className="tui-activity">
              <div className="tui-section-title">
                <span>{t('tui.section.activity')}</span>
              </div>
              {activity.length === 0 ? (
                <div style={{ color: 'var(--tui-fg-dimmer)' }}>{t('tui.no.activity')}</div>
              ) : activity.map((a, i) => (
                <div className="tui-activity-row" key={i}>
                  <span className="ts">{formatShort(a.timestamp)}</span>
                  <span className={a.action === 'joined' ? 'plus' : 'minus'}>
                    {a.action === 'joined' ? '+' : '-'}
                  </span>
                  <span className={getUserColor(a.userName)}>{a.userName}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tui-messages">
            <div className="tui-msg-header">
              <span style={{ fontWeight: 700 }}>{t('tui.section.messages')}</span>
              {showCount && (
                <span className="count">{messages.length}/{messages.length}</span>
              )}
            </div>
            <div className="tui-msgs-list">
              {messages.map((m, i) => (
                <div className="tui-msg-row" key={i}>
                  <span className="ts">{formatShort(m.timestamp)}</span>
                  <span className={`who ${getUserColor(m.userName)}`}>{m.userName}</span>
                  <span className="colon">:</span>
                  <span className="text">{m.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tui-input-wrap">
          <span className={`uname ${yourColor}`}>{userName}</span>
          <span className="arr">›</span>
          <div className={`field${draft ? '' : ' placeholder'}`}>
            {draft || draftPlaceholder}
            <span className="caret" />
          </div>
          <span className="count">{draft.length}/{maxLength}</span>
        </div>

        <div className="tui-hints">
          {hints.map((h, i) => (
            <span key={i}>
              {i > 0 && <span className="sep">·</span>}
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

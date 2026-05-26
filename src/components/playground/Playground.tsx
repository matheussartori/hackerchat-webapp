'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useHackerchat } from '@matheussartori/hackerchat-js-sdk/react'
import type { ChatMessage, ConnectionStatus, User } from '@matheussartori/hackerchat-js-sdk'
import { useI18n, TR } from '@/contexts/I18nContext'
import { useTickingClock } from '@/hooks/useTickingClock'
import { getUserColor } from '@/lib/getUserColor'
import { formatTime, formatShort } from '@/lib/formatTime'
import type { TranslationKey } from '@/lib/i18n'

const DEFAULT_SERVER = 'wss://hackerchatserver.mattsartori.com.br'
const MAX_LENGTH = 500

const RANDOM_NAMES = [
  'alice', 'bob', 'charlie', 'diana', 'evan', 'fiona', 'george', 'hannah', 'ivan', 'julia',
  'kevin', 'laura', 'mike', 'natalie', 'oscar', 'paula', 'quinn', 'rachel', 'sam', 'tina',
  'uma', 'victor', 'wendy', 'xander', 'yara', 'zoe', 'aaron', 'bella', 'carlos', 'daisy',
]

function randomName() {
  const base = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)]
  const suffix = Math.floor(Math.random() * 900) + 100
  return `${base}${suffix}`
}

interface Session {
  url: string
  userName: string
  roomId: string
}

export function Playground() {
  const { t } = useI18n()
  const [session, setSession] = useState<Session | null>(null)
  const [server, setServer] = useState(DEFAULT_SERVER)
  const [userName, setUserName] = useState(() => randomName())
  const [room, setRoom] = useState('general')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const u = userName.trim()
    const r = room.trim()
    const s = server.trim()
    if (!u || !r || !s) return
    setSession({ url: s, userName: u, roomId: r })
  }

  return (
    <section className="playground" id="playground">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">{t('pg.label')}</div>
            <h2>
              {t('pg.title.pre')}
              <span style={{ color: 'var(--accent)' }}>{t('pg.title.accent')}</span>
            </h2>
            <p>
              <TR k="pg.lead" />
            </p>
          </div>
          <div className="right">
            {t('pg.right')}<span className="acc">@matheussartori/hackerchat-js-sdk</span>
          </div>
        </div>

        {session ? (
          <LiveChat
            key={`${session.url}|${session.userName}|${session.roomId}`}
            session={session}
            onLeave={() => setSession(null)}
          />
        ) : (
          <ConnectForm
            server={server}
            userName={userName}
            room={room}
            onServer={setServer}
            onUserName={setUserName}
            onRoom={setRoom}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </section>
  )
}

interface ConnectFormProps {
  server: string
  userName: string
  room: string
  onServer: (v: string) => void
  onUserName: (v: string) => void
  onRoom: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
}

function ConnectForm({ server, userName, room, onServer, onUserName, onRoom, onSubmit }: ConnectFormProps) {
  const { t } = useI18n()
  const canSubmit = server.trim() && userName.trim() && room.trim()

  return (
    <div className="pg-connect">
      <form className="pg-form" onSubmit={onSubmit}>
        <div className="pg-form-head">
          <div className="pg-form-title">
            <span className="hash">#</span>
            {t('pg.form.title')}
          </div>
          <div className="pg-form-lead">{t('pg.form.lead')}</div>
        </div>

        <div className="pg-field">
          <label htmlFor="pg-server">{t('pg.field.server')}</label>
          <input
            id="pg-server"
            type="text"
            value={server}
            onChange={(e) => onServer(e.target.value)}
            placeholder="wss://..."
            autoComplete="off"
            spellCheck={false}
          />
          <span className="pg-hint">{t('pg.field.server.hint')}</span>
        </div>

        <div className="pg-field-row">
          <div className="pg-field">
            <label htmlFor="pg-user">{t('pg.field.username')}</label>
            <input
              id="pg-user"
              type="text"
              value={userName}
              onChange={(e) => onUserName(e.target.value)}
              placeholder=""
              autoComplete="off"
              spellCheck={false}
              maxLength={32}
            />
            <span className="pg-hint">{t('pg.field.username.hint')}</span>
          </div>

          <div className="pg-field">
            <label htmlFor="pg-room">{t('pg.field.room')}</label>
            <input
              id="pg-room"
              type="text"
              value={room}
              onChange={(e) => onRoom(e.target.value)}
              placeholder="general"
              autoComplete="off"
              spellCheck={false}
              maxLength={48}
            />
            <span className="pg-hint">{t('pg.field.room.hint')}</span>
          </div>
        </div>

        <div className="pg-actions">
          <button type="submit" className="btn primary" disabled={!canSubmit}>
            <span>{t('pg.connect')}</span>
            <span className="arrow">→</span>
          </button>
          <div className="pg-tip">
            <span className="pg-tip-lbl">{t('pg.tip.title')}</span>
            <span>{t('pg.tip.body')}</span>
          </div>
        </div>
      </form>
    </div>
  )
}

interface LiveChatProps {
  session: Session
  onLeave: () => void
}

interface ActivityEntry {
  userName: string
  action: 'joined' | 'left'
  timestamp: Date
}

interface MessageEntry extends ChatMessage {
  timestamp: Date
}

function LiveChat({ session, onLeave }: LiveChatProps) {
  const { t } = useI18n()
  const { status, users, messages, sendMessage, client } = useHackerchat({
    url: session.url,
    userName: session.userName,
    roomId: session.roomId,
  })

  const [draft, setDraft] = useState('')
  const [activity, setActivity] = useState<ActivityEntry[]>([])
  const [errored, setErrored] = useState(false)
  const showError = errored && status !== 'open'
  const startClock = useMemo(() => new Date(), [])
  const clock = useTickingClock(startClock)
  const yourColor = getUserColor(session.userName)
  const logRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [timedMessages, setTimedMessages] = useState<MessageEntry[]>([])
  const seenCount = useRef(0)
  useEffect(() => {
    if (messages.length < seenCount.current) {
      seenCount.current = 0
      setTimedMessages([])
      return
    }
    if (messages.length > seenCount.current) {
      const fresh = messages.slice(seenCount.current).map((m) => ({ ...m, timestamp: new Date() }))
      seenCount.current = messages.length
      setTimedMessages((s) => [...s, ...fresh])
    }
  }, [messages])

  useEffect(() => {
    const offJoin = client.on('newUserConnected', (u: User) => {
      setActivity((a) => [...a, { userName: u.userName, action: 'joined' as const, timestamp: new Date() }].slice(-20))
    })
    const offLeave = client.on('disconnectUser', (u: User) => {
      setActivity((a) => [...a, { userName: u.userName, action: 'left' as const, timestamp: new Date() }].slice(-20))
    })
    const offErr = client.on('error', () => setErrored(true))
    return () => {
      offJoin()
      offLeave()
      offErr()
    }
  }, [client])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [timedMessages.length])

  useEffect(() => {
    if (status === 'open') inputRef.current?.focus()
  }, [status])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = draft.trim()
    if (!value || status !== 'open') return
    sendMessage(value)
    setDraft('')
  }

  const connected = status === 'open'
  const statusKey: TranslationKey = `pg.status.${(status as ConnectionStatus)}` as TranslationKey

  const terminalUsers = users.map((u) => ({ ...u, self: u.userName === session.userName }))

  return (
    <div className="pg-live">
      <div className="term-win">
        <div className="titlebar">
          <div className="lights">
            <span className="r" onClick={onLeave} role="button" aria-label="leave" />
            <span className="y" />
            <span className="g" />
          </div>
          <div className="title">
            <span className="folder">▣</span>
            <span className="title-text">
              hackerchat-playground
              <span className="tt-tail">{` — ${session.url} — #${session.roomId}`}</span>
            </span>
          </div>
          <div className="titlebar-right">⌗</div>
        </div>

        <div className="tui">
          <div className="tui-box tui-header">
            <div className="left">
              <span className="name">hackerchat</span>
              <span className="ver">playground</span>
            </div>
            <div className="right">
              <span className="room">#{session.roomId}</span>
              <span className="sep">·</span>
              <span className="status">
                <span className="dot" style={{ color: connected ? 'var(--u-green)' : showError ? 'var(--u-red)' : 'var(--u-yellow)' }}>●</span>
                <span style={{ color: connected ? 'var(--u-green)' : showError ? 'var(--u-red)' : 'var(--tui-fg-dim)' }}>
                  {showError ? t('pg.error.connection') : t(statusKey)}
                </span>
              </span>
              <span className="sep">·</span>
              <span className={yourColor}>@{session.userName}</span>
              <span className="sep">·</span>
              <span className="clock">{formatTime(clock)}</span>
            </div>
          </div>

          <div className="tui-body">
            <div className="tui-sidebar">
              <div className="tui-online">
                <div className="tui-section-title">
                  <span>{t('tui.section.online')} <span className="count">({terminalUsers.length})</span></span>
                </div>
                {terminalUsers.length === 0 ? (
                  <div style={{ color: 'var(--tui-fg-dimmer)' }}>{t('tui.empty')}</div>
                ) : terminalUsers.map((u) => {
                  const color = getUserColor(u.userName)
                  return (
                    <div className="tui-user" key={u.id}>
                      <span className={color}>●</span>
                      <span className={`${color}${u.self ? ' b' : ''}`}>{u.userName}</span>
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
                <span className="count">{timedMessages.length}/{timedMessages.length}</span>
              </div>
              <div className="tui-msgs-list pg-msgs-list" ref={logRef}>
                {timedMessages.length === 0 ? (
                  <div style={{ color: 'var(--tui-fg-dimmer)', padding: '8px 0' }}>{t('pg.empty.messages')}</div>
                ) : timedMessages.map((m, i) => (
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

          <form className="tui-input-wrap pg-input-wrap" onSubmit={submit}>
            <span className={`uname ${yourColor}`}>{session.userName}</span>
            <span className="arr">›</span>
            <input
              ref={inputRef}
              className="pg-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value.slice(0, MAX_LENGTH))}
              placeholder={connected ? t('pg.input.placeholder') : t('pg.input.placeholder.disconnected')}
              disabled={!connected}
              autoComplete="off"
              spellCheck={false}
              maxLength={MAX_LENGTH}
            />
            <span className="count">{draft.length}/{MAX_LENGTH}</span>
          </form>

          <div className="tui-hints">
            <span>enter send</span>
            <span className="sep">·</span>
            <span>esc leave</span>
            <span className="sep">·</span>
            <span>{t(statusKey)}</span>
          </div>
        </div>
      </div>

      <div className="pg-live-actions">
        <button type="button" className="btn" onClick={onLeave}>
          ← {t('pg.disconnect')}
        </button>
      </div>
    </div>
  )
}


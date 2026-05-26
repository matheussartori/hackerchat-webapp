'use client'

import { useI18n } from '@/contexts/I18nContext'
import { Locale } from '@/lib/i18n'

interface CommandRow {
  k: string
  d: string
  kbd: string
}

function getFlags(lang: Locale): CommandRow[] {
  if (lang === 'en') return [
    { k: '--username', d: 'display name used in the chat room', kbd: 'required' },
    { k: '--room',     d: 'room id to join or create',          kbd: 'required' },
    { k: '--hostUri',  d: 'websocket url of the server',        kbd: 'optional' },
  ]
  return [
    { k: '--username', d: 'apelido usado na sala',              kbd: 'obrigatório' },
    { k: '--room',     d: 'id da sala (entra ou cria)',         kbd: 'obrigatório' },
    { k: '--hostUri',  d: 'url do servidor websocket',          kbd: 'opcional' },
  ]
}

function getShortcuts(lang: Locale): CommandRow[] {
  if (lang === 'en') return [
    { k: 'enter',           d: 'send the typed message',             kbd: 'in chat' },
    { k: 'pgup / pgdn',     d: 'scroll the messages buffer',         kbd: 'in chat' },
    { k: 'ctrl+u / ctrl+d', d: 'scroll one line at a time',          kbd: 'in chat' },
    { k: 'home',            d: 'jump to the oldest visible message', kbd: 'in chat' },
    { k: 'end',             d: 'resume / jump back to live',         kbd: 'in chat' },
    { k: 'esc esc',         d: 'double-press to exit the client',    kbd: 'global' },
  ]
  return [
    { k: 'enter',           d: 'envia a mensagem digitada',             kbd: 'no chat' },
    { k: 'pgup / pgdn',     d: 'rola o buffer de mensagens',            kbd: 'no chat' },
    { k: 'ctrl+u / ctrl+d', d: 'rola uma linha por vez',                kbd: 'no chat' },
    { k: 'home',            d: 'pula pra mensagem mais antiga visível', kbd: 'no chat' },
    { k: 'end',             d: 'volta pra última mensagem (live)',      kbd: 'no chat' },
    { k: 'esc esc',         d: 'aperte duas vezes pra sair',            kbd: 'global' },
  ]
}

function CommandGroup({ title, lead, prefix, rows }: {
  title: string
  lead: string
  prefix: string
  rows: CommandRow[]
}) {
  return (
    <div className="cmd-group">
      <div className="cmd-group-head">
        <div className="cmd-group-title">
          <span className="hash">{prefix}</span> {title}
        </div>
        <div className="cmd-group-lead">{lead}</div>
      </div>
      <div className="cmd-list">
        {rows.map((c, i) => (
          <div className="row" key={i}>
            <div className="k">{c.k}</div>
            <div className="d">{c.d}</div>
            <div className="kbd">{c.kbd || '—'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Commands() {
  const { t, lang } = useI18n()

  return (
    <section id="commands">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">{t('cmd.label')}</div>
            <h2>{t('cmd.title')}</h2>
            <p>{t('cmd.lead')}</p>
          </div>
          <div className="right">
            {t('cmd.right')}<span className="acc">hackerchat(1)</span>
          </div>
        </div>

        <div className="cmd-split">
          <CommandGroup
            title={t('cmd.flags.title')}
            lead={t('cmd.flags.lead')}
            prefix="$"
            rows={getFlags(lang)}
          />
          <CommandGroup
            title={t('cmd.shortcuts.title')}
            lead={t('cmd.shortcuts.lead')}
            prefix="⌨"
            rows={getShortcuts(lang)}
          />
        </div>
      </div>
    </section>
  )
}

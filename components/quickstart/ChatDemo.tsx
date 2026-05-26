'use client'

import { useState, useEffect, useMemo } from 'react'
import { TerminalWindow } from '@/components/terminal/TerminalWindow'
import { useI18n } from '@/contexts/I18nContext'
import { TerminalUser, TerminalActivity, TerminalMessage } from '@/types/terminal'

type ScriptItemType = 'act' | 'msg'
interface ScriptItem {
  delay: number
  type: ScriptItemType
  userName: string
  action?: 'joined' | 'left'
  message?: string
  timestamp?: Date
}

function makeBaseDate() {
  const d = new Date()
  d.setHours(23, 14, 0, 0)
  return d
}

function makeMessage(baseTs: Date, offsec: number, who: string, text: string): Omit<ScriptItem, 'delay' | 'type'> {
  return { userName: who, message: text, timestamp: new Date(baseTs.getTime() + offsec * 1000) }
}

export function ChatDemo() {
  const { lang } = useI18n()
  const [tick, setTick] = useState(0)
  const [items, setItems] = useState<ScriptItem[]>([])

  useEffect(() => {
    setItems([])
    const baseTs = makeBaseDate()
    const mk = (offsec: number, who: string, text: string) => makeMessage(baseTs, offsec, who, text)

    const scriptPt: ScriptItem[] = [
      { delay: 300,  type: 'act', userName: 'noir', action: 'joined' },
      { delay: 500,  type: 'act', userName: 'gabi', action: 'joined' },
      { delay: 900,  type: 'msg', ...mk(2, 'noir',  'alguém testou o backpressure no ws ainda?') },
      { delay: 1700, type: 'msg', ...mk(18, 'gabi', 'testei. com 5k clientes a queue média ficou em 12 frames.') },
      { delay: 2700, type: 'msg', ...mk(33, 'tk_',  'rodando em qual hardware?') },
      { delay: 2900, type: 'act', userName: 'tk_',  action: 'joined' },
      { delay: 3500, type: 'msg', ...mk(41, 'gabi', 'vps básica, 1 vcpu / 1gb. consumo médio: 38mb.') },
      { delay: 4400, type: 'msg', ...mk(55, 'matt', 'isso é absurdamente bom pra um chat efêmero') },
      { delay: 5200, type: 'act', userName: 'yuri', action: 'joined' },
      { delay: 5800, type: 'msg', ...mk(63, 'yuri', 'oi! qual a stack do servidor?') },
      { delay: 6600, type: 'msg', ...mk(71, 'noir', 'node 24, ws nativo. cliente em ink + ts.') },
    ]
    const scriptEn: ScriptItem[] = [
      { delay: 300,  type: 'act', userName: 'noir', action: 'joined' },
      { delay: 500,  type: 'act', userName: 'gabi', action: 'joined' },
      { delay: 900,  type: 'msg', ...mk(2, 'noir',  'anyone tested ws backpressure yet?') },
      { delay: 1700, type: 'msg', ...mk(18, 'gabi', 'did. 5k clients, avg queue around 12 frames.') },
      { delay: 2700, type: 'msg', ...mk(33, 'tk_',  'on what hardware?') },
      { delay: 2900, type: 'act', userName: 'tk_',  action: 'joined' },
      { delay: 3500, type: 'msg', ...mk(41, 'gabi', 'basic vps, 1 vcpu / 1gb. ~38mb avg.') },
      { delay: 4400, type: 'msg', ...mk(55, 'matt', 'wild for an ephemeral chat tbh') },
      { delay: 5200, type: 'act', userName: 'yuri', action: 'joined' },
      { delay: 5800, type: 'msg', ...mk(63, 'yuri', 'hey! whats the server stack?') },
      { delay: 6600, type: 'msg', ...mk(71, 'noir', 'node 24, native ws. client in ink + ts.') },
    ]

    const script = lang === 'en' ? scriptEn : scriptPt
    const timers = script.map(s => setTimeout(() => setItems(prev => [...prev, s]), s.delay))
    const restart = setTimeout(() => setTick(t => t + 1), 11000)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(restart)
    }
  }, [tick, lang])

  const users = useMemo<TerminalUser[]>(() => {
    const joined = items
      .filter(i => i.type === 'act' && i.action === 'joined')
      .map(i => i.userName)
    const list = ['matt', ...joined.filter(n => n !== 'matt')]
    return list.map(name => ({ name, self: name === 'matt' }))
  }, [items])

  const activity = useMemo<TerminalActivity[]>(() => {
    const base = makeBaseDate()
    return items
      .filter(i => i.type === 'act')
      .map(i => ({ userName: i.userName, action: i.action as 'joined' | 'left', timestamp: base }))
  }, [items])

  const messages = useMemo<TerminalMessage[]>(() => {
    return items
      .filter(i => i.type === 'msg')
      .map(i => ({ userName: i.userName, message: i.message!, timestamp: i.timestamp! }))
  }, [items])

  const baseClock = useMemo(() => makeBaseDate(), [tick])
  const hintsPt = ['enter envia', 'pgup/pgdn rolar', 'end retomar', 'esc sair']
  const hintsEn = ['enter send', 'pgup/pgdn scroll', 'end resume', 'esc quit']

  return (
    <TerminalWindow
      windowTitle="hackerchat-terminal-client — zsh — node — 132×38"
      room="websockets"
      userName="matt"
      users={users}
      activity={activity}
      messages={messages}
      draft=""
      draftPlaceholder={lang === 'en' ? 'type a message and press enter...' : 'digite uma mensagem e pressione enter...'}
      hints={lang === 'en' ? hintsEn : hintsPt}
      startClock={baseClock}
    />
  )
}

'use client'

import { useState, useEffect, useMemo } from 'react'
import { TerminalWindow } from '@/components/terminal/TerminalWindow'
import { useI18n } from '@/contexts/I18nContext'
import { TerminalUser, TerminalActivity, TerminalMessage } from '@/types/terminal'

export function HeroTerminal() {
  const { lang } = useI18n()
  const [tick, setTick] = useState(0)
  const [step, setStep] = useState(0)
  const [draftIdx, setDraftIdx] = useState(0)

  const draftSeq = lang === 'en'
    ? ['', 'h', 'ho', 'hot', 'how ', 'how a', 'how ar', 'how are', 'how are y', 'how are you?']
    : ['', 'o', 'oi', 'oi ', 'oi v', 'oi vi', 'oi viv', 'oi vivi', 'oi vivi!']

  useEffect(() => {
    const schedule: [number, number][] = [
      [1, 600],
      [2, 1200],
      [3, 2200],
      [4, 3300],
      [5, 4400],
    ]
    const timers = schedule.map(([s, t]) =>
      setTimeout(() => setStep(prev => Math.max(prev, s)), t)
    )

    const typeTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        if (i >= draftSeq.length) { clearInterval(interval); return }
        setDraftIdx(i)
      }, 110)
    }, 4400)

    const restart = setTimeout(() => {
      setStep(0); setDraftIdx(0); setTick(t => t + 1)
    }, 12000)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(typeTimer)
      clearTimeout(restart)
    }
  }, [tick, draftSeq.length])

  const baseDate = useMemo(() => {
    const d = new Date()
    d.setHours(1, 41, 0, 0)
    return d
  }, [])

  const users = useMemo<TerminalUser[]>(() => {
    const u: TerminalUser[] = []
    if (step >= 1) u.push({ name: 'matt', self: true })
    if (step >= 2) u.push({ name: 'vivi' })
    return u
  }, [step])

  const activity = useMemo<TerminalActivity[]>(() => {
    const a: TerminalActivity[] = []
    if (step >= 1) a.push({ userName: 'matt', action: 'joined', timestamp: baseDate })
    if (step >= 2) a.push({ userName: 'vivi', action: 'joined', timestamp: baseDate })
    return a
  }, [step, baseDate])

  const messages = useMemo<TerminalMessage[]>(() => {
    const m: TerminalMessage[] = []
    if (step >= 3) m.push({ userName: 'vivi', message: lang === 'en' ? 'hi!' : 'oi!', timestamp: new Date(baseDate.getTime() + 60_000) })
    if (step >= 4) m.push({ userName: 'matt', message: lang === 'en' ? 'hello!' : 'eai vivi tudo bem?', timestamp: new Date(baseDate.getTime() + 90_000) })
    return m
  }, [step, baseDate, lang])

  const draft = step >= 5 ? (draftSeq[draftIdx] ?? '') : ''
  const hintsPt = ['enter envia', 'pgup/pgdn rolar', 'end retomar', 'esc sair']
  const hintsEn = ['enter send', 'pgup/pgdn scroll', 'end resume', 'esc quit']

  return (
    <TerminalWindow
      windowTitle="hackerchat-terminal-client — zsh — node — 120×32"
      room="general"
      userName="matt"
      users={users}
      activity={activity}
      messages={messages}
      draft={draft}
      draftPlaceholder={lang === 'en' ? 'type a message and press enter...' : 'digite uma mensagem e pressione enter...'}
      hints={lang === 'en' ? hintsEn : hintsPt}
      startClock={baseDate}
    />
  )
}

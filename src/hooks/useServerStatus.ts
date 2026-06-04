'use client'

import { useState, useEffect } from 'react'

export type ServerStatus = 'checking' | 'online' | 'offline' | 'waking'

// As instâncias free do Koyeb entram em deep sleep após 1h sem tráfego.
// O cold start para subir a VM novamente leva ~1-5s (mais o boot do app),
// então quando o primeiro probe falha assumimos que o servidor pode estar
// "acordando" e damos uma janela maior antes de declarar offline.
const PROBE_TIMEOUT_MS = 5_000
const WAKE_PROBE_TIMEOUT_MS = 10_000
const WAKE_BUDGET_MS = 30_000
const WAKE_RETRY_DELAY_MS = 2_000

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function probe(url: string, timeoutMs: number): Promise<boolean> {
  const ctrl = new AbortController()
  const timeout = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, { method: 'GET', signal: ctrl.signal, cache: 'no-store' })
    if (!res.ok) return false
    const text = (await res.text()).trim().toUpperCase()
    return text === 'OK'
  } catch {
    return false
  } finally {
    clearTimeout(timeout)
  }
}

export function useServerStatus(url: string, intervalMs = 60_000): ServerStatus {
  const [status, setStatus] = useState<ServerStatus>('checking')

  useEffect(() => {
    let cancelled = false

    const check = async () => {
      // Probe rápido: se o servidor estiver acordado, responde de imediato.
      if (await probe(url, PROBE_TIMEOUT_MS)) {
        if (!cancelled) setStatus('online')
        return
      }
      if (cancelled) return

      // Probe falhou: a instância free pode estar dormindo. O fetch inicial
      // costuma dispará-la, então insistimos por uma janela curta para dar
      // tempo do cold start completar antes de assumir que está offline.
      setStatus('waking')
      const deadline = Date.now() + WAKE_BUDGET_MS
      while (Date.now() < deadline) {
        await sleep(WAKE_RETRY_DELAY_MS)
        if (cancelled) return
        if (await probe(url, WAKE_PROBE_TIMEOUT_MS)) {
          if (!cancelled) setStatus('online')
          return
        }
        if (cancelled) return
      }

      if (!cancelled) setStatus('offline')
    }

    check()
    const id = setInterval(check, intervalMs)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [url, intervalMs])

  return status
}

'use client'

import { useState, useEffect } from 'react'

export type ServerStatus = 'checking' | 'online' | 'offline'

export function useServerStatus(url: string, intervalMs = 60_000): ServerStatus {
  const [status, setStatus] = useState<ServerStatus>('checking')

  useEffect(() => {
    let cancelled = false

    const check = async () => {
      try {
        const ctrl = new AbortController()
        const timeout = setTimeout(() => ctrl.abort(), 5000)
        const res = await fetch(url, { method: 'GET', signal: ctrl.signal, cache: 'no-store' })
        clearTimeout(timeout)
        if (cancelled) return
        if (res.ok) {
          const text = (await res.text()).trim().toUpperCase()
          setStatus(text === 'OK' ? 'online' : 'offline')
        } else {
          setStatus('offline')
        }
      } catch {
        if (!cancelled) setStatus('offline')
      }
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

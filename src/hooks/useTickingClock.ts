'use client'

import { useState, useEffect } from 'react'

export function useTickingClock(initialDate?: Date): Date {
  const [date, setDate] = useState(initialDate ?? new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setDate(prev => new Date(prev.getTime() + 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return date
}

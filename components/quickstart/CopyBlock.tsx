'use client'

import { useState, ReactNode } from 'react'
import { useI18n } from '@/contexts/I18nContext'

interface CopyBlockProps {
  file: string
  lang?: string
  code: string
  lines: ReactNode
}

export function CopyBlock({ file, lang = 'bash', code, lines }: CopyBlockProps) {
  const { lang: i18nLang } = useI18n()
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    navigator.clipboard?.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  const copyLabel = copied
    ? (i18nLang === 'en' ? '✓ copied' : '✓ copiado')
    : 'copy'

  return (
    <div className="codeblock">
      <div className="head">
        <div className="file">{file} · {lang}</div>
        <button className="copy" onClick={onCopy}>{copyLabel}</button>
      </div>
      <pre>{lines}</pre>
    </div>
  )
}

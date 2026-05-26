'use client'

import { useState } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { CopyBlock } from './CopyBlock'
import { ChatDemo } from './ChatDemo'

const STEP_COUNT = [1, 2, 3, 4] as const
type StepIndex = typeof STEP_COUNT[number]

export function Quickstart() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState(0)

  return (
    <section
      id="quickstart"
      style={{
        background: 'linear-gradient(to bottom, transparent, color-mix(in oklch, var(--bg-2) 70%, transparent) 25%, color-mix(in oklch, var(--bg-2) 70%, transparent) 75%, transparent)',
      }}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">{t('qs.label')}</div>
            <h2>
              {t('qs.title.pre')}
              <span style={{ color: 'var(--accent)' }}>{t('qs.title.accent')}</span>
            </h2>
            <p>{t('qs.lead')}</p>
          </div>
          <div className="right">
            {t('qs.right')}<span className="acc">{t('qs.right.v')}</span>
          </div>
        </div>

        <div className="steps">
          <div className="step-list">
            {STEP_COUNT.map((n, i) => (
              <div key={i} className={`step${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                <div className="n">{String(n).padStart(2, '0')}</div>
                <div>
                  <h4>{t(`qs.step.${n as StepIndex}.title`)}</h4>
                  <p>{t(`qs.step.${n as StepIndex}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <CopyBlock
              file="zsh · install & connect"
              lang="bash"
              code={`# 1. run via npx (no install)\nnpx @matheussartori/hackerchat-client --username alice --room general\n\n# 2. point at your own server\nnpx @matheussartori/hackerchat-client \\\n  --username alice --room general \\\n  --hostUri ws://localhost:9898\n\n# 3. install globally\nnpm i -g @matheussartori/hackerchat-client\nhackerchat --username alice --room general`}
              lines={
                <>
                  <span className="com"># 1. run via npx (no install)</span>{'\n'}
                  <span className="kw">npx</span> <span className="acc">@matheussartori/hackerchat-client</span> <span className="var">--username</span> <span className="str">alice</span> <span className="var">--room</span> <span className="str">general</span>{'\n\n'}
                  <span className="com"># 2. point at your own server</span>{'\n'}
                  <span className="kw">npx</span> <span className="acc">@matheussartori/hackerchat-client</span> \{'\n'}
                  {'  '}<span className="var">--username</span> <span className="str">alice</span> <span className="var">--room</span> <span className="str">general</span> \{'\n'}
                  {'  '}<span className="var">--hostUri</span> <span className="str">ws://localhost:9898</span>{'\n\n'}
                  <span className="com"># 3. install globally</span>{'\n'}
                  <span className="kw">npm</span> i -g <span className="acc">@matheussartori/hackerchat-client</span>{'\n'}
                  <span className="acc">hackerchat</span> <span className="var">--username</span> <span className="str">alice</span> <span className="var">--room</span> <span className="str">general</span>
                </>
              }
            />
            <div style={{ marginTop: 22 }}>
              <ChatDemo key={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

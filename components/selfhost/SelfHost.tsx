'use client'

import { useI18n } from '@/contexts/I18nContext'
import { CopyBlock } from '@/components/quickstart/CopyBlock'

export function SelfHost() {
  const { t } = useI18n()

  return (
    <section id="selfhost">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">{t('sh.label')}</div>
            <h2>{t('sh.title.l1')}<br />{t('sh.title.l2')}</h2>
            <p>{t('sh.lead')}</p>
          </div>
          <div className="right">
            <span className="acc">{t('sh.right.v')}</span>
          </div>
        </div>

        <div className="split">
          <CopyBlock
            file="server · clone & run"
            lang="bash"
            code={`git clone https://github.com/matheussartori/hackerchat-server.git\ncd hackerchat-server\nnpm install\nnpm run dev\n# Listening: ws://0.0.0.0:9898`}
            lines={
              <>
                <span className="kw">git</span> clone <span className="str">https://github.com/matheussartori/hackerchat-server.git</span>{'\n'}
                <span className="kw">cd</span> hackerchat-server{'\n'}
                <span className="kw">npm</span> install{'\n'}
                <span className="kw">npm</span> run dev{'\n'}
                <span className="com"># Listening: ws://0.0.0.0:9898</span>
              </>
            }
          />
          <CopyBlock
            file="point the client at it"
            lang="bash"
            code={`# local\nnpx @matheussartori/hackerchat-client \\\n  --username alice --room general \\\n  --hostUri ws://localhost:9898\n\n# remote\nnpx @matheussartori/hackerchat-client \\\n  --username alice --room general \\\n  --hostUri ws://your-domain.com`}
            lines={
              <>
                <span className="com"># local</span>{'\n'}
                <span className="kw">npx</span> <span className="acc">@matheussartori/hackerchat-client</span> \{'\n'}
                {'  '}<span className="var">--username</span> <span className="str">alice</span> <span className="var">--room</span> <span className="str">general</span> \{'\n'}
                {'  '}<span className="var">--hostUri</span> <span className="str">ws://localhost:9898</span>{'\n\n'}
                <span className="com"># remote</span>{'\n'}
                <span className="kw">npx</span> <span className="acc">@matheussartori/hackerchat-client</span> \{'\n'}
                {'  '}<span className="var">--username</span> <span className="str">alice</span> <span className="var">--room</span> <span className="str">general</span> \{'\n'}
                {'  '}<span className="var">--hostUri</span> <span className="str">ws://your-domain.com</span>
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}

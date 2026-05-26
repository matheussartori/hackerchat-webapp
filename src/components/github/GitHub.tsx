'use client'

import { useI18n } from '@/contexts/I18nContext'
import { GithubIcon, NpmIcon, ArrowURIcon, BranchIcon } from '@/components/ui/Icon'

interface GitHubCardProps {
  href: string
  isNpm?: boolean
  label: string
  repo: string
  desc: string
  stats: string[]
}

function GitHubCard({ href, isNpm = false, label, repo, desc, stats }: GitHubCardProps) {
  return (
    <a
      className={`gh-card${isNpm ? ' npm' : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="top">
        <div className="l">
          {isNpm ? (
            <span className="npm-mark"><NpmIcon /></span>
          ) : (
            <GithubIcon />
          )}
          <span className="lbl">{label}</span>
        </div>
        <span className="arrow"><ArrowURIcon /></span>
      </div>
      <p className="repo">{repo}</p>
      <p className="desc">{desc}</p>
      <div className="stats">
        {stats.map((s, i) => (
          <span key={i}>
            {i === 0 && !isNpm ? <><BranchIcon /> {s}</> : s}
          </span>
        ))}
      </div>
    </a>
  )
}

export function GitHub() {
  const { t } = useI18n()

  return (
    <section id="github">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">{t('gh.label')}</div>
            <h2>{t('gh.title')}</h2>
            <p>{t('gh.lead')}</p>
          </div>
          <div className="right">
            {t('gh.right')}<span className="acc">v1.0.0</span>
          </div>
        </div>
        <div className="gh-row">
          <GitHubCard
            href="https://github.com/matheussartori/hackerchat-terminal-client"
            label={t('gh.client.lbl')}
            repo="matheussartori / hackerchat-terminal-client"
            desc={t('gh.client.desc')}
            stats={['typescript', '· ink · react 19', '· node ≥ 24']}
          />
          <GitHubCard
            href="https://github.com/matheussartori/hackerchat-server"
            label={t('gh.server.lbl')}
            repo="matheussartori / hackerchat-server"
            desc={t('gh.server.desc')}
            stats={['typescript', '· websockets', '· client-agnostic']}
          />
          <GitHubCard
            href="https://www.npmjs.com/package/@matheussartori/hackerchat-client"
            isNpm
            label={t('gh.cli.lbl')}
            repo="@matheussartori / hackerchat-client"
            desc={t('gh.cli.desc')}
            stats={['npx ready', '· v1.x', '· mit']}
          />
          <GitHubCard
            href="https://www.npmjs.com/package/@matheussartori/hackerchat-js-sdk"
            isNpm
            label={t('gh.npm.lbl')}
            repo="@matheussartori / hackerchat-js-sdk"
            desc={t('gh.npm.desc')}
            stats={['framework-agnostic', '· react bindings', '· mit']}
          />
        </div>
      </div>
    </section>
  )
}

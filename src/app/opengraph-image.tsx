import { ImageResponse } from 'next/og'
import { SITE_URL } from '@/lib/site'

export const alt = 'hackerchat · chat em tempo real no terminal'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const GREEN = '#54f08a'
const BG = '#10141d'
const FG = '#e7ecf3'
const DIM = '#8a94a6'
const LINE = '#283142'

export default function OpenGraphImage() {
  const domain = SITE_URL.replace(/^https?:\/\//, '')
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: BG,
          color: FG,
          padding: 64,
          justifyContent: 'space-between',
          fontFamily: 'monospace',
        }}
      >
        {/* terminal title bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: DIM, fontSize: 24 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: '#ff5f57' }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: '#febc2e' }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: '#28c840' }} />
          </div>
          <div style={{ display: 'flex', marginLeft: 12 }}>hackerchat-terminal-client — zsh — node</div>
        </div>

        {/* wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', color: GREEN, fontSize: 120, fontWeight: 800, letterSpacing: -4 }}>{'>_'}</div>
            <div style={{ display: 'flex', fontSize: 120, fontWeight: 800, letterSpacing: -4 }}>hackerchat</div>
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: DIM, maxWidth: 1000 }}>
            chat em tempo real, dentro do <span style={{ color: GREEN, marginLeft: 12 }}>terminal</span>
          </div>
        </div>

        {/* footer row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${LINE}`, paddingTop: 28, fontSize: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: FG }}>
            <span style={{ color: GREEN }}>$</span>
            <span>npx hackerchat-client</span>
          </div>
          <div style={{ display: 'flex', color: DIM }}>{domain}</div>
        </div>
      </div>
    ),
    { ...size },
  )
}

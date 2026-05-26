import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { AppProviders } from '@/components/providers/AppProviders'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'hackerchat — chat pelo terminal',
  description: 'TUI client that connects to any hackerchat server over WebSockets. Create or join rooms and message in real time — without leaving the shell.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body style={{ fontFamily: 'var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' }} className={jetbrainsMono.variable}>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}

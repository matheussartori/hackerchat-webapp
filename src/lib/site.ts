export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hackerchat.mattsartori.com.br'
).replace(/\/$/, '')

export const SITE_NAME = 'hackerchat'

export const SITE_TITLE = 'hackerchat · chat em tempo real no terminal'

export const SITE_DESCRIPTION =
  'hackerchat é um cliente de chat pro terminal. conecta a qualquer servidor hackerchat via websocket, então você entra numa sala e conversa em tempo real sem sair do shell. open source, mit, node ≥ 24.'

export const AUTHOR = { name: 'Matheus Sartori', url: 'https://mattsartori.com.br' }

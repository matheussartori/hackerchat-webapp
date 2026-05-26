export interface TerminalUser {
  name: string
  self?: boolean
}

export interface TerminalActivity {
  userName: string
  action: 'joined' | 'left'
  timestamp: Date
}

export interface TerminalMessage {
  userName: string
  message: string
  timestamp: Date
}

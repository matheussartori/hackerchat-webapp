function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

export function formatTime(d: Date): string {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`
}

export function formatShort(d: Date): string {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`
}

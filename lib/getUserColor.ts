const COLOR_PALETTE = [
  'c-pink', 'c-orange', 'c-yellow', 'c-lime', 'c-green',
  'c-cyan', 'c-blue', 'c-purple', 'c-pink', 'c-red',
  'c-green', 'c-cyan', 'c-purple', 'c-orange', 'c-yellow',
]

const colorCache = new Map<string, string>()

export function getUserColor(name: string): string {
  if (colorCache.has(name)) return colorCache.get(name)!
  const hash = Array.from(name).reduce((a, ch) => a + ch.charCodeAt(0), 0)
  const color = COLOR_PALETTE[hash % COLOR_PALETTE.length]
  colorCache.set(name, color)
  return color
}

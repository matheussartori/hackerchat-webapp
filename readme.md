<h1 align="center">Hackerchat Web App</h1>

<p align="center">
  The marketing and documentation website for the Hackerchat ecosystem.
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" alt="Next.js version" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React version" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License" /></a>
</p>

<p align="center">
  <a href="#overview">Overview</a> ·
  <a href="#features">Features</a> ·
  <a href="#prerequisites">Prerequisites</a> ·
  <a href="#running-locally">Running Locally</a> ·
  <a href="#project-structure">Project Structure</a> ·
  <a href="#internationalisation">Internationalisation</a> ·
  <a href="#related-projects">Related Projects</a>
</p>

---

## Overview

Hackerchat Web App is the landing page for the Hackerchat project. It documents the terminal client, the WebSocket server, and the overall ecosystem — covering quickstart instructions, CLI flags, TUI keyboard shortcuts, and self-hosting guidance.

The site is built with **Next.js 16** (App Router) and **React 19**, styled with pure CSS and Tailwind CSS v4, and ships no client-side runtime beyond what Next.js injects.

## Features

- Single-page landing with anchor-linked sections (features, quickstart, self-host, commands, source)
- Live public server status badge — checks `wss://hackerchatserver.mattsartori.com.br` on load
- Interactive TUI demo rendered directly in the browser
- CLI flags & keyboard shortcuts reference table
- Bilingual UI — Portuguese (`pt-br`) and English (`en`), toggled at runtime with no page reload
- Dark / light theme toggle with system preference detection
- Zero third-party analytics or tracking

## Prerequisites

- **Node.js** `>= 20`
- **npm** `>= 10`

## Running Locally

**1. Clone the repository**

```bash
git clone https://github.com/matheussartori/hackerchat-webapp.git
cd hackerchat-webapp
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

The app starts on **http://localhost:3000** by default.

**Other useful commands**

| Command | Description |
|---|---|
| `npm run build` | Build the production bundle |
| `npm start` | Serve the production build |
| `npm run lint` | Lint the source with ESLint |
| `npm run lint:fix` | Lint and auto-fix |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts, providers)
│   ├── page.tsx            # Single-page entry — composes all sections
│   └── globals.css         # Global styles and CSS custom properties
├── components/
│   ├── nav/                # Top navigation bar
│   ├── hero/               # Hero section with status badge and TUI preview
│   ├── features/           # Feature grid
│   ├── quickstart/         # Step-by-step quickstart with chat demo
│   ├── selfhost/           # Self-hosting instructions
│   ├── commands/           # CLI flags & TUI shortcuts tables
│   ├── github/             # Repository cards (client, server, npm)
│   ├── footer/             # Footer with links and build info
│   ├── terminal/           # Reusable terminal window component
│   ├── providers/          # React context providers (theme, i18n)
│   └── ui/                 # Shared UI primitives (Icon, etc.)
├── contexts/
│   ├── ThemeContext.tsx     # Dark / light theme state
│   └── I18nContext.tsx      # Active locale and translation helper
├── hooks/
│   ├── useServerStatus.ts  # Polls the public WebSocket server for liveness
│   └── useTickingClock.ts  # Clock used in the TUI demo
├── lib/
│   ├── i18n.ts             # Translation strings (pt-br + en)
│   ├── formatTime.ts       # Time formatting utilities
│   └── getUserColor.ts     # Stable per-user color from username hash
└── types/
    └── terminal.ts         # Shared types for the TUI demo component
```

## Internationalisation

All user-visible strings live in `src/lib/i18n.ts` under two locales: `pt-br` and `en`. The active locale is stored in `I18nContext` and toggled via the nav bar. No routing changes or page reloads occur — components call `useI18n()` and re-render with the new strings instantly.

To add a new locale, extend the `Locale` type and add a corresponding translations object in `I18N`.

## Related Projects

- [hackerchat-terminal-client](https://github.com/matheussartori/hackerchat-terminal-client) — The TUI client documented by this site
- [hackerchat-server](https://github.com/matheussartori/hackerchat-server) — The WebSocket server backend
- [hackerchat-js-sdk](https://github.com/matheussartori/hackerchat-js-sdk) — JavaScript/TypeScript SDK with framework-agnostic client and React bindings

## License

[MIT](./LICENSE) © [Matheus Sartori](https://github.com/matheussartori)

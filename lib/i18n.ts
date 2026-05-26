export type Locale = 'pt-br' | 'en'

export type TranslationKey =
  | 'nav.features' | 'nav.quickstart' | 'nav.selfhost' | 'nav.commands' | 'nav.source'
  | 'hero.badge.online' | 'hero.badge.offline' | 'hero.badge.checking'
  | 'hero.title.l1' | 'hero.title.l2.pre' | 'hero.title.l2.accent'
  | 'hero.lead' | 'hero.cta.primary' | 'hero.cta.secondary'
  | 'hero.stat.latency' | 'hero.stat.protocol' | 'hero.stat.client' | 'hero.stat.license' | 'hero.stat.client.v'
  | 'features.label' | 'features.title.l1' | 'features.title.l2' | 'features.lead' | 'features.right' | 'features.stable'
  | `feature.${1|2|3|4|5|6}.title` | `feature.${1|2|3|4|5|6}.desc`
  | 'qs.label' | 'qs.title.pre' | 'qs.title.accent' | 'qs.lead' | 'qs.right' | 'qs.right.v'
  | `qs.step.${1|2|3|4}.title` | `qs.step.${1|2|3|4}.desc`
  | 'sh.label' | 'sh.title.l1' | 'sh.title.l2' | 'sh.lead' | 'sh.right.pre' | 'sh.right.v'
  | 'cmd.label' | 'cmd.title' | 'cmd.lead' | 'cmd.right'
  | 'cmd.flags.title' | 'cmd.flags.lead' | 'cmd.shortcuts.title' | 'cmd.shortcuts.lead'
  | 'cmd.col.flag' | 'cmd.col.shortcut' | 'cmd.col.desc' | 'cmd.col.scope'
  | 'gh.label' | 'gh.title' | 'gh.lead' | 'gh.right'
  | 'gh.client.lbl' | 'gh.client.desc' | 'gh.server.lbl' | 'gh.server.desc'
  | 'gh.npm.lbl' | 'gh.npm.desc'
  | 'footer.tagline' | 'footer.project' | 'footer.source' | 'footer.author'
  | 'footer.bottom.l' | 'footer.bottom.r'

type Translations = Record<TranslationKey, string>

export const I18N: Record<Locale, Translations> = {
  'pt-br': {
    'nav.features': 'features',
    'nav.quickstart': 'quickstart',
    'nav.selfhost': 'self-host',
    'nav.commands': 'comandos',
    'nav.source': 'código',

    'hero.badge.online': 'servidor de teste online',
    'hero.badge.offline': 'servidor de teste offline',
    'hero.badge.checking': 'verificando servidor de teste...',
    'hero.title.l1': 'chat de verdade,',
    'hero.title.l2.pre': 'dentro do ',
    'hero.title.l2.accent': 'terminal',
    'hero.lead': '<b>hackerchat</b> é um cliente TUI que conecta a qualquer servidor hackerchat via WebSocket. crie ou entre em salas e converse em tempo real — sem sair do shell.',
    'hero.cta.primary': 'npx hackerchat-client',
    'hero.cta.secondary': 'ver o código',
    'hero.stat.latency': 'latência',
    'hero.stat.protocol': 'protocolo',
    'hero.stat.client': 'cliente',
    'hero.stat.license': 'licença',
    'hero.stat.client.v': 'node 24 · ink · ts',

    'features.label': '// features',
    'features.title.l1': 'tudo que um chat precisa.',
    'features.title.l2': 'nada que ele não precisa.',
    'features.lead': 'sem perfil, sem stories, sem onboarding. só você, uma sala e o terminal. renderizado com ink, cores via chalk, zero configuração.',
    'features.right': '06 / capabilities · ',
    'features.stable': 'stable',

    'feature.1.title': 'salas em tempo real',
    'feature.1.desc': 'mensagens trafegam em websockets. handshake em milissegundos, presença atualizada ao vivo.',
    'feature.2.title': 'TUI com ink',
    'feature.2.desc': 'interface renderizada com react no terminal via ink. sem navegador, sem electron. caracteres puros.',
    'feature.3.title': 'cores via chalk',
    'feature.3.desc': 'cada usuário ganha uma cor estável a partir do nome. mensagens, atividade e presença coloridas no shell.',
    'feature.4.title': 'zero-config',
    'feature.4.desc': 'conecta direto no servidor público de teste. basta passar --username e --room. nada mais.',
    'feature.5.title': 'self-host friendly',
    'feature.5.desc': 'aponte --hostUri pro seu servidor. roda local, em vps, em qualquer lugar que aceite websocket.',
    'feature.6.title': 'open · mit · pequeno',
    'feature.6.desc': 'cliente e servidor caem na cabeça em uma sentada. typescript completo, dependências mínimas.',

    'qs.label': '// quickstart · cliente',
    'qs.title.pre': 'conecte no servidor de teste em ',
    'qs.title.accent': '3 linhas',
    'qs.lead': 'o servidor público fica online 24/7. ideal pra testar antes de subir o seu.',
    'qs.right': 'tempo médio · ',
    'qs.right.v': '~ 12s',
    'qs.step.1.title': 'tenha node ≥ 24',
    'qs.step.1.desc': 'requisito mínimo do cliente. nada mais precisa ser instalado.',
    'qs.step.2.title': 'rode com npx',
    'qs.step.2.desc': 'um npx executa o binário sem instalar globalmente. da primeira vez pede confirmação.',
    'qs.step.3.title': 'escolha username + room',
    'qs.step.3.desc': 'flags --username e --room são obrigatórias. a room é criada se ainda não existir.',
    'qs.step.4.title': 'converse',
    'qs.step.4.desc': 'digita e dá enter. pgup/pgdn pra rolar. double-press ESC pra sair.',

    'sh.label': '// rode seu servidor',
    'sh.title.l1': 'seu próprio hub.',
    'sh.title.l2': 'aponte o cliente com --hostUri.',
    'sh.lead': 'o backend hackerchat-server fica no repo gêmeo. é só clonar, subir e apontar o cliente com a flag --hostUri.',
    'sh.right.pre': '',
    'sh.right.v': 'public test server',

    'cmd.label': '// referência',
    'cmd.title': 'flags & atalhos',
    'cmd.lead': 'tudo configurável via flags da CLI. os atalhos funcionam dentro da TUI depois de conectado.',
    'cmd.right': 'man · ',
    'cmd.flags.title': 'flags da CLI',
    'cmd.flags.lead': 'passadas direto pro binário no shell.',
    'cmd.shortcuts.title': 'atalhos do TUI',
    'cmd.shortcuts.lead': 'funcionam depois que você conecta numa sala.',
    'cmd.col.flag': 'flag',
    'cmd.col.shortcut': 'atalho',
    'cmd.col.desc': 'descrição',
    'cmd.col.scope': 'escopo',

    'gh.label': '// código aberto',
    'gh.title': 'dois repos. pequenos. typescript completo.',
    'gh.lead': 'cliente (ink + react no terminal) e servidor (websockets) — cada um cabe na cabeça em uma sentada.',
    'gh.right': 'mit · ',

    'gh.client.lbl': 'cliente · cli',
    'gh.client.desc': 'TUI feito com ink: header, sidebar de online + activity, messages, input bar. conexão ws automática.',
    'gh.server.lbl': 'backend · ws hub',
    'gh.server.desc': 'hub de websockets que roteia frames entre salas. presença em memória, agnóstico de cliente.',
    'gh.npm.lbl': 'pacote · npm',
    'gh.npm.desc': 'binário publicado no npm. rode com npx ou instale global. node ≥ 24, dependências mínimas.',

    'footer.tagline': 'chat efêmero, websocket-first, feito pra quem nunca fechou o terminal. mit · sem analytics · sem cadastro.',
    'footer.project': 'projeto',
    'footer.source': 'source',
    'footer.author': 'autor',
    'footer.bottom.l': 'mantido por matheus sartori · build {date}',
    'footer.bottom.r': 'public server: ws://hackerchatserver.mattsartori.com.br',
  },
  'en': {
    'nav.features': 'features',
    'nav.quickstart': 'quickstart',
    'nav.selfhost': 'self-host',
    'nav.commands': 'commands',
    'nav.source': 'source',

    'hero.badge.online': 'public test server online',
    'hero.badge.offline': 'public test server offline',
    'hero.badge.checking': 'checking public test server...',
    'hero.title.l1': 'real chat,',
    'hero.title.l2.pre': 'inside the ',
    'hero.title.l2.accent': 'terminal',
    'hero.lead': '<b>hackerchat</b> is a TUI client that connects to any hackerchat server over WebSockets. create or join rooms and message in real time — without leaving the shell.',
    'hero.cta.primary': 'npx hackerchat-client',
    'hero.cta.secondary': 'view source',
    'hero.stat.latency': 'latency',
    'hero.stat.protocol': 'protocol',
    'hero.stat.client': 'client',
    'hero.stat.license': 'license',
    'hero.stat.client.v': 'node 24 · ink · ts',

    'features.label': '// features',
    'features.title.l1': 'everything a chat needs.',
    'features.title.l2': 'nothing it does not.',
    'features.lead': 'no profile, no stories, no onboarding. just you, a room and the terminal. rendered with ink, colored with chalk, zero config.',
    'features.right': '06 / capabilities · ',
    'features.stable': 'stable',

    'feature.1.title': 'real-time rooms',
    'feature.1.desc': 'messages flow over websockets. handshake in milliseconds, presence updates live.',
    'feature.2.title': 'TUI with ink',
    'feature.2.desc': 'a react renderer for the terminal. no browser, no electron. characters all the way down.',
    'feature.3.title': 'colored via chalk',
    'feature.3.desc': 'each user gets a stable color hashed from their name. messages, activity and presence colored in the shell.',
    'feature.4.title': 'zero-config',
    'feature.4.desc': 'connects straight to the public test server. pass --username and --room. that is it.',
    'feature.5.title': 'self-host friendly',
    'feature.5.desc': 'point --hostUri at your own server. runs locally, on a vps, anywhere that speaks websocket.',
    'feature.6.title': 'open · mit · tiny',
    'feature.6.desc': 'client and server fit in your head in one sitting. full typescript, minimal deps.',

    'qs.label': '// quickstart · client',
    'qs.title.pre': 'connect to the test server in ',
    'qs.title.accent': '3 lines',
    'qs.lead': 'the public server is online 24/7. perfect for trying things before you stand up your own.',
    'qs.right': 'avg time · ',
    'qs.right.v': '~ 12s',
    'qs.step.1.title': 'node ≥ 24',
    'qs.step.1.desc': 'minimum runtime version. nothing else required.',
    'qs.step.2.title': 'run with npx',
    'qs.step.2.desc': 'npx runs the binary without installing it globally. first run asks for confirmation.',
    'qs.step.3.title': 'pick username + room',
    'qs.step.3.desc': '--username and --room are required. the room is created if it does not exist yet.',
    'qs.step.4.title': 'chat',
    'qs.step.4.desc': 'type and hit enter. pgup/pgdn to scroll. double-press ESC to exit.',

    'sh.label': '// run your own',
    'sh.title.l1': 'your own hub.',
    'sh.title.l2': 'point the client with --hostUri.',
    'sh.lead': 'the backend lives in the sibling repo hackerchat-server. clone, run, and aim the client at it with the --hostUri flag.',
    'sh.right.pre': '',
    'sh.right.v': 'public test server',

    'cmd.label': '// reference',
    'cmd.title': 'flags & shortcuts',
    'cmd.lead': 'everything configurable via CLI flags. shortcuts work inside the TUI after you connect.',
    'cmd.right': 'man · ',
    'cmd.flags.title': 'CLI flags',
    'cmd.flags.lead': 'passed straight to the binary in your shell.',
    'cmd.shortcuts.title': 'TUI shortcuts',
    'cmd.shortcuts.lead': 'active once you are connected to a room.',
    'cmd.col.flag': 'flag',
    'cmd.col.shortcut': 'shortcut',
    'cmd.col.desc': 'description',
    'cmd.col.scope': 'scope',

    'gh.label': '// open source',
    'gh.title': 'two repos. small. fully typed.',
    'gh.lead': 'client (ink + react in the terminal) and server (websockets) — each fits in your head in one sitting.',
    'gh.right': 'mit · ',

    'gh.client.lbl': 'client · cli',
    'gh.client.desc': 'TUI built with ink: header, online + activity sidebar, messages, input bar. auto ws connection.',
    'gh.server.lbl': 'backend · ws hub',
    'gh.server.desc': 'a websocket hub that routes frames between rooms. in-memory presence, client-agnostic.',
    'gh.npm.lbl': 'package · npm',
    'gh.npm.desc': 'binary published on npm. run with npx or install globally. node ≥ 24, minimal deps.',

    'footer.tagline': 'ephemeral chat, websocket-first, made for people who never close the terminal. mit · no analytics · no signup.',
    'footer.project': 'project',
    'footer.source': 'source',
    'footer.author': 'author',
    'footer.bottom.l': 'maintained by matheus sartori · build {date}',
    'footer.bottom.r': 'public server: ws://hackerchatserver.mattsartori.com.br',
  },
}

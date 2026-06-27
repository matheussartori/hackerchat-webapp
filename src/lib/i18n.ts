export type Locale = 'pt-br' | 'en'

export type TranslationKey =
  | 'nav.features' | 'nav.quickstart' | 'nav.selfhost' | 'nav.commands' | 'nav.source'
  | 'hero.badge.online' | 'hero.badge.offline' | 'hero.badge.checking' | 'hero.badge.waking'
  | 'hero.title.l1' | 'hero.title.l2.pre' | 'hero.title.l2.accent'
  | 'hero.lead' | 'hero.cta.primary' | 'hero.cta.secondary'
  | 'hero.stat.transport' | 'hero.stat.protocol' | 'hero.stat.client' | 'hero.stat.license' | 'hero.stat.client.v'
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
  | 'gh.npm.lbl' | 'gh.npm.desc' | 'gh.cli.lbl' | 'gh.cli.desc'
  | 'footer.tagline' | 'footer.project' | 'footer.source' | 'footer.author'
  | 'footer.bottom.l' | 'footer.bottom.r' | 'footer.bottom.by'
  | 'tui.online' | 'tui.offline' | 'tui.section.online' | 'tui.section.activity' | 'tui.section.messages'
  | 'tui.empty' | 'tui.no.activity' | 'tui.you'
  | 'nav.playground'
  | 'pg.label' | 'pg.title.pre' | 'pg.title.accent' | 'pg.lead'
  | 'pg.form.title' | 'pg.form.lead'
  | 'pg.field.server' | 'pg.field.server.hint'
  | 'pg.field.username' | 'pg.field.username.hint'
  | 'pg.field.room' | 'pg.field.room.hint'
  | 'pg.connect' | 'pg.connecting' | 'pg.disconnect'
  | 'pg.status.idle' | 'pg.status.connecting' | 'pg.status.open' | 'pg.status.closing' | 'pg.status.closed'
  | 'pg.send' | 'pg.input.placeholder' | 'pg.input.placeholder.disconnected'
  | 'pg.empty.messages' | 'pg.error.connection' | 'pg.tip.title' | 'pg.tip.body'
  | 'pg.right'

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
    'hero.badge.waking': 'acordando servidor de teste...',
    'hero.title.l1': 'chat de verdade,',
    'hero.title.l2.pre': 'dentro do ',
    'hero.title.l2.accent': 'terminal',
    'hero.lead': '<b>hackerchat</b> é um cliente de chat pro terminal. ele fala com qualquer servidor hackerchat via WebSocket, então dá pra entrar numa sala e começar a digitar sem sair do shell.',
    'hero.cta.primary': 'npx hackerchat-client',
    'hero.cta.secondary': 'ver o código',
    'hero.stat.transport': 'transporte',
    'hero.stat.protocol': 'protocolo',
    'hero.stat.client': 'cliente',
    'hero.stat.license': 'licença',
    'hero.stat.client.v': 'node 24 · ink · ts',

    'features.label': 'man hackerchat',
    'features.title.l1': 'feito pra fazer uma coisa.',
    'features.title.l2': 'conversar numa sala, no terminal.',
    'features.lead': 'não tem conta pra criar nem nada pra configurar. roda no terminal com ink e colore os nomes com chalk. é abrir e digitar.',
    'features.right': '',
    'features.stable': 'código aberto',

    'feature.1.title': 'salas em tempo real',
    'feature.1.desc': 'as mensagens trafegam por uma conexão websocket. você vê quem está na sala e quando alguém entra ou sai, ao vivo.',
    'feature.2.title': 'TUI com ink',
    'feature.2.desc': 'a interface é react, renderizada direto no terminal com ink. sem navegador, sem electron.',
    'feature.3.title': 'cores via chalk',
    'feature.3.desc': 'cada usuário ganha uma cor estável a partir do nome. mensagens, atividade e presença coloridas no shell.',
    'feature.4.title': 'zero-config',
    'feature.4.desc': 'conecta direto no servidor público de teste. é só passar --username e --room.',
    'feature.5.title': 'self-host friendly',
    'feature.5.desc': 'aponte --hostUri pro seu servidor, seja no localhost ou numa vps.',
    'feature.6.title': 'open · mit · pequeno',
    'feature.6.desc': 'cliente e servidor com codebase enxuta e legível. typescript, dependências mínimas.',

    'qs.label': 'npx hackerchat-client',
    'qs.title.pre': 'conecte no servidor de teste em ',
    'qs.title.accent': '3 linhas',
    'qs.lead': 'o servidor público fica de pé pra você testar o cliente na hora, antes de subir o seu.',
    'qs.right': '',
    'qs.right.v': 'npx · sem instalar',
    'qs.step.1.title': 'tenha node ≥ 24',
    'qs.step.1.desc': 'requisito mínimo do cliente. nada mais precisa ser instalado.',
    'qs.step.2.title': 'rode com npx',
    'qs.step.2.desc': 'um npx executa o binário sem instalar globalmente. da primeira vez pede confirmação.',
    'qs.step.3.title': 'escolha username + room',
    'qs.step.3.desc': 'flags --username e --room são obrigatórias. a room é criada se ainda não existir.',
    'qs.step.4.title': 'converse',
    'qs.step.4.desc': 'digita e dá enter. pgup/pgdn pra rolar. double-press ESC pra sair.',

    'sh.label': 'git clone hackerchat-server',
    'sh.title.l1': 'seu próprio hub.',
    'sh.title.l2': 'aponte o cliente com --hostUri.',
    'sh.lead': 'o backend é um repositório à parte, o hackerchat-server. clone, rode e aponte o cliente com a flag --hostUri.',
    'sh.right.pre': '',
    'sh.right.v': 'public test server',

    'cmd.label': 'hackerchat --help',
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

    'gh.label': 'gh repo list',
    'gh.title': 'dois repositórios e dois pacotes npm, tudo em typescript.',
    'gh.lead': 'um cliente de terminal (ink + react), o servidor de websockets, o binário no npm e um sdk em js/ts pra ligar o chat a qualquer ui.',
    'gh.right': 'mit · ',

    'gh.client.lbl': 'cliente · cli',
    'gh.client.desc': 'TUI feito com ink: header, sidebar de online + activity, messages, input bar. conexão ws automática.',
    'gh.server.lbl': 'backend · ws hub',
    'gh.server.desc': 'hub de websockets que roteia frames entre salas. presença em memória, agnóstico de cliente.',
    'gh.cli.lbl': 'cli · npm',
    'gh.cli.desc': 'binário publicado no npm. rode com npx ou instale global. node ≥ 24, dependências mínimas.',
    'gh.npm.lbl': 'sdk · npm',
    'gh.npm.desc': 'sdk js/ts pra conectar qualquer ui ao hackerchat-server. cliente agnóstico de framework + bindings opcionais pra react.',

    'footer.tagline': 'chat efêmero por websocket, código aberto sob mit. sem analytics, sem cadastro.',
    'footer.project': 'projeto',
    'footer.source': 'source',
    'footer.author': 'autor',
    'footer.bottom.l': 'mantido por',
    'footer.bottom.by': 'matheus sartori',
    'footer.bottom.r': 'public server: wss://hackerchatserver.mattsartori.com.br',

    'tui.online': 'online',
    'tui.offline': 'offline',
    'tui.section.online': 'online',
    'tui.section.activity': 'atividade',
    'tui.section.messages': 'mensagens',
    'tui.empty': '(vazio)',
    'tui.no.activity': '(sem atividade)',
    'tui.you': '(você)',

    'nav.playground': 'playground',
    'pg.label': 'open playground',
    'pg.title.pre': 'um chat real, dentro do ',
    'pg.title.accent': 'navegador',
    'pg.lead': 'conecte a qualquer servidor hackerchat via websocket e converse em tempo real, sem instalar nada. funciona com o <b>@matheussartori/hackerchat-js-sdk</b>.',
    'pg.form.title': 'conectar',
    'pg.form.lead': 'preencha o endereço, escolha um nick e uma sala. a sala é criada se não existir.',
    'pg.field.server': 'servidor',
    'pg.field.server.hint': 'url completa do websocket (ws:// ou wss://)',
    'pg.field.username': 'username',
    'pg.field.username.hint': 'como você vai aparecer na sala',
    'pg.field.room': 'sala',
    'pg.field.room.hint': 'qualquer nome com letras, números ou traços',
    'pg.connect': 'conectar',
    'pg.connecting': 'conectando...',
    'pg.disconnect': 'desconectar',
    'pg.status.idle': 'ocioso',
    'pg.status.connecting': 'conectando',
    'pg.status.open': 'conectado',
    'pg.status.closing': 'fechando',
    'pg.status.closed': 'desconectado',
    'pg.send': 'enviar',
    'pg.input.placeholder': 'digite uma mensagem e pressione enter...',
    'pg.input.placeholder.disconnected': 'conecte para enviar mensagens',
    'pg.empty.messages': 'nenhuma mensagem ainda. mande o primeiro "olá!"',
    'pg.error.connection': 'falha ao conectar. confira o endereço e tente de novo.',
    'pg.tip.title': 'dica',
    'pg.tip.body': 'o servidor público é wss://hackerchatserver.mattsartori.com.br. para self-host, aponte aqui sua url.',
    'pg.right': 'sdk · ',
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
    'hero.badge.waking': 'waking up public test server...',
    'hero.title.l1': 'real chat,',
    'hero.title.l2.pre': 'inside the ',
    'hero.title.l2.accent': 'terminal',
    'hero.lead': '<b>hackerchat</b> is a terminal chat client. it talks to any hackerchat server over WebSocket, so you can join a room and start typing without leaving your shell.',
    'hero.cta.primary': 'npx hackerchat-client',
    'hero.cta.secondary': 'view source',
    'hero.stat.transport': 'transport',
    'hero.stat.protocol': 'protocol',
    'hero.stat.client': 'client',
    'hero.stat.license': 'license',
    'hero.stat.client.v': 'node 24 · ink · ts',

    'features.label': 'man hackerchat',
    'features.title.l1': 'built to do one thing.',
    'features.title.l2': 'talk to a room from the terminal.',
    'features.lead': 'there is no account to create and nothing to configure. it runs in the terminal with ink and colors names with chalk. open it and type.',
    'features.right': '',
    'features.stable': 'open source',

    'feature.1.title': 'real-time rooms',
    'feature.1.desc': 'messages travel over a websocket connection. you can see who is in the room and when people come and go, live.',
    'feature.2.title': 'TUI with ink',
    'feature.2.desc': 'the interface is react, rendered straight to the terminal with ink. no browser, no electron.',
    'feature.3.title': 'colored via chalk',
    'feature.3.desc': 'each user gets a stable color hashed from their name. messages, activity and presence colored in the shell.',
    'feature.4.title': 'zero-config',
    'feature.4.desc': 'connects straight to the public test server. just pass --username and --room.',
    'feature.5.title': 'self-host friendly',
    'feature.5.desc': 'point --hostUri at your own server, whether it runs on localhost or a vps.',
    'feature.6.title': 'open · mit · tiny',
    'feature.6.desc': 'client and server with a lean, readable codebase. full typescript, minimal deps.',

    'qs.label': 'npx hackerchat-client',
    'qs.title.pre': 'connect to the test server in ',
    'qs.title.accent': '3 lines',
    'qs.lead': 'the public server stays up so you can try the client right away, before standing up your own.',
    'qs.right': '',
    'qs.right.v': 'npx · no install',
    'qs.step.1.title': 'node ≥ 24',
    'qs.step.1.desc': 'minimum runtime version. nothing else required.',
    'qs.step.2.title': 'run with npx',
    'qs.step.2.desc': 'npx runs the binary without installing it globally. first run asks for confirmation.',
    'qs.step.3.title': 'pick username + room',
    'qs.step.3.desc': '--username and --room are required. the room is created if it does not exist yet.',
    'qs.step.4.title': 'chat',
    'qs.step.4.desc': 'type and hit enter. pgup/pgdn to scroll. double-press ESC to exit.',

    'sh.label': 'git clone hackerchat-server',
    'sh.title.l1': 'your own hub.',
    'sh.title.l2': 'point the client with --hostUri.',
    'sh.lead': 'the backend is a separate repo, hackerchat-server. clone it, run it, and point the client at it with --hostUri.',
    'sh.right.pre': '',
    'sh.right.v': 'public test server',

    'cmd.label': 'hackerchat --help',
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

    'gh.label': 'gh repo list',
    'gh.title': 'two repositories and two npm packages, all written in typescript.',
    'gh.lead': 'a terminal client (ink + react), the websocket server, the npm binary, and a js/ts sdk for wiring the chat into any ui.',
    'gh.right': 'mit · ',

    'gh.client.lbl': 'client · cli',
    'gh.client.desc': 'TUI built with ink: header, online + activity sidebar, messages, input bar. auto ws connection.',
    'gh.server.lbl': 'backend · ws hub',
    'gh.server.desc': 'a websocket hub that routes frames between rooms. in-memory presence, client-agnostic.',
    'gh.cli.lbl': 'cli · npm',
    'gh.cli.desc': 'binary published on npm. run with npx or install globally. node ≥ 24, minimal deps.',
    'gh.npm.lbl': 'sdk · npm',
    'gh.npm.desc': 'js/ts sdk to connect any ui to a hackerchat server. framework-agnostic client + optional react bindings.',

    'footer.tagline': 'ephemeral chat over websocket, open source under mit. no analytics, no signup.',
    'footer.project': 'project',
    'footer.source': 'source',
    'footer.author': 'author',
    'footer.bottom.l': 'maintained by',
    'footer.bottom.by': 'matheus sartori',
    'footer.bottom.r': 'public server: wss://hackerchatserver.mattsartori.com.br',

    'tui.online': 'online',
    'tui.offline': 'offline',
    'tui.section.online': 'online',
    'tui.section.activity': 'activity',
    'tui.section.messages': 'messages',
    'tui.empty': '(empty)',
    'tui.no.activity': '(no activity)',
    'tui.you': '(you)',

    'nav.playground': 'playground',
    'pg.label': 'open playground',
    'pg.title.pre': 'real chat, inside the ',
    'pg.title.accent': 'browser',
    'pg.lead': 'connect to any hackerchat server over websocket and chat in real time, no install needed. it runs on the <b>@matheussartori/hackerchat-js-sdk</b>.',
    'pg.form.title': 'connect',
    'pg.form.lead': 'fill in the server, pick a nick and a room. the room is created if it does not exist.',
    'pg.field.server': 'server',
    'pg.field.server.hint': 'full websocket url (ws:// or wss://)',
    'pg.field.username': 'username',
    'pg.field.username.hint': 'how you will appear in the room',
    'pg.field.room': 'room',
    'pg.field.room.hint': 'any name with letters, numbers or dashes',
    'pg.connect': 'connect',
    'pg.connecting': 'connecting...',
    'pg.disconnect': 'disconnect',
    'pg.status.idle': 'idle',
    'pg.status.connecting': 'connecting',
    'pg.status.open': 'connected',
    'pg.status.closing': 'closing',
    'pg.status.closed': 'disconnected',
    'pg.send': 'send',
    'pg.input.placeholder': 'type a message and press enter...',
    'pg.input.placeholder.disconnected': 'connect to send messages',
    'pg.empty.messages': 'no messages yet. say hi!',
    'pg.error.connection': 'connection failed. check the url and try again.',
    'pg.tip.title': 'tip',
    'pg.tip.body': 'the public server is wss://hackerchatserver.mattsartori.com.br. for self-host, point this at your own url.',
    'pg.right': 'sdk · ',
  },
}

# jano

Biblioteca que envolve drivers de banco pra deixar o código limpo, simples e com Promises.
Os 4 repositórios `jano-*` foram consolidados aqui, um subdiretório por driver, com o
histórico de commits original preservado (importados via `git subtree`).

| pasta | pacote npm | driver | estado |
|---|---|---|---|
| `mysql/` | [`jano-mysql`](https://npmjs.org/package/jano-mysql) | `mysql` | implementado |
| `oracle/` | [`jano-oracle`](https://npmjs.org/package/jano-oracle) | `oracledb` | implementado (transações com problemas conhecidos, ver Limitações) |
| `postgre/` | — | — | só o esqueleto (README + CI), sem código |
| `sqlserver/` | — | — | só o esqueleto (README + CI), sem código |

## Requisitos

- Node.js 8+ (mínimo declarado em `mysql/README.md`). O CI roda no Node 22.
- Para `oracle/`: o `oracledb` exige o Oracle Client instalado na máquina.

## Instalação

Cada pasta é um pacote npm independente. Para consumir a biblioteca:

```bash
npm install jano-mysql --save
npm install jano-oracle --save
```

Para trabalhar no repositório, instale as dependências dentro da pasta do driver:

```bash
cd mysql && npm install
```

## Configuração

A biblioteca não lê variáveis de ambiente. A conexão é passada ao construtor, no formato aceito
pelo driver (`mysql.createConnection` / `oracledb.getConnection`). Os campos usados no exemplo do
`mysql/`: `host`, `user`, `password`, `database`, `port`. Guarde as credenciais fora do código
(por exemplo em variáveis de ambiente do seu app) e nunca as comite.

## Uso

`mysql/` e `oracle/` expõem a mesma superfície, o que é justamente o motivo de viverem juntos:

```js
const jano = require('jano-mysql')(connectionString)

await jano.executeString(query)
await jano.executeObject(query, object)
await jano.executeProcedure(procedure, array)
await jano.readProcedure(procedure, array)
```

Trocar de banco é trocar o require — a chamada continua igual. O resultado de `executeString`
fica em `.content`.

Transações (`beginTransaction`, `executeTransaction`, `connection.endConnection(commit)`) existem
nos dois drivers; os exemplos completos estão em [`mysql/README.md`](mysql/README.md).

## Testes

```bash
cd mysql && npm test    # node test  ->  Sucesso
cd oracle && npm test   # node test  ->  Sucesso
```

Atenção: `test.js` nos dois pacotes é apenas um `console.log("Sucesso")`. Não há teste de
comportamento nem conexão com banco, então `npm test` verde não prova que a biblioteca funciona.

## Lint e build

Não há linter nem etapa de build configurados. O código é CommonJS puro, publicado como está.

## Publicação

Cada pasta mantém seu próprio `package.json`, então o publish continua sendo feito de
dentro dela (`cd mysql && npm publish`). A unificação não mudou nome nem versão de pacote.

## Limitações conhecidas

Registradas aqui para não serem lidas como funcionalidade pronta (nenhuma foi corrigida neste PR):

- `oracle/index.js`: `beginTransaction` chama `connection.beginTransaction`, método que não existe
  na API do `oracledb`.
- `oracle/index.js`: `executeTransaction` cria `newmu` mas passa `newMu` (identificador inexistente).
- `messageUtil.setError` calcula `isSuccess` com `>= 200 || < 300`, que é sempre verdadeiro.

## Gates de CI

Os dois workflows da raiz chamam workflows reutilizáveis de `juninmd/base-actions`:

| workflow | quando roda | o que checa |
|---|---|---|
| `Validate` (`.github/workflows/validate.yml`) | pull request e push em `main` | validação de PR: instalação de dependências, lint (só aviso por padrão), auditoria de dependências (`high`, bloqueante) e varredura de segredos do intervalo do PR |
| `Security Scan` (`.github/workflows/security.yml`) | push em `main`, semanal (domingo 00:00 UTC) e manual | Gitleaks no histórico completo; falha se achar segredo |

As subpastas ainda carregam cópias de workflows antigos em `<driver>/.github/`; o GitHub só executa
os da raiz.

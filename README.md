# jano

Biblioteca que envolve drivers de banco pra deixar o código limpo, simples e com Promises.
Os 4 repositórios `jano-*` foram consolidados aqui, um subdiretório por driver, com o
histórico de commits original preservado (importados via `git subtree`).

| pasta | pacote npm | driver | estado |
|---|---|---|---|
| `mysql/` | [`jano-mysql`](https://npmjs.org/package/jano-mysql) | `mysql` | implementado |
| `oracle/` | [`jano-oracle`](https://npmjs.org/package/jano-oracle) | `oracledb` | implementado |
| `postgre/` | — | — | só o esqueleto (README + CI), sem código |
| `sqlserver/` | — | — | só o esqueleto (README + CI), sem código |

## API

`mysql/` e `oracle/` expõem a mesma superfície, o que é justamente o motivo de viverem juntos:

```js
const jano = require('jano-mysql')(connectionString)

await jano.executeString(query)
await jano.executeObject(query, object)
await jano.executeProcedure(procedure, array)
await jano.readProcedure(procedure, array)
```

Trocar de banco é trocar o require — a chamada continua igual.

## Publicação

Cada pasta mantém seu próprio `package.json`, então o publish continua sendo feito de
dentro dela (`cd mysql && npm publish`). A unificação não mudou nome nem versão de pacote.

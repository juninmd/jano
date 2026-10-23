# AGENTS.md

Monorepo `jano`: wrappers com Promises sobre drivers de banco. Um pacote npm por pasta.

## Stack

- JavaScript CommonJS, sem TypeScript, sem build, sem linter.
- `mysql/` (driver `mysql`), `oracle/` (driver `oracledb`). `postgre/` e `sqlserver/` são só esqueleto.
- Gerenciador: npm (cada pasta tem `package-lock.json`; também existe `yarn.lock`).

## Comandos reais

```bash
cd mysql  && npm install && npm test   # node test (stub: só imprime "Sucesso")
cd oracle && npm install && npm test   # idem
cd mysql  && npm publish               # publicação é por pasta
```

Não existem scripts de lint ou build. Não invente `npm run lint` / `npm run build`.

## Gates de CI

- `Validate` (`.github/workflows/validate.yml`): reutiliza `juninmd/base-actions` `reusable-validate.yml`.
- `Security Scan` (`.github/workflows/security.yml`): Gitleaks via `reusable-security-scan.yml`.
- Workflows em `<driver>/.github/` são legado e não rodam; só os da raiz valem.

## Convenções

- `mysql/` e `oracle/` devem manter a mesma API pública (`executeString`, `executeObject`,
  `executeProcedure`, `readProcedure`, `beginTransaction`, `executeTransaction`). Mudou um, avalie o outro.
- `<driver>/AGENTS.md` são textos genéricos herdados dos repos originais; valem as regras deste arquivo.

## Não fazer

- Não comitar credenciais de banco, connection strings reais nem `.env`.
- Não tratar `npm test` verde como prova de comportamento: `test.js` é stub.
- Não editar `package-lock.json` / `yarn.lock` à mão.
- Não renomear pacote nem alterar versão sem pedido explícito (publicação npm é por pasta).

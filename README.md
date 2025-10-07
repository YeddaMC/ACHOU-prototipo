
 # Interactive Prototype Design

 Este repositório contém o protótipo interativo "Achou!" criado com uma stack web moderna. Abaixo estão as linguagens/tecnologias usadas e um guia passo-a-passo para preparar o projeto e publicá-lo no GitHub Pages (inclui comandos PowerShell).

 Link original do design (Figma): https://www.figma.com/design/uytUHDlEtuIt0P29Wk3lkC/Interactive-Prototype-Design

 ## Tecnologias / Linguagens

- TypeScript
- React (JSX/TSX)
- Vite (bundler / dev server)
- CSS / arquivos estáticos

 O projeto está estruturado para gerar um site estático (build em `dist/`) usando o Vite, que é compatível com o deploy em GitHub Pages.

 ## Preparar o projeto para GitHub Pages

 Observações importantes:
- O build do Vite gera arquivos estáticos em `dist/`. O GitHub Pages serve esses arquivos.
- Para que os assets sejam carregados corretamente quando o site for servido em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`, configure a opção `base` do Vite ou use caminhos relativos.

 1) Ajuste o `base` em `vite.config.ts` (recomendado quando publicar em um repositório que NÃO é do tipo `username.github.io`):

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // substitua `NOME_DO_REPO` pelo nome do repositório no GitHub
  base: '/NOME_DO_REPO/',
  plugins: [react()],
})
```

Se preferir não mexer no `vite.config.ts`, outra opção é usar `base: './'` para paths relativos — isso pode evitar 404s, mas nem sempre é ideal para todas as rotas.

2) Ajuste (opcional) o `package.json` para incluir os scripts de deploy com `gh-pages`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Passo-a-passo (PowerShell) — subir para o GitHub e publicar no Pages

Substitua os placeholders antes de rodar (por exemplo: SEU_USUARIO e NOME_DO_REPO).

1) Inicializar git (caso ainda não exista)

```powershell
cd 'c:\Users\marya\OneDrive\Documentos\4_YMC\ACHOU!\PROTOTIPO INTERATIVO'
git init
git add .
git commit -m "Primeiro commit do protótipo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

2) Instalar dependência de deploy (local)

```powershell
npm install --save-dev gh-pages
```

3) Adicionar/confirmar os scripts `predeploy` e `deploy` no `package.json` (veja a seção acima). Depois rode:

```powershell
npm run deploy
```

O comando `npm run deploy` irá executar `npm run build` (graças ao `predeploy`) e publicar o conteúdo da pasta `dist/` na branch `gh-pages` automaticamente.

4) No GitHub (web):
- Vá em Settings > Pages e confirme a source. Normalmente o gh-pages é selecionado automaticamente. Caso seja necessário, selecione a branch `gh-pages` e a pasta `/ (root)`.

5) Aguardar alguns minutos e acesse:

```
https://SEU_USUARIO.github.io/NOME_DO_REPO/
```

## Dicas e resolução de problemas

- 404 após deploy: verifique se `base` em `vite.config.ts` corresponde a `/NOME_DO_REPO/` ou use `base: './'` para caminhos relativos.
- Página em branco: abra DevTools (Console) e verifique erros de loading de arquivos (paths incorretos).
- Deseja publicar como usuário (username.github.io): então o `base` pode ficar `"/"` e o repositório precisa se chamar `SEU_USUARIO.github.io`.

## Comandos úteis (resumo, PowerShell)

```powershell
# instalar deps
npm i

# rodar dev
npm run dev

# build local
npm run build

# deploy para GitHub Pages (após configurar gh-pages e scripts)
npm run deploy
```

## Contribuindo / notas finais

Se quiser, posso:
- aplicar automaticamente os scripts `predeploy`/`deploy` no `package.json`;
- ajustar `vite.config.ts` com o `base` correto (se você me informar o nome do repositório);
- ou preparar um pequeno workflow do GitHub Actions alternativo para deploy.

---

Arquivo gerado automaticamente com instruções de deploy para GitHub Pages.

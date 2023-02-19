<h1 align="center">🚀<br>Next.js Starter</h1>
<p align="center">Vít's starter template for Next.js v13</p>
<p align="center">
<img alt="Next.js" src="https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/app/ts/public/next.svg" height="40">
<img alt="emotion" src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png" height="40">
<img alt="TypeScript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="40">
<img alt="Babel" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg" height="40">
<img alt="ESLint" src="https://eslint.org/assets/images/logo/eslint-logo-color.svg" height="40">
<img alt="Prettier" src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-avatar-dark.svg" height="40">
<img alt="Stylelint" src="https://raw.githubusercontent.com/stylelint/stylelint/main/identity/stylelint-icon-and-text-white-square.svg" height="40">
<img alt="pnpm" src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" height="40">
<img alt="GitHub Actions" src="https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" height="40">
</p>
<hr>

## ✅ Features

Minimalistic starter for Next.js projects with all the goodies 🤙

- [TypeScript](https://github.com/microsoft/TypeScript) and [ESLint](https://github.com/eslint/eslint) with opinionated
  setup
- [Prettier](https://github.com/prettier/prettier) as code formatter
- [emotion](https://github.com/emotion-js/emotion) with theme and utilities for CSS-in-JS
- [Stylelint](https://github.com/stylelint/stylelint) to keep your CSS-in-JS clean
- [Conventional Commits](https://github.com/conventional-commits/conventionalcommits.org) setup
- [husky](https://github.com/typicode/husky) hooks for `commit-msg` and `pre-commit`
  (with [lint-staged](https://github.com/okonet/lint-staged))
- [pnpm](https://github.com/pnpm/pnpm) as package manager (with [renovate](https://github.com/renovatebot/renovate))
- [GitHub Actions](https://github.com/actions) workflow for QA
- `src` folder with lined-up structure for your components, pages and other stuff

## 👨‍💻 Usage

1. Select `Use this template` > `Create new repository` above
2. Clone the created repository
3. Run `pnpm install`
4. Start coding and create something 😍

## ⚒️ Scripts

- `pnpm run build` – creates production build with `next build`
- `pnpm run cz` – starts CLI to create Conventional Commit
- `pnpm run dev` – starts development server with `next dev`
- `pnpm run eslint` – checks code with `eslint`
- `pnpm run eslint:fix` – runs `eslint` with auto-fix
- `pnpm run fix` – runs all linters with auto-fix
- `pnpm run prettier` – checks code format with `prettier`
- `pnpm run prettier:fix` – runs `prettier` with auto-fix
- `pnpm run stylelint` – checks your CSS-in-JS files
- `pnpm run stylelint:fix` – runs `stylelint` with auto-fix
- `pnpm run qa` – runs all linters in check-only mode
- `pnpm run start` – starts server for last created production build
- `pnpm run ts` - checks code with `tsc`

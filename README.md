# React Skeleton

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- This is a monorepo(aka multi-package repository) that uses [workspace](https://pnpm.io/workspaces).
- It uses [vite](https://vite.dev/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

- The application lives in `apps/web` directory, where you can import components from the packages ui directory.
- The storybook lives in `apps/docs-design-system` directory.
- Each of the configurations have been added in their separate package folder like `config-eslint`,
  `config-tailwind`, so that whichever package is needed can be imported inside `apps/web` app.

# Local Setup

1. Clone this repository
2. Run `nvm use` to ensure you are using the required pnpm package.
3. Run `pnpm install`.

# Development
- *Local Development:* To start your local environment run `pnpm dev`.
  This will run the dev command for all apps inside app directory e.g. for 'web' app.
- *Specific app development:*" To start development environment for only a specific app, run `pnpm --filter <package-name> dev`.
  So to start the development environment for apps/web, run `pnpm --filter web dev`.

- *Storybook:* To start storybook, run `pnpm storybook`.
- *Linting:* To lint, run `pnpm lint`.

| Application | Command                     | URL                   |
|-------------|-----------------------------|-----------------------|
| Development | `pnpm dev`                  | http://localhost:5174/|
| Production  | `pnpm build && pnpm serve`  | http://localhost:5175/|
| Storybook   | `pnpm storybook`            | http://localhost:6006/|

# Components/UI package.
- The components live in `packages/design-system/src/components` directory.
- Once you create a new component, for example `packages/design-system/src/components/button`, the
  component can then be imported inside `apps/web/src/App.tsx` by importing the ui package
  e.g.
 ```javascript
import { Button } from '@react-skeleton/design-system/button';

<Button variant="outline" size="sm">Open</Button>
```
# Config Packages
- Configuration packages like `apps/config-eslint`, `apps/config-prettier` can be imported from packages.
- Example, you can import a `config-prettier` config inside the `apps/web/prettierrc.js` like so:
  `import defaultConfig from '@react-skeleton/config-prettier';`

<a href="https://rtcamp.com/"><img src="https://rtcamp.com/wp-content/uploads/sites/2/2019/04/github-banner@2x.png" alt="Join us at rtCamp, we specialize in providing high performance enterprise WordPress solutions"></a>

# Frappe UI React Starter

This template provides a minimal setup to start frontend development of Frappe apps with React working in Vite.

- This is a monorepo (aka multi-package repository) that uses [workspace](https://pnpm.io/workspaces).
- It uses [vite](https://vite.dev/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

## Usage
This template is designed to be cloned into an existing Frappe app using degit.

```bash
npx degit rtCamp/frappe-ui-react-starter frontend
```

```bash
cd frontend
pnpm install # Use `nvm use` for correct node version.
pnpm dev
```

- The application lives in the `packages/app` directory, where you can import components from the packages UI directory.
- The Storybook configuration lives in the `packages/storybook-config` directory for your components; however, stories live inside the components folder.
- All configurations have been consolidated into a single `@frappe-ui-react-starter/shared-config` package with granular exports for easier maintenance and dependency management.

# Development
- **Local Development:** To start your local environment, run `pnpm dev`.
  This will run the dev command for all packages inside the packages directory, e.g., for the 'app' package.
- **Storybook:** To start Storybook for your components, run `pnpm storybook`.
- **Linting:** To lint, run `pnpm lint`.

| Application | Command                     | URL                     |
|-------------|-----------------------------|-----------------------  |
| Development | `pnpm dev`                  | http://localhost:5174   |
| Production  | `pnpm build && pnpm serve`  | http://localhost:5175   |
| Storybook   | `pnpm storybook`            | http://localhost:6006   |

# Components/UI Package
- The components live in the `packages/design-system/src/components` directory.
- Once you create a new component, for example `packages/design-system/src/components/button`, the
  component can then be imported inside `packages/app/src/App.tsx` by importing the UI package,
  e.g.:
 ```javascript
import { Button } from '@frappe-ui-react-starter/design-system/button';

<Button variant="outline" size="sm">Open</Button>
```
# Config Package
- All tooling configurations (ESLint, Jest, Playwright, Prettier, TailwindCSS, TypeScript) are now in a unified `@frappe-ui-react-starter/shared-config` package.
- Configurations can be imported using granular exports from the consolidated package.
- Examples:
  - ESLint: `import { config as baseConfig } from '@frappe-ui-react-starter/shared-config/eslint';`
  - Prettier: `import defaultConfig from '@frappe-ui-react-starter/shared-config/prettier';`
  - Jest: `import baseConfig from '@frappe-ui-react-starter/shared-config/jest/react';`
  - TypeScript: `"extends": "@frappe-ui-react-starter/shared-config/typescript/base"`
  - Tailwind: `@import "@frappe-ui-react-starter/shared-config/tailwind";`
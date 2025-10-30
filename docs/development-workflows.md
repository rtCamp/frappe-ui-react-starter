# Developer Workflows

# Local Setup

1. Clone this repository
2. Run `nvm use` to ensure you are using the required pnpm package.
3. Run `pnpm install`.

# Development
- *Local Development:* To start your local environment run `pnpm dev`.
  This will run the dev command for all packages inside packages directory e.g. for 'app' package.
- *Specific package development:* To start development environment for only a specific package, run `pnpm --filter <package-name> dev`.
  So to start the development environment for packages/app, run `pnpm --filter app dev`.

- *Storybook:* To start storybook, run `pnpm run storybook`.
- *Linting:* To lint, run `pnpm run lint`.

| Application | Command              | URL                    |
|-------------|----------------------|------------------------|
| Development | `pnpm run dev`       | http://localhost:5174/ |
| Production  | `pnpm run serve`     | http://localhost:5175/ |
| Storybook   | `pnpm run storybook` | http://localhost:5173/ |

# Developer Workflows

# Local Setup

1. Clone this repository
2. Run `nvm use` to ensure you are using the required pnpm package.
3. Run `pnpm install`.

# Development
- *Local Development:* To start your local environment run `pnpm dev`.
  This will run the dev command for all apps inside app directory e.g. for 'web' app.
- *Specific app development:*" To start development environment for only a specific app, run `pnpm --filter <package-name> dev`.
  So to start the development environment for apps/web, run `pnpm --filter web dev`.

- *Storybook:* To start storybook, run `pnpm run storybook`.
- *Linting:* To lint, run `pnpm run lint`.

| Application | Command              | URL                    |
|-------------|----------------------|------------------------|
| Development | `pnpm run dev`       | http://localhost:5174/ |
| Production  | `pnpm run serve`     | http://localhost:5175/ |
| Storybook   | `pnpm run storybook` | http://localhost:5173/ |

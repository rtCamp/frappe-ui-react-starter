// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

/**
 * Imports.
 */
import { config as baseConfig } from '@frappe-ui-react-starter/shared-config/eslint';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';

/**
 * Export configs.
 */
export default tseslint.config(
	[
		...baseConfig,
		globalIgnores(['dist']),
		{
			files: ['**/*.{ts,tsx}'],
			extends: [reactRefresh.configs.vite],
		},
	],
	storybook.configs['flat/recommended']
);

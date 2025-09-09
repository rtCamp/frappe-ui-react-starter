// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { config as baseConfig } from '@react-skeleton/config-eslint';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(
	[
		...baseConfig,
		globalIgnores(['dist']),
		{
			files: ['**/*.{ts,tsx}'],
		},
	],
	storybook.configs['flat/recommended']
);

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: [
	    // Look for stories inside design-system components
	    '../../../packages/design-system/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
}
export default config

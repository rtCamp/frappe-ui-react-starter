import baseConfig from '@frappe-ui-react-starter/shared-config/jest/react';

/** @type {import('jest').Config} */
const config = {
	...baseConfig,
	testEnvironment: 'jsdom',
	displayName: 'app',
	rootDir: '.',
	testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};

export default config;

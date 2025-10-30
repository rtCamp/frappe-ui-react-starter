import baseConfig from '@react-skeleton/config/jest/react';

/** @type {import('jest').Config} */
const config = {
	...baseConfig,
	testEnvironment: 'jsdom',
	displayName: 'web',
	rootDir: '.',
	testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};

export default config;

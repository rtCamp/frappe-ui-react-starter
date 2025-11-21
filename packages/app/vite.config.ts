/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
import path from 'path';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
	const proxyConfig = getProxy(mode);
	return {
		plugins: [react(), tailwindcss()],
		server: {
			port: 5174, // Force dev server to always use 5174.
			strictPort: true, // Fail if 5173 is already taken.
			proxy: proxyConfig
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		}
	}
});
const getProxy = (mode: string) => {
	const env = loadEnv(mode, "../../", "");
	if (env.VITE_SITE_NAME && env.VITE_SITE_PORT) {
		return {
			"^/(app|api|assets|files|private|socket.io)": {
				target: `http://${env.VITE_SITE_NAME}:${env.VITE_SITE_PORT}`,
				ws: true,
				changeOrigin: true,
				secure: false,
			},
		};
	}
	return {}
}
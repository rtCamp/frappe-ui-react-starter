import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 5173,     // Force dev server to always use 5173.
		strictPort: true, // Fail if 5173 is already taken.
	},
});

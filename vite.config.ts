import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react(), tsconfigPaths()],
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		includeSource: ['src/**/*.{js,ts}'],
		coverage: {
			provider: 'c8',
			reporter: ['text'],
		},
	},
})

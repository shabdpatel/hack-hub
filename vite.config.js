import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist', // Explicitly define the output directory
		chunkSizeWarningLimit: 1000, // Optional: Increase chunk size limit if needed
	},
});

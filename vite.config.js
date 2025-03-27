import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        insurance: resolve(__dirname, 'src/pages/insurance-info/index.html'),
      },
    },
  },
})

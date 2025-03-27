import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [ react(), viteCompression() ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      main: resolve(root, 'index.html'),
      insurance: resolve(root, 'insurance', 'index.html'),
    }
  }
})

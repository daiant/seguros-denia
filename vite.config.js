import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url'
import mpa from "vite-plugin-multi-pages";
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mpa({scanDir: 'src/pages',}), react(), viteCompression()],
})

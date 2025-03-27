import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import mpa from "vite-plugin-multi-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mpa({scanDir: 'src/pages',}), react(), viteCompression()],
})

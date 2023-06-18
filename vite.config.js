import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: '/econwish2023/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        version2: resolve(root,'version2/index.html'),
        version3: resolve(root,'version3/index.html')
      }
    }
  }
})

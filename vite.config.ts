import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

const resolvePath = (folderPath: string) => path.resolve(__dirname, folderPath)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: resolvePath('src'),
      '@components': resolvePath('./src/components'),
      '@consts': resolvePath('./src/consts'),
    },
  },
})

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssPlugin from '@tailwindcss/postcss'  // v4 插件
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        // 如果 core 还是 v3，请改用 'tailwindcss' 而不是 '@tailwindcss/postcss'：
        tailwindcssPlugin(),  
        autoprefixer(),
      ]
    }
  }
})

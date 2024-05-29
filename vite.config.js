import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (pathname) => path.resolve(__dirname, pathname)

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Demo_Vite_React/' : '/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '~': resolve(''),
      components: resolve('src/components'),
      assets: resolve('src/assets/image'),
      apis: resolve('src/services/apis'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
})

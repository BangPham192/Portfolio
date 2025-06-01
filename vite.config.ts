import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port
    open: true
  },
  base: './',
  clearScreen: false,
  build: {
    sourcemap: true
  }
})
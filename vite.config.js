import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7195, // Fixed port
    strictPort: true, // Prevents Vite from switching to another port if 7195 is in use
  },
})

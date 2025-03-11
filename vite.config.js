import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    strictPort: true, // Prevents Vite from switching to another port if 7195 is in use
  },
})


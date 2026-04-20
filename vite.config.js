import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Custom domain (abhinavhooda.in) → assets must load from site root.
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})

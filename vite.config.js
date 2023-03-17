import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { makeStyles } from '@mui/material'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@mui/material'
      ]
    }
  }
})

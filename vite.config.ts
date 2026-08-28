import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react'
          }

          if (id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run/')) {
            return 'router'
          }

          return undefined
        },
      },
    },
  },
})

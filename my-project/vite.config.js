import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html', // Path to your 404.html in the project root
          dest: '.',       // Destination in the dist folder
        },
      ],
    }),
  ],
  base: "/CAT201-Assignment2/",
})

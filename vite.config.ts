import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://free-invoice-generator-ph.netlify.app',
      dynamicRoutes: ['/generator'],
      readable: true,
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
})

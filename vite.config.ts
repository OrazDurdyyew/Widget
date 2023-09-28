import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path')
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  plugins: [vue()],
  server: {
    host: true,
    port: 1011
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  }
})

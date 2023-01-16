import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import dns from 'dns'
import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
dns.setDefaultResultOrder('verbatim')
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  const apiVersion:string = `/${env.VITE_QAB_API_VERSION}`
  return {
    base: env.VITE_BASE_URL,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }, 
    server: {
      proxy: {
        '/authApi': {
          target: env.VITE_AUTH_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/authApi/, ''),
          secure: false,
          ws: true
        },
        '/qabApi': {
          target: env.VITE_QAB_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/qabApi/, '').concat(apiVersion),
          secure: false,
          ws: true
        },
        '/adminApi': {
          target: env.VITE_ADMIN_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/adminApi/, ''),
          secure: false,
          ws: true
        },
      }
    },
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})

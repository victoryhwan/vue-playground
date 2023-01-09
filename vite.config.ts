import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import dns from 'dns'
import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }, 
//   server: {
//     proxy: {
//       '/auth/api': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//         secure: false,
//         ws: true
//       }
//     }
//   }
// })
dns.setDefaultResultOrder('verbatim')
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }, 
    server: {
      proxy: {
        '/auth/api': {
          target: 'http://localhost:9088',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      }
    },
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})

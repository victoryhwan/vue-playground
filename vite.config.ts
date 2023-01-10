import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import dns from 'dns'
import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }, 
  server: {
    proxy: {
      '/authApi': {
        target: 'https://mcareplus.dcmc.co.kr:20443/ui-dev/plus',
        // target: 'https://mcareplus.dcmc.co.kr:20443/ui-dev/plus/dcmc/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/authApi/, ''),
        secure: false,
        ws: true
      },
      '/qabApi': {
        target: 'https://mcareplus.dcmc.co.kr:20443/ui-dev/plus/dcmc/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/qabApi/, ''),
        secure: false,
        ws: true
      },
    }
  }
})
// dns.setDefaultResultOrder('verbatim')
// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url))
//       }
//     }, 
//     server: {
//       proxy: {
//         '/authApi': {
//           target: 'http://localhost:9088',
//           changeOrigin: true,
//           rewrite: (path) => path.replace(/^\/authApi/, ''),
//           secure: false,
//           ws: true
//         }
//       }
//     },
//     // vite config
//     define: {
//       __APP_ENV__: env.APP_ENV,
//     },
//   }
// })

import axios from 'axios'
export {};

declare global {
  interface Window {
    example: object;
    sideMenu: object;
  }
}

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $axios: typeof axios
//   }
// }
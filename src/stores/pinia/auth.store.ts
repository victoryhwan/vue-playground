// @ts-check
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',{
    state: () => ({ 
        user: JSON.parse(localStorage.getItem('user') || ''),
        returnUrl: null
    }),
    actions: {
        async setToken(token: string){
            this.user = token
        }
    },
})
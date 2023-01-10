// @ts-check
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',{
    state: () => ({ 
        token: ''
    }),
    actions: {
        // async init(){
        //     this.token =  null
        // },
        async setToken(token: string){
            this.token =  token
        },
        
    },
})
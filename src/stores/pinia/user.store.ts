// @ts-check
import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/user'

export const useUserStore = defineStore('userStore',{
    state: () => ({
        user: <UserInfo>JSON.parse(localStorage.getItem('mplus.doLogin') || '{}'),
    }),
    actions: {
        async setUser(user: UserInfo){
            this.user = user
        },
        async getUser(){
            return this.user
        }
    },
})
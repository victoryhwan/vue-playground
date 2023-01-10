// @ts-check
import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/user'

export const useUserStore = defineStore('user',{
    state: () => ({ 
        user: <UserInfo>{}
    }),
    actions: {
        async setUser(user: UserInfo){
            this.user = user
        }
    },
})
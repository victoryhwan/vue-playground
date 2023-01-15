import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async checkAccessRights(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_checkAccessRights'+version ,param)
        return res.data.body
    },
    async inputAccessRights(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/post_inputAccessRights'+version ,param)
        return res.data.body
    },
    async AccessResnList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_AccessResnList'+version ,param)
        return res.data.body
    }
}
import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getPatCount(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatCount'+version ,param)
        return res.data.body
    },
    async getUnIdtAlertList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getUnIdtAlertList'+version ,param)
        return res.data.body
    },
    async inputUnIdtAlertConfirmation(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/post_inputUnIdtAlertConfirmation'+version ,param)
        return res.data.body
    }
}
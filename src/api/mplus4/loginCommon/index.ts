import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getQRBarCode(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getQRBarCode'+version ,param)
        return res.data.body
    },
    async postSMSPageInfo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/post_postSMSPageInfo'+version ,param)
        return res.data.body
    }
}
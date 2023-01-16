import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getQRBarCode(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getQRBarCode'+version ,param)
    return res.data.body
}
export async function postSMSPageInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/post_postSMSPageInfo'+version ,param)
    return res.data.body
}
import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getPatCount(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatCount'+version ,param)
    return res.data.body
}
export async function getUnIdtAlertList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getUnIdtAlertList'+version ,param)
    return res.data.body
}
export async function inputUnIdtAlertConfirmation(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/post_inputUnIdtAlertConfirmation'+version ,param)
    return res.data.body
}
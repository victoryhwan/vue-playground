import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function doLogin(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_doLogin'+version ,param)
    return res.data.body
}
export async function inputLoginLog(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/post_inputLoginLog'+version ,param)
    return res.data.body
}
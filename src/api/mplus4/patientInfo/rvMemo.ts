import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getRvMemo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getRvMemo'+version ,param)
    return res.data.body
}
export async function inputRvMemo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/post_inputRvMemo'+version ,param)
    return res.data.body
}
import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function checkAccessRights(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_checkAccessRights'+version ,param)
    return res.data.body
}

export async function inputAccessRights(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/post_inputAccessRights'+version ,param)
    return res.data.body
}

export async function AccessResnList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_AccessResnList'+version ,param)
    return res.data.body
}

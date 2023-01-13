import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getWorkSch(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getWorkSch'+version ,param)
    return res.data.body
}

export async function getDoctorInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDoctorInfo'+version ,param)
    return res.data.body
}

import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getPrescription(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPrescription'+version ,param)
    return res.data.body
}

export async function getDrugInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDrugInfo'+version ,param)
    return res.data.body
}

export async function getDrugDetail(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDrugDetail'+version ,param)
    return res.data.body
}


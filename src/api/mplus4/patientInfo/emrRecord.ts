import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getEmrListByPeriod(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getEmrListByPeriod'+version ,param)
    return res.data.body
}

export async function getEmrListByType(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getEmrListByType'+version ,param)
    return res.data.body
}

export async function LoadHTMLForMobileRequest(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_LoadHTMLForMobileRequest'+version ,param)
    return res.data.body
}

export async function CheckEMRViewAccessRights(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_CheckEMRViewAccessRights'+version ,param)
    return res.data.body
}

export async function inputEMRViewSeq(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_inputEMRViewSeq'+version ,param)
    return res.data.body
}

export async function inputEMRViewReason(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_inputEMRViewReason'+version ,param)
    return res.data.body
}

export async function getNursRecordList(param:any) {
    const res:any = await axiosInstance.get(proxyUrl+'/get_getNursRecordList'+version ,param)
    return res.data.body
}

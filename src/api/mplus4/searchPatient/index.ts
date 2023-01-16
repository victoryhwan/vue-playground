import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getInPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getInPatientList'+version ,param)
    return res.data.body
}
export async function getOutPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOutPatientList'+version ,param)
    return res.data.body
}
export async function getEmPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getEmPatientList'+version ,param)
    return res.data.body
}
export async function getOpCntrList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOpCntrList'+version ,param)
    return res.data.body
}
export async function getOpPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOpPatientList'+version ,param)
    return res.data.body
}
export async function getCoPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getCoPatientList'+version ,param)
    return res.data.body
}
export async function getRvPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getRvPatientList'+version ,param)
    return res.data.body
}
export async function postSmsRvInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/post_postSmsRvInfo'+version ,param)
    return res.data.body
}
import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getPatientInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatientInfo'+version ,param)
    return res.data.body
}
export async function getPatSummary(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatSummary'+version ,param)
    return res.data.body
}
export async function getPatMedicalTeam(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatMedicalTeam'+version ,param)
    return res.data.body
}
export async function getPatDischargeInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatDischargeInfo'+version ,param)
    return res.data.body
}
export async function getPatDiagnosisInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatDiagnosisInfo'+version ,param)
    return res.data.body
}
export async function getPatOperationInfo(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getPatOperationInfo'+version ,param)
    return res.data.body
}
export async function getOuHistoryList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOuHistoryList'+version ,param)
    return res.data.body
}
export async function getInHistoryList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getInHistoryList'+version ,param)
    return res.data.body
}
export async function getOpHistoryList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOpHistoryList'+version ,param)
    return res.data.body
}
export async function getCoHistoryList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getCoHistoryList'+version ,param)
    return res.data.body
}
export async function getVitalList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getVitalList'+version ,param)
    return res.data.body
}
export async function getIoSumList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getIoSumList'+version ,param)
    return res.data.body
}

import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getPatientInfo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatientInfo'+version ,param)
        return res.data.body
    },
    async getPatSummary(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatSummary'+version ,param)
        return res.data.body
    },
    async getPatMedicalTeam(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatMedicalTeam'+version ,param)
        return res.data.body
    },
    async getPatDischargeInfo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatDischargeInfo'+version ,param)
        return res.data.body
    },
    async getPatDiagnosisInfo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatDiagnosisInfo'+version ,param)
        return res.data.body
    },
    async getPatOperationInfo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getPatOperationInfo'+version ,param)
        return res.data.body
    },
    async getOuHistoryList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getOuHistoryList'+version ,param)
        return res.data.body
    },
    async getInHistoryList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getInHistoryList'+version ,param)
        return res.data.body
    },
    async getOpHistoryList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getOpHistoryList'+version ,param)
        return res.data.body
    },
    async getCoHistoryList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getCoHistoryList'+version ,param)
        return res.data.body
    },
    async getVitalList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getVitalList'+version ,param)
        return res.data.body
    },
    async getIoSumList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getIoSumList'+version ,param)
        return res.data.body
    }
}

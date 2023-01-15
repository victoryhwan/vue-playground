import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getInPatientList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getInPatientList'+version ,param)
        return res.data.body
    },
    async getOutPatientList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getOutPatientList'+version ,param)
        return res.data.body
    },
    async getEmPatientList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getEmPatientList'+version ,param)
        return res.data.body
    },
    async getOpCntrList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getOpCntrList'+version ,param)
        return res.data.body
    },
    async getOpPatientList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getOpPatientList'+version ,param)
        return res.data.body
    },
    async getCoPatientList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getCoPatientList'+version ,param)
        return res.data.body
    },
    async getRvPatientList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getRvPatientList'+version ,param)
        return res.data.body
    },
    async postSmsRvInfo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/post_postSmsRvInfo'+version ,param)
        return res.data.body
    }
}
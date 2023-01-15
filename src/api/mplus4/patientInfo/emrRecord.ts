import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getEmrListByPeriod(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getEmrListByPeriod'+version ,param)
        return res.data.body
    },
    async getEmrListByType(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getEmrListByType'+version ,param)
        return res.data.body
    },
    async LoadHTMLForMobileRequest(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_LoadHTMLForMobileRequest'+version ,param)
        return res.data.body
    },
    async CheckEMRViewAccessRights(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_CheckEMRViewAccessRights'+version ,param)
        return res.data.body
    },
    async inputEMRViewSeq(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_inputEMRViewSeq'+version ,param)
        return res.data.body
    },
    async inputEMRViewReason(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_inputEMRViewReason'+version ,param)
        return res.data.body
    },
    async getNursRecordList(param:any) {
        const res:any = await axiosInstance.get(proxyUrl+'/get_getNursRecordList'+version ,param)
        return res.data.body
    }
}
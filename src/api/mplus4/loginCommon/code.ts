import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getDeptList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getDeptList'+version ,param)
        return res.data.body
    },

    async getDoctorListByDept(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getDoctorListByDept'+version ,param)
        return res.data.body
    },

    async getWardList(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getWardList'+version ,param)
        return res.data.body
    },

    async  getNurseListByWard(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getNurseListByWard'+version ,param)
        return res.data.body
    },

    async  getRoomListByWard(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getRoomListByWard'+version ,param)
        return res.data.body
    },

    async  getCodeMaster(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getCodeMaster'+version ,param)
        return res.data.body
    }
 }
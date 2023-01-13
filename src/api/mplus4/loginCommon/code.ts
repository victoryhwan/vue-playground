import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getDeptList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDeptList'+version ,param)
    return res.data.body
}

export async function getDoctorListByDept(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDoctorListByDept'+version ,param)
    return res.data.body
}

export async function getWardList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getWardList'+version ,param)
    return res.data.body
}

export async function getNurseListByWard(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getNurseListByWard'+version ,param)
    return res.data.body
}

export async function getRoomListByWard(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getRoomListByWard'+version ,param)
    return res.data.body
}

export async function getCodeMaster(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getCodeMaster'+version ,param)
    return res.data.body
}

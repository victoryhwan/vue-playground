import axios from 'axios';
import { axiosInstance } from '@/api/util/axiosConfig';

// const {proxy} = getCurrentInstance();
const proxyUrl = '/qabApi'
const version = ''

async function getInPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getInPatientList'+version ,param)
    return res.data.body
}

async function getOpPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOpPatientList'+version ,param)
    return res.data.body
}

async function getOpCntrList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getOpCntrList'+version ,param)
    return res.data.body
}

async function getDeptList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDeptList'+version ,param)
    return res.data.body
}

async function getWardList(param:any){
    const res:any = await axiosInstance.post(proxyUrl+'/get_getWardList'+version ,param)
    return res.data.body
}

async function getDoctorList(param:any){
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDoctorListByDept'+version ,param)
    return res.data.body
}

async function getTest(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    return res.data
}
export { getInPatientList, getOpPatientList, getOpCntrList, getDoctorList, getWardList, getDeptList, getTest }
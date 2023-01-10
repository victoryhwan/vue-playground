import { ref, onMounted, reactive, getCurrentInstance } from 'vue'
import axios from 'axios';
import { axiosInstance } from '@/api/util/axiosConfig';

// const {proxy} = getCurrentInstance();
const proxyUrl = '/qabApi'
const version = '/v4'

async function getInPatientList(param:any) {
    let res:any = await axiosInstance.post(proxyUrl+'/get_getInPatientList'+version ,param)

    res = res.data.body
    return res
}

async function getDeptList(param:any) {
    let res:any = await axiosInstance.post(proxyUrl+'/get_getDeptList'+version ,param)
    let selected:string = '%'

    res.data.body.forEach((item:any) => {
        item.value = item.DeptCd
        item.text = item.DeptNm

        if(item.DeptCd == '2150000000'){
            selected = item.DeptCd
        }
    });

    res = res.data.body
    return { res, selected }
}

async function getWardList(param:any){
    let res:any = await axiosInstance.post(proxyUrl+'get_getWardList'+version ,param)
    let selected:string = '%'

    res.data.body.forEach((item:any) => {
        item.value = item.Ward
        item.text = item.WardNm
    });

    res = res.data.body
    return { res, selected }

}

async function getDoctorList(param:any){
    let res:any = await axiosInstance.post(proxyUrl+'get_getDoctorListByDept'+version ,param)
    let selected:string = ''

    res.data.body.forEach((item:any) => {
        item.value = item.DrId
        item.text = item.DrNm

        if(item.DrId == '아이디값'){
            selected = item.DrId
        }
    });

    res = res.data.body
    return { res, selected }
}

async function getTest(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    return res.data
}
export { getInPatientList, getDoctorList, getWardList, getDeptList, getTest }
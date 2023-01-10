import { ref, onMounted, reactive, getCurrentInstance } from 'vue'
import axios from 'axios';
import { axiosInstance } from '@/api/util/axiosConfig';

// const {proxy} = getCurrentInstance();
const proxyUrl = '/qabApi'
const version = '/v4'

async function getInPatientList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getInPatientList'+version ,param)
    return res.data.body
}

async function getDeptList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getDeptList'+version ,param)
    const selected:string = '%'

    res.data.body.forEach((item:any) => {
        item.value = item.DeptCd
        item.text = item.DeptNm

        // if(item.DeptCd == '2150000000'){
        //     selected = item.DeptCd
        // }
    });

    res.data.body.unshift({value:'%',text:'전체'})
    return { res:res.data.body, selected:selected }
}

async function getWardList(param:any){
    const res:any = await axiosInstance.post(proxyUrl+'get_getWardList'+version ,param)
    const selected:string = '%'

    res.data.body.forEach((item:any) => {
        item.value = item.Ward
        item.text = item.WardNm
    });

    res.data.body.unshift({value:'%',text:'전체'})
    return { res:res.data.body, selected:selected }

}

async function getDoctorList(param:any){
    const res:any = await axiosInstance.post(proxyUrl+'get_getDoctorListByDept'+version ,param)
    const selected:string = '%'

    res.data.body.forEach((item:any) => {
        item.value = item.DrId
        item.text = item.DrNm

        // if(item.DrId == '아이디값'){
        //     selected = item.DrId
        // }
    });

    res.data.body.unshift({value:'%',text:'전체'})
    return { res:res.data.body, selected:selected }
}

async function getTest(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    return res.data
}
export { getInPatientList, getDoctorList, getWardList, getDeptList, getTest }
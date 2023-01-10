import { ref, onMounted, reactive, getCurrentInstance } from 'vue'
import axios from 'axios';
import { axiosInstance } from '@/api/util/axiosConfig';

// const {proxy} = getCurrentInstance();
const proxyUrl = '/qabApi'
const version = '/v4'

function getInPatientList(param:any) {
    const res = ref([]);
    onMounted(async()=>{
        console.log("getInPatientList")
        res.value = (await axiosInstance.post(proxyUrl+'/get_getInPatientList'+version ,param)).data.body
    })

	return res
}

function getDeptList(param:any) {
    const res = ref([]);
    const selected = ref('%');

    onMounted(async()=>{
        res.value = (await axiosInstance.post(proxyUrl+'/get_getDeptList'+version ,param)).data.body

        res.value.forEach((item:any)=>{
            item.value = item.DeptCd
            item.text = item.DeptNm

            if(item.DeptCd == '2150000000'){
                selected.value = item.DeptCd
            }
        })

        // res.value.unshift({value:'%', text:'전체'})
    })

    

	return {res, selected}
}

function getWardList(param:any){
    const res = ref([]);
    const selected = ref('%');

    onMounted(async()=>{
        res.value = (await axios.post(proxyUrl+'get_getWardList'+version ,param)).data.body
        
        res.value.forEach((item:any)=>{
            item.value = item.Ward
            item.text = item.WardNm
        })
        
    })

	return {res, selected}
}

function getDoctorList(param:any){
    const res = ref([]);
    const selected = ref('%');

    onMounted(async()=>{
        res.value = (await axios.post(proxyUrl+'get_getDoctorListByDept'+version ,param)).data.body
        
        res.value.forEach((item:any)=>{
            item.value = item.DrId
            item.text = item.DrNm

            if(item.DrId == '아이디값'){
                // console.log(`item.DrId : ${JSON.stringify(item.DrId)}`)
                selected.value = item.DrId
            }
        })
    })
	return {res, selected}
}

async function getTest(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    return res.data
}
export { getInPatientList, getDoctorList, getWardList, getDeptList, getTest }
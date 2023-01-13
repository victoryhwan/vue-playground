import axios from 'axios';
import { axiosInstance } from '@/api/util/axiosConfig';

// const testParam = {
//     "HosCd": "37100092",
//     "DeptCd": "2030000000",
//     "userId": "21",
//     "menuType": "MAIN"
// }

const proxyUrl = '/adminApi'
export async function menuAndFac(param:any){
    const res = await axiosInstance.get(proxyUrl+'/rest/userRoleMenus/menuAndFav', param)
    return res.data.body
}



// const url = 'http://localhost:3000'

// function login() {
//     const res = ref([]);
//     onMounted(async()=>{
//         res.value = (await axios.post(url+'/login' ,param)).data.body
//     })

// 	return res
// }

// function getUser() {
//     const res = ref([]);
//     onMounted(async()=>{
//         res.value = (await axios.get(url+'/user' ,param)).data.body
//     })

// 	return res
// }


// export { login , getUser}
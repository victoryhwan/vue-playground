import axios from 'axios';
import {axiosInstance} from '@/api/util/axiosConfig';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const testParam = {
    "appId": "1",
    "appPushId": "1",
    "appVer": "1.1.0",
    "deviceVer": "1.0",
    "failCnt": "0",
    "hospitalCd": "37100092",
    "loginType": "PASSWORD",
    "modelNm": "sm-950n",
    "platformType": "PC",
    "pushToken": "adsfasdfadsfaf",
    "userAccount": "E00005",
    "userPwd": "a9d42fd45a3d3aac89d58e94e2908a5474a5151dd65d0eaf4107e65450e03ba3",
    "uuid": "E00005"
  }
export async function login(){
    const res = await axiosInstance.post('http://localhost:9088/ui-dev/plus/rest/drLogin', JSON.stringify(testParam))
    console.log('login res :',res.data.mplus)
    cookies.set('accessToken', res.data.mplus.access_token)
    cookies.set('refreshToken', res.data.mplus.refresh_token)
    return res.data
}

//test 
export async function getUser(){
    const res = await axios.get('/auth/api/user')
    return res.data
}

export async function getTest(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    return res.data
}

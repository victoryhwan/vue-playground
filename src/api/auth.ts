import axios from 'axios';
import { axiosInstance } from '@/api/util/axiosConfig';
import { useCookies } from "vue3-cookies";
import { useUserStore } from '@/stores/pinia/user.store';

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
const proxyUrl = "/authApi"
export async function login(){
    const user = useUserStore()
    let resultStatus = false
    try {
        const res = await axiosInstance.post(proxyUrl+'/rest/drLogin', JSON.stringify(testParam))
        console.log('login res :',res.data.mplus)
        cookies.set('accessToken', res.data.mplus.access_token)
        cookies.set('refreshToken', res.data.mplus.refresh_token)
        localStorage.setItem("mplus.doLogin", JSON.stringify(res.data.mplus.result));
        // localStorage.setItem("mplus.globalHosCd", value);
        // localStorage.setItem("mplus.envCreat", value);
        user.setUser(res.data.mplus.result)
        resultStatus = true
    } catch (error) {
        console.log(error)
        resultStatus = false
    }
    return resultStatus
}

export async function logout(){
    let resultStatus = false
    try {
        const res = await axiosInstance.post(proxyUrl+'/rest/logout', JSON.stringify(testParam))
        resultStatus = true
    } catch (error) {
        console.log(error)
        resultStatus = false
    }
    return resultStatus
}

export async function refreshToken(){
    let resultStatus = false
    try {
        const res = await axiosInstance.post(proxyUrl+'/rest/refreshToken', JSON.stringify(testParam))
        resultStatus = true
    } catch (error) {
        console.log(error)
        resultStatus = false
    }
    return resultStatus
}

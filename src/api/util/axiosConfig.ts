import Axios from 'axios';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const axiosInstance = Axios.create({
  // timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  (config:any) => {
    console.log('request')
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');
    if(accessToken && accessToken !== ''){ //토큰이 있을경우 설정해주고 (서버에서 token 체크 로직이 필요함.)
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err:any) => {
    console.log(`axios request failed: ${err}`)
    return Promise.reject(err);
  },
);
axiosInstance.interceptors.response.use(
  (config:any) => {
    console.log('response')
    return config;
  },
  (err:any) => {
    console.log(`axios response failed: ${err}`)
    /* 
      todo : 토큰이 없는 경우(return code 정의 필요.) refresh token 처리 로직 필요.
     */
    return Promise.reject(err);
  },
);
export {axiosInstance}
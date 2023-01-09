import Axios from 'axios';
const axiosInstance = Axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  config => {
    console.log('request')
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
axiosInstance.interceptors.response.use(
  config => {
    console.log('response')
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
export {axiosInstance}
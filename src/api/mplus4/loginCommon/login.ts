import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async doLogin(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_doLogin'+version ,param)
        return res.data.body
    },
    async inputLoginLog(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/post_inputLoginLog'+version ,param)
        return res.data.body
    }
}
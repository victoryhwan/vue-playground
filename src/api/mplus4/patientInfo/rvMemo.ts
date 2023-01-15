import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export default{
    async getRvMemo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/get_getRvMemo'+version ,param)
        return res.data.body
    },
    async inputRvMemo(param:any) {
        const res:any = await axiosInstance.post(proxyUrl+'/post_inputRvMemo'+version ,param)
        return res.data.body
    }
}
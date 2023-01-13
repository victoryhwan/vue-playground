import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export async function getExamSlipGrList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getExamSlipGrList'+version ,param)
    return res.data.body
}

export async function getExamList1(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getExamList1'+version ,param)
    return res.data.body
}

export async function getExamRsltTy1(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getExamRsltTy1'+version ,param)
    return res.data.body
}

export async function getExamRsltTy2(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getExamRsltTy2'+version ,param)
    return res.data.body
}

export async function getExamRsltCumulative(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getExamRsltCumulative'+version ,param)
    return res.data.body
}

export async function getCISurlList(param:any) {
    const res:any = await axiosInstance.post(proxyUrl+'/get_getCISurlList'+version ,param)
    return res.data.body
}

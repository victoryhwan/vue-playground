// @ts-check
import { defineStore } from 'pinia'
import type { PatientInfo } from '@/types/patient'
import { reactive, computed } from 'vue'
import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export const usePatientrStore = defineStore('patientStore', ()=> {
    const patient:any = reactive({
        info:<PatientInfo>JSON.parse(localStorage.getItem('mplus.tempPatientParam') || '{}')
    })//reactive(<PatientInfo>{});
    async function setPatient(param:any){//val: PatientInfo
        const res = await axiosInstance.post(proxyUrl+'/get_getPatientInfo'+version ,param)
        localStorage.setItem("mplus.tempPatientParam", JSON.stringify(res.data.body));
        patient.info = res.data.body
        return true
    }

    // const getPatient = computed(()=> console.log(patient,"patient11111111"))
    return { patient, setPatient }
})
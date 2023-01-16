// @ts-check
import { defineStore } from 'pinia'
import type { PatientInfo } from '@/types/patient'
import { reactive, computed } from 'vue'
import { axiosInstance } from '@/api/util/axiosConfig';

const proxyUrl = '/qabApi'
const version = ''

export const usePatientrStore = defineStore('patientStore', ()=> {
    let patient:any = reactive([])//reactive(<PatientInfo>{});
    async function setPatient(param:any){//val: PatientInfo
        patient = await axiosInstance.post(proxyUrl+'/get_getPatientInfo'+version ,param)
        localStorage.setItem("mplus.tempPatientParam", JSON.stringify(patient.data.body));
        return patient.data.body
    }
    const getPatient = computed(()=> console.log(patient,"patient11111111"))
    return { patient, setPatient, getPatient }
})
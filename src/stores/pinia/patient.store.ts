// @ts-check
import { defineStore } from 'pinia'
import type { PatientInfo } from '@/types/patient'
import { reactive, computed } from 'vue'

export const usePatientrStore = defineStore('patientStore', ()=> {
    let patient = reactive(<PatientInfo>{});
    function setPatient(val: PatientInfo){
        patient = val
    }
    const getPatient = computed(()=> patient)
    return { patient, setPatient, getPatient }
})
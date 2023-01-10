// @ts-check
import { defineStore } from 'pinia'
import type { PatientInfo } from '@/types/patient'

export const usePatientrStore = defineStore('patient',{
    state: () => ({ 
        patient: <PatientInfo>{}
    }),
    actions: {
        async setPatient(patient: PatientInfo){
            this.patient =  patient
        }
    },
})
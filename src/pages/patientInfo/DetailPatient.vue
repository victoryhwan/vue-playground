<template>
  <div class="container-fluid round" v-cloak>
    <div class="row content-wrap">
      <div class="col-12 content">
        <div>
          <!-- 상단 환자 정보 카드 -->
        </div>
        <div class="row">
          <div class="col-12 patient-panel-container">
          <InPatientCard></InPatientCard>
          <!-- 외래 환자 명단 카드-->
          </div>
        </div>
        <div>
          <!-- 회진용 노트 -->

        </div>
        <div>
          <!-- 진료 정보 rotation -->
          <InfoMenu></InfoMenu>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePatientrStore } from '@/stores/pinia/patient.store';
import { getPatientInfo, getPatSummary } from '@/api/mplus4/patientInfo'
import InPatientCard from './InPatientCard.vue';
import InfoMenu from './InfoMenu.vue';
import { onMounted } from 'vue';

const patient = usePatientrStore()

let patParam = {
  "ChosGb" : "I",
  "ChosNo" : "20230111001",
  "DeptCd" : "2030000000",
  "DrId" : "190046",
  "HosCd" : "37100092",
  "OcpTyp" : "0330",
  "UnitNo" : "CqK0cBXugQsoGbh0j5wdwp+/2/4ASFskGPXz2T2BVgl3laOQKvOSIXyGrIQkx2VdRpSjDEMH6z/24rqbx5EuiXAsooa1jEodTRsHBAe7OMZfpBJg+mENFFDXRg37oFn9H5xgvaieUTZlitvgrSeI+iVk3UMYVwJC0zbOxtahg+8=",
  "UserId" : "Q9ni/g5htoxaGZNtnqpvN03XZIFgXNNj4ko9iWxyOIxRutQYqLtRngnsHDSRnUNRT5/WZXXF47At2BarGwgVo31jerw2YfEmYauPSOaB2K0+KZlfwdBtyv3DjJe+oSXKMrwGIx8JXUh8DpbHX3THb9XwDZ1/bncolSHBo6gDKMM="
}
// getPatientInfo(patParam)
// getPatSummary(patParam)

onMounted(async() => {
  // await patient.setPatient(patParam)
  console.log(localStorage.getItem('mplus.tempPatientParam'),"1111111111")
})
/*
//액션 후촐 외에도 직접 내부 API로 데이터 변경 가능.
//patient.$patch({ patient: [...patient.getPatient, patient] });
*/

// console.log(patient.getPatient(),"1111")
</script>
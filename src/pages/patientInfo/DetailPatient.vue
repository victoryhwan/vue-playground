<template>
    <div></div>
</template>
<script setup>
import { usePatientrStore } from '@/stores/pinia/patient.store';
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

patient.setPatient(patParam)

/*
//액션 후촐 외에도 직접 내부 API로 데이터 변경 가능.
//patient.$patch({ patient: [...patient.getPatient, patient] });
*/

patient.getPatient()
</script>
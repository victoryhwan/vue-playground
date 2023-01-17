<script setup>
import { RouterView } from 'vue-router'
import SideMenu from './components/common/SideMenu.vue'
import HeaderComp from './components/common/HeaderComp.vue';
import HeaderCard from './components/patientInfo/HeaderCard.vue';
import { usePatientrStore } from '@/stores/pinia/patient.store';
import { storeToRefs } from "pinia";
import { watch, onMounted } from 'vue';

const pinia = usePatientrStore()

const { getPatient } = storeToRefs(pinia)

onMounted(()=>{
  console.log(getPatient,"222222222222")
  watch(pinia, (newX) => {
    console.log(`111111111111${newX}`)
  })
})


</script>

<template>
  <!--  * layout start -->
  <HeaderComp/>
  <div v-if="getPatient"><HeaderCard/></div>
  
  <main>
    <RouterView/>
  </main>
  <!-- * layout end -->

  <!-- * common components start -->
  <SideMenu/>
  <!-- todo : 환자접근권한 Component -->
  <!-- * common components end -->

</template>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');*/
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');
 
body{
  /*font-family: 'Roboto', 'NotoSansKR', sans-serif;*/
  font-family: 'NanumSquare', sans-serif;
  font-size: /*14px*/0.875rem;
  line-height: 1.4;
  color: #222;
  letter-spacing: -0.4px;
}

main{
  top: 55px;
  /*background-color: #f8f8f8;*/
}

</style>

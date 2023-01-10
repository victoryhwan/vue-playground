
<template>
  <div class="">
    <h1>Home</h1>
  </div>
  <div>UserId : {{ userStore.user.UserNm }}</div>
  <!-- 컴포넌트 MyModal -->
  <ModalComp @close="closeModal()" @ok="okModal()" v-if="modal">
  </ModalComp>
  <b-button variant="primary" @click="openModal()" >modal</b-button>
</template>

<script setup>
import { ref, provide } from 'vue';
import { useUserStore } from '@/stores/pinia/user.store';
import ModalComp from '@/components/ui/ModalComp.vue';

const userStore = useUserStore()
const location = ref('북극')

function updateLocation() {
  location.value = '남극'
}

/**함수랑 변수를 자식한테 넘겨준다*/
provide('location', {
  location,
  updateLocation
})



const modal = ref(false)
const openModal = () => {
  modal.value = true
}
const closeModal = () => {
  modal.value = false
}
const okModal = () => {
  modal.value = false
  console.log("OK")
}

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

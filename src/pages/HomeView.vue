
<template>
  <div class="about">
    <div>{{postFontSize}}</div>
    <Global @my-log="Alert" :msg="'타이틀'" @enlarge-text="changeFont"></Global>
    <h1>This is an Home page</h1>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

const location = ref('북극')

function updateLocation() {
  location.value = '남극'
}

/**함수랑 변수를 자식한테 넘겨준다*/
provide('location', {
  location,
  updateLocation
})

const postFontSize = ref(1)
const Alert = () => { alert("!!") }
const changeFont = () => {
  postFontSize.value += 0.1
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

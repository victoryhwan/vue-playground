<script setup lang="ts">

import { store } from '../stores/store'

window.example = {
  increment(){
    console.log("+1 증가");
    store.increment();
  },
  decrement(){
    store.decrement();
    console.log("-1 감소");
  }
}

</script>

<template>
  <div>

    <div>
      <h3>
        전역 컴포넌트 store : {{ store }}
      </h3>
    </div>
  </div>
</template>


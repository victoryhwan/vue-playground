<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ComponentA from './components/ComponentA.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/inPatientList">입원환자명단</RouterLink>
        <RouterLink to="/outPatientList">외래환자명단</RouterLink>
      </nav>
      <component-a />
      
    </div>
  </header>

  <RouterView />
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
</style>

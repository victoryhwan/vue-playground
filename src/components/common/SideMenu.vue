<script setup lang="ts">
import { sideMenu } from '../../stores/store'
window.sideMenu = {
  open(){
    sideMenu.open()
  },
  close(){
    sideMenu.close()
  }
}
/** todo 
 * sideMenu css로 변경해야 한다.
 * 
*/

</script>

<template>
    <div class="wrapper sideMenu" v-show="sideMenu.status">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/inPatientList">입원환자명단</RouterLink>
        <RouterLink to="/outPatientList">외래환자명단</RouterLink>
      </nav>
    </div>
</template>


<style>
.sideMenu {
    position: fixed;
    z-index: 50;
    background-color: yellow;
    top:100px;
    
}
</style>
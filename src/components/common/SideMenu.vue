<template>
  <div class="wrapper sideMenu" v-show="sideMenu.status">
    <nav>
      <ul>
          <li><RouterLink to="/login" @click="sideMenu.close()">Login</RouterLink></li>
          <li><RouterLink to="/" @click="sideMenu.close()">Home</RouterLink></li>
          <li><RouterLink to="/about" @click="sideMenu.close()">About</RouterLink></li>
          <li><RouterLink to="/inPatientList" @click="sideMenu.close()">입원환자명단</RouterLink></li>
          <li><RouterLink to="/outPatientList" @click="sideMenu.close()">외래환자명단</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
/** 
 * * 사이드메뉴 open : window.sideMenu.open()
 * * 사이드메뉴 close : window.sideMenu.close()
 * 
 * todo : sideMenu 스타일링 
*/
import { sideMenu } from '../../stores/store'

window.sideMenu = {
  open(){
    sideMenu.open()
  },
  close(){
    sideMenu.close()
  }
}
</script>

<style>
.sideMenu {
    position: fixed;
    z-index: 50;
    background-color: yellow;
    right: 0px;
    height: 100%;
}

nav {
    top: 100px;
    padding: 1rem;
}

ul {
    list-style: none;
    padding-left: 0px;
 }

</style>
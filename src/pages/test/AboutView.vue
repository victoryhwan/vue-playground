
<script setup>
import { ref, nextTick } from 'vue'
import axios from 'axios';
import { reactive, computed } from 'vue'
import { store } from '@/stores/store'
import { getTest } from '@/api/qab'

const count = ref(0)
const users = reactive([])
// const { proxy } = getCurrentInstance();

async function increment() {
  count.value++

  // DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick()
  // DOM is now updated
  console.log(document.getElementById('counter').textContent) // 1
}

async function clicker() {
  console.log("click")
  users.value = await getTest()
  store.increment()
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <button id="counter" @click="increment">{{ count }}</button>
  <button id="clicker" @click="clicker">클릭</button>

  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users.value" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

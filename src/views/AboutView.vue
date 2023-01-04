<script setup>
import { ref, nextTick } from 'vue'
import axios from 'axios';
import { reactive, computed } from 'vue'
import { store } from '../stores/store'

const count = ref(0)
const users = reactive([])
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
  store.increment()
  axios.get("https://jsonplaceholder.typicode.com/users/")
  .then( (res)=>{
    console.log(res)
    console.log(res.data)
    users.value = res.data
    console.log(users)
    
  })
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

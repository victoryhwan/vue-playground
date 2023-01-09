<template>
    <div class="container-fluid flex">
      <h1>Login</h1>
      id <input type="text" />
      pw <input type="text" />
      <button @click="submit()">로그인</button>
      <button @click="test()">test</button>
      <button class="btn" @click="user()">getUsder</button>
      <b-button variant="outline-primary">Primary</b-button>
    </div>
  </template>
  
  <script setup>
  import {login, getUser, getTest} from '@/api/auth'
  import { useAuthStore } from '@/stores/pinia/auth.store';

  const authToken = useAuthStore()
  const submit = async ()=>{
    let res = await login()
    console.log(res)
  }

  const user = async ()=>{
    let res = await getUser()
    console.log(res)
  }

  const test = async ()=>{
    let res = await getTest()
    console.log(res)
    authToken.setToken("test")
  }
  </script>

  <style>

  </style>
  
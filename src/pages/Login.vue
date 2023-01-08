<template>
    <div class="container-fluid">
      <h1>Login</h1>
      id <input type="text" />
      pw <input type="text" />
      <button @click="submit()">로그인</button>
      <button @click="user()">getUser</button>
    </div>
  </template>
  
  <script setup>
  import {login, getUser} from '@/api/auth'
  
  let headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
  const submit = async ()=>{
    let res = await login()
    console.log(res)
  }

  const user = async ()=>{
    let res = await getUser()
    console.log(res)
  }
  </script>

  <style>

  </style>
  
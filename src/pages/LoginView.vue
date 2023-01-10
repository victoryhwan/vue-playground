<template>

    <div class="container-fluid">
      <b-form @submit="submit()">
        <b-form-group
          id="input-group-1"
          label="UserId:"
          label-for="input-1"
          description="임시로 아무 값이나 입력하세요."
        >
          <b-form-input
            id="input-1"
            placeholder="Enter UserId"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="hosCd:" label-for="input-3">
          <b-form-select
            id="input-3"
            :options="hosCds"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">로그인</b-button>
      </b-form>
    </div>
    <div>UserId : {{ userStore.user.UserNm }}</div>
  </template>
  
  <script setup>
  import {login} from '@/api/auth'
  import { useUserStore } from '@/stores/pinia/user.store';

  const userStore = useUserStore()
  const hosCds = [{ text: 'Select One', value: null }, { text: 'test', value: "testCd" }, 'Beans', 'Tomatoes', 'Corn']
  const submit = async ()=>{
    let res = await login()
    if(res){
      console.log("로그인 성공")
    }else{
      console.log("로그인 실패")
    }
  }

  </script>

  <style>

  </style>
  
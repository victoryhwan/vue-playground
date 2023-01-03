<template>
    <div>
      <button @click="showTitle">
          전역 컴포넌트 클릭해보세요. 아래에 글씨가 나옵니다.
      </button>
      <br>
      <span class="span">{{ title }}</span>
    </div>
  </template>
   
  <script>
  export default {
    name: 'Global',
    data () {
      return {
        title: ''
      }
    },
    methods: {
      showTitle () {
        this.title = 'Global Component TEST !!'
      }
    }
  }
  </script>
   
  <style>
  .span {
    margin-top:20px;
    color:red;
  }
  </style>
<template>
    <div>
      <button @click="showTitle">
          전역 컴포넌트 클릭해보세요. {{msg}}아래에 글씨가 나옵니다.
      </button>
      <!--자식 컴포넌트의 버튼을 클릭하면 부모 컴포넌트에 있는 enlarge-text 이벤트를 발생시킬 수 있다-->
      <button >{{msg}}텍스트 확대</button>
      <br>
      <span class="span">{{ title }}</span>
    </div>
  </template>
   
  <script setup>
  import { defineEmits, defineProps } from 'vue';

    const emit = defineEmits(['enlarge-text','my-log'])
    const props = defineProps({ msg: String })
    const title = ''
    const showTitle = () => {
      emit('my-log')
    }
  </script>
   
  <style>
  .span {
    margin-top:20px;
    color:red;
  }
  </style>
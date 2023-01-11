<template>
    <header class="headView">
        <h2>헤더</h2>
    </header>
  </template>
  
  <script setup>

  </script>

  <style>
    .headView {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        /* height: 100%; */
        background: #23549b;
        color: aliceblue;
        z-index: 40;
        height: 55px;
    }

    .headView h2 {
        position: relative;
        /* height: 55px; */
        line-height: 55px;
        text-align: center;
        font-size: /* 18px 1.125rem */ /*20px*/1.25rem;
        color: #fff;
        font-weight: bold;
    }
  </style>
  
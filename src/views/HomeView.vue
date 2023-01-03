<template>
  <div class="about">
    <div>{{postFontSize}}</div>
    <Global :msg="'타이틀'" @enlarge-text="postFontSize += 0.1"></Global>
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      postFontSize: 1
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

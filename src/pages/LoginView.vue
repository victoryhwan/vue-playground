<template>
    <div class="login-body">
      <div class="login">
        <div class="text-center">
          <h3>LemonCare</h3>
        </div>
        <div class="login-area">
          <div>
            <select class="form-control" name="" id="">
              <option value="37100149">레몬병원</option>
              <option value="37100149">기타병원</option>
            </select>
          </div>
          <form action="">
            <div class="form-group">
              <label for="userid">아이디</label>
              <input type="text" id="userid" class="form-control">
            </div>
            <div class="form-group">
              <label for="pwd">비밀번호</label>
              <input type="password" id="pwd" class="form-control">
            </div>
            <button type="button" class="btn-login btn" style="display: flex; place-items: center; justify-content: center" @click="submit()">
              <div>로그인</div>
              <div v-show="isLoading" class="spinner-border text-primary" style="margin-left: 5px" role="status"></div>
            </button>
          </form>
        </div>
      </div>      
    </div>
  </template>
  
  <script setup>
  import {login} from '@/api/auth'
  import { useUserStore } from '@/stores/pinia/user.store';
  import { useRouter, useRoute } from 'vue-router'
  import { ref } from 'vue'

  const router = useRouter()
  const userStore = useUserStore()
  const hosCds = [{ text: 'Select One', value: null }, { text: 'test', value: "testCd" }, 'Beans', 'Tomatoes', 'Corn']
  const isLoading = ref(false)

  const submit = async ()=>{
    isLoading.value = true
    let res = await login()
    isLoading.value = false
    if(res){
      console.log("로그인 성공")
      router.push("/inPatientList")
    }else{
      alert("로그인 실패")
    }
  }

</script>

<style lang="scss" scoped>

$main-color : #23549b;
$btn-color : #29589d;
.login-body {
  background-color: $main-color;
  width: 100%;
  height: 100vh;
  margin-top: -55px;
  z-index: 40;
}
.text-center h3{
  text-align: center !important;
}
.text-center {
  color: aliceblue;
}

.login {
    position: relative;
    width: 100%;
    height: 70%;
    padding: 95px 20px 40px;
    background-color: $main-color;
    /* background-image: url(../../media/images/bg_login2_1.png), url(../../media/images/bg_login2_2.png); */
    /* background-position: center top, center bottom; */
    /* background-repeat: no-repeat; */
    /* background-size: contain, contain; */
}

.login-area {
  position: absolute;
  left: 50%;
  top: 200px;
  width: 320px;
  height: 248px;
  padding: 20px;
  margin-left: -160px;
  font-size: 16px;
  color: #969696;
  background-color: #fff;
  border-radius: 15px;

  .form-group{
      display: flex;
      width: 100%;
      margin-bottom: 0;
      border-bottom: 1px solid #d4d4d4;

    label{
      float: left;
      width: 70px;
      line-height: 45px;
    }

    .form-control{
      float: right;
      width: calc(100% - 70px);
      height: 45px;
      line-height: 45px;
      border: none;
    }

  }

  .btn-login{
    width: 100%;
    height: 45px;
    padding: 0;
    margin-top: 30px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    border-radius: 22px;
    background-color: $btn-color;
    border-color: $btn-color;
  }
}

</style>
  
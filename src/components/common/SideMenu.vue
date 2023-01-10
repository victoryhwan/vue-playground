<template>
  <div class="wrapper sideMenu" v-show="sideMenu.status">
    <nav class="on">
      <div class="nav-trigger" ref="_trigger"></div>
      <div class="nav-wrap">
        <div class="nav-container">
          <div class="nav-header d-flex justify-content-between">
            <div @click.prevent="logoutBtn">
              <i class="icon-logout"></i><small>로그아웃</small>
            </div>
            <div class="out-menu">
              <span>
                <i class="icon-home" @click.prevent="homeBtn"></i
                ><span class="hidden">home</span>
              </span>
              <span>
                <i class="icon-setting" @click.prevent="settingsBtn"></i
                ><span class="hidden">setting</span>
              </span>
            </div>
          </div>

          <div class="nav-info d-flex justify-content-between">
            <div>
              <!-- <big>{{value.UserNm}}님</big><br> -->
              <big>레몬님</big><br />
              <!-- <small class="text-muted">{{value.hospitalNm}} {{value.DeptNm}}</small> -->
              <small class="text-muted"></small>
            </div>
            <div class="align-content-center">
              <i class="icon-edit" @click.prevent="editBtn"></i
              ><span class="hidden">편집</span>
              <!--                              <i class="icon-set-barcode" @click.prevent="setBarcodeBtn" style="margin-left: 15px;"></i><span class="hidden">바코드설정</span>-->
            </div>
          </div>

          <div class="d-flex vh-100">
            <div class="nav-category">
              <ul id="columns">
                <li class="column" draggable="true" @click.prevent="favorMenu">
                  <div class="icon" :data-value="index">입원</div>
                </li>
                <li class="column" draggable="true" @click.prevent="favorMenu">
                  <div class="icon" :data-value="index">응급</div>
                </li>
                <li class="column" draggable="true" @click.prevent="favorMenu">
                  <div class="icon" :data-value="index">의사</div>
                </li>
                <li class="column" draggable="true" @click.prevent="favorMenu">
                  <div class="icon" :data-value="index">회진</div>
                </li>
              </ul>
            </div>


            <div class="nav-menu flex-fill">
              <ul>
                <li>
                  <a class="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#listMoreInfo" aria-expanded="false" aria-controls="listMoreInfo">환자검색</a>
                  <ul class="collapse" id="listMoreInfo">
                    <li>
                      <a href="javascript:void(0)">
                        <RouterLink to="/login" @click="sideMenu.close()">
                        Login</RouterLink>
                      </a>
                    </li>
                    <li>
                      <a>
                        <RouterLink to="/" @click="sideMenu.close()">
                          Home</RouterLink>
                      </a>
                    </li>
                    <li>
                      <RouterLink to="/about" @click="sideMenu.close()"
                        >About</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink to="/inPatientList" @click="sideMenu.close()"
                        >입원환자명단</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink to="/outPatientList" @click="sideMenu.close()"
                        >외래환자명단</RouterLink
                      >
                    </li>
                  </ul>
                </li>

                <li>
                    <a class="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#outMoreInfo" aria-expanded="false" aria-controls="outMoreInfo">일정관리</a>
                    <ul class="collapse" id="outMoreInfo">
                        <li>
                          <a href="javascript:void(0)">
                            <RouterLink to="/login" @click="sideMenu.close()">
                            외래진료일정</RouterLink>
                          </a>
                        </li>
                        
                    </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { sideMenu } from "../../stores/store";

const menuCollapse = (e) => { 
  if(!(e.target).hasClass("non")) {
    if((e.target).hasClass("show")) {
        (e.target).removeClass("show");
    } else {
        (e.target).addClass("show");
    }
  }
}
const menuClk = () => { }
const favoritbtnClk = () => { }
const logoutBtn = () => { }
const homeBtn = () => { }
const editBtn = () => { }
const settingsBtn = () => { }
const favorMenu = () => { }




/**
 * * 사이드메뉴 open : window.sideMenu.open()
 * * 사이드메뉴 close : window.sideMenu.close()
 *
 * todo : sideMenu 스타일링
 */
window.sideMenu = {
  open() {
    sideMenu.open();
  },
  close() {
    sideMenu.close();
  },
};
</script>

<style scoped>
.sideMenu {
}
a{
  text-decoration: none;
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1600;
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
  padding-left: 0px;
}
nav .nav-menu > ul > li {
    border-left: 1px solid #ddd;
}
nav .nav-trigger {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
}
nav .nav-wrap {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1600;
  width: 300px;
  height: 100%;
}
nav .nav-container {
  width: 100%;
  height: calc(100% - 35px);
  margin-top: 35px;
  background-color: #fff;
  border-top-left-radius: 10px;
}
nav .nav-header {
  padding: 0 15px;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ddd;
}
nav .nav-info {
  padding: 20px 15px;
  height: 77px;
  border-bottom: 1px solid #ddd;
}
.justify-content-between {
  justify-content: space-between !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.d-flex {
  display: flex !important;
}
nav .nav-menu {
    overflow: auto;
    height: calc(100% - 160px);
}
nav .nav-menu > ul > li > a {
  position: relative;
  padding: 0 25px;
  border-bottom: 1px solid #ddd;
  line-height: 50px;
  font-weight: 500;
  font-size: 16px;
  color: #000;
  text-align: left;
}
nav .nav-menu > ul > li > a + ul a {
    position: relative;
    border-bottom: 1px solid #ddd;
    line-height: 45px;
    font-weight: 400;
    font-size: 14px;
    color: #222;
}
nav .nav-menu > ul > li > a + ul li:last-child a {
    border-bottom: none;
}
nav .nav-menu > ul > li > a + ul {
    position: relative;
    padding-left: 25px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
    margin-left: -1px;
}
nav .nav-menu > ul > li > ul > li {
    position: relative;
}
nav .nav-category {
  position: relative;
  width: 100px;
  height: 100%;
  padding: 20px;
}
nav .nav-menu a {
    display: block;
}
nav .nav-category li {
  margin-bottom: 20px;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>

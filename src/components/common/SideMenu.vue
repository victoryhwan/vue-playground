<template>
  <div class="wrapper sideMenu" v-show="sideMenu.status">
    <nav class="on">
      <div class="nav-trigger" @click="sideMenu.close()" ref="_trigger"></div>
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
                      <RouterLink to="/inPatientList" @click="sideMenu.close()">입원환자명단</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/outPatientList" @click="sideMenu.close()">외래환자명단</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/emPatientList" @click="sideMenu.close()">응급환자명단</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/opPatientList" @click="sideMenu.close()">수술환자명단</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/coPatientList" @click="sideMenu.close()">협진환자명단</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/rvPatientList" @click="sideMenu.close()">회진환자명단</RouterLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <a class="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#outMoreInfo" aria-expanded="false" aria-controls="outMoreInfo">일정관리</a>
                  <ul class="collapse" id="outMoreInfo">
                    <li>
                      <RouterLink to="/outTrtPlan" @click="sideMenu.close()">외래진료일정</RouterLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <a class="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#test" aria-expanded="false" aria-controls="test">테스트</a>
                  <ul class="collapse" id="test">
                    <li>
                      <RouterLink to="/login" @click="sideMenu.close()">로그인</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/" @click="sideMenu.close()">Home</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/about" @click="sideMenu.close()">About</RouterLink>
                      <a href="javascript:void(0)"></a>
                      <div class="star-house favoritbtn"></div>
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
import { onMounted, ref, reactive, provide } from 'vue'
import { menuAndFac } from '@/api/admin'

const menus = reactive([])

let testParam = {
    HosCd: "37100092",
    DeptCd: "2030000000",
    userId: "21",
    menuType: "MAIN"
}

onMounted(async() => {
  menus.value = await menuAndFac(testParam)
})


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

<style lang="scss" scoped>
$border-color : 1px solid #ddd;

.icon-edit:after{
  display: inline-block;
  content:"";
  position: absolute;
  left: 0;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-top: -8px;
  background: url(../../assets/ico_nav_edit.png) 0 0 no-repeat; background-size: 100%
}
.icon-home {
  display: inline-block;
  position: relative;
  width: 18px;
  height: /*21px*/20px;
  margin-right: 20px;
}
.icon-home:after {
  display: inline-block;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 18px;
  height: /*21px*/20px;
  margin-top: -5px;
  background: url(../../assets/ico_nav_home.png) 0 0 no-repeat;
  background-size: 100%;
}
.icon-setting {
    display: inline-block;
    position: relative;
    width: 20px;
    height: /*21px*/20px;
    margin-right: 20px;
}
.icon-setting:after {
    display: inline-block;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: /*21px*/20px;
    margin-top: -5px;
    background: url(../../assets/ico_nav_setting.png) 0 0 no-repeat;
    background-size: 100%;
}
.icon-edit {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
}
.hidden {
    overflow: hidden;
    position: absolute;
    top: -9999px;
    left: -9999px;
    width: 1px;
    height: 0;
    font-size: 1px;
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1600;
  width: 100%;
  height: 100%;

  .favoritbtn {
    display: block;
    content: '';
    position: absolute;
    right: 20px;
    top: 50%;
    width: 16px;
    height: 15px;
    margin-top: -7.5px;
    background: url(../../assets/ico_favorite.png) 10px 10px no-repeat;
  }
  .favoritbtn-on {
    display: block;
    content: "";
    position: absolute;
    right: 20px;
    top: 50%;
    width: 16px;
    height: 15px;
    margin-top: -7.5px;
    background: url(../../assets/ico_favorite_on.png) 10px 10px no-repeat;
  }

  .on{display: block;}

  .nav-trigger {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
  }

  .nav-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1600;
    width: 300px;
    height: 100%;
  }

  .nav-container {
    width: 100%;
    height: calc(100% - 35px);
    margin-top: 35px;
    background-color: #fff;
    border-top-left-radius: 10px;
  }

  .nav-header {
    padding: 0 15px;
    height: 45px;
    line-height: 45px;
    border-bottom: $border-color;
  }

  .nav-info {
    padding: 20px 15px;
    height: 77px;
    border-bottom: $border-color;
  }

  .nav-menu {
    overflow: auto;
    height: calc(100% - 160px);

    a {
        display: block;
    }

    > ul > li {
      border-left: $border-color;
    }

    > ul > li > a {
      position: relative;
      padding: 0 25px;
      border-bottom: $border-color;
      line-height: 50px;
      font-weight: 500;
      font-size: 16px;
      color: #000;
      text-align: left;
    }

    > ul > li > ul > li .star-house {
      display: inline-block;
      width: 50px;
      height: 40px;
      position: absolute;
      top: 12px;
      right: 0px;
    }

    > ul > li > a + ul a {
      position: relative;
      border-bottom: $border-color;
      line-height: 45px;
      font-weight: 400;
      font-size: 14px;
      color: #222;
    }

    > ul > li > a + ul li:last-child a {
      border-bottom: none;
    }

    > ul > li > a + ul {
      position: relative;
      padding-left: 25px;
      background-color: #f8f8f8;
      border-bottom: $border-color;
      margin-left: -1px;
    }

    > ul > li > ul > li {
      position: relative;
    }

  }
  .nav-category {
    position: relative;
    width: 100px;
    height: 100%;
    padding: 20px;

    li {
     margin-bottom: 20px;
    }
  }

  .nav-category:before {
    display: block;
    content: "";
    position: absolute;
    right: -1px;
    top: 0;
    z-index: 0;
    width: 1px;
    height: 100%;
    background-color: #ddd;
  }
}
a{
  text-decoration: none;
}
// nav.on{display: block;}
ul {
  list-style: none;
  padding-left: 0px;
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
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>

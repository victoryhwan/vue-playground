<template>
  <div class="search-group">조회 조건 영역</div>

  <div class="container-fluid patient-list">
    <div class="container-fluid round bgnone" v-cloak>
      <section class="row content-wrap">
        <div class="col-12 content graybox">

        <!-- 상단 조회조건 -->
        <!-- <div class="search">
          <div class="form-row">
              <div class="col-6">
                <SelectBoxComp :items="selectGroupData.deptList" :value="selectedData.DeptCd" @select-change="changeSelectBoxDept"></SelectBoxComp>
              </div>
              <div class="col-6">
                <SelectBoxComp :items="selectGroupData.doctorList" :value="selectedData.DrId" @select-change="changeSelectBoxDr"></SelectBoxComp>
              </div>
              <div class="col-12 mt-2">
                <SelectBoxComp :items="selectGroupData.wardList" :value="selectedData.Ward" @select-change="changeSelectBoxWard"></SelectBoxComp>
              </div>
          </div>
        </div> -->

        <!-- 하단 리스트 -->
        <div class="row">
          <div class="col-12">
            <div class="py-4"><!-- v-if="dispData.length > 0"-->
              <div class="patient-cardbox" v-for="item in dispData" :key="item.id">
                  <div class="group">
                      <div class="pos">
                          {{item.Ward}}
                          <span class="text-liner"></span>
                          {{item.Room}}
                          <span class="text-liner"></span>
                          {{item.PatBed}}
                      </div>
                      <div class="leave" v-if="item.opGubun=='0'">
                          <span class="today-badge mr-2" v-if="item.opGubun=='0'">퇴원일</span>
                          {{(item.DscPlanYmd)}}
                      </div>
                      <div class="green-leave" v-if="( item.opGubun=='1' || item.opGubun=='2' )">
                          <span class="green-badge mr-2" v-if="item.opGubun=='1'">수술일</span>
                          <span class="green-badge mr-2" v-if="item.opGubun=='2'">수술예정일</span>
                          {{(item.DscPlanYmd)}}
                      </div>
                      <a href="javascript:void(0)" class="menu" style="z-index: 3;" @click.stop="openMenu(item)">메뉴</a>
                  </div>
                  <div class="group" @click.stop="clickedPatient(item)">
                      <div class="block">
                          <p class="name"><i class="icon-samename" v-if="item.isSameNm"></i> {{item.UnitNo}} {{item.PatNm}}({{item.Sex}}/{{item.Age}})</p>
                      </div>
                      <div class="block">
                          <p class="doctor">{{item.DeptNm}} <span class="text-liner"></span> {{item.DrNm}}</p>
                          <p>{{(item.AdmiDt)}}</p>
                      </div>
                  </div>
                  <div class="group" v-if="item.NurAssnYn == 'N' && userInfo.OcpTyp == 'N'">
                      <a href="javascript:void(0)" class="btn btn-size fw-medium btn-out-color1" data-toggle="modal" @click="setPatInfo(item)" data-target="#patient-set">{{Multilingual.patAssn}}</a>
                  </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import SelectBoxComp from '@/components/ui/Select.vue';
import { getInPatientList, getDoctorList } from '../api/inPatientList.ts'

/**변수 선언부*/
const selectGroupData = {//조회조건 컴포넌트 데이터
    deptList : [],
    wardList : [],
    doctorList : []
}

const selectedData = { //조회조건 데이터
    DeptCd : '', //부서코드
    Ward : '', //병동코드
    DrId : '%',//의사Id
    calendar : new Date(),  //TODO: 변경해야한다
    calendarDisabled : true,
    checked : false
}

// const dispData = ref([])
let dispData = getInPatientList()

const changeSelectBoxDept = (data) => {
    selectedData.DeptCd = data.code
    selectGroupData.doctorList = getDoctorList()
    dispData = getInPatientList()
}

const changeSelectBoxDr = (data) => {
    selectedData.DrId = data.code
    dispData = getInPatientList()
}

const changeSelectBoxWard = (data) => {
    selectedData.Ward = data.code
    dispData = getInPatientList()
}

const openMenu = () => { }
const clickedPatient = () => { }
const setPatInfo = () => { }

</script>

<style scoped>
.search-group {
    background-color: skyblue;
    position: fixed !important;
    z-index: 30;
    width: 100%;
    height: 80px;
}
.patient-list {
  top: 80px;
  padding: 1rem;
}
.pb-4, .py-4 {
  padding-bottom: 1.5rem !important;
}

.patient-cardbox {
  position: relative;
  margin-top: 0.625rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  font-size: 0.938rem;
  font-weight: 500;
  user-select: none;
}

.patient-cardbox .group {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  padding: 10px 15px;
  min-height: 45px;
  border-bottom: 1px solid #ebebeb;
  line-height: 1;
}

.patient-cardbox .group .pos {
  flex: 1;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
}

.patient-cardbox .group .pos .text-liner {
  margin: 0 6px;
}

.text-liner {
  display: inline-block;
  position: relative;
  top: -1px;
  margin: 0 2px 0 3px;
  width: 1px;
  height: 10px;
  overflow: hidden;
  background-color: #dddddd;
  vertical-align: middle;
}

.patient-cardbox .group .menu {
  margin: -3px -9px -2px -9px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  text-indent: -999em;
  background: url(../assets/ico-dotmenu.svg) center center no-repeat;
  background-size: 3px;
}

.patient-cardbox .group .block {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-right: 0;
  padding: 5px 0;
  width: 100%;
  line-height: 1.2;
}

.patient-cardbox .group .block > *:last-child {
  margin-right: 0;
}

.patient-cardbox .group .name {
  font-size: 1rem;
  color: #004dc0;
}

</style>

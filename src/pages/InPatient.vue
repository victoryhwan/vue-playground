<template>
  <div class="container-fluid patient-list">
    <div class="container-fluid round bgnone" v-cloak>
      <section class="row content-wrap">
        <div class="col-12 content graybox">

        <!-- 상단 조회조건 -->
        <div class="search">
          <div class="form-row">
            <b-row>
              <b-col>
                <SelectBoxComp :items="selectGroupData.deptList" v-model="selectedData.DeptCd" @select-change="changeSelectBoxDept"></SelectBoxComp>
              </b-col>
              <b-col class="right-col">
                <SelectBoxComp :items="selectGroupData.doctorList" v-model="selectedData.DrId" @select-change="changeSelectBoxDr"></SelectBoxComp>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <SelectBoxComp :items="selectGroupData.wardList" v-model="selectedData.Ward" @select-change="changeSelectBoxWard"></SelectBoxComp>
              </b-col>
            </b-row>
          </div>
        </div>

        <!-- 하단 리스트 -->
        <div class="row">
          <div class="col-12">
            <div class="py-4">
              <div class="patient-cardbox" v-for="item in dispData.value" :key="item.id">
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
import SelectBoxComp from '@/components/ui/SelectComp.vue';
import { getInPatientList, getDeptList, getWardList, getDoctorList } from '@/api/qab'
import { onMounted, ref, reactive, provide } from 'vue'

/**변수 선언부*/
const selectGroupData = reactive({
  deptList:[],
  wardList:[],
  doctorList:[]
})

const selectedData = reactive({ //조회조건 데이터
    DeptCd : '%', //부서코드
    Ward : '%', //병동코드
    DrId : '%',//의사Id
    calendar : new Date(),  //TODO: 변경해야한다
    calendarDisabled : true,
    checked : false
})

let param = {
  AdmiPlanYmd : "",
  AdmiPlanYn : "N",
  DeptCd : "2150000000",
  DrId : "%",
  HosCd : "37100092",
  NurId : "",
  OcpTyp : "0330",
  RetrYmd : "20230105",
  Room : "%",
  UserId : "JR1zxnV15TN3W0g1sZtRY+SDyuhup0z052GS+iBB1Jlu2NQxCD+r9iXpZZUsgbUDmqFztWa4NsdNgZ999npeuMbfhrcfV5jtvLxBd4vGtvaByOJKwKxqVCvHdV58ACQ+ZFdecCcsKf0H4T6u/wPwPlKiUamGmzZZm22uHAkRRvE=",
  Ward : "%"
}
let deptParam = {
    HosCd : "37100092",
    MlGb : "ko",
    OcpTyp : "0330",
    RetrGb : "I",
    UserDeptCd : "2030000000",
    UserId : "OdDN/XlHzliWjM3KI9N31N/EMdpJL/RBNH6AfUZUejfTOZXcmTlt5/mA0IkdIkI1K53r1tVnnV7ufwTYkVG8wZmBCN7duhJeUh5ev8LToNiJl/q98Y1HhlolLlzjFTVhw/JieO4lgAJPYCxoen4s2TxiKOEkfKw0kdXueptnQSU="
}
let wardParam = {
    HosCd : '37100092',
    UserId : 'AsE27YR8JUCnUUAgk+bTkg1fqFvv3f68iIOMnnrLEzQKoq1snQzPoZeFK+KAI9x7lZPXEjyUdnRJNmf1zyuK5L3iN9c/2QrkHJfwMYqlf9gvYMIJatU/ZODaSLSMrp3slG1cwpIyzKBYH6xtdm+DsuQ/1JuDAabqC4oAHSN1Tws=',
    OcpTyp : '0330',
    RetrGb : 'I'
}
let docParam = {
    DeptCd : "2150000000",
    HosCd : "37100092",
    MlGb : "ko",
    OcpTyp : "0330",
    RetrGb : "I",
    UserId : "NkuDjXcHFaY3cPFSVhqMKGDl43lMt5Akmj3TG74jbAvUMUMWVpMOj5Ow1bOdr7QgRTsuli/UytIHLWi5PCbj4Cnph62VeC81bw3NapnB63F4p2AmKXqgZWTeI3VyrqF18sdQ8WSN3MPPFk62EgClUbnpnXmFDNoA8GKSfs7fUJw="
}

const dispData = reactive([])

onMounted(async() => {
  dispData.value = await getInPatientList(param)

  /** 조회 및 세팅 */
  selectGroupData.deptList = await getDeptList(deptParam)
  setSelectComp(selectGroupData.deptList, 'DeptCd','DeptNm')

  /** 병동 리스트 조회 및 세팅 */
  selectGroupData.wardList = await getWardList(wardParam)
  setSelectComp(selectGroupData.wardList, 'Ward','WardNm')

  /** 의사 리스트 조회 및 세팅 */
  selectGroupData.doctorList = await getDoctorList(docParam)
  setSelectComp(selectGroupData.doctorList, 'DrId','DrNm')
})

/**TODO: 변수값 바꿔주기*/
const changeSelectBoxDept = async (data) => {
  selectedData.DeptCd = data

  docParam.DeptCd = selectedData.DeptCd
  param.DeptCd = selectedData.DeptCd

  selectGroupData.doctorList = await getDoctorList(docParam)
  setSelectComp(selectGroupData.doctorList, 'DrId','DrNm')

  dispData.value = await getInPatientList(param)
}

const setSelectComp = (val,myVal,myTxt) => {
  val.forEach((item) => {
    item.value = item[myVal]
    item.text = item[myTxt]

    if(item[myVal] == '로그인아이디'){
      selectedData[myVal] = item[myVal]
    }
  });

  val.unshift({value:'%',text:'전체'})
}

const changeSelectBoxDr = async (data) => {
  selectedData.DrId = data
  param.DrId = selectedData.DrId
  
  dispData.value = await getInPatientList(param)
}
const changeSelectBoxWard = async (data) => {
  selectedData.Ward = data
  param.Ward = selectedData.Ward

  dispData.value = await getInPatientList(param)
}
const openMenu = () => { }
const clickedPatient = () => { }
const setPatInfo = () => { }


</script>

<style scoped>
.search-group {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    position: fixed !important;
    z-index: 30;
    width: 100%;
    height: 80px;
    box-shadow: 0 0 4px black;
}
.patient-list {
  /*top: 80px;*/
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

.right-col{
  padding-left: 0;
  padding-bottom: 12px;
}
p {
  margin-bottom: 0px;
}
</style>

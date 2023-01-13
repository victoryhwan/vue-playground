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
              <SelectBoxComp :items="selectGroupData.opCntrList" v-model="selectedData.OpCntrCd" @select-change="changeSelectBoxOpCntr"></SelectBoxComp>
            </b-col>
            <b-col class="right-col">
              <SelectBoxComp :items="selectGroupData.OpProgStusList" v-model="selectedData.OpProgStus" @select-change="changeSelectBoxOpProgStus"></SelectBoxComp>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <CalendarComp v-model="selectedData.calendar" :disabled="selectedData.calendarDisabled" @calendar-change="changeCalendar"></CalendarComp>
            </b-col>
            <b-col class="right-col">
              <ButtonComp>조회</ButtonComp>
            </b-col>
          </b-row>
          </div>
        </div>

        <!-- 하단 리스트 -->
        <div class="row">
          <div class="col-12">
            <div class="list-total">
                  <span>총 <span class="text-color-red">{{dispData.length}}</span>건</span>
                  <div style="display: inline-block;">
                    <CheckBoxComp :label-name="'로컬마취제외'" class="text-muted"></CheckBoxComp>
                  </div>
                  <div>
                    <b-col>
                      <SelectBoxComp class="form-control" :items="selectGroupData.orderDataList" v-model="selectedData.selectedOrder" @select-change="myChangeOrder"></SelectBoxComp>
                    </b-col>
                </div>
            </div>

            <div class="py-4">
              <div class="patient-cardbox" v-for="item in dispData.value" :key="item.id">
                  <div class="group">
                      <div class="pos">
                        <span class="badge2 badge-color5">{{item.OpCntrNm}}</span>
                        <!-- <span :class="setStatCls(item.OpProgStus)">{{item.OpRoomCd}} / {{item.OpSeq}} / {{item.OpProgStusNm}}</span> -->
                        <span class="badge2 badge-out-color2" v-if="item.SyncOpMainSub === 'M'">주</span>
                        <span class="badge2 badge-out-color3" v-else-if="item.SyncOpMainSub === 'S'">
                            <i class="icon-link"></i>
                        </span>
                      </div>
                      <a href="javascript:void(0)" class="menu" style="z-index: 3;" @click.stop="openMenu(item)">메뉴</a>
                  </div>
                  <div class="group">
                      <div class="pos">
                          {{item.Ward}}
                          <span class="text-liner"></span>
                          {{item.Room}}
                          <span class="text-liner"></span>
                          {{item.PatBed}}
                      </div>
                      <p>{{item.AnsGbNm}}</p>
                  </div>

                  <div class="group" @click.stop="clickedPatient(item)">
                       <div class="block">
                          <p class="name"><i class="icon-samename mr-1" v-if="item.isSameNm"></i> {{item.UnitNo}} {{item.PatNm}}({{item.Sex}}/{{item.Age}})</p>
                      </div>
                      <div class="block">
                          <p class="doctor">{{item.DeptNm}} <span class="text-liner"></span> {{item.DrNm}}</p>
                          <p>{{item.OpDt}}</p>
                          <!-- <p>{{dateFormatter(item.OpDt)}}</p> -->
                      </div>
                  </div>
                  <div class="group" v-if="isAnsDep">
                      <div class="block">
                          <div class="fw-medium">
                              <span class="well-mark">Dx</span> {{item.DiagEngNm}}
                          </div>
                          <div class="fw-medium">
                              <span class="well-mark">Op</span> {{item.OpEngNm}}
                          </div>
                      </div>
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
import { getOpPatientList, getDeptList, getDoctorList, getOpCntrList } from '@/api/qab'
import { onMounted, ref, reactive, provide } from 'vue'
import CalendarComp from '@/components/ui/CalendarComp.vue';
import CheckBoxComp from '@/components/ui/CheckBoxComp.vue';
import ButtonComp from '@/components/ui/ButtonComp.vue';

/**변수 선언부*/
const selectGroupData = reactive({
  deptList:[],
  opCntrList:[],
  doctorList:[],
  OpProgStusList:[]
})

const selectedData = reactive({ //조회조건 데이터
    DeptCd : '%', //부서코드
    DrId : '%',//의사Id,
    OpCntrCd : '%', //수술실코드
    OpProgStus: '%', //진행상태
    selectedOrder: '%', //sort
    calendar : new Date(),  //TODO: 변경해야한다
    calendarDisabled : true,
    checked : false
})

let param = {
  HosCd: "37100092",
  UserId: "C00r06jOv26/xVG74VeIcM7n4kqIo1p1FGh2V9GdwqdXZSc7CPuq0I802t0Q9rejbIkf/Xq6mIqQO9yH2hCkCD4Q3WVsF7YrX7tj52rh5oBqj+UsJT389JmCVMmssSYqvTR2//8ZKIu6TQ3pweB1qcUCpkBm6GNn/HAfGtJPKOc=",
  MlGb: "ko",
  OcpTyp: "0330",
  RetrFrYmd: "20221021",
  RetrToYmd: "20221021",
  DeptCd: "%",
  DrId: "%",
  OpCntrCd: "%",
  OpProgStus: "%"
}
let deptParam = {
    HosCd : "37100092",
    MlGb : "ko",
    OcpTyp : "0330",
    RetrGb : "I",
    UserDeptCd : "2030000000",
    UserId : "OdDN/XlHzliWjM3KI9N31N/EMdpJL/RBNH6AfUZUejfTOZXcmTlt5/mA0IkdIkI1K53r1tVnnV7ufwTYkVG8wZmBCN7duhJeUh5ev8LToNiJl/q98Y1HhlolLlzjFTVhw/JieO4lgAJPYCxoen4s2TxiKOEkfKw0kdXueptnQSU="
}
let opCntrParam = {
  HosCd: "37100092",
  UserId: "NEVea7C3ndqKxiKOgy/A2cBeMUgOV5kvkt+MzRkuG5JMHyq1MLWihaJst9cTDlF5Kxxr+KVXrCVe5w8izqOq3FmoU3mvA4O8d4nOnunJvrsn5BEWf50ReUbtY4sGft8zwO9SjCM8ao7yqJO4gCiMX80e5vu02GUgaftZOJJwutY=",
  RetrGb: "OP",
  MlGb: "ko",
  OcpTyp: "0330"
}
let docParam = {
    DeptCd : "2150000000",
    HosCd : "37100092",
    MlGb : "ko",
    OcpTyp : "0330",
    RetrGb : "I",
    UserId : "NkuDjXcHFaY3cPFSVhqMKGDl43lMt5Akmj3TG74jbAvUMUMWVpMOj5Ow1bOdr7QgRTsuli/UytIHLWi5PCbj4Cnph62VeC81bw3NapnB63F4p2AmKXqgZWTeI3VyrqF18sdQ8WSN3MPPFk62EgClUbnpnXmFDNoA8GKSfs7fUJw="
}
/** 진행상태 (OpProgStus) 및 세팅 */
let opProgStusList = [
  {code: "A", name: '예정'},
  {code: "B", name: '진행'},
  {code: "C", name: '종료'},
]

let orderDataList = [
    {type: 'a', value: 'OpDt',     ko: '수술일시', en: 'Op Dt'},
    {type: 'a', value: 'PatNm',    ko: '환자명',   en: 'Patient Name'},
    {type: 'a', value: 'OpCntrNm', ko: '수술방',   en: 'Op Room'}
]

const dispData = reactive([])

onMounted(async() => {
  dispData.value = await getOpPatientList(param)

  /** 조회 및 세팅 */
  selectGroupData.deptList = await getDeptList(deptParam)
  setSelectComp(selectGroupData.deptList, 'DeptCd','DeptNm')

  /** 수술실 리스트 조회 및 세팅 */
  selectGroupData.opCntrList = await getOpCntrList(opCntrParam)
  setSelectComp(selectGroupData.opCntrList, 'OpCntrCd','OpCntrNm')

  /** 의사 리스트 조회 및 세팅 */
  selectGroupData.doctorList = await getDoctorList(docParam)
  setSelectComp(selectGroupData.doctorList, 'DrId','DrNm')

   /** 진행상태 조회 및 세팅 */
   selectGroupData.OpProgStusList = opProgStusList
  setSelectComp(selectGroupData.OpProgStusList, 'code','name')

   /** sort 조회 및 세팅 */
   selectGroupData.orderDataList = orderDataList
  setSelectComp(selectGroupData.orderDataList, 'value','ko')

  
})

/**TODO: 변수값 바꿔주기*/
const changeSelectBoxDept = async (data) => {
  selectedData.DeptCd = data

  docParam.DeptCd = selectedData.DeptCd
  param.DeptCd = selectedData.DeptCd

  selectGroupData.doctorList = await getDoctorList(docParam)
  setSelectComp(selectGroupData.doctorList, 'DrId','DrNm')

  dispData.value = await getOpPatientList(param)
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
  
  dispData.value = await getOpPatientList(param)
}
const changeSelectBoxOpCntr = async (data) => {
  selectedData.OpCntrCd = data
  param.OpCntrCd = selectedData.OpCntrCd

  dispData.value = await getOpPatientList(param)
}
const changeSelectBoxOpProgStus = async (data) => {
  selectedData.OpProgStus = data
  param.OpProgStus = selectedData.OpProgStus

  dispData.value = await getOpPatientList(param)
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
.btn-search {
  min-width: 100%;
  margin-left: 0;
}

input{
    font-family: inherit;
    font-weight: 400;
    font-size: /*14px*/0.875rem;
    color: #222;
    line-height: 1;
    border-radius: 4px;
    border-radius: 4px;
}
.list-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 -15px;
    flex-flow: row wrap;
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
    color: #333;
}
.list-total span {
    font-size: 13px;
}
.text-color-red {
    color: #dd4132 !important;
}
.list-total .form-control {
    padding-left: 10px;
    width: 20px;
    min-width: 100px;
    height: 32px;
    border-radius: 16px;
    line-height: inherit;
    font-size: 0.875rem !important;
}

</style>

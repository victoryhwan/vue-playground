<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

let dispData = ref([])
let url = 'https://mcareplus.dcmc.co.kr:20443/ui-dev/plus/dcmc/api/get_getInPatientList/v4'
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

onMounted(async()=>{
  dispData = await axios.post(url,param);
  dispData = dispData.data.body
})


</script>
<template>
  <div class="inPatientList">
    <div class="py-4" v-if="dispData.length > 0">
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
                  {{dateFormatter(item.DscPlanYmd)}}
              </div>
              <div class="green-leave" v-if="( item.opGubun=='1' || item.opGubun=='2' )">
                  <span class="green-badge mr-2" v-if="item.opGubun=='1'">수술일</span>
                  <span class="green-badge mr-2" v-if="item.opGubun=='2'">수술예정일</span>
                  {{dateFormatter(item.DscPlanYmd)}}
              </div>
              <!-- <a href="javascript:void(0)" class="menu" style="z-index: 3;" @click.stop="openMenu(item)">메뉴</a> -->
          </div>
          <!-- <div class="group" @click.stop="clickedPatient(item)">
              <div class="block">
                  <p class="name"><i class="icon-samename" v-if="item.isSameNm"></i> {{item.UnitNo}} {{item.PatNm}}({{item.Sex}}/{{item.Age}})</p>
              </div>
              <div class="block">
                  <p class="doctor">{{item.DeptNm}} <span class="text-liner"></span> {{item.DrNm}}</p>
                  <p>{{dateFormatter(item.AdmiDt)}}</p>
              </div>
          </div>
          <div class="group" v-if="item.NurAssnYn == 'N' && userInfo.OcpTyp == 'N'">
              <a href="javascript:void(0)" class="btn btn-size fw-medium btn-out-color1" data-toggle="modal" @click="setPatInfo(item)" data-target="#patient-set">{{Multilingual.patAssn}}</a>
          </div> -->
      </div>
    </div>
    <div v-else>
      <div>dfdsfdf</div>
    </div>
  </div>
</template>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

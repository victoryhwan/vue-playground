<template>
    <div>
        {{ patient }}
    </div>
    <div class="panel panel-chart panel-inpatient">
        <div class="panel-header">
            입원
        </div>
        <div class="panel-body">
            <div class="d-flex justify-content-between" data-toggle="collapse" data-target="#inpatient-info">
                <div style="padding-left: 85px;">
                    <span class="patient patient-info">HOD : {{patient.HOD}}</span>
                    <span class="patient patient-info mr-0">POD : {{patient.POD}}</span>
                </div>
                <div>
                    <button class="btn btn-collpase" @click.prevent="changeCollapsedIcon">
                        <i :class="[isUpDownIcon ? 'icon-up' : 'icon-down']"></i>
                    </button>
                </div>
            </div>
            <div class="collapse show" id="inpatient-info">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex">
                        <div><span class="w-70 text-muted">퇴원예정일</span></div>
                        <div class="flex-fill"><b>{{dscPlanYmdData}}</b></div>
                    </div>
                    <div class="discharge-process-area">
                        <div class="discharge-process" @click="getPatDischargeInfo">
                            <small>더보기</small>
                        </div>
                        <div class="discharge-detail">
                            <div class="popup-wrap">
                                <div class="popup-container" style="overflow: auto;">
                                    <button type="button" class="close" @click.prevent="closeDischargeBtn"></button>
                                    <div class="pop-content">
                                        <div class="col-12">
                                            <div class="row flex-column" v-for="(items,index) in patDischargeData" :key="index">
                                                <div class="mb-1"><b>{{items.DscInfoGbNm}}</b></div>
                                                <div class="mb-2" v-for="(item, idx) in items.DscInfoCont" :key="idx"><div>
                                                <span class="text-muted">
                                                    <pre>{{item}}</pre><!-- replaceNR-->
                                                </span></div></div>
                                                <div :class="{ 'hairline mb-2' : isHairline(index) }"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hairline"></div>
                <div class="d-flex mt-1">
                    <div><span class="w-70 text-muted">주치의</span></div>
                    <div class="flex-fill">{{patient.DeptNm}} {{patient.DrNm}}</div>
                    <div>
                        <i class="icon-call" @click.prevent="openTel(patient.DrHpNo)"></i>
                        <i class="icon-chat ml-1" @click.prevent="openPageShare(patient, patient.DrHpNo)" style="width: 35px; height: 35px; vertical-align: top;"></i>
                    </div>
                </div>
                <div class="d-flex">
                    <div><span class="w-70 text-muted">입원일자</span></div>
                    <div class="flex-fill">{{admiDtData}}</div>
                    <div class="mb-30"></div>
                </div>
                <div class="d-flex">
                    <div><span class="w-70 text-muted">재원병동</span></div>
                    <div class="flex-fill">{{patient.Ward}}/{{patient.Room}}/{{patient.PatBed}}</div>
                    <div v-if="patient.nZnone">
                        <i class="icon-call" @click.prevent="openTel(patient.nZone)"></i>
                        <i class="icon-chat ml-1" @click.prevent="openPageShare(patient, patient.HpNo)" style="width: 35px; height: 35px; vertical-align: top;"></i>
                    </div>
                </div>
                
                <template v-if="patient.RsdtDrNm">
                <div class="d-flex">
                    <div><span class="w-70 text-muted">담당의</span></div>
                    <div class="flex-fill">{{patient.RsdtDrNm}}</div>
                    <div>
                        <i class="icon-call" @click.prevent="openTel(patient.RsdtDrHpNo)"></i>
                        <i class="icon-chat ml-1" @click.prevent="openPageShareDamDang(patient, patient.RsdtDrHpNo)" style="width: 35px; height: 35px; vertical-align: top;"></i>
                    </div>
                </div>
                </template>
                
<!--                            <div class="d-flex" v-for="item in patMedicalTeam">-->
<!--                                <div><span class="w-70 text-muted">{{item.OcpTypNm}}</span></div>-->
<!--                                <div class="flex-fill">{{item.TeamMbrNm}}</div>-->
<!--                                <div>-->
<!--                                    <i class="icon-call" @click.prevent="openTel(item.TeamMbrHpNo)"></i>-->
<!--                                    <i class="icon-chat ml-1" @click.prevent="openPageShare(item, item.TeamMbrHpNo)" style="width: 35px; height: 35px; vertical-align: top;"></i>-->
<!--                                </div>-->
<!--                            </div>-->
            </div>
            <div class="hairline"></div>
            <div class="mb-1">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="well-mark">Dx</span>
                        <big>{{patient.DiagNm}}</big>
                    </div>
                    <div>
                        <small><a href="#detail-1" class="btn-more" data-toggle="collapse">더보기</a></small>
                    </div>
                </div>
                <div id="detail-1" class="collapse">
                    <template v-for="(item, idx) in patDiagnosis" :key="idx">
                        <div>{{item.DiagNm}}</div>
                    </template>
                </div>
            </div>
            <div>
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="well-mark">Op</span>
                        <big>{{patient.OpNm}}</big>
                    </div>
                    <div>
                        <small><a href="#detail-2" class="btn-more" data-toggle="collapse">더보기</a></small>
                    </div>
                </div>
                <div id="detail-2" class="collapse">
                    <template v-for="(item, idx) in patOperation" :key="idx">
                        <div>{{item.OpNm}}</div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { usePatientrStore } from '@/stores/pinia/patient.store';
import { storeToRefs } from "pinia";
import { reactive, onMounted } from 'vue';

let patParam = {
  "ChosGb" : "I",
  "ChosNo" : "20230111001",
  "DeptCd" : "2030000000",
  "DrId" : "190046",
  "HosCd" : "37100092",
  "OcpTyp" : "0330",
  "UnitNo" : "CqK0cBXugQsoGbh0j5wdwp+/2/4ASFskGPXz2T2BVgl3laOQKvOSIXyGrIQkx2VdRpSjDEMH6z/24rqbx5EuiXAsooa1jEodTRsHBAe7OMZfpBJg+mENFFDXRg37oFn9H5xgvaieUTZlitvgrSeI+iVk3UMYVwJC0zbOxtahg+8=",
  "UserId" : "Q9ni/g5htoxaGZNtnqpvN03XZIFgXNNj4ko9iWxyOIxRutQYqLtRngnsHDSRnUNRT5/WZXXF47At2BarGwgVo31jerw2YfEmYauPSOaB2K0+KZlfwdBtyv3DjJe+oSXKMrwGIx8JXUh8DpbHX3THb9XwDZ1/bncolSHBo6gDKMM="
}

// const props = defineProps({
//     patient: Array
// })

// const patient = usePatientrStore().patient.info
const pinia = usePatientrStore()
pinia.setPatient(patParam)
const { getPatient } = storeToRefs(pinia)
const patient = getPatient

// let patient = JSON.parse(localStorage.getItem('mplus.tempPatientParam'))
let iconCnt = reactive(0)
let isUpDownIcon = reactive(false)
let patDischargeData = reactive([])
const patDiagnosis = []
const patOperation = []
// const patMedicalTeam = []
const dscPlanYmdData = ''
const admiDtData = ''

onMounted(async ()=>{
    console.log("0000000000000000000",patient.value)
    // getPatDiagnosis();
    // getPatOperation();
    // getPatDischarge();   //patDischargeCallback()

    //getPatMedicalTeam();
})

const openTel = ((hpNo)=>{ location.href = "tel:" + hpNo })
/** 아코디언 관련 함수*/
const changeCollapsedIcon = () => {
    if( iconCnt > 0) {
        isUpDownIcon = false;
        iconCnt = 0;
    } else {
        isUpDownIcon = true;
        iconCnt++;
    }
}

/** 팝업의 요약 한줄 관련 method*/
const isHairline = (index) => {
    let tempPatDischargeDataLength = patDischargeData.length;

    if(index == tempPatDischargeDataLength - 1) {
        return false;
    } else {
        return true;
    }
}

/**accordian 관련*/
const getPatDischargeInfo = () => {
    // $(".discharge-detail").addClass('on');
}
const closeDischargeBtn = () => {
    // $(".discharge-detail").removeClass('on');
}
const openPageShare = () => {}
</script>

<style scoped>
.panel{
    margin: 10px 0;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
}
.panel-header{
    background-image: linear-gradient(#ea4839, #dd4132);
    position: absolute;
    left: 17px;
    top: -3px;
    width: 75px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 1.063rem;
    color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.panel-body {
    padding: 10px 15px;
}
.hairline{
    position: relative;
    margin: 12px 0;
    vertical-align: top;
    display: inline-block;
    width: 100%;
    border-top: 1px solid #ddd;
}
.pre{
    font-family: 'Roboto','NotoSansKR', sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
    color: #666 !important;
    letter-spacing: -0.4px;
}
</style>
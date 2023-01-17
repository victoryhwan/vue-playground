<template>
    <button>test</button>
    <div class="fixed-area" v-if="value.UnitNo">
        <div class="clearfix p-15">
            <div class="d-flex align-items-center justify-content-between mb-1">
                <div class="line-clear">
                    <span class="patient">{{value.UnitNo}} </span>
                    <span class="patient patient-name">{{value.PatNm}}</span>
                </div>
                <div class="line-clear">
                    <span class="patient patient-info">{{value.Sex}}/{{value.Age}}</span>
                    <span class="patient patient-info">{{dateFormatter(value.BirthYmd)}}</span>
                </div>
            </div>
            
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <span class="patient-summary-area" @click="getPatSummary">
                        <em class="patient patient-summary" v-for="(item,idx) in summary" :key="idx">
                            <span v-if="iconType=='default'">{{item.PatSummaryGb}}</span>
                            
                        </em>
                        <span v-if="iconType=='new_version'"><i :class="getIconClass(item.PatSummaryGb)" v-for="(item,idx) in summary" :key="idx"></i></span>
                    </span>
                    <span class="patient patient-badge">{{value.AboRh}}</span>
                </div>
                <div class="d-flex align-items-center line-clear">                                  
                    <span class="patient patient-info" v-if="(value.Ht || value.Wght)">{{value.Ht}} Cm / {{value.Wght}} Kg</span> <!-- 제거 / {{value.BSA}} ㎡ -->                                    
                </div>
            </div>
                
            <div class="summary-layer">
                <div class="popup-wrap">
                    <div class="popup-container" style="overflow: auto;">
                        <button type="button" class="close" @click.prevent="closeSummaryBtn"></button>
                        <div class="pop-content">
                            <div class="col-12">
                                <div class="row flex-column">
                                    <div class="mb-3" v-for="(items, idx) in summary" :key="idx">
                                        <div class="tit mb-2">
<!--                                    <em class="patient patient-summary">{{items.PatSummaryGb}}</em>-->
                                        <em class="patient patient-summary" v-if="iconType=='default'">{{items.PatSummaryGb}}</em>
                                        <i :class="getIconClass(items.PatSummaryGb)" v-if="iconType=='new_version'"></i>
                                        <b>{{items.PatSummaryGbNm}}</b>
                                        </div>
                                        <div v-for="(item,idx) in items.PatSummaryCont" :key="idx">
                                        <pre>{{item}}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="fixed-area" v-else>
        <div class="clearfix p-15">
            <p class="text-scandesc">환자바코드를 스캔해 주세요</p>
        </div>
    </div>
</template>
<script setup>
const value = []
</script>
<style scoped>
.pre{
    font-family: 'Roboto','NotoSansKR-Medium', sans-serif;
    font-size: 0.875rem;
    line-height: 1.4;
    color: #222;
    letter-spacing: -0.4px;
}
</style>
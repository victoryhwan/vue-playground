<template>
    <div class="col-12" style="margin-bottom: 80px">
        <div class="hr"></div>
        <div class="title">
            <div th:text="#{mplus.view.clnInfo}">진료정보</div>
        </div>
        <div class="medicine" id="columns">
            <!-- <a class="medicine-item" :class="item.icon" :data-link='item.url' draggable="true" v-for="(item,index) in treatMenu" @click="columnsClk(item)">
                <div class="img"></div>
                {{item.title}}
            </a> -->
        </div>
    </div>
</template>
<script setup>
const treatMenu = []
const param = null
const menuList = [
    {
        title : '임상관찰',
        icon : 'icon medicine-item-1',
        url : '/nurPoc/clinicObservation',
        id : 'clinicObservation'
    },
    {
        title : 'v/s조회', //v/s조회 
        icon : 'icon medicine-item-1',
        url : '/clnInfoSrh/vitalList',
        id : 'vitalList'
    },
    {
        title: '검사결과',
        icon : 'icon medicine-item-2',
        url: '/clnInfoSrh/examResult',
        id : 'examResult'
    },
    {
        title: '기록조회',
        icon : 'icon medicine-item-3',
        url: '/clnInfoSrh/recordList',
        id : 'recordList'
    },
    {
        title: '진료이력',
        icon : 'icon medicine-item-4',
        url: '/clnInfoSrh/treatmentList',
        id : 'treatmentList'
    },
    {
        title: '처방조회', 
        icon : 'icon medicine-item-5',
        url: '/clnInfoSrh/prescriptionList',
        id : 'prescriptionList'
    },
    {
        title: '협진이력', 
        icon : 'icon medicine-item-7',
        url: '/clnInfoSrh/csHistoryList',
        id : 'csHistoryList'
    },
    {
        title : '간호기록',
        icon : 'icon medicine-item-8',
        url : '/clnInfoSrh/nurseRecordList',
        id : 'nurseRecordList'
    },
]

//getMenuList
const columnsClk = () => {
    // let check = await Lemonhc.commonFn.ipCheckMenu(clickItem.url)
    // if(!check){
    //     return false
    // }

    // this.treatMenu.forEach((item, menuIndex) => {
    //     if (item.url === clickItem.url) {
    //         location.href = LemonhcRouter.local + item.url + "?index=" + menuIndex;
    //     }
    // })
}
</script>
import { ref, onMounted } from 'vue'
import axios from 'axios';

let url = 'https://mcareplus.dcmc.co.kr:20443/ui-dev/plus/dcmc/api/'
const version = '/v4'

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

function getInPatientList() {
    const res = ref([]);

    onMounted(async()=>{
        res.value = (await axios.post(url+'get_getInPatientList'+version ,param)).data.body
    })

	return { res }
}

function getDoctorList(){
    const res = ref([]);

    onMounted(async()=>{
        res.value = (await axios.post(url+'get_getDoctorListByDept'+version ,param)).data.body
    })

    console.log(res,"res")
	return { res }
}

export { getInPatientList, getDoctorList }
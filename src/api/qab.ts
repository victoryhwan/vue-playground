import { ref, onMounted, reactive, getCurrentInstance } from 'vue'
import axios from 'axios';

// const {proxy} = getCurrentInstance();
const url = 'https://mcareplus.dcmc.co.kr:20443/ui-dev/plus/dcmc/api/'
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
        console.log("getInPatientList")
        res.value = (await axios.post(url+'get_getInPatientList'+version ,param)).data.body
    })

	return res
}

let deptParam = {
    HosCd : "37100092",
    MlGb : "ko",
    OcpTyp : "0330",
    RetrGb : "I",
    UserDeptCd : "2030000000",
    UserId : "OdDN/XlHzliWjM3KI9N31N/EMdpJL/RBNH6AfUZUejfTOZXcmTlt5/mA0IkdIkI1K53r1tVnnV7ufwTYkVG8wZmBCN7duhJeUh5ev8LToNiJl/q98Y1HhlolLlzjFTVhw/JieO4lgAJPYCxoen4s2TxiKOEkfKw0kdXueptnQSU="
}



function getDeptList() {
    const res = ref([]);
    onMounted(async()=>{
        res.value = (await axios.post(url+'get_getDeptList'+version ,deptParam)).data.body

        res.value.forEach((item:any)=>{
            item.value = item.DeptCd
            item.text = item.DeptNm
        })

        console.log(res,"321")
    })

    

	return res
}

let docParam = {
    DeptCd : "2150000000",
    HosCd : "37100092",
    MlGb : "ko",
    OcpTyp : "0330",
    RetrGb : "I",
    UserId : "NkuDjXcHFaY3cPFSVhqMKGDl43lMt5Akmj3TG74jbAvUMUMWVpMOj5Ow1bOdr7QgRTsuli/UytIHLWi5PCbj4Cnph62VeC81bw3NapnB63F4p2AmKXqgZWTeI3VyrqF18sdQ8WSN3MPPFk62EgClUbnpnXmFDNoA8GKSfs7fUJw="
}

function getDoctorList(){
    const res = ref([]);

    onMounted(async()=>{
        res.value = (await axios.post(url+'get_getDoctorListByDept'+version ,docParam)).data.body
    })

	return res
}

async function getTest(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    return res.data
}
export { getInPatientList, getDoctorList, getDeptList, getTest }
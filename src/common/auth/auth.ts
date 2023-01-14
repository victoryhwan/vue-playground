import router from "@/router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
let timer:any = null;
let time:number = 0;
let isLogin:boolean = true;

function timerHandler(){
  
  if(isLogin){
    console.log(`자동로그아웃 등록 [미사용시 ${time}분뒤 로그아웃됩니다.](${new Date()})`)
    if (timer) {//이전 타이머 clear
      clearTimeout(timer);
    }
    timer = setTimeout(()=>{
      timer = null;

      console.log(`로그아웃 처리`, new Date())
      localStorage.removeItem('mplus.doLogin');
      cookies.remove('accessToken')
      cookies.remove('refreshToken')
      cookies.remove('otpResult')
      cookies.remove('SCOUTER')

      router.push("/login")
    }, time*60*1000)
  }else{
    if (timer) {//이전 타이머 clear
      clearTimeout(timer);
    }
  }
  
}

export async function setLogoutTimer(isInit:boolean, _time:number = 0) {
  time = _time
  isLogin = isInit;

  const el:any = document.getElementById('app');
  if(isInit){
    el.addEventListener('click', timerHandler)
  }else{
    timerHandler()
    el.removeEventListener('click', timerHandler)
  }
}
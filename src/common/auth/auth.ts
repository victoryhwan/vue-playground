import router from "@/router";
export async function setLogoutTimer(time:number) {
    let timer:any = null;
    const el:any = document.getElementById('app');
    el.addEventListener('click', (event:any)=>{
      console.log(`자동로그아웃 등록 [미사용시 ${time}분뒤 로그아웃됩니다.]`)
      if (timer) {//이전 타이머 clear
        clearTimeout(timer);
      }
      timer = setTimeout(()=>{//set 타이머
        timer = null;
        console.log("로그아웃 처리")

        //로그아웃 팝업 오픈
        router.push("/login")
      }, time*60*1000)
    });
  }
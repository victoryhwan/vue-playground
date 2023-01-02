
export default {
    // install(Vue:any) {
    //     // [getSum 함수 설정]
    //     Vue.config.globalProperties.$getSum = function(){
    //         console.log("getSum");
    //     }
    //     window.example = function (){
    //         // if(hosCd === 'dd'){
    //         //     console.log("test");
    //         // }else{
    //         //     console.log("test2");
    //         // }
    //         console.log("test");
    //     }
    // }

    toNative(){
        window.example = function (hosCd:string){
            if(hosCd === 'dd'){
                console.log("test");
            }else{
                console.log("test2");
            }
        }
    }
}
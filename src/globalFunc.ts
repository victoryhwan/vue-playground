
export default {

    toNative(){
        window.example = function (hosCd:string){
            if(hosCd === 'dd'){
                console.log("test");
            }else{
                console.log("test2");
            }
        }
        window.sideMenu = {
            open(){
                console.log("sideMenu open");
            },
            close(){
                console.log("sideMenu close");
            }
        }
    }
}

export default {
    /** window 객체 생성 init  */
    toNative(){
        window.example = {
            increment(){
                console.log("sideMenu open");
            },
            decrement(){
                console.log("sideMenu close");
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
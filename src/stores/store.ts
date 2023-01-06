import { reactive } from 'vue'

const store = reactive({
  count: 0,
  increment(){
    this.count++;
  },
  decrement(){
    this.count--;
  }
})

const sideMenu = reactive({
  status: false,
  open(){
    this.status = true
  },
  close(){
    this.status = false
  }
})

export {store, sideMenu}
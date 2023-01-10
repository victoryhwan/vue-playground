<template>
    <b-form-select @change="onChange($event)">
        <b-form-select-option v-for="(item, index) in items.value" :value="item.value" :key="index">{{item.text}}</b-form-select-option>
    </b-form-select>
    <!-- <b-form-select :options="items.data" :id="id" @change="onChange($event)" v-model="this.value" :disabled="disabled" > -->
        <!-- <option v-for="(item, index) in items" :value="item.code" :key="index">{{item.name}}</option> -->
    <!-- </b-form-select> -->
</template>

<script setup>
// import { inject } from 'vue';

// const items = inject('selectGroupData')
/**SelectboxComp*/
const props = defineProps({
    id: String, 
    items: Array,
    selected: String,
    disabled: Boolean
})

console.log(props.items,"items")
const emit = defineEmits(['select-change'])

const onChange = (event) => {
    console.log(event,"event.target.value")
    // let rs = props.items.filter((item, idx)=>{
    //     return item.value == event.target.value
    // })
    emit('select-change', event)
}
</script>

<style scoped>
    
</style>
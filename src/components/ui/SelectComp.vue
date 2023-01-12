<template>
    <b-form-select :id="id" @change="onChange($event)" :disabled="disabled">
        <b-form-select-option v-for="(item, index) in items" :value="item.value" :key="index">{{item.text}}</b-form-select-option>
    </b-form-select>
</template>

<script setup>

const props = defineProps({
    id: String, 
    items: Array,
    selected: String,
    disabled: Boolean
})

const emit = defineEmits(['select-change'])

const onChange = (event) => {
    // let rs = props.items.filter((item, idx)=>{
    //     return item.value == event.target.value
    // })
    emit('select-change', event)
}
</script>

<style scoped>
    
</style>
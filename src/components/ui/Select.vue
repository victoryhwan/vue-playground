<template>
    <select class="form-control" :id="id" @change="onChange($event)" v-model="this.value" :disabled="disabled" >
        <option v-for="item in items" :value="item.code" >{{item.name}}</option>
    </select>
</template>

<script setup>
/**SelectboxComp*/
const props = defineProps({
    id: String, 
    items: Array,
    value: String,
    disabled: Boolean
})

const emit = defineEmits(['select-change'])

const onChange = (event) => {
    let rs = this.items.filter((item, idx)=>{
        return item.code == event.target.value
    })
    emit('select-change', rs[0])
}
</script>

<style scoped>
    
</style>
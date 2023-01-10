<template>
    <div>
        <input type="checkbox" :id="id" @change.prevent="onChange($event)" v-model="this.value">
        <label :for="id" style="font-size: 15px">
            <span style="width: 60px; display: inline-block; font-size: 15px;">{{labelName}}</span>
        </label>
    </div>
</template>

<script setup>
/**CheckBoxComp*/
const props = defineProps({
    id: String, 
    labelName: String,
    value: String
})

const checked = false
const emit = defineEmits(['checkbox-change'])

const onChange = (event) => {
    emit('checkbox-change', event.target.checked)
}
</script>

<style scoped>
    
</style>
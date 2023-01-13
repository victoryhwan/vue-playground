<template>
    <div>
        <input type="checkbox" :id="id" @change.prevent="onChange($event)" :v-model="value">
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
input[type="checkbox"].check {display: block; -webkit-appearance: none; appearance: none; width: 25px; height: 25px; margin-left: 8px; border: 1px solid #ddd; border-radius: 50%; background: url(../../../src/assets/ico_check.png) 0 0 no-repeat;}
input[type="checkbox"]:checked{border: none;background: #ff6f61 url(../../../src/assets/ico_check.png) 0 -25px no-repeat;}

/*input[type="checkbox"], input[type="radio"]{-webkit-appearance: none;appearance: none;}*/
input[type="checkbox"], input[type="radio"]{display:inline-block;position:fixed;left:-9999px;top:0;vertical-align:middle;}
input[type="checkbox"] + label{position: relative;left: 0;top: 0;padding: 0;padding-left: 29px;min-width: 25px;height: 25px;line-height: 25px;vertical-align: top;white-space: nowrap;}
input[type="checkbox"] + label:before{display: block;content:"";position: absolute;left: 0;top: 0;width: 25px;height: 25px;border: 1px solid #ddd;border-radius: 50%;background: #fff url(../../../src/assets/ico_check.png) 0 0 no-repeat;-webkit-background-size: 100%;background-size: 100%;}
input[type="checkbox"]:checked + label:before{border: 1px solid #ff6f61;background: #ff6f61 url(../../../src/assets/ico_check_on.png) 0 0 no-repeat;-webkit-background-size: 100%;background-size: 100%;}

</style>
<template>
    <v-date-picker class="inline-block h-full" v-model="date">
    <template v-slot="{ inputValue, togglePopover }">
        <div class="flex items-center">
        <input
            @click="togglePopover()"
            :value="inputValue"
            class="bg-white border cal-comp"
            readonly
        />
        </div>
    </template>
    </v-date-picker>
</template>

<script setup>

const props = defineProps({
    selected: String,
    disabled: Boolean
})

const emit = defineEmits(['calendar-change'])

const onChange = (event) => {
    emit('calendar-change', event)
}
</script>

<style scoped>
.cal-comp{
    width: 100%;
    height: 40px !important;
    border-radius: 5px !important;
    background: url(../../../src/assets/ico_calendar.png) right 10px center no-repeat;
}
</style>
<template>
    <input class="v-checkbox" type="checkbox" @change="changeCheckBox" :checked="props.checked">
</template>

<script setup lang="ts">
const props = defineProps<{
    checked: boolean
}>()
const emit = defineEmits(['update'])
const changeCheckBox=(e)=> emit("update",e.target.checked)
</script>

<style scoped>
.v-checkbox {
    width:30px;
    height: 30px;
}
</style>

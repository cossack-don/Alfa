<template>
    <div>
        <input class="v-input" type="text" placeholder="Поиск" :value="props.modelValue"  @input="onSearch">
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])
// const value = ref('')
const onSearch=(e:Event)=> {
    // value.value = e.target.value
    emit("update:modelValue",e.target.value)
}
</script>

<style scoped>
.v-input {
    width:100%;
    background:var(--gray);
    border:none;
    border-radius:1rem;
    padding: 0 48px 0 40px;
    height:48px;
}

</style>

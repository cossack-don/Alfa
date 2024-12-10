<template>
    <button class="v-button" :disabled="props.isDisabled" :class="[EnumsColors[props.color],EnumsSizes[props.size]]">
        <slot/>
    </button>
</template>

<script setup lang="ts">
interface Props {
    color?: string;
    size?:string;
    isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'red',
    size:'md',
    isDisabled:false
})

enum EnumsSizes {
    'sm'='v-button-size-sm',
    'md'='v-button-size-md',
    'lg'='v-button-size-lg'
}
enum EnumsColors {
    'red'='v-button-red',
    'gray'='v-button-gray',
}
</script>


<style scoped>
.v-button {
    background:var(--red);
    color:var(--white);
    border:none;
    min-width: 200px;
    padding:10px 15px;
    border-radius:10px;
    transition: 0.5s;
}

.v-button:hover {
    cursor:pointer;
    background:var(--red-hover);
}

.v-button-red {

}

.v-button-gray {
    background:var(--gray);
    color:var(--black);
}
.v-button-gray:hover {
    background:var(--gray-hover);
}


.v-button-size-sm {min-width: 50px;}
.v-button-size-md {min-width: 100px;}
.v-button-size-lg {min-width: 200px;}


.v-button:disabled,
.v-button[disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}
</style>

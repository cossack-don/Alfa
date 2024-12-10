<template>
    <div>APP VUE</div>
    <a href="/">HOME LARA</a>
    <router-link to="/lk">home</router-link> <br/>
    <router-link to="/lk/page2">to page 2</router-link>

    <router-view></router-view>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const state = ref([])

onMounted(() => {
    fetch('/api/products').then(res => res.json()).then(res => state.value = res)
})
</script>

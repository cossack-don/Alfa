<template>
    <div class="v-card">
        <slot/>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.v-card {
    padding:10px;
    background-color:var(--white);
    box-shadow: 0 0 16px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08);
    border-radius:10px;
}
</style>

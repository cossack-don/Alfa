<template>
    <component :is="props.as">
        <slot/>
    </component>
</template>

<script setup lang="ts">
type TTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const props = defineProps<{
    as: TTags
}>()
</script>

<script setup lang="ts">
defineProps<{
    align?: 'left' | 'center' | 'right'
    width?: string
}>()
</script>
<template>
    <th
        class="py-3 px-4 text-xs font-semibold uppercase tracking-wider print:py-3 print:px-4 print:text-[10px]"
        :class="[
            align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left',
            width
        ]"
    >
        <slot></slot>
    </th>
</template>

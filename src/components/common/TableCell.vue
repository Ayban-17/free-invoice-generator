<script setup lang="ts">
defineProps<{
    align?: 'left' | 'center' | 'right'
}>()
</script>
<template>
    <td
        class="py-2 px-4 text-slate-700 text-sm print:pr-4 print:text-slate-700 print:text-xs"
        :class="[
            align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
        ]"
    >
        <slot></slot>
    </td>
</template>

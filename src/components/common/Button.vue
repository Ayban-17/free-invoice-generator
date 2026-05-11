<script setup lang="ts">
const props = defineProps({
    click: {
        type: Function,
        required: false
    }
})

const emit = defineEmits(['trigger']);
</script>
<template>
    <button @click="emit('trigger')" class=" w-fit mt-4 px-5 py-2 text-sm font-medium text-amber-600 border border-amber-500 rounded-lg hover:bg-amber-50 transition-colors print:hidden">
        <slot></slot>
    </button>
</template>
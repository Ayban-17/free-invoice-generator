<script setup lang="ts">
const model = defineModel();
const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    variant: {
        type: String,
        default: 'default'
    },
    prefix: {
        type: String,
        default: ''
    },
    suffix: {
        type: String,
        default: ''
    },
    align: {
        type: String,
        default: 'left'
    }
});
</script>

<template>
    <div
        v-if="variant === 'table'"
        class="flex items-center w-full"
        :class="[
            align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'
        ]"
    >
        <span v-if="prefix" class="print:hidden text-[#4F6168]/50 mr-1 shrink-0">{{ prefix }}</span>
        <input
            v-model="model"
            :type="inputType"
            :placeholder="placeholder"
            class="px-1 py-1 bg-transparent text-sm border-b border-transparent hover:border-[#D4D4A9] focus:border-[#F47920] focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none print:px-0 print:py-0 print:border-none"
            :class="[
                align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left',
                inputType === 'number' ? 'w-16' : 'w-full'
            ]"
        />
        <span v-if="suffix" class="print:hidden text-[#4F6168]/50 ml-1 shrink-0">{{ suffix }}</span>
    </div>
    <input
        v-else
        v-model="model"
        :type="inputType"
        :placeholder="placeholder"
        class="w-full bg-transparent border-0 border-b border-transparent hover:border-[#D4D4A9] focus:border-[#F47920] focus:outline-none focus:ring-0 py-1 transition-colors print:p-0 print:border-none placeholder:text-[#4F6168]/40"
    />
</template>

<script setup lang="ts">
import { type TableInfo, useInvoiceInfo } from '../composables/useInvoiceInfo';
import { computed } from 'vue';

const { tableInfo } = useInvoiceInfo();

const sumBy = (fn: (info: TableInfo) => number): number =>
    tableInfo.value.reduce((acc, info) => acc + fn(info), 0);

const subTotal = computed(() =>
    sumBy(info => (Number(info.quantity) || 0) * (Number(info.rate) || 0))
);

const totalTax = computed(() =>
    sumBy(info => (Number(info.quantity) || 0) * (Number(info.rate) || 0) * ((Number(info.tax) || 0) / 100))
);

const grandTotal = computed(() => subTotal.value - totalTax.value);
</script>

<template>
    <div class="px-8">
        <div class="flex justify-end">
            <div class="w-72">
                <!-- Subtotal -->
                <div class="flex justify-between py-2 text-sm">
                    <span class="text-[#4F6168]">Subtotal</span>
                    <span class="text-[#2D4A3E]">${{ subTotal.toFixed(2) }}</span>
                </div>

                <!-- Tax -->
                <div class="flex justify-between py-2 text-sm border-b border-[#D4D4A9]/50">
                    <span class="text-[#4F6168]">Tax</span>
                    <span class="text-[#4F6168]">-${{ totalTax.toFixed(2) }}</span>
                </div>

                <!-- Grand Total -->
                <div class="flex justify-between py-4">
                    <span class="text-[#2D4A3E] font-semibold">Total Due</span>
                    <span class="text-xl font-bold text-[#F47920]">${{ grandTotal.toFixed(2) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

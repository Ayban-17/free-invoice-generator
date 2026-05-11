<script setup lang="ts">
import Input from './common/Input.vue';
import { useInvoiceInfo } from '../composables/useInvoiceInfo';

const { contractorsInfo, autoInvoiceNumber } = useInvoiceInfo();
</script>

<template>
    <div class="px-8 py-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-6 print:flex-row">
            <!-- Company Info -->
            <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-1 h-12 bg-[#F47920] rounded-full"></div>
                    <Input
                        v-model="contractorsInfo.company"
                        placeholder="Your Company Name"
                        class="text-2xl font-bold text-[#2D4A3E] tracking-tight"
                    />
                </div>
                <div class="pl-4 space-y-1">
                    <Input
                        v-model="contractorsInfo.name"
                        placeholder="Your Name"
                        class="text-[#4F6168] font-medium"
                    />
                    <Input
                        v-model="contractorsInfo.street"
                        placeholder="Street Address"
                        class="text-[#4F6168]/70 text-sm"
                    />
                    <Input
                        v-model="contractorsInfo.city"
                        placeholder="City, State ZIP"
                        class="text-[#4F6168]/70 text-sm"
                    />
                    <Input
                        v-model="contractorsInfo.country"
                        placeholder="Country"
                        class="text-[#4F6168]/70 text-sm"
                    />
                </div>
            </div>

            <!-- Invoice Badge -->
            <div class="text-right">
                <h1 class="text-4xl font-light text-[#2D4A3E] tracking-widest uppercase mb-4">
                    Invoice
                </h1>
                <div class="inline-block bg-[#2D4A3E]/5 rounded-lg px-6 py-4 print:bg-transparent print:p-0">
                    <p class="text-xs text-[#4F6168]/60 uppercase tracking-wider mb-1">Invoice Number</p>
                    <p class="text-lg font-mono font-semibold text-[#2D4A3E]">
                        {{ contractorsInfo.invoiceNumber || autoInvoiceNumber }}
                    </p>
                    <Input
                        v-model="contractorsInfo.invoiceNumber"
                        placeholder="Custom #"
                        class="mt-2 text-xs text-[#4F6168] text-center print:hidden"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

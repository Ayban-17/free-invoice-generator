<script setup lang="ts">
import Input from './common/Input.vue';
import { useInvoiceInfo } from '../composables/useInvoiceInfo';

const { bankInfo } = useInvoiceInfo();
</script>

<template>
    <div class="px-8 py-8">
        <p class="text-xs font-semibold text-[#F47920] uppercase tracking-widest mb-4">Payment Details</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 print:grid-cols-2">
            <div class="flex items-baseline gap-3">
                <span class="text-xs text-[#4F6168]/60 uppercase tracking-wider w-32 shrink-0">Bank Name</span>
                <Input
                    v-model="bankInfo.bankName"
                    placeholder="Bank Name"
                    class="text-sm font-medium text-[#2D4A3E]"
                />
            </div>

            <div class="flex items-baseline gap-3">
                <span class="text-xs text-[#4F6168]/60 uppercase tracking-wider w-32 shrink-0">Account Holder</span>
                <Input
                    v-model="bankInfo.accountHolder"
                    placeholder="Account Holder Name"
                    class="text-sm font-medium text-[#2D4A3E]"
                />
            </div>

            <div class="flex items-baseline gap-3">
                <span class="text-xs text-[#4F6168]/60 uppercase tracking-wider w-32 shrink-0">Routing #</span>
                <Input
                    v-model="bankInfo.wireRouteNum"
                    placeholder="ACH/Wire Routing Number"
                    class="text-sm font-mono text-[#2D4A3E]"
                />
            </div>

            <div class="flex items-baseline gap-3">
                <span class="text-xs text-[#4F6168]/60 uppercase tracking-wider w-32 shrink-0">Account #</span>
                <Input
                    v-model="bankInfo.accountNum"
                    placeholder="Account Number"
                    class="text-sm font-mono text-[#2D4A3E]"
                />
            </div>

            <div class="flex items-baseline gap-3">
                <span class="text-xs text-[#4F6168]/60 uppercase tracking-wider w-32 shrink-0">Account Type</span>
                <Input
                    v-model="bankInfo.accountType"
                    placeholder="Checking / Savings"
                    class="text-sm font-medium text-[#2D4A3E]"
                />
            </div>
        </div>
    </div>
</template>

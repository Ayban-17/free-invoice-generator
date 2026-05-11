<script setup lang="ts">
import Input from './common/Input.vue';
import { useInvoiceInfo } from '../composables/useInvoiceInfo';
import { computed } from 'vue';

const { clientsInfo } = useInvoiceInfo();

const invoiceDate = computed(() => {
    return new Date(clientsInfo.invoiceDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

const dueDate = computed(() => {
    return new Date(clientsInfo.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});
</script>

<template>
    <div class="px-8 py-8">
        <div class="flex flex-col md:flex-row md:justify-between gap-8 print:flex-row">
            <!-- Bill To -->
            <div class="flex-1">
                <p class="text-xs font-semibold text-[#F47920] uppercase tracking-widest mb-3">Bill To</p>
                <div class="space-y-1">
                    <Input
                        v-model="clientsInfo.company"
                        placeholder="Client Company Name"
                        class="text-lg font-semibold text-[#2D4A3E]"
                    />
                    <Input
                        v-model="clientsInfo.street"
                        placeholder="Street Address"
                        class="text-[#4F6168]/70 text-sm"
                    />
                    <Input
                        v-model="clientsInfo.city"
                        placeholder="City, State ZIP"
                        class="text-[#4F6168]/70 text-sm"
                    />
                    <Input
                        v-model="clientsInfo.country"
                        placeholder="Country"
                        class="text-[#4F6168]/70 text-sm"
                    />
                </div>
            </div>

            <!-- Dates -->
            <div class="md:text-right space-y-4 print:text-right">
                <div>
                    <p class="text-xs text-[#4F6168]/60 uppercase tracking-wider mb-1">Invoice Date</p>
                    <p class="text-[#2D4A3E] font-medium">{{ invoiceDate }}</p>
                    <Input
                        v-model="clientsInfo.invoiceDate"
                        input-type="date"
                        class="mt-1 text-xs text-[#4F6168] print:hidden"
                    />
                </div>
                <div>
                    <p class="text-xs text-[#4F6168]/60 uppercase tracking-wider mb-1">Due Date</p>
                    <p class="text-[#F47920] font-semibold">{{ dueDate }}</p>
                    <Input
                        v-model="clientsInfo.dueDate"
                        input-type="date"
                        class="mt-1 text-xs text-[#4F6168] print:hidden"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

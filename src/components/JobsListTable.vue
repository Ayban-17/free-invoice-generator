<script setup lang="ts">
import Input from './common/Input.vue';
import { useInvoiceInfo } from '../composables/useInvoiceInfo';

const { tableInfo, removeItem, addItem } = useInvoiceInfo();

const calculateAmount = (quantity: number, tax: number, rate: number, id: string): string => {
    const rowAmount = quantity * rate;
    const calculatedTax = (tax / 100) * rowAmount;
    const calculatedAmount = rowAmount - calculatedTax;
    const project = tableInfo.value.find((info) => info.id === id);

    if (project) {
        project.amount = calculatedAmount;
    }

    return calculatedAmount.toFixed(2);
}
</script>

<template>
    <div class="px-8 py-6">
        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="border-b-2 border-[#2D4A3E]">
                        <th class="py-3 text-left text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider w-12">#</th>
                        <th class="py-3 text-left text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider">Description</th>
                        <th class="py-3 text-center text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider w-20">Qty</th>
                        <th class="py-3 text-right text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider w-24">Rate</th>
                        <th class="py-3 text-center text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider w-20">Tax</th>
                        <th class="py-3 text-right text-xs font-semibold text-[#2D4A3E] uppercase tracking-wider w-28">Amount</th>
                        <th class="py-3 w-10 print:hidden"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[#D4D4A9]/30">
                    <tr
                        v-for="(input, index) in tableInfo"
                        :key="input.id"
                        class="group hover:bg-[#4A5E4F]/5 transition-colors print:hover:bg-transparent"
                    >
                        <td class="py-4 text-[#4F6168]/60 text-sm">{{ index + 1 }}</td>
                        <td class="py-4">
                            <Input
                                v-model="input.description"
                                variant="table"
                                placeholder="Item description"
                                class="text-[#2D4A3E]"
                            />
                        </td>
                        <td class="py-4">
                            <Input
                                v-model="input.quantity"
                                variant="table"
                                input-type="number"
                                align="center"
                                class="text-[#4F6168]"
                            />
                        </td>
                        <td class="py-4">
                            <Input
                                v-model="input.rate"
                                variant="table"
                                input-type="number"
                                prefix="$"
                                align="right"
                                class="text-[#4F6168]"
                            />
                        </td>
                        <td class="py-4">
                            <Input
                                v-model="input.tax"
                                variant="table"
                                input-type="number"
                                suffix="%"
                                align="center"
                                class="text-[#4F6168]"
                            />
                        </td>
                        <td class="py-4 text-right font-medium text-[#2D4A3E]">
                            ${{ calculateAmount(input.quantity, input.tax, input.rate, input.id) }}
                        </td>
                        <td class="py-4 print:hidden">
                            <button
                                @click="removeItem(input.id)"
                                class="opacity-0 group-hover:opacity-100 p-1.5 text-[#4F6168]/40 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Add Item Button -->
        <button
            @click="addItem"
            class="mt-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4F6168] hover:text-[#F47920] hover:bg-[#F47920]/5 rounded-lg transition-colors print:hidden"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Item
        </button>
    </div>
</template>

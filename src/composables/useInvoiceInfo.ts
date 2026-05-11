import { computed, reactive, ref } from "vue";

const contractorsInfo = reactive({
  company: '',
  name: '',
  street: '',
  city: '',
  country: '',
  invoiceNumber: ''
})

const clientsInfo = reactive({
  company: '',
  name: '',
  street: '',
  city: '',
  country: '',
  invoiceDate: new Date,
  dueDate: new Date
})

const tableInfo = ref([{
    id: 'new-'+Date.now(),
    description: 'Brochure',
    quantity: 1,
    rate: 0.00,
    tax: 0.00,
    amount: 0.00
}])

const bankInfo = reactive({
  bankName: '',
  accountHolder: '',
  wireRouteNum: '',
  accountNum: '',
  accountType: ''
})


const autoInvoiceNumber = computed(()=>{
    const month = new Date().toLocaleDateString('en-US', {month:'short'});
    const year = new Date().toLocaleDateString('en-US', {year:'numeric'});
    return `${month}_${year}`;
})

const autoDue = computed(()=>{
    return new Date().toISOString().split('T')[0];
})

export type ContractorsInfo = {
    company: string,
    name: string,
    street: string,
    city: string,
    country: string,
    invoiceNumber: string
}

export type ClientsInfo = {
    company: string,
    name: string,
    street: string,
    city: string,
    country: string,
    invoiceDate: Date,
    dueDate: Date
}

export type TableInfo = {
    id: string | number
    description: string
    quantity: number | string
    rate: number | string
    tax: number | string
    amount: number
}

export type bankInfo = {
    bankName: string,
    accountHolder: string,
    wireRouteNum: string,
    accountNum: string,
    accountType: string
}



export const useInvoiceInfo = () => {
    const save = (): void => {
        localStorage.setItem('contractorsInfo', JSON.stringify(contractorsInfo));
        localStorage.setItem('clientsInfo', JSON.stringify(clientsInfo));
        localStorage.setItem('tableInfo', JSON.stringify(tableInfo.value));
        localStorage.setItem('bankInfo', JSON.stringify(bankInfo));
    }

    const load = (): void => {
        const isContractorsInfoSaved = localStorage.getItem('contractorsInfo');
        const isClientsInfoSaved = localStorage.getItem('clientsInfo');
        const isTableInfoSaved = localStorage.getItem('tableInfo');
        const isBankInfoSaved = localStorage.getItem('bankInfo');
        if (isContractorsInfoSaved) Object.assign(contractorsInfo, JSON.parse(isContractorsInfoSaved));
        if (isClientsInfoSaved) Object.assign(clientsInfo, JSON.parse(isClientsInfoSaved));
        if (isTableInfoSaved) Object.assign(tableInfo.value, JSON.parse(isTableInfoSaved));
        if (isBankInfoSaved) Object.assign(bankInfo, JSON.parse(isBankInfoSaved));
    }

    const addItem = (): void => {
        tableInfo.value.push({
            id:'new-'+Date.now(),
            description: 'Brochure',
            quantity: 1,
            rate: 0.00,
            tax: 0.00,
            amount: 0.00
        })
    }

    const removeItem = (id: String): void => {
        tableInfo.value = tableInfo.value.filter((info)=> info.id !== id);
    }

    return {contractorsInfo, clientsInfo, tableInfo, bankInfo, autoInvoiceNumber, autoDue, addItem, removeItem, save, load}
}
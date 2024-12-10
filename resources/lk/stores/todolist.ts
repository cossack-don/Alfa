import { defineStore } from 'pinia'
import {computed, ref} from 'vue'

export interface ICard {
    "id": number,
    "name": string,
    "company": string,
    "username": string,
    "email": string,
    "address": string,
    "zip": string,
    "state": string,
    "country":string,
    "phone": string,
    "photo": string,
    "isEdit":boolean
    "title": string,
    "completed":boolean,
}

export const useStoreTodoList = defineStore('storeTodoList', () => {
    const stateListCards = ref<ICard[] | []>([])
    const updateListCards = (payload:ICard[]) => {stateListCards.value = payload}
    const isLoadingStateListCards = ref<boolean>(false)
    const updateLoadingStateListCards = (payload:boolean) => {isLoadingStateListCards.value = payload}


    const getInitialDataAPI = async () =>{
        try {
            const URL = 'https://json-placeholder.mock.beeceptor.com/todos'
            const OPTIONS = {}

            updateLoadingStateListCards(true)

            const response = await fetch(URL)
            const cleanResponse = await response.json();
            const res = cleanResponse.map((item)=>{
                return {
                    ...item,
                    isEdit:false
                }
            })
            updateListCards(res)
        } catch(e){}
        finally {
            updateLoadingStateListCards(false)
        }

    }

    const onSubmitSearchCardsAPI = async()=> {
        const URL = `https://json-placeholder.mock.beeceptor.com/todos/${stateValueInputSearch.value}`
        const response = await fetch(URL)
        const cleanResponse = await response.json();
        updateListCards([cleanResponse])
    }

    const onClearForm = async() =>  {
        isSearch.value = false
        stateValueInputSearch.value = ''
        await getInitialDataAPI()
    }

    const $reset = ()=> {
        stateListCards.value = []
    }

    const deleteCardById = (id:number)=>{
        stateListCards.value = stateListCards.value.filter((el)=> el.id !== id)
    }

    const editCardById = (id:number)=>{
        const currentElement = stateListCards.value.find((el)=> el.id ===id)
        currentElement.isEdit = true
    }

    const updateEditInput = (id:number,val:string) => {
        const currentElement = stateListCards.value.find((el)=> el.id ===id)
        currentElement.title = val
    }

    const updateCheckBox = (id:number,val:boolean) => {
        const currentElement = stateListCards.value.find((el)=> el.id ===id)
        currentElement.completed = val
    }

    const onSaveEditInput = (id:number) => {
        const currentElement = stateListCards.value.find((el)=> el.id ===id)
        currentElement.isEdit = false
    }


    const isSearch = ref(false)
    const stateSearch = ref([])
    const stateValueInputSearch = ref('')

    const onSearchCard = async(val?:string)=> {
        stateValueInputSearch.value = val
        // if(val === '') {
        //         // isSearch.value = false
        //         await getInitialDataAPI()
        // } else {
        //     // isSearch.value = true
        //     const URL = `https://json-placeholder.mock.beeceptor.com/todos/${val}`
        //     const OPTIONS = {}
        //     const response = await fetch(URL)
        //     const cleanResponse = await response.json();
        //
        //     updateListCards([cleanResponse])
        // }

        // const v = val.toLocaleLowerCase()
        //
        // if(val === "") {
        //     isSearch.value = false
        //     await getInitialDataAPI()
        // }
        //
        // stateValueInputSearch.value = val
        // isSearch.value = true
        //
        // stateSearch.value = stateListCards.value.filter((item)=>{
        //     if(item.title.toLocaleLowerCase().includes(v)) return item
        // })

    }


    const variantsData = computed(()=>{
        if(isSearch.value){
            return stateSearch.value
        } else {
            return stateListCards.value
        }
    })
    return {
        stateListCards,
        updateListCards,
        getInitialDataAPI,
        onSubmitSearchCardsAPI,
        isLoadingStateListCards,
        onClearForm,
        deleteCardById,
        editCardById,
        updateEditInput,
        updateCheckBox,
        onSaveEditInput,
        onSearchCard,
        variantsData,
        stateValueInputSearch,
        $reset
    }
})

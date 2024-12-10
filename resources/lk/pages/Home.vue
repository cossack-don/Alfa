<template>
<div style="margin:0px auto; width:1200px">
    <Heading as="h3">TO DO LIST</Heading>
        <form @submit.prevent="storeTodoList.onSubmitSearchCardsAPI" class="d-flex flex-justify-between" style="margin-bottom:15px; margin-top: 15px;">
            <VInput :data-test="ThreeApp.pageLK.elements.inputSearch" :modelValue="storeTodoList.stateValueInputSearch" @update:modelValue="storeTodoList.onSearchCard" style="min-width: 900px"/>
            <div class="d-flex">
<!--                :isDisabled="!storeTodoList.stateValueInputSearch.length"-->
<!--                :isDisabled="!storeTodoList.stateValueInputSearch.length"-->
                <VButton :data-test="ThreeApp.pageLK.elements.buttonSearch" style="margin-right: 15px;" size="md" >Найти</VButton>
                <VButton :data-test="ThreeApp.pageLK.elements.buttonClearSearch"  @click.prevent="storeTodoList.onClearForm" color="gray" size="md">Сбросить</VButton>
            </div>
        </form>

    <VSpinner v-if="storeTodoList.isLoadingStateListCards"/>

    <div v-else>
        <VListCards v-if="storeTodoList.variantsData.length" :payload="storeTodoList.variantsData"/>
        <div v-if="!storeTodoList.variantsData.length">Ничего не найдено</div>
    </div>

</div>
</template>

<script setup lang="ts">
import {VButton, VListCards, VInput, VSpinner,Heading} from "../ui";
import {useStoreTodoList} from "../stores/todolist";
import {onMounted} from "vue";
import {ThreeApp} from "../../../cypress/core/ThreeApp";

const storeTodoList = useStoreTodoList()

onMounted(()=>storeTodoList.getInitialDataAPI())
</script>

<template>
    <VCard class="v-list-cards" v-for="(item,index) in props.payload" :key="index">
        <p>ID - {{item.id}}</p>
        <p>Title - {{item.title}}</p>
        <p>Status - {{item.completed}}</p>
        <p>User ID - {{item.userId}}</p>
        <VCheckBox :checked="item.completed" @update="onUpdateCheckBox($event,item.id)"/>

        <div v-if="item.isEdit">
            <input :value="item.title" type="text" @input="onUpdateTitle($event,item.id)">
            <VButton @click="storeTodoList.onSaveEditInput(item.id)">Save</VButton>
        </div>


        <VButton  style="margin-right: 15px" v-if="!item.isEdit" @click="storeTodoList.editCardById(item.id)">Edit</VButton>
        <VButton @click="storeTodoList.deleteCardById(item.id)">Delete</VButton>
    </VCard>
</template>

<script setup lang="ts">
import { VCard, VButton, VCheckBox} from "../ui";
import {ICard, useStoreTodoList} from "../stores/todolist";
const storeTodoList = useStoreTodoList()
import {ref} from 'vue'

const onUpdateTitle = (e:Event,id:number)=> storeTodoList.updateEditInput(id,e.target.value)
const onUpdateCheckBox= (checked:boolean,id:number)=> storeTodoList.updateCheckBox(id,checked)

interface Props {
    payload: ICard[] | [];
}

const props = withDefaults(defineProps<Props>(), {
    payload: null,
})

const val = ref(props.payload.title)
</script>

<style scoped>

.v-list-cards {
    margin-bottom:10px;
    display:flex;
    justify-content: space-between;
}

.v-list-cards:last-child{
    margin-bottom:0;
}
</style>

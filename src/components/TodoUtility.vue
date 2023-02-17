<script setup>
import { storeToRefs } from 'pinia'
import { ref, watch, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()
const { completedItems, todoItems } = storeToRefs(todoStore)
const { addTodo, getTodoItems, switchTodo, updateTodo } = todoStore

const formValid = ref(false)
const itemText = ref('')

onMounted(() => {
  getTodoItems()
})

function handleSwitchTodo({ id, completed }) {
  switchTodo(id, completed)
}

function handleUpdateTodo({ id, text }) {
  updateTodo(id, text)
}

function validateForm() {
  formValid.value = !!itemText.value.trim();
}

function handleSubmit() {
  addTodo(itemText.value)
  itemText.value = ''
}

watch(itemText, () => {
  validateForm()
})
</script>

<template>
  <h2>Todo Utility</h2>

  <form @submit="handleSubmit">
    <input type="text" placeholder="To-do item" v-model="itemText" />
    <button type="submit" :disabled="!formValid">Add</button>
  </form>

  <TodoList
    v-if="todoItems.length > 0"
    title="To-do items"
    :items="todoItems"
    @switch-completed-todo="handleSwitchTodo"
    @change-todo-text="handleUpdateTodo"
  />
  <TodoList
    v-if="completedItems.length > 0"
    title="Completed items"
    :items="completedItems"
    @switch-completed-todo="handleSwitchTodo"
    @change-todo-text="handleUpdateTodo"
  />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()
const { items, completedItems, todoItems } = storeToRefs(todoStore)

onMounted(() => {
  items.value = [
    { id: 1, text: 'pane', completed: false },
    { id: 2, text: 'olio', completed: true },
    { id: 3, text: 'sale', completed: false },
    { id: 4, text: 'farina', completed: true },
    { id: 5, text: 'burro', completed: false },
  ]
})

function handleSwitchTodo({ id, completed }) {
  todoStore.switchTodo(id, completed)
}
</script>

<template>
  <h2>Todo Utility</h2>

  <TodoList
    v-if="todoItems.length > 0"
    title="To-do items"
    :items="todoItems"
    @switch-completed-todo="handleSwitchTodo"
  />
  <TodoList
    v-if="completedItems.length > 0"
    title="Completed items"
    :items="completedItems"
    @switch-completed-todo="handleSwitchTodo"
  />
</template>

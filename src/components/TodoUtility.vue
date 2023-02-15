<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TodoList from './TodoList.vue';

const items = ref([])
const completedItems = computed(() => items.value.filter((item) => item.completed))
const todoItems = computed(() => items.value.filter((item) => !item.completed))

onMounted(() => {
  console.log('Todo Utility mounted')
  items.value = [
    { id: 1, text: 'pane', completed: false },
    { id: 2, text: 'olio', completed: true },
    { id: 3, text: 'sale', completed: false },
    { id: 4, text: 'farina', completed: true },
    { id: 5, text: 'burro', completed: false },
  ]
})
onUnmounted(() => {
  console.log('Todo Utility unMounted')
})

function handleSwitchTodo({ id, completed }) {
  const item = items.value.find((item) => item.id === id)
  item.completed = completed
}
</script>

<template>
  <h2>Todo Utility</h2>

  <TodoList
    title="To-do items"
    :items="todoItems"
    @switch-completed-todo="handleSwitchTodo"
  />
  <TodoList
    title="Completed items"
    :items="completedItems"
    @switch-completed-todo="handleSwitchTodo"
  />
</template>

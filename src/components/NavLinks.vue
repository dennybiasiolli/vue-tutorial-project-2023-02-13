<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue';
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { todoItems } = storeToRefs(todoStore)

const hasTodoItems = computed(() => todoItems.value.length > 0)
</script>

<template>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  |
  <RouterLink :to="{ name: 'bindings' }">Bindings</RouterLink>
  |
  <RouterLink :to="{ name: 'counter' }">Counter</RouterLink>
  |
  <RouterLink :to="{ name: 'tests' }">Tests</RouterLink>
  |
  <RouterLink :to="{ name: 'tests2' }">Tests 2</RouterLink>
  |
  <RouterLink :to="{ name: 'tests3' }">Tests 3</RouterLink>
  |
  <RouterLink :to="{ name: 'todo' }">
    To-do Utility
    <span v-if="hasTodoItems"> ({{ todoItems.length }})</span>
  </RouterLink>
  <br />
  <RouterLink :to="{ name: 'products' }">Products</RouterLink>
  |
  <RouterLink :to="{ name: 'form1' }">Form 1</RouterLink>
  |
  <RouterLink :to="{ name: 'form2' }">Form 2</RouterLink>
  |
  <RouterLink :to="{ name: 'form3' }">Form 3</RouterLink>
  |
  <RouterLink :to="{ name: 'form4' }">Form 4</RouterLink>
</template>

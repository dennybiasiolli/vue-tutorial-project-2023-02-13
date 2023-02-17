<script setup>
import TodoItem from './TodoItem.vue';

defineProps({
  title: String,
  items: Array,
})
defineEmits(['switchCompletedTodo', 'changeTodoText'])
</script>

<template>
  <h3>{{ title }}</h3>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      <TodoItem
        :text="item.text"
        :completed="item.completed"
        @change="$emit('switchCompletedTodo', { id: item.id, completed: $event })"
        @text-changed="$emit('changeTodoText', { id: item.id, text: $event })"
      />
    </li>
  </ul>
</template>

<style scoped>
.item-completed {
  color: grey;
}
</style>

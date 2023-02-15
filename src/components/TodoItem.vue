<script setup>
defineProps({
  text: String,
  completed: Boolean,
})
defineEmits(['change'])
</script>

<template>
  <input
    type="checkbox"
    :checked="completed"
    @change="$emit('change', $event.target.checked)"
  />
  {{ text }}
</template>

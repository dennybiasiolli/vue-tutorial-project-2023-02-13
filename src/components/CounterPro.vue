<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  }
})
const emit = defineEmits(['update:modelValue'])

const isEven = computed(() => props.modelValue % 2 === 0)

function increment(valore) {
  emit('update:modelValue', props.modelValue + valore)
}

function multiply(valore) {
  emit('update:modelValue', props.modelValue * valore)
}

const reset = () => {
  emit('update:modelValue', 0)
}
</script>

<template>
  <h2>Counter Pro</h2>
  <div>
    Counter is: {{ modelValue }}
  </div>
  <div>
    Is Even: {{ isEven }}
  </div>
  <div>
    <button @click="increment(1)">+1</button>
    <button @click="increment(-1)">-1</button>
    <button @click="multiply(2)">*2</button>
    <button @click="multiply(1/2)">/2</button>
    <button @click="multiply(modelValue)">^2</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
</style>

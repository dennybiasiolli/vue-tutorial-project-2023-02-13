<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  startValue: {
    type: Number,
    required: true,
  }
})
const emit = defineEmits(['counterChanged'])

const counter = ref(props.startValue)
const isEven = computed(() => counter.value % 2 === 0)
const isPositive = computed(() => counter.value > 0)

function increment(valore) {
  counter.value = counter.value + valore
  emit('counterChanged', counter.value)
}

function multiply(valore) {
  counter.value = counter.value * valore
  emit('counterChanged', counter.value)
}

const reset = () => {
  counter.value = 0
  emit('counterChanged', counter.value)
}
</script>

<template>
  <div>
    Counter is: {{ counter }}
  </div>
  <div>
    Is Even: {{ isEven }}
  </div>
  <div>
    Is Positive: {{ isPositive }}
  </div>
  <div>
    <button @click="increment(1)">+1</button>
    <button @click="increment(-1)">-1</button>
    <button @click="multiply(2)">*2</button>
    <button @click="multiply(1/2)">/2</button>
    <button @click="multiply(counter)">^2</button>
    <button @click="reset">Reset</button>
  </div>
</template>

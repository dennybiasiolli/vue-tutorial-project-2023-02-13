<script setup>
import { ref, computed } from 'vue'

const counter = ref(0)
const isEven = computed(() => counter.value % 2 === 0)
const isPositive = computed(() => counter.value > 0)

function increment(valore) {
  counter.value = counter.value + valore
}

function multiply(valore) {
  counter.value = counter.value * valore
}

const reset = () => {
  counter.value = 0
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

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const { count, isEven, isPositive } = storeToRefs(counter)
const { increment, multiply, reset } = counter
</script>

<template>
  <div>
    Counter is: {{ count }}
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
    <button @click="multiply(count)">^2</button>
    <button @click="reset">Reset</button>
  </div>
</template>

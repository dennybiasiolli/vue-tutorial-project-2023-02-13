<script setup>
import { storeToRefs } from 'pinia'
import Counter from '@/components/Counter.vue'
import CounterPro from '@/components/CounterPro.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const { count, isEven } = storeToRefs(counter)
</script>

<template>
  <Counter />

  <CounterPro
    v-model="count"
    :isEven="isEven"
  />
  <CounterPro
    :modelValue="count"
    :isEven="isEven"
    @update:modelValue="newValue => count = newValue"
  />
</template>

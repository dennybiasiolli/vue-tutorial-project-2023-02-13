<script setup>
import { ref } from 'vue';
import Counter from '@/components/Counter.vue'
import CounterPro from '@/components/CounterPro.vue'

const counterValue = ref(0)
function handleCounterChanged(valore) {
  console.log('Il contatore è cambiato:', valore)
}
</script>

<template>
  <Counter
    :startValue="123"
    @counterChanged="handleCounterChanged($event)"
  />

  <CounterPro
    v-model="counterValue"
  />
  <CounterPro
    :modelValue="counterValue"
    @update:modelValue="newValue => counterValue = newValue"
  />
</template>

<script setup>
import { ref } from 'vue'
import Counter from '@/components/Counter.vue'
import TodoUtility from '@/components/TodoUtility.vue'
import CounterPro from '@/components/CounterPro.vue'
import Tests from '@/components/Tests.vue'
import Tests2 from '@/components/Tests2.vue'
import Tests3 from '@/components/Tests3.vue'
import Bindings from '@/components/Bindings.vue'

function handleCounterChanged(valore) {
  console.log('Il contatore è cambiato:', valore)
}

const counterValue = ref(0)
</script>

<template>
  <TodoUtility />
  <hr />
  <Bindings />
  <hr />
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

  <Tests />
  <hr />
  <Tests2 />
  <hr />
  <Tests3 />
</template>

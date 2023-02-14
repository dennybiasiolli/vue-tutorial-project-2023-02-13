<script setup>
import { reactive, ref, computed } from 'vue'

const state = reactive({ count: 0 }) // object, array
const state2 = ref({ count: 0 }) // number, string, boolean, +  object, array

// console.log(state.count)
// console.log(state2.value.count)

function addProperty() {
  state.description = 'prova1'
  state2.value.description = 'prova2'
}


// computed properties
const contatore = ref(0)
function isEvenFn() {
  console.log('ricalcolo isEvenFn')
  return contatore.value % 2 === 0
}
const isEven = computed(() => {
  console.log('ricalcolo computed')
  return contatore.value % 2 === 0
})


// class and style binding
const classObject = reactive({
  active: true,
  'text-danger': false
})

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
</script>

<template>
  <div>{{ state.count }} - {{ state.description }}</div>
  <div>{{ state2.count }} - {{ state2.description }}</div>
  <button @click="addProperty">Add property</button>

  <div>
    Count: {{ contatore }},
    isEven: {{ isEvenFn() }},
    isEven: {{ isEven }}
  </div>

  <div class="static" :class="classObject">DIV 1</div>
  <div :style="styleObject">DIV 2</div>
</template>

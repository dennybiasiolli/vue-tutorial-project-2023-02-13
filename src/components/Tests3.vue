<script setup>
import { ref } from 'vue'
import Tests3C1 from './Tests3C1.vue'
import Tests3C2 from './Tests3C2.vue'

const valore = ref(0)

const myArray = [12, 'foo', true]
const myObject = {
  id: 123,
  name: 'Jack',
  surname: 'Ryan'
}
</script>

<template>
  <div v-if="valore > 0">
    <Tests3C1 />
  </div>
  <div v-else-if="valore < 0">
    <Tests3C2 />
  </div>
  <div v-else>
    <Tests3C1 />
    <Tests3C2 />
  </div>
  <hr />
  <div v-show="valore > 0">
    <Tests3C1 />
  </div>
  <hr />
  <h3>v-for</h3>
  <ul>
    <li v-for="(element, index) in myArray">
      {{ index + 1 }}. {{ element }}
    </li>
  </ul>

  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index + 1 }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <ul>
    <li v-for="i in 10">
      {{ i }}
    </li>
  </ul>
</template>

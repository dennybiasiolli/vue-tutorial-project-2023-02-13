<script setup>
import { ref } from 'vue'

const rawHtml = '<span style="color: red">This should be red.</span>'

const dynamicId = 123
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

const number = ref(0)
const ok = ref(false)
const message = 'this is my message'

function miaFunzioneCustom(valore) {
  if (valore > 0) {
    return 'valore positivo'
  } else if (valore < 0) {
    return 'valore negativo'
  } else {
    return 'il valore è zero'
  }
}
</script>

<template>
  <p>
    <h3>Raw HTML</h3>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </p>

  <p>
    <h3>Attribute Bindings</h3>
    <div v-bind:id="dynamicId">Primo DIV con ID</div>
    <div :id="dynamicId">Secondo DIV con ID</div>
    <button :disabled="false">Button</button>
    <button :disabled="true">Button</button>
    <div v-bind="objectOfAttrs">Obj</div>
  </p>

  <p>
    <h3>Using JavaScript Expressions</h3>
    <p>{{ number + 1 }}</p>
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
    <div :id="`list-${number}`"></div>
    <span>
      {{ miaFunzioneCustom(number) }}
    </span>
  </p>
</template>

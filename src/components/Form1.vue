<script setup>
import { ref } from 'vue';

const description = ref('')
const descriptionValid = ref(false)

function validateDescription() {
  descriptionValid.value = !!description.value.trim()
}
</script>

<template>
  <h2>VALIDATION ON INPUT CHANGE</h2>
  <input type="text"
    placeholder="Description"
    v-model="description"
    @change="validateDescription"
    @input="validateDescription"
  />
  Valid: {{ descriptionValid }}
</template>

<script setup>
import { ref } from 'vue';

const username = ref('')
const password = ref('')

function handleSubmit(e) {
  const isValid = !!(
    username.value.trim() && password.value.trim()
  )
  console.log('Form is valid?', isValid)
  if (!isValid) {
    // do your thing
  }
}
</script>

<template>
  <h2>VALIDATION ON FORM SUBMIT</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Submit</button>
  </form>
</template>

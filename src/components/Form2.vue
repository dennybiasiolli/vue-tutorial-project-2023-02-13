<script setup>
import { ref } from 'vue';

const username = ref('')
const password = ref('')
const formValid = ref(false)

function validateForm() {
  console.log('Validate form')
  formValid.value = !!(
    username.value.trim() && password.value.trim()
  )
}
</script>

<template>
  <h2>VALIDATION ON FORM CHANGES</h2>
  <form @change="validateForm">
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit" :disabled="!formValid">Submit</button>
  </form>
</template>

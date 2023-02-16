<script setup>
import { ref, watch } from 'vue';

const formValid = ref(false)
const username = ref('')
const password = ref('')

function validateForm() {
  formValid.value = !!(
    username.value.trim() && password.value.trim()
  )
}

watch([username, password], () => {
  validateForm()
})
</script>

<template>
  <h2>VALIDATION USING A WATCHER</h2>
  <form>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit" :disabled="!formValid">Submit</button>
  </form>
</template>

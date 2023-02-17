<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  text: String,
  completed: Boolean,
})
const emit = defineEmits(['change', 'textChanged', 'delete'])

const showForm = ref(false)
const formValid = ref(false)
const innerText = ref('')

function handleChangeClick() {
  innerText.value = props.text
  showForm.value = true
}

function handleSaveClick() {
  emit('textChanged', innerText.value.trim())
  showForm.value = false
}

watch(innerText, () => {
  formValid.value = !!innerText.value.trim()
})
</script>

<template>
  <input
    type="checkbox"
    :checked="completed"
    @change="$emit('change', $event.target.checked)"
  />
  {{ text }}
  <button v-if="!showForm" @click="handleChangeClick">Change</button>
  <button v-if="!showForm" @click="$emit('delete')">Delete</button>
  <form v-show="showForm">
    <input type="text" v-model="innerText" />
    <button type="button" @click="showForm = false">Cancel</button>
    <button type="submit" :disabled="!formValid" @click="handleSaveClick">Save</button>
  </form>
</template>

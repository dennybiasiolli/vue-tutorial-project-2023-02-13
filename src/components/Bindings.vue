<script setup>
import { ref } from 'vue';

const searchText = ref('')
</script>

<template>
  <div>
    Search text <input v-model="searchText" />
  </div>
  <div>
    Search text
    <input
      :value="searchText"
      @input="searchText = $event.target.value"
    />
  </div>
  <div>
    Search text: {{ searchText }}
  </div>
</template>

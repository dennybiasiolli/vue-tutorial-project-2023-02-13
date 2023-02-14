<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log("C2 mounted"))
onUnmounted(() => console.log("C2 unmounted"))
</script>

<template>
  <h2>Questo è C2</h2>
</template>

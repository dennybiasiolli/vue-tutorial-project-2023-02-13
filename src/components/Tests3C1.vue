<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log("C1 mounted"))
onUnmounted(() => console.log("C1 unmounted"))
</script>

<template>
  <h2>Questo è C1</h2>
</template>

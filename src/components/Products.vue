<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

axios.defaults.baseURL = `http://localhost:3000`;

const products = ref([])

async function getProducts() {
  try {
    // const response = await axios.get('/products')
    // const data = response.data;
    const { data } = await axios.get('/products')
    products.value = data
  } catch (error) {
    products.value = []
  }
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <h2>Products</h2>
  <button @click="getProducts">GET all</button>
  <div>
    {{ products }}
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const products = ref([])
async function getProducts() {
  try {
    const { data } = await axios.get('/products')
    products.value = data
  } catch (error) {
    products.value = []
  }
}

const product = ref(null)
async function getProduct(id) {
  try {
    const { data } = await axios.get(`/products/${id}`)
    product.value = data
  } catch (error) {
    product.value = null
  }
}

async function createProduct(name, price) {
  try {
    await axios.post('/products', { name, price })
    getProducts()
  } catch (error) { }
}

async function updateProductName(id, name) {
  try {
    await axios.patch(`/products/${id}`, {
      name,
    })
    getProducts()
  } catch (error) { }
}

async function deleteProduct(id) {
  try {
    await axios.delete(`/products/${id}`)
    getProducts()
  } catch (error) { }
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

  <button @click="getProduct(1)">GET product id 1</button>
  <div>
    {{ product }}
  </div>
  <button @click="createProduct('surf board', 423)">Create product</button>
  <button @click="updateProductName(2, 'ancient table')">Update product name 2</button>
  <button @click="deleteProduct(3)">Delete product 3</button>
</template>

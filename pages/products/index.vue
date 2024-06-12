<template>
  <div>
    <div class="grid grid-cols-4 gap-5 px-16 mt-4">
        <div v-for="product in products">
            <ProductCard :product="product"/>
        </div>
    </div>
  </div>
</template>

<script setup>
    definePageMeta({
        layout: 'default'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Products',
        meta: [
            {
                name: 'description',
                content: 'Product Page'
            }
        ]
    })
</script>

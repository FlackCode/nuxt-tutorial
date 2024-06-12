<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7 mb-4">{{ error.message }}</p>
        <button class="btn font-bold" @click="handleClearError" >Home Page</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({
        redirect: '/'
    })
</script>

<style scoped>

</style>
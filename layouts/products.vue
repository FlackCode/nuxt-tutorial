<template>
  <div>
    <header>
      <nav class="flex flex-row items-center px-48 py-4 gap-4 border-b">
        <nuxt-link to="/" class="text-xl font-bold">Home Page</nuxt-link>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="flex flex-row items-center px-48 py-4 gap-4 border-b">
      <nuxt-link to="/" class="text-xl font-bold">Home Page</nuxt-link>
      <nuxt-link to="/about" class="text-xl font-bold">About Page</nuxt-link>
      <nuxt-link to="/products" class="text-xl font-bold">Products Page</nuxt-link>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

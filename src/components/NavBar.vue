<script setup>

</script>

<template>
  <header class="flex w-full md:h-32">
    <h1 class="w-1/2">
      <router-link to="/" class="md:text-xl text-lg font-bold tracking-tight block
          md:p-4 p-2 h-full border-b-2 border-black">
        PuddingFest
      </router-link>
    </h1>
    <nav class="w-1/2">
      <ul class="flex h-full">
        <li class="w-1/2">
          <router-link to="/" class="md:text-xl text-lg font-bold tracking-tight block
              md:p-4 p-2 h-full border-b-2 border-l-2 border-black">
            Home
          </router-link>
        </li>
        <li class="w-1/2">
          <router-link to="/" class="md:text-xl text-lg font-bold tracking-tight block
              md:p-4 p-2 h-full border-b-2 border-l-2 border-black">
            About
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>

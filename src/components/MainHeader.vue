<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="xl:max-w-[90rem] max-w-[90%] mx-auto">
    <h2 class="xl:text-[16rem] lg:text-[13rem] md:text-[9rem] text-[5rem]
          font-bold tracking-tighter">
      {{ title }}
    </h2>
    <h3 class="xl:text-7xl lg:text-5xl md:text-4xl text-2xl
          uppercase font-medium tracking-tighter xl:max-w-[60rem] md:max-w-[60%]">
      {{ subtitle }}
    </h3>
  </article>
  <hr class="h-1 my-10 bg-black">
</template>

<style scoped>

</style>

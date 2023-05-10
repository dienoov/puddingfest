<script setup>
// eslint-disable-next-line no-unused-vars
import { Carousel } from 'flowbite';
import MainHeader from './MainHeader.vue';

import carousel1 from '../assets/carousel-1.jpg';
import carousel2 from '../assets/carousel-2.jpg';
import carousel3 from '../assets/carousel-3.jpg';

const carousels = [{
  id: 0,
  image: carousel1,
}, {
  id: 1,
  image: carousel2,
}, {
  id: 2,
  image: carousel3,
}];
</script>

<template>
  <main>
    <MainHeader title="Events" subtitle="Experience the Cutting Edge of Tech."/>
    <article class="xl:max-w-[90rem] max-w-[90%] mx-auto my-12">
      <div class="relative w-full" data-carousel="slide">
        <div class="relative h-[80vh] max-h-[42rem] overflow-hidden">
          <div class="hidden duration-1000 ease-in-out" v-for="carousel in carousels"
               :key="carousel.id" :data-carousel-item="carousel.id === 0 ? 'active' : ''">
            <img class="absolute block w-full -translate-x-1/2 -translate-y-1/2
              top-1/2 left-1/2 object-cover h-full" alt="..." :src="carousel.image">
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>

</style>

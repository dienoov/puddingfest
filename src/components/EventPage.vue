<script setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from 'flowbite-vue';
import { onMounted } from 'vue';
import MainHeader from './MainHeader.vue';

const pictures = [{
  src: '/carousel-1.jpg',
  alt: 'img',
}, {
  src: '/carousel-2.jpg',
  alt: 'img',
}, {
  src: '/carousel-3.jpg',
  alt: 'img',
}];

onMounted(() => {
  const carouselEl = document.querySelector('#default-carousel div');
  carouselEl.classList.remove('rounded-lg', 'h-56', 'sm:h-64', 'xl:h-80', '2xl:h-96');
  carouselEl.classList.add('h-[80vh]', 'max-h-[42rem]');

  const imgEls = document.querySelectorAll('#default-carousel img');
  imgEls.forEach((imgEl) => {
    imgEl.classList.add('object-cover', 'h-full');
  });
});
</script>

<template>
  <main>
    <MainHeader title="Events" subtitle="Experience the Cutting Edge of Tech."/>
    <article class="xl:max-w-[90rem] max-w-[90%] mx-auto my-12">
      <Carousel :pictures="pictures" :controls="false" :indicators="false" :slide="true"></Carousel>
    </article>
  </main>
</template>

<style scoped>

</style>

<script setup>
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';

// Importa le immagini
import img1 from '@/assets/photos/slide_home/slide_home_1.jpg';
import img2 from '@/assets/photos/slide_home/slide_home_2.jpg';
import img3 from '@/assets/photos/slide_home/slide_home_3.jpg';

// Creo un'array di oggetti per la slide
const slides = [
  { class: 'img_1', src: img1 },
  { class: 'img_2', src: img2 },
  { class: 'img_3', src: img3 }
];
</script>


<template>
    <Slider :slides="slides"/>
    <Footer />
</template>


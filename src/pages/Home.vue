<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';


const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

const img1 = cld.image('home_slide-1_qyhcpf');
const img2 = cld.image('home_slide-2_rxzckq');
const img3 = cld.image('home_slide-3_eatg0b');
const img4 = cld.image('home_slide-4_zgzn3w');

// Importa le immagini
/* import img1 from '@/assets/photos/slide_home/home_slide-1.jpg';
import img2 from '@/assets/photos/slide_home/home_slide-2.jpg';
import img3 from '@/assets/photos/slide_home/home_slide-3.jpg'; */

// Creo un'array di oggetti per la slide
const slides = [
  { class: 'img_1', src: img1 },
  { class: 'img_2', src: img2 },
  { class: 'img_3', src: img3 },
  { class: 'img_4', src: img4 },
];
</script>


<template>
    <Slider :slides="slides"/>
    <Footer />
</template>


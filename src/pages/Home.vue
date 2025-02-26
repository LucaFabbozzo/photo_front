<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';


const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

const img1 = cld.image('home_slide_1').toURL();
const img2 = cld.image('home_slide_2').toURL();
const img3 = cld.image('home_slide_3').toURL();

// Importa le immagini
/* import img1 from '@/assets/photos/slide_home/home_slide-1.jpg';
import img2 from '@/assets/photos/slide_home/home_slide-2.jpg';
import img3 from '@/assets/photos/slide_home/home_slide-3.jpg'; */

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


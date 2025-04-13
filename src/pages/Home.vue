<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';


const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

const img1 = cld.image('home_slide-7110_uctvgo');
const img2 = cld.image('home_slide-6_ophugy');



// Creo un'array di oggetti per la slide
const slides = [
  { class: 'img_1', src: img1 },
  { class: 'img_2', src: img2 }
];
</script>


<template>
    <Slider :slides="slides"/>
    <Footer />
</template>


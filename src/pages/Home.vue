<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';
import logo from '@/assets/logo.png';


const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

const img1 = cld.image('home_slide-1098_qhsot5');
const img2 = cld.image('home_slide-3930_xj5if3');
const img3 = cld.image('home_slide-3648_lasdlh');
const img4 = cld.image('home_slide-3705_ofwh7h');
const img5 = cld.image('home_slide-2_ns3fqp');
const img6 = cld.image('home_slide-3621_sykq0w');
const img7 = cld.image('home_slide-5577_rebvtl');
const img8 = cld.image('home_slide-1_rhdhf9');

// Creo un'array di oggetti per la slide
const slides = [
  { class: 'img_1', src: img1 },
  { class: 'img_2', src: img2 },
  { class: 'img_3', src: img3 },
  { class: 'img_4', src: img4 },
  { class: 'img_5', src: img5 },
  { class: 'img_6', src: img6 },
  { class: 'img_7', src: img7 },
  { class: 'img_8', src: img8 }
];
</script>


<template>
  <div class="logo-container">
        <img :src="logo" alt="Logo" class="logo" />
    </div>
    <Slider :slides="slides"/>
    <Footer />
</template>

<style scoped>
.logo-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1000;
}

.logo {
    width: 200px; /* Regola la dimensione del logo */
    height: auto;
}
</style>

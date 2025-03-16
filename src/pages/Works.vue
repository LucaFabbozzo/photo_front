<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});


const img1 = cld.image('RoLu/slide_works/works_slide_1');
const img2 = cld.image('RoLu/slide_works/works_slide_2');
const img3 = cld.image('RoLu/slide_works/works_slide_barbara_mattia');

/* 
    // Importa le immagini
import img1 from '@/assets/photos/slide_works/michela_michele-5.jpg';
import img2 from '@/assets/photos/slide_works/elena_andrea-9.jpg';
import img3 from '@/assets/photos/slide_works/slide_works_3.jpg'; */

    // Creo un'array di oggetti per la slide
const slides = [
{ class: 'img_1', src: img1, link: 'works/1', name: 'Michela & Michele'},
{ class: 'img_2', src: img2, link: 'works/2', name: 'Elena & Andrea'},
{ class: 'img_3', src: img3, link: 'works/3', name: 'Barbara & Mattia'},
];
</script>


<template>
     <Slider :slides="slides"/>
     <Footer />
</template>


<style scoped lang="scss">
@use "@/assets/slider.scss";
@use "@/assets/footer.scss";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Rowdies:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

</style>
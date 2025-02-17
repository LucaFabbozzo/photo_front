<script setup>

import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';

    // Importa le immagini
import img1 from '@/assets/photos/slide_works/slide_works_1.jpg';
import img2 from '@/assets/photos/slide_works/slide_works_2.jpg';
import img3 from '@/assets/photos/slide_works/slide_works_3.jpg';

    // Creo un'array di oggetti per la slide
const slides = [
{ class: 'img_1', src: img1, link: 'works/1', name: 'First'},
{ class: 'img_2', src: img2, link: 'works/2', name: 'Second'},
{ class: 'img_3', src: img3, link: 'works/3', name: 'Third'}
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
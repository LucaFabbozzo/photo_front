<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json';

const work2Photos = photos.work2;
</script>

<template>
    <div class="container-works">
        <h2>Works2</h2>
        <Cards :photos="work2Photos"/>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    @use '../../assets/works.scss';
</style>
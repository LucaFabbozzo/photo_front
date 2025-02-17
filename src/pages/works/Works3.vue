<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json';

const work3Photos = photos.work3;
</script>

<template>
    <div class="container-works">
        <h2>Works3</h2>
        <Cards :photos="work3Photos"/>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    @use '../../assets/works.scss';
</style>
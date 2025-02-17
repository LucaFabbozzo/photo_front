<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json'

const work1Photos = photos.work1;
</script>

<template>
    <div class="container-works">
        <h2>Works1</h2>
        <Cards :photos="work1Photos"/>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    @use '../../assets/works.scss';
</style>
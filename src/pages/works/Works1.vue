<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json'

const work1Photos = photos.work1.photos;
const work1Title = photos.work1.title;
</script>

<template>
    <div class="container-works">
        <h2>{{ work1Title }}</h2>
        <Cards :photos="work1Photos"/>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    @use '../../assets/works.scss';
</style>